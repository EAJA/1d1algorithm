//////////////////////////////////////
function solution(participant, completion) {
    var answer = '';
    let arr = participant;
    let equal = '';
    for(let j = 0 ; j<participant.length ; j++){
        equal = arr.shift();
        if(arr.includes(equal) && completion.includes(equal)){
            answer += equal;
        }
    }
    console.log(participant);
    for(let i = 0 ; i<participant.length ; i++){
        if(!completion.includes(participant[i])){
            answer += participant[i];
        }
    }
    return answer;
  }
  
  //participant 의 한명씩 completion 이랑 비교해서
  //이름이 있는 친구는 뺀다
  let a = ["mislav", "stanko", "mislav", "ana"];
  let b = ["stanko", "ana", "mislav"];
  console.log(solution(a,b));
  
  //!이거 participant 값이 왜 없어짐??
  
  // - - - - - - - - - - - - - - - - - - - - - - - - - -