const express = require('express')
const app = express()

// 서버 셋팅 : 포트넘버 (번호) 3000로 셋팅
app.listen(3000)

// GET + "/"
app.get('/', function (req, res) {
    res.send('Hello World')
  })

// API : GET + "http://localhost:3000/test"
// "TEST SUCCESS"
app.get('/test', function (req, res) {
  res.send('TEST SUCCESS')
})

// API : GET + "http://localhost:3000/test/1"
// "One!!"
app.get('/test/1', function (req, res) {
    res.send('One!!')
  })
