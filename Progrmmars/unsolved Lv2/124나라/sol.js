function solution(n) {
    let answer = n.toString(3).split('').map(a => Number(a)).reverse();
    for(let i = 0 ; i < answer.length ; i++){
        if(answer[i] === 0){
          if(answer[i+1] === undefined){
              answer[i] = '';
          }else{
              answer[i] = 4;
              answer[i+1] -= 1;
          }
        }
    }
    console.table(answer);
    return answer.join('');
}

console.log(solution(9))