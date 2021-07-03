```js
function solution(participant, completion) {
  var answer = '';
  let arr = participant;
  let equal = '';
  for(let j = 0 ; j<participant.length ; j++){
      equal = arr.shift();
      if(arr.includes(equal) && completion.includes(equal)){
          answer += equal;
      }
  }
  console.log(participant);
  for(let i = 0 ; i<participant.length ; i++){
      if(!completion.includes(participant[i])){
          answer += participant[i];
      }
  }
  return answer;
}
```