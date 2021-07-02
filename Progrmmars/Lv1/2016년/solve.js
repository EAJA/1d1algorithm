//! 프로그래머스 - 2016년
// - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(a, b) {
    const result = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let y = 16;
    if(a===1 || a===2){y-=1; a+=12;}
    return result[(parseInt(21*20/4)+parseInt(5/4*y)+parseInt(26*(a+1)/10)+b-1)%7];
  }
  //제라의 공식
  // - - - - - - - - - - - - - - - - - - - - - - - - - -