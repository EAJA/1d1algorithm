//! 프로그래머스 - 두 정수 사이의 합
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(a, b) {
    let answer = [a,b].sort((a,b) => a-b);
    [a,b] = answer;
    while(a <= b-2){
        a++;
        answer.push(a);
    }
    return answer.reduce((a,b) => a+b);
  }
  //  - - - - - - - - - - - - - - - - - - - - - - - - - -