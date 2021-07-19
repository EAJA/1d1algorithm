## 조합 = n 개중 r 개 뽑는 경우의 수 / 순서 X

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