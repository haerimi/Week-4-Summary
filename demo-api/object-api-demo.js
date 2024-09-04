const express = require('express')
const app = express()

// 서버 셋팅 : 포트넘버 (번호) 3000로 셋팅
app.listen(3000)

// 채널 주소 : https://www.youtube.com/@WolfYoutube_Official
// 채널 주소 : https://www.youtube.com/@LCK
// 채널 주소 : https://www.youtube.com/@jindol

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

app.get('/:nickname', function(req, res) {

    const {nickname} = req.params

    if (nickname == "@WolfYoutube_Official") {
        res.json(youtuber1)
    } else if (nickname == "@LCK") {
        res.json(youtuber2)
    } else if (nickname == "@jindol") {
        res.json(youtuber3)
    } else {
        res.json({
            message : "저희가 모르는 유튜버 입니다."
        })
    }

    // res.json({
    //     channel : nickname
    // })
})
