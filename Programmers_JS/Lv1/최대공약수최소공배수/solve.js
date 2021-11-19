//! 프로그래머스 - 최대공약수와 최소공배수
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(n, m) {
  let answer = [0,0,n,m].sort((a,b) => a-b);
  for(let i = 1 ; i < answer[3] ; i++){
      if(n%i === 0 && m%i === 0){
          if(i > answer[0]) answer[0] = i;
      }
  }
  answer[1] = n * m / answer[0];
  return answer.slice(0,2);
}
//~ 최대공약수 유클리드 호제법 사용해서 줄이기
//  - - - - - - - - - - - - - - - - - - - - - - - - - -