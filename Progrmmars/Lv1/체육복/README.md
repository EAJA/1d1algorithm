```js
function solution(n, lost, reserve) {
    let lostCopy = lost.slice();
    for(let elLost of lost){ // 중복제거
        if(reserve.includes(elLost) === true){
            lostCopy.splice(lostCopy.indexOf(elLost),1);
            reserve.splice(reserve.indexOf(elLost),1);
        }
    }
    let reserveCopy = reserve.slice();
    let lostCCopy = lostCopy.slice();
    for(let elLost of lostCopy){
        for(let elReserve of reserveCopy){
            if(Math.abs(elReserve-elLost) === 1){
                lostCCopy.splice(lostCCopy.indexOf(elLost),1);
                reserveCopy.splice(reserveCopy.indexOf(elReserve),1);
            }
        }
    }
    return n-lostCCopy.length;
}
```