//! 프로그래머스 - 시저암호
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(s, n) {
    let answer = s.split('').map(a => {
        let cd = a.charCodeAt();
        if(cd === 32){
            return a;
        }else if(cd <= 90){
            return cd+n > 90 ? String.fromCharCode(cd+n-26) :String.fromCharCode(cd+n);
        }else if(cd <= 122){
            return cd+n > 122 ? String.fromCharCode(cd+n-26) :String.fromCharCode(cd+n);
        }
    })
    return answer.join('');
}
  //  - - - - - - - - - - - - - - - - - - - - - - - - - -