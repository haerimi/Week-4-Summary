const arr = [1, 2, 3, 4, 5]
// Map과 forEach의 만남
let map = new Map()

// 객체 (또는 배열)에서 요소를 하나 꺼낸 다음
// 매개변수로 그 요소를 전달하여 호출되는 콜백함수
const foreachArr = arr.forEach((a, b, c) => {
    return a * 2
});

const mapArr = arr.map((a, b, c) => {
    return a * 2
})

console.log(`foreach로 return 하면 ${foreachArr}, map으로 return하면 ${mapArr}`)
// foreach는 return 하지 않음
