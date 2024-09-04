// 자바스크립트 배열 비구조화

const array = [1, 2, 3, 4, 5]
// const [num2, num3, num5] 
const [ , num2, num3, , num5] = array // 각 자리에 맞게 2, 3, 5 출력

// const num1 = array[0]
// const num4 = array[3]

// console.log(num1)    // 1
// console.log(num4)    // 3

// 순서대로 값이 들어감
console.log(num2)   // 1
console.log(num3)   // 2
console.log(num5)   // 3