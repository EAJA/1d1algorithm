//! 프로그래머스 - 가운데 글자 가져오기
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
const solution = s => {return s.length%2 === 1 ? s[(s.length+1)/2-1] : s.slice((s.length/2)-1,s.length/2+1);}
//  - - - - - - - - - - - - - - - - - - - - - - - - - -

//! 프로그래머스 - 문자열 내 마음대로 정렬하기
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
const solution = (strings, n) => strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
//  - - - - - - - - - - - - - - - - - - - - - - - - - -

//! 프로그래머스 - 문자열 내림차순으로 배치하기
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
const solution = (s) => s.split('').sort((a,b) => b.charCodeAt(0) - a.charCodeAt(0)).join('');
//* 밑에게 더 좋음.
const solution = (s) => s.split('').sort().reverse().join('');
//  - - - - - - - - - - - - - - - - - - - - - - - - - -

//! 프로그래머스 - 문자열 다루기 기본
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(s) {
  if(s.length === 4 || s.length ===6){
      if(!s.match(/[a-z]/gi)){
          return true;
      }
  }
  return false;
}
//~ 압축
const solution = (s) =>  ((s.length === 4 || s.length === 6) && !s.match(/[a-z]/gi)) ? true : false;
//  - - - - - - - - - - - - - - - - - - - - - - - - - -

//! 프로그래머스 - 서울에서 김서방 찾기
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
const solution = (seoul) => `김서방은 ${seoul.indexOf('Kim')}에 있다`;
//  - - - - - - - - - - - - - - - - - - - - - - - - - -

//! 프로그래머스 - 수박수?
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
const solution = (n) => '수박'.repeat(n).slice(0,n);
//* 효율?
const solution = (n) => '수박'.repeat(Math.round(n/2)).slice(0,n+1-(n%2));
//  - - - - - - - - - - - - - - - - - - - - - - - - - -

//! 프로그래머스 - 약수의 합
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(n) {
  let answer = 0;
  for(let i = 1 ; i <= n ; i++){
      if(n%i === 0) answer+=i;
  }
  return answer;
}
//  - - - - - - - - - - - - - - - - - - - - - - - - - -

//! 프로그래머스 - 자릿수 더하기
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
const solution = (n) => parseInt(String(n).split('').reduce((a,b) => Number(a)+Number(b)));
//  - - - - - - - - - - - - - - - - - - - - - - - - - -

//! 프로그래머스 - 자연수 뒤집어 배열로 만들기
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
const solution = (n) => String(n).split('').reverse().map(a => Number(a))
//  - - - - - - - - - - - - - - - - - - - - - - - - - -

//! 프로그래머스 - 정수 내림차순으로 배치하기
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
const solution = (n) => parseInt(String(n).split('').sort((a,b) => b-a).join(''));
//  - - - - - - - - - - - - - - - - - - - - - - - - - -

//! 프로그래머스 - 정수 제곱근 판별
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(n) {
  return Math.sqrt(n) - parseInt(Math.sqrt(n)) === 0 ? (Math.sqrt(n)+1)**2 : -1;
}
//  - - - - - - - - - - - - - - - - - - - - - - - - - -

//! 프로그래머스 - 제일 작은 수 제거하기
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(arr) {
  arr.splice(arr.indexOf(Math.min.apply(null, arr)),1)
  return arr.length > 1 ? arr : [-1];
}
//  - - - - - - - - - - - - - - - - - - - - - - - - - -

//! 프로그래머스 - 짝수와 홀수
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
const solution = (n) => n%2 === 0 ? 'Even' : 'Odd'
//  - - - - - - - - - - - - - - - - - - - - - - - - - -

//! 프로그래머스 - 평균 구하기
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
const solution = (arr) => arr.reduce((a,b) => a+b)/arr.length;
//  - - - - - - - - - - - - - - - - - - - - - - - - - -

//! 프로그래머스 - 하샤드 수
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
const solution = (x) => x % String(x).split('').map(a => Number(a)).reduce((a,b) => a+b) === 0;
//  - - - - - - - - - - - - - - - - - - - - - - - - - -

//! 프로그래머스 - 행렬의 덧셈
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(arr1, arr2) {
  for(let i in arr1){
      for(let j in arr1[i]){
          arr1[i][j] = arr1[i][j] + arr2[i][j]
      }
  }
  return arr1;
}
//  - - - - - - - - - - - - - - - - - - - - - - - - - -

//! 프로그래머스 - x만큼 간격이 있는 n개의 숫자
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(x, n) {
  let answer = [1];
  while(answer[0]<=n){
      answer.push(answer[0]*x);
      answer[0]++;
  }
  return answer.slice(1);
}
//  - - - - - - - - - - - - - - - - - - - - - - - - - -

//! 프로그래머스 - 직사각형 별찍기
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let result = '';
    for(let i = 0 ; i < b ; i++){
        for(let j = 0 ; j < a ; j++){
            result+='*';
        }
        result+='\n';
    }
    console.log(result.slice(0,result.length))
});
//  - - - - - - - - - - - - - - - - - - - - - - - - - -