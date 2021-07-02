//! 프로그래머스 - 실패율
// - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(N, stages) {
    let resultFail = new Array();
    for(let i = 1 ; i <= N ; i++){
        resultFail.push([i,stages.filter(a => a === i).length / stages.filter(a => a >= i).length]);
    }
    return resultFail.sort((a,b) => b[1] - a[1]).map(a => a = a[0]);
  }
  //시간 오래걸리는데?
  // - - - - - - - - - - - - - - - - - - - - - - - - - -