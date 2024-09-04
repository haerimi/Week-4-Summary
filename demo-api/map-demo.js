const express = require('express')
const app = express()

// 서버 셋팅 : 포트넘버 (번호) 3000로 셋팅
app.listen(3000)

// GET + "/"
app.get('/:id', function (req, res) {
    // const param = req.params
    // param.n == {n}
    let {id} = req.params
    id = parseInt(id)

    if (db.get(id) == undefined) {
        res.json({
            maseege : "없는 상품입니다."
        })
    } else {
        product = db.get(id)
        product["id"] = id
        //product.id = id  // id값 추가

        res.json(product)
    }
})

  // localhost:1234/1 => NoteBook
  // localhost:1234/2 => Cup
  // localhost:1234/3 => Chair
  
let noteBook = {
    productName : "NoteBook",
    productPrice : 2000000
}

let cup = {
    productName : "Cup",
    productPrice : 3000
}

let chair = {
    productName : "Chair",
    productPrice : 100000
}

let poster = {
    productName : "Poster",
    productPrice : 20000
}

// 문자열과 숫자를 구분함
let db = new Map()
db.set(1, noteBook) // 키로 벨류를 찾을 수 있는 한 쌍으로 저장
db.set(2, cup)
db.set(3, chair)
db.set(4, poster)

console.log(db) 
console.log(db.get(1))  // NoteBook
console.log(db.get(2))  // Cup
console.log(db.get(3))  // Chair
console.log(db.get(4))  // Poster
/* Map(4) {
  1 => { productName: 'NoteBook', productPrice: 2000000 },
  2 => { productName: 'Cup', productPrice: 3000 },
  3 => { productName: 'Chair', productPrice: 100000 },
  4 => { productName: 'Poster', productPrice: 20000 }
}
{ productName: 'NoteBook', productPrice: 2000000 }
{ productName: 'Cup', productPrice: 3000 }
{ productName: 'Chair', productPrice: 100000 }
{ productName: 'Poster', productPrice: 20000 }
 */