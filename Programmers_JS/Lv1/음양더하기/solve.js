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
  //reduce 사용하면 줄어들거 같은데 -> 그게그거임
  // - - - - - - - - - - - - - - - - - - - - - - - - - -