## 조합 = n 개중 r 개 뽑는 경우의 수 / 순서 X

n개중r개 조합
```js
function comb(chosen, len) {
    let result = Array();
    let f = (str, lastIdx) => {
        if (str.length === len) {
            result.push(str);
            return;
        }
        for (let i = lastIdx + 1; i < chosen.length; i++) {
            f(str + chosen[i], i);
        }
    }
    f("", -1);
    return result;
}
```
  
<br/>
  
모든조합
```js
const allComb = function (str) {
    let result = new Array();

    let arr = str.split('');

    const nCr = (now, arr) => {
        if (arr.length === 0) return;
        arr.forEach((el, idx, cArr) => {
            let cur = now + el;
            result.push(cur);
            if (idx + 1 <= cArr.length) {
                let newArr = cArr.slice(idx + 1);
                nCr(cur, newArr);
            }
        });
    }

    nCr('', arr);
    return result;
};
```