## 순열 n 개중 r 개 뽑아서 줄세우기 / 순서 ㅇ

n개 중 r개
```js
function nPr(arr, len) {
    let result = new Array();
    if (len === 1) return arr.map(a => [a]);
    arr.forEach((el, i, ar) => {
        let fix = el;
        let reArr = ar.filter(a => a !== fix);
        let newPr = nPr(reArr, len - 1);
        let comb = newPr.map(a => [fix, ...a]);
        result.push(...comb);
    });
    return result;
}
```
  
<br/>
  
모든 경우
```js
let result = [];

const nPall = (now, arr) => {
    arr.forEach((el, idx, cArr) => {
        let cur = now + el;
        result.push(cur);
        let newArr = cArr.slice();
        newArr.splice(idx ,1);
        nPall(cur, newArr);
    });
}

nPall('', arr);
```