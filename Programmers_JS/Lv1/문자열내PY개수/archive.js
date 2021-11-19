//! 프로그래머스 - 문자열 내 p와 y의 개수
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(s){
    let p = s.toLowerCase().split('').filter(a => a==='p').length;
    let y = s.toLowerCase().split('').filter(a => a==='y').length;
    return (p - y) === 0 ? true : false;
  }
  //~ 압축
  const solution = (s) => s.match(/[p]/gi).length === s.match(/[y]/gi).length
  //* s에 p y 가 없을때 match 메소드 에러남
  const solution = (s) => s.toLowerCase().split('').filter(a => a==='p').length===s.toLowerCase().split('').filter(a => a==='y').length
  //* filter 없이 나눌때 기준으로
  const solution = (s) => s.toLowerCase().split('p').length===s.toLowerCase().split('y').length
  //* 정규식 에러 예외처리