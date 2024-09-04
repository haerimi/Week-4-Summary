const express = require('express')
const app = express()

// 서버 셋팅 : 포트넘버 (번호) 3000로 셋팅
app.listen(3000)

let youtuber1 = {
    channelTitle : "울프",
    sub : "40.3만명",
    videoNum : "1천개"
}

let youtuber2 = {
    channelTitle : "LCK",
    sub : "131만명",
    videoNum : "9.7천개"
}

let youtuber3 = {
    channelTitle : "진돌",
    sub : "41.6만명",
    videoNum : "422개"
}

let db = new Map()  // key-value == json
var id = 1

db.set(id++, youtuber1)
db.set(id++, youtuber2)
db.set(id++, youtuber3)

// REST API 설계
// 전체 조회
app.get('/youtubers', (req,res) => [
    res.json(db)
])

// 개별 조회
app.get('/youtuber/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)
    const youtuber = db.get(id)

    if (youtuber == undefined) {
        res.json({
            message : "유튜버 정보를 찾을 수 없습니다."
        })
    } else { 
        res.json(youtuber)
    }
})

app.use(express.json()) // http 외 모듈인 '미들웨어':json 설정

// 추가
app.post('/youtuber', (req, res) => {
  console.log(req.body)

  // Map(db)에 저장(put) 해주어야 함
  db.set(id++, req.body)
  res.json({
    message : `${db.get(id-1).channelTitle}님, 유튜버 생활을 응원합니다!`
  })
})