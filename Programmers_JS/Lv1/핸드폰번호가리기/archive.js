function solution(phone_number) {
    let answer = phone_number.split('');
    answer = answer.splice(0,answer.length-4).map(a => '*').join('');
    return answer+phone_number.slice(phone_number.length-4);
  }