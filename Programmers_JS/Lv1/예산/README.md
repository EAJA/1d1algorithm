```js
function solution(d, budget) {
    d.sort((a,b) => a-b)
    let i = 0;
    while(budget >= d[i]){
        budget -= d[i];
        i++;
    }
    return i;
}
```