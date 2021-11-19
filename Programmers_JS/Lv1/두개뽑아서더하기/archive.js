//! 프로그래머스 - 두개 뽑아서 더하기
// - - - - - - - - - - - - - - - - - - - - - - - - - -
function solution(numbers) {
    var answer = [];
    for(let el1 in numbers){
        for(let el2 in numbers){
            if(el1!==el2){answer.push(numbers[el1]+numbers[el2]);}
        }
    }
    return Array.from(new Set(answer)).sort((a,b) => a-b);
  }
//두 수를 뽑아 만들수 있는 모든 경우의 수
//같은 인덱스끼리는 안더함
//포문 돌려서 답에 담고
//셋으로 중복값제거 소트해서 리턴
// - - - - - - - - - - - - - - - - - - - - - - - - - -