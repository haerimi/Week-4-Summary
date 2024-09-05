const arr = [1, 2, 3, 4, 5]

// 객체 (또는 배열)에서 요소를 하나 꺼낸 다음
// 매개변수로 그 요소를 전달하여 호출되는 콜백함수
arr.forEach((a, b, c) => {
    // console.log(`a : ${a}, b : ${b}, c : ${c}`)
});
// a : 1, b : 0, c : 1,2,3,4,5
// a : 2, b : 1, c : 1,2,3,4,5
// a : 3, b : 2, c : 1,2,3,4,5
// a : 4, b : 3, c : 1,2,3,4,5
// a : 5, b : 4, c : 1,2,3,4,5



// Map과 forEach의 만남
let map = new Map()
map.set(6, "Six")
map.set(7, "Seven")
map.set(8, "Eight")

map.forEach((a, b, c) =>{
    console.log(`a : ${a}, b : ${b}, c : ${c}`)
})
// a : Six, b : 6, c : [object Map]
// a : Seven, b : 7, c : [object Map]
// a : Eight, b : 8, c : [object Map]