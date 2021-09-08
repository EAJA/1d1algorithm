## 기수정렬 radix sort

정렬방식  
  
1. 0~9 까지의 Bucket(Queue 자료구조의)을 준비한다.
2. 모든 데이터에 대하여 가장 낮은 자리수에 해당하는 Bucket에 차례대로 데이터를 둔다.
3. 0부터 차례대로 버킷에서 데이터를 다시 가져온다.
4. 가장 높은 자리수를 기준으로 하여 자리수를 높여가며 2번 3번 과정을 반복한다.
  

  
<br/>
  
| 시간복잡도 | Best  | Avg   | Worst |
| ---------- | ----- | ----- | ----- |
| 기수정렬     | dn | dn | dn |
  
d = 키의 수 / n = 키의 길이
  
<br/>
  
```js
function radixSort(arr) {
    let arrP = [];
    let arrM = [];

    for (let el of arr) {
        el < 0 ? arrM.push(el * -1) : arrP.push(el);
    }

    function sortP(arr) {
        const max = String(Math.max.apply(null, arr)).length;

        for (let i = 1; i <= max; i++) {
            let bucket = Array.from(Array(10), () => new Array());

            for (let a of arr) {
                const s = String(a);

                if (s.length < i) {
                    bucket[0].push(a);
                    continue;
                }

                bucket[Number(s[s.length - i])].push(a);
            }

            let newArr = [];

            for (let e of bucket) {
                if (e.length === 0) continue;
                for (let i in e) newArr.push(e[i]);
            }

            arr = newArr;
        }

        return arr;
    }

    return sortP(arrM).reverse().map(a => a * -1).concat(sortP(arrP));
}
```