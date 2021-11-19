//! 프로그래머스 - 비밀지도
// - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(n, arr1, arr2) {
  var answer = [];
  for(let i in arr1){
      answer.push((arr1[i]|arr2[i]).toString(2));
  }
  answer = answer.map(a => a.split(''));
  answer.forEach(a => {while(a.length !== n){a.unshift('0');}});
  answer = answer.map(el => el = el.map(a => a==='1' ? a='#' : a=' ').join(''));
  return answer;
}