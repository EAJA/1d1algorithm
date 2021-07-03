//! 프로그래머스 - 소수 찾기
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
//? 효율성 탈락
function solution(n) {
    let answer = [false];
    if(n%2 === 0)n=n-1
    while(n>0){
        for(let i = 2; i**2 <= n; i++){
            if(n%i === 0){
                answer[0] = true;
                break;
            }
        }
        if(answer[0]===false)answer.push(n);
        answer[0] = false;
        n-=2;
    }
    return answer.length-1;
  }
//  - - - - - - - - - - - - - - - - - - - - - - - - - -