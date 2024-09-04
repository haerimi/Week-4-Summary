# 4주차 학습 내용 정리

## JavaScript에서 문자열을 숫자로 변환하기
### 1. parseInt() 함수
1) 정의
   - parseInt() 함수는 문자열을 특정 진수로 파싱하여 정수를 반환한다.
2) 형식
   `parseInt(string);`
   `parseInt(string, radix);`
   - string: 변환할 문자열.
   - radix: 문자열의 진수를 나타내는 2에서 36 사이의 정수 (기본값은 10이 아님).
3) 예제 <br>
   ` console.log(parseInt('123')); // 123 <br>
   console.log(parseInt('1010', 2)); // 2진수 1010을 10진수로 변환하여 10 `<br>
