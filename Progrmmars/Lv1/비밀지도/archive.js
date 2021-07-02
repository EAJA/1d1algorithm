//? - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(n, arr1, arr2) {
  var answer = [];
  for(let i in arr1){
      answer.push((arr1[i]|arr2[i]).toString(2));
  }
  answer = answer.map(a => a.split(''));
  answer.forEach(a => {while(a.length !== n){a.unshift('0');}});
  //answer.forEach(el => el = el.map(a => a==='1' ? a='#' : a=' '));
  answer = answer.map(el => el = el.map(a => a==='1' ? a='#' : a=' ').join(''));
  console.table(answer)
  return answer;
}
//forEach 로 돌리면 왜 적용이 안되지
//  - - - - - - - - - - - - - - - - - - - - - - - - - -