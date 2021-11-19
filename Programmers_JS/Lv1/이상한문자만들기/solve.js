//! 프로그래머스 - 이상한 문자 만들기
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(s) {
    let answer = new Array();
    for(let el of s.split(' ')){
        el = el.split('')
        for(let i = 0 ; i < el.length ; i++){
            i%2 === 0 ?
                el[i] = el[i].toUpperCase() :
                el[i] = el[i].toLowerCase();
        }
        answer.push(el.join(''));
    }
    return answer.join(' ');
  }
  //  - - - - - - - - - - - - - - - - - - - - - - - - - -