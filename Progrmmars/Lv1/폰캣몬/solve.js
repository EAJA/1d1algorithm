//! 프로그래머스 - 폰캣몬
//  - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(nums) {
    const numsLength = nums.length/2;
    nums = Array.from(new Set(nums));
    // console.log(nums);
    if(nums.length >= numsLength){
        return numsLength;
    }else return nums.length;
  }
//제출할때 콘솔로그를 넣어서 실행속도가 개차반남
// - - - - - - - - - - - - - - - - - - - - - - - - - -