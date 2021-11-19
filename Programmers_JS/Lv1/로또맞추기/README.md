```js
function solution(lottos, win_nums) {
    var answer = [0,0];
    for(let i in lottos){
        if(win_nums.includes(lottos[i])) answer[0]++;
    }
    answer[1] = answer[0] + lottos.filter(a => a === 0).length;
    return [7-answer[1] === 7 ? 6 : 7-answer[1],7-answer[0] === 7 ? 6 : 7-answer[0]];
}
```