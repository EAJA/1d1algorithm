//! 프로그래머스 - 로또 맞추기 최대값 최소값 문제

//const overlapRemover = Array.from(new Set(array)); // 중복값 제거
//const overlapArr = array.filter((item, index) => array.indexOf(item) !== index); // 중복값만 모은 배열
//const arrayConcat = array.concat(arr2); // 배열 합치기

function solution(lottos, win_nums) {
    let plusArr = lottos.concat(win_nums);
    var answer = [];
    //로또의 0의 개수를 당첨수에 추가 =>최고값
    let zeroCount = lottos.filter(isZero => isZero === 0);
    //윈넘과 로또를 비교해서 중복된 값의 갯수 => 최저값
    let highest = plusArr.filter((item, index) => plusArr.indexOf(item) !== index);
    highest = highest.filter(zeroDel => zeroDel > 0);
    zeroCount.length === 0 && highest.length === 0 ? answer.push(6) : answer.push(7-(zeroCount.length+highest.length));
    highest.length === 0 ? answer.push(6) : answer.push(7-highest.length);
    return answer;
  }
  
  function solution(lottos, win_nums) {
    const answer = [];
    const min = lottos.filter(n => win_nums.includes(n)).length;
    const max = lottos.filter(n => n === 0).length + min;
  
    max > 1 ? answer.push(7 - max) : answer.push(6);
    min > 1 ? answer.push(7 - min) : answer.push(6);
  
    return answer;
  }
  
  /* 알고리즘 생각을 더 하자
  코드가 너무 지저분하다
  포함되는거만 필터로 배열 만들면 되는데
  concat 을 쓸데없이 써서
  중복값 제거로 한계단이 더해졌다
  메소드를 여러가지 외우는게 필요한거같다 */
  // - - - - - - - - - - - - - - - - - - - - - - - - - -