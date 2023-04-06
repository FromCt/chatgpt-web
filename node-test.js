const express = require('express')
// const bodyParser = require('body-parser')

const app = express()

// // 中间件
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// 路由
app.get('/', (req, res) => {
  res.send('Hello, World!')
})

// 启动服务器
const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})
