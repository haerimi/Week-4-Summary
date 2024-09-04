const express = require('express')
const app = express()

// API : GET + /hello, /bye, /nicetomeetyou
app.get('/hello', function (req, res) {
    res.json({
        say : "안녕하세요"
    })
  })

app.get('/bye', function (req, res) {
    res.json({
        say : "안녕히가세요"
    })
  })

app.get('/nicetomeetyou', function (req, res) {
    res.json({
        say : "만나서 반갑습니다."
    })
  })
  
// 서버 셋팅 : 포트넘버 (번호) 3000로 셋팅
app.listen(3000)