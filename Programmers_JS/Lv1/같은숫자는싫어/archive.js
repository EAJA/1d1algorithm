function solution(arr){
    let answer = new Array();
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]!==arr[i+1])answer.push(arr[i]);
    }
    return answer;
}
// for in 문을 쓰면 i는 스트링으로 나오고
// 비교과정에서 넘버로 바꿔줘야해서 효율성 탈락 하는듯??
function solution(arr){
  let answer = new Array();
  for(let i in arr){
      if(arr[i]!==arr[Number(i)+1])answer.push(arr[i]);
  }
  return answer;
} //효율성에서 탈락