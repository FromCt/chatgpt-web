import * as dotenv from 'dotenv'
import 'isomorphic-fetch'
import type { ChatGPTAPIOptions, ChatMessage, SendMessageOptions } from 'chatgpt'
import { ChatGPTAPI } from 'chatgpt'
import { SocksProxyAgent } from 'socks-proxy-agent'
import httpsProxyAgent from 'https-proxy-agent'
import fetch from 'node-fetch'
import axios from 'axios'
import { sendResponse } from '../utils'
import { isNotEmptyString } from '../utils/is'
import type { ApiModel, ChatContext, ChatGPTUnofficialProxyAPIOptions, ModelConfig } from '../types'

const { HttpsProxyAgent } = httpsProxyAgent

dotenv.config()

const ErrorCodeMessage: Record<string, string> = {
  401: '[OpenAI] 提供错误的API密钥 | Incorrect API key provided',
  403: '[OpenAI] 服务器拒绝访问，请稍后再试 | Server refused to access, please try again later',
  502: '[OpenAI] 错误的网关 |  Bad Gateway',
  503: '[OpenAI] 服务器繁忙，请稍后再试 | Server is busy, please try again later',
  504: '[OpenAI] 网关超时 | Gateway Time-out',
  500: '[OpenAI] 服务器繁忙，请稍后再试 | Internal Server Error',
}

const timeoutMs: number = !isNaN(+process.env.TIMEOUT_MS) ? +process.env.TIMEOUT_MS : 30 * 1000
const disableDebug: boolean = process.env.OPENAI_API_DISABLE_DEBUG === 'true'

let apiModel: ApiModel

apiModel = 'ChatGPTAPI'
// if (!process.env.OPENAI_API_KEY && !process.env.OPENAI_ACCESS_TOKEN)
//   throw new Error('Missing OPENAI_API_KEY or OPENAI_ACCESS_TOKEN environment variable')
// let api: ChatGPTAPI | ChatGPTUnofficialProxyAPI

// To use ESM in CommonJS, you can use a dynamic import
// (async () => {

//   if (process.env.OPENAI_API_KEY) {
//     const options: ChatGPTAPIOptions = {
//       apiKey: process.env.OPENAI_API_KEY,
//       debug: false,
//     }

//     api = new ChatGPTAPI({ ...options })
//     apiModel = 'ChatGPTAPI'
//   }
//   else {
//     const options: ChatGPTUnofficialProxyAPIOptions = {
//       accessToken: process.env.OPENAI_ACCESS_TOKEN,
//       debug: false,
//     }

//     if (process.env.SOCKS_PROXY_HOST && process.env.SOCKS_PROXY_PORT) {
//       const agent = new SocksProxyAgent({
//         hostname: process.env.SOCKS_PROXY_HOST,
//         port: process.env.SOCKS_PROXY_PORT,
//       })
//       options.fetch = (url, options) => {
//         return fetch(url, { agent, ...options })
//       }
//     }

//     if (process.env.API_REVERSE_PROXY)
//       options.apiReverseProxyUrl = process.env.API_REVERSE_PROXY

//     api = new ChatGPTUnofficialProxyAPI({
//       accessToken: process.env.OPENAI_ACCESS_TOKEN,
//       ...options,
//     })
//     apiModel = 'ChatGPTUnofficialProxyAPI'
//   }
// })()

const keyMap = new Map()

async function getApi(apiKey: any) {
  const options: ChatGPTAPIOptions = {
    apiKey,
    debug: false,
  }

  const api = new ChatGPTAPI({ ...options })
  // console.log(api)
  keyMap.set(apiKey, api)
  return api
}

async function chatReply(
  message: string,
  api: ChatGPTAPI,
  lastContext?: { conversationId?: string; parentMessageId?: string },
) {
  if (!message)
    return sendResponse({ type: 'Fail', message: 'Message is empty' })

  try {
    const options: SendMessageOptions = { timeoutMs }

    if (apiModel === 'ChatGPTAPI') {
      if (isNotEmptyString(systemMessage))
        options.systemMessage = systemMessage
    }

    const response = await api.sendMessage(message, { ...options })

    return sendResponse({ type: 'Success', data: response })
  }
  catch (error: any) {
    return sendResponse({ type: 'Fail', message: error.message })
  }
}

async function chatReplyProcess(
  message: string,
  apiKey: string,
  lastContext?: { conversationId?: string; parentMessageId?: string },
  process?: (chat: ChatMessage) => void,
) {
  if (!message)
    return sendResponse({ type: 'Fail', message: 'Message is empty' })

  try {
    let options: SendMessageOptions = { timeoutMs }

    if (lastContext)
      options = { ...lastContext }
    const api = keyMap.get(apiKey)
    // console.log(api)
    const response = await api.sendMessage(message, {
      ...options,
      onProgress: (partialResponse) => {
        process?.(partialResponse)
      },
    })

    return sendResponse({ type: 'Success', data: response })
  }
  catch (error: any) {
    const code = error.statusCode
    global.console.log(error)
    if (Reflect.has(ErrorCodeMessage, code))
      return sendResponse({ type: 'Fail', message: ErrorCodeMessage[code] })
    return sendResponse({ type: 'Fail', message: error.message ?? 'Please check the back-end console' })
  }
}

async function fetchBalance() {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY
  const OPENAI_API_BASE_URL = process.env.OPENAI_API_BASE_URL

  if (!isNotEmptyString(OPENAI_API_KEY))
    return Promise.resolve('-')

  const API_BASE_URL = isNotEmptyString(OPENAI_API_BASE_URL)
    ? OPENAI_API_BASE_URL
    : 'https://api.openai.com'

  try {
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_API_KEY}` }
    const response = await axios.get(`${API_BASE_URL}/dashboard/billing/credit_grants`, { headers })
    const balance = response.data.total_available ?? 0
    return Promise.resolve(balance.toFixed(3))
  }
  catch {
    return Promise.resolve('-')
  }
}

async function chatConfig() {
  const balance = await fetchBalance()
  const reverseProxy = process.env.API_REVERSE_PROXY ?? '-'
  const httpsProxy = (process.env.HTTPS_PROXY || process.env.ALL_PROXY) ?? '-'
  const socksProxy = (process.env.SOCKS_PROXY_HOST && process.env.SOCKS_PROXY_PORT)
    ? (`${process.env.SOCKS_PROXY_HOST}:${process.env.SOCKS_PROXY_PORT}`)
    : '-'
  return sendResponse<ModelConfig>({
    type: 'Success',
    data: { apiModel, reverseProxy, timeoutMs, socksProxy, httpsProxy, balance },
  })
}

function setupProxy(options: ChatGPTAPIOptions | ChatGPTUnofficialProxyAPIOptions) {
  if (isNotEmptyString(process.env.SOCKS_PROXY_HOST) && isNotEmptyString(process.env.SOCKS_PROXY_PORT)) {
    const agent = new SocksProxyAgent({
      hostname: process.env.SOCKS_PROXY_HOST,
      port: process.env.SOCKS_PROXY_PORT,
      userId: isNotEmptyString(process.env.SOCKS_PROXY_USERNAME) ? process.env.SOCKS_PROXY_USERNAME : undefined,
      password: isNotEmptyString(process.env.SOCKS_PROXY_PASSWORD) ? process.env.SOCKS_PROXY_PASSWORD : undefined,
    })
    options.fetch = (url, options) => {
      return fetch(url, { agent, ...options })
    }
  }
  else {
    if (isNotEmptyString(process.env.HTTPS_PROXY) || isNotEmptyString(process.env.ALL_PROXY)) {
      const httpsProxy = process.env.HTTPS_PROXY || process.env.ALL_PROXY
      if (httpsProxy) {
        const agent = new HttpsProxyAgent(httpsProxy)
        options.fetch = (url, options) => {
          return fetch(url, { agent, ...options })
        }
      }
    }
  }
}

function currentModel(): ApiModel {
  return apiModel
}

export type { ChatContext, ChatMessage }

export { chatReply, getApi, chatReplyProcess, chatConfig, currentModel }
