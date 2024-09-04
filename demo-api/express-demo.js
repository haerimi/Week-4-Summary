const express = require('express')
const app = express()

// products/__ : 빈칸에 오는 값을 n이라는 변수에 담음
// : => URL로 매개변수를 전달
// 임시로 req.params에 저장함
app.get('/products/:n', function (req, res) {
        // console.log(req.params)
        // console.log(req.params.n)

        res.json({
            num : req.params.n
        })
})

// 서버 셋팅 : 포트넘버 (번호) 3000로 셋팅
app.listen(3000)