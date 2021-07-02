//! 프로그래머스 - 약수의 개수와 덧셈
// - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(left, right) {
    let arr = new Array();
    let answer = 0;
    while(left <= right){
        arr.push(left);
        left++;
    }
    arr.forEach(el => { let j = 0;
        for(let i = 1 ; i <= el ; i++){el%i === 0 ? j++ : '';}
        j%2 === 0 ? answer+=el : answer-=el;
    });
    return answer;
  }
  //reduce 갈겼는데 왜 더 빨라졌지
  function solution(left, right) {
    let arr = new Array();
    while(left <= right){
        arr.push(left);
        left++;
    }
    arr = arr.map(el => { let j = 0;
        for(let i = 1 ; i <= el ; i++){el%i === 0 ? j++ : '';}
        return j%2 === 0 ? el : -el;
    });
    return arr.reduce((a,b) => a+b);
  }
  //정수제곱근을 가지면 약수의 개수는 홀수다
  // - - - - - - - - - - - - - - - - - - - - - - - - - -