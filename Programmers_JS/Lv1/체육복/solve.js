//! 프로그래머스 - 체육복
// - - - - - - - - - - - - - - - - - - - - - - - - - -
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
  //! for of 돌릴때 원본 배열 삭제하면 for문 원하는 만큼 안돌음
  //filter, find 돌려서 코드 간결화해보자
  // - - - - - - - - - - - - - - - - - - - - - - - - - -