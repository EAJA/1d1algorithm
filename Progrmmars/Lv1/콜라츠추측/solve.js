//! 프로그래머스 - 콜라츠 추측
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(num) {
    let i = 0;
    while(num!==1){
        if(i >= 500)return -1;
        if(num%2===0){
            num = num/2;
            i++;
        }else{
            num = num*3 + 1;
            i++;
        }
    }
    return i;
  }
  //  - - - - - - - - - - - - - - - - - - - - - - - - - -