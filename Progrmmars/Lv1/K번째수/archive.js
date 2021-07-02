//! 프로그래머스 K번째수
// - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(array, commands) {
    var answer = [];
    let comI = [];
    for(let i = 0; i < commands.length ; i++){
        comI = array.slice(commands[i][0]-1,commands[i][1]).sort(function(a, b) {
            if(a > b) return 1;
            if(a === b) return 0;
            if(a < b) return -1;
        });
        answer.push(comI[commands[i][2]-1]);
    }
    return answer;
  }
  //sort 함수 설정 -> (a,b) => a - b 
  //위에 프로토타입 보다 조금더 빨라짐
  function solution(array, commands) {
    var answer = [];
    for(let i in commands){
        var comI = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b) => a-b);
        answer.push(comI[commands[i][2]-1]);
    }
    return answer;
  }
  //for of 줄이기..
  function solution(array, commands) {
    var answer = [];
    for(let i of commands){
        var comI = array.slice(i[0]-1,i[1]).sort((a,b) => a-b);
        answer.push(comI[i[2]-1]);
    }
    return answer;
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - -