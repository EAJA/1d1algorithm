## 순열 n 개중 r 개 뽑아서 줄세우기 / 순서 ㅇ
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