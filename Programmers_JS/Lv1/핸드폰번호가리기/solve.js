//! 프로그래머스 - 핸드폰 번호 가리기
// - - - - - - - - - - - - - - - - - - - - - - - - - -
const solution = (n) => n.split('').splice(0,n.length-4).map(a => '*').join('')+n.slice(-4);
//[...] 이랑 fill 쓰면 더줄일수 있을듯?
// - - - - - - - - - - - - - - - - - - - - - - - - - -