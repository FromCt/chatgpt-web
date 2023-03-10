import * as dotenv from 'dotenv'
import 'isomorphic-fetch'
import type { ChatMessage, SendMessageOptions } from 'chatgpt'
import { ChatGPTAPI } from 'chatgpt'
import { sendResponse } from '../utils'
import type { ChatContext, ChatGPTAPIOptions, ModelConfig } from '../types'

dotenv.config()
const timeoutMs: number = !isNaN(+process.env.TIMEOUT_MS) ? +process.env.TIMEOUT_MS : 30 * 1000

// let apiModel: ApiModel

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
    let options: SendMessageOptions = { timeoutMs }

    if (lastContext)
      options = { ...lastContext }

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
    return sendResponse({ type: 'Fail', message: error.message })
  }
}

async function chatConfig() {
  return sendResponse({
    type: 'Success',
    data: {
      apiModel: 'ChatGPTAPI',
      reverseProxy: process.env.API_REVERSE_PROXY,
      timeoutMs,
      socksProxy: (process.env.SOCKS_PROXY_HOST && process.env.SOCKS_PROXY_PORT) ? (`${process.env.SOCKS_PROXY_HOST}:${process.env.SOCKS_PROXY_PORT}`) : '-',
    } as ModelConfig,
  })
}

export type { ChatContext, ChatMessage }

export { chatReply, chatReplyProcess, chatConfig, getApi }
