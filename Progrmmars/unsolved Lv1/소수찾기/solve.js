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