```js
function solution(absolutes, signs) {
    var answer = 0;
    for(let i in absolutes){
        if(signs[i]){
            answer += absolutes[i];
        }else answer -= absolutes[i];
    }
    return answer;
}
```