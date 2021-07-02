function solution(numbers) {
  var answer = [];
  for(let el1 in numbers){
      for(let el2 in numbers){
          if(el2 > el1){answer.push(numbers[el1]+numbers[el2]);}else continue;
      }
  }
  return [...new Set(answer)].sort((a,b) => a-b);
}
//비교연산자 바꿔서 쓸데없는 계산 바꿔주고 continue 