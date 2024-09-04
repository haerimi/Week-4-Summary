const express = require('express')
const app = express()

// 서버 셋팅 : 포트넘버 (번호) 3000로 셋팅
app.listen(3000)

// products/__ : 빈칸에 오는 값을 n이라는 변수에 담음
// : => URL로 매개변수를 전달
// 임시로 req.params에 저장함
app.get('/products/:n', function (req, res) {
        // console.log(req.params)
        // console.log(req.params.n)

        let number = parseInt(req.params.n - 10)
        console.log(number) // 숫자 "숫자"

        res.json({
            num : number
        })
})

// // 채널 주소 : https://www.youtube.com/@WolfYoutube_Official
// // 채널 주소 : https://www.youtube.com/@LCK

// app.get('/:nickname', function(req, res) {

//     const param = req.params

//     res.json({
//         channel : param.nickname
//     })
// })

// 영상 클릭 주소 : https://youtu.be/p9V_e3AGKsM?si=UUgRpFa-AXm8PY_E
// 타임라인 주소 : https://www.youtube.com/watch?v=eluwLuMJq4w&t=24s
app.get('/watch', function(req, res) {

    //const q = req.query
    // v와 t가 아닌 q1, q2로 하면 undefined가 나옴
    // 변수 이름 그대로 사용하는 것이 좋다.

    // JS 객체 비구조화
    const {v, t} = req.query
    console.log(v)
    console.log(t)

    res.json({
        video : v,
        timeline : t
    })
})