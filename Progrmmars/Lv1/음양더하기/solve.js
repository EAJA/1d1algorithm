//! 프로그래머스 - 음양 더하기
// - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(absolutes, signs) {
    var answer = 0;
    for(let i in absolutes){
        if(signs[i]){
            answer += absolutes[i];
        }else answer -= absolutes[i];
    }
    return answer;
  }
  //쉬웠는데 코드를 한줄로 줄여보자
  //reduce 사용하면 될거같은데
  // - - - - - - - - - - - - - - - - - - - - - - - - - -