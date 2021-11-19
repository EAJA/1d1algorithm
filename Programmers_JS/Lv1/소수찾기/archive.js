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
function solution(n) {
    const answer = [0,2];
    for(let i = 3 ; i <= n ; i+=2){
        for(let j =1 ; j < answer.length ; j++){
            if(i%answer[j] === 0){
                answer[0] = 1;
                break;
            }
        }
        if(!answer[0])answer.push(i);
        anwer[0] = 0;
    }
    return answer.length-1;
  }
//  - - - - - - - - - - - - - - - - - - - - 
//! 효율성 탈락..

// 검사를 하지말고 전체수에서 소수를 빼주는 방향으로