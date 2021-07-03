```js
function solution(a, b) {
    const result = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let y = 16;
    if(a===1 || a===2){y-=1; a+=12;}
    return result[(parseInt(21*20/4)+parseInt(5/4*y)+parseInt(26*(a+1)/10)+b-1)%7];
  }
```
제라의공식 사용

다른사람 풀이에서 데이터를 다 집어넣어서 푸는사람 봤는데
속도는 빠른데 효율적인가?