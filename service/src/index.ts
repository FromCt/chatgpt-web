import express from 'express'
import type { ChatContext, ChatMessage } from './chatgpt'
import { chatConfig, chatReply, chatReplyProcess,getApi } from './chatgpt'

const app = express()
const router = express.Router()

const keyMap = new Map()

app.use(express.static('public'))
app.use(express.json())

app.all('*', (_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  next()
})

router.post('/chat', async (req, res) => {
  try {
    const { prompt, options = {apiKey:""} } = req.body as { prompt: string; options?: ChatContext }
    const { apiKey } = options;
    const api = keyMap.get(apiKey);
    if(!apiKey){
      res.send(JSON.stringify({error:"key is null"}))
      return 
    }
    const response = await chatReply(prompt,api, options)
    res.send(response)
  }
  catch (error) {
    res.send(error)
  }
})

router.post('/chat-process', async (req, res) => {
  res.setHeader('Content-type', 'application/octet-stream')

  try {
    const { prompt, options = {apiKey:""} } = req.body as { prompt: string; options?: ChatContext }
    const { apiKey } = options;
    const api = keyMap.get(apiKey);
    if(!apiKey){
      res.send(JSON.stringify({error:"key is null"}))
      return 
    }

    let firstChunk = true
    await chatReplyProcess(prompt,api, options, (chat: ChatMessage) => {
      res.write(firstChunk ? JSON.stringify(chat) : `\n${JSON.stringify(chat)}`)
      firstChunk = false
    })
  }
  catch (error) {
    res.write(JSON.stringify(error))
  }
  finally {
    res.end()
  }
})

router.post('/config', async (req, res) => {
  try {
    const response = await chatConfig()
    res.send(response)
  }
  catch (error) {
    res.send(error)
  }
})

router.post('/keyLogin', async (req, res) => {

  try {
    const { key } = req.body as { key: string }
    if(!key){
      res.send(JSON.stringify({error:"key is null"}))
      return
    }
    let api = getApi(key)
    keyMap.set(key,api);
  }
  catch (error) {
    res.send(error)
  }
})

router.get('/keyList',async (req, res)=>{
  try {
    const { user } = req.query as { user: string }
    if(user==="admin_ct"){
      let arr = [...keyMap].map(item=>{
        return item+"t"
      });
      
      const jsonStr = JSON.stringify(arr)
      res.send(jsonStr)

    }else{
      res.send(JSON.stringify({error:"nothing"}))
    }
  }
  catch (error) {
    res.send(error)
  }
})

app.use('', router)
app.use('/api', router)

app.listen(3002, () => globalThis.console.log('Server is running on port 3002'))
