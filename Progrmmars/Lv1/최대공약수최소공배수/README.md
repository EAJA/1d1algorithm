```js
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
```