```js
// N = 몇번째 숫자인지
// K = 구하려는 경우가 담긴 배열
function getBornNum(N, K) {
    // 팩토리얼을 구하기 위한 함수
    function fac(p) {
        let result = 1;
        for(let i = p ; i > 1 ; i--){
            result *= i;
        }
        return result;
    }

    let arr = [];
    let result = 0;

    // 경우의수 1번
    for (let i = 1; i <= N; i++) {
        arr.push(i);
    }

    /* 
    경우의수 앞에서부터 생각
    가장 앞의수가 1일경우 = 0
    가장 앞의수가 2일경우 = 남은수를 가지고 경우의수를 몇번 만드는지
    가장 앞의수가 3일경우 = 2 * 남은수를 가지고 경우의수를 몇번 만드는지
    ...

    을 로직으로 마지막수 전까지 구한다
    마지막수는 이미 결정되있으므로 0
    */
    while (K.length > 1) {
        let first = arr.indexOf(K[0]);
        result += first * fac(K.length - 1);
        K.shift();
        arr.splice(first,1);
    }

    return result;
}
```