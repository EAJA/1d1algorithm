//! 프로그래머스 - 나누어 떨어지는 숫자 배열
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(arr, divisor) {
    arr = arr.filter(el => el%divisor===0).sort((a,b) => a-b);
    return arr.length === 0 ? [-1] : arr;
  }
  //  - - - - - - - - - - - - - - - - - - - - - - - - - -