```js
function solution(n){
    let answer = Array(n+1).fill(1);
    for(let j = 2; j <= n**0.5; j++){
        for(let k = j; j * k <= n; k++){
            answer[j * k] = 0;
        }
    }
    // 2의 배수 제거
    // 3의 배수 제거
    // 5의 배수 제거
    // 7의 배수 제거
    // ...
    return answer.filter(a => a === 1).length-2;
    // 0과 1 빼주기
}
```