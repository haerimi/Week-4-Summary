const express = require('express')
const app = express()

// 서버 셋팅 : 포트넘버 (번호) 3000로 셋팅
app.listen(3000)

let wolf = {
    channelTitle : "울프",
    sub : "40.3만명",
    videoNum : "1천개"
}

let lck = {
    channelTitle : "LCK",
    sub : "131만명",
    videoNum : "9.7천개"
}

let jindol = {
    channelTitle : "진돌",
    sub : "41.6만명",
    videoNum : "422개"
}

let db = new Map()  // key-value == json
var id = 1

db.set(id++, wolf)
db.set(id++, lck)
db.set(id++, jindol)

// REST API 설계
// 전체 조회
let jsonObject = {}
app.get('/youtubers', (req,res) => {
    db.forEach((value, key) => {
        jsonObject[key] = value
    })
    console.log(jsonObject)
    res.json(jsonObject)
})

// 개별 조회
app.get('/youtubers/:id', function (req, res) {
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
app.post('/youtubers', (req, res) => {
  console.log(req.body)

  // Map(db)에 저장(put) 해주어야 함
  db.set(id++, req.body)
  res.json({
    message : `${db.get(id-1).channelTitle}님, 유튜버 생활을 응원합니다!`
  })
})

// 삭제
app.delete('/youtubers/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id)
    let findId = db.get(id)    

    if (findId == undefined) {
        res.json({
            message : `해당 아이디 ${id}를 찾을 수 없습니다.`
        })
    } else {
        const name = findId.channelTitle
        db.delete(id)
        res.json({
            message : `${name}님, 다음에 또 뵙겠습니다.`
        })
    }
})

// 전체 삭제
app.delete('/youtubers', (req,res) => {
    // db에 값이 1개 이상 -> 전체 삭제

    let msg = ""
    if (db.size >= 1) {
        db.clear()
        msg = `유튜버들이 모두 삭제되었습니다.`
    } else {        
        // 값이 없으면 예외 처리
        msg = `삭제할 유튜버들이 없습니다.`
    }
    res.json({
        message : msg
    })
})

// channelTitle 수정
app.put('/youtubers/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id)
    // Map에서 해당 ID로 유튜버 정보 조회
    const youtuber = db.get(id);

    if (youtuber == undefined) {
        res.json({
            message : `해당 아이디 ${id}를 찾을 수 없습니다.`
        })
    } else {
         // body에서 새로운 이름(channelTitle)을 추출
         let newTitle = req.body.channelTitle;
         let oldTitle = youtuber.channelTitle;

        // channelTitle 업데이트
        youtuber.channelTitle = newTitle;

        // 업데이트된 정보를 다시 Map에 저장
        db.set(id, youtuber);

        // 응답으로 이전 이름과 새로운 이름을 함께 전송
        res.json({
            message: `${oldTitle}님의 채널명이 ${newTitle}로 변경되었습니다.`
        })
    }
})