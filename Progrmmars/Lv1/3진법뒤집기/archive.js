function solution(n) {
    let zoom = new Array();
    n.toString(3).split('').forEach((a) => zoom.unshift(a));
    return parseInt(zoom.join(''),3);
  }
  // Array.reverse() 는 배열을 뒤집는다
  // Array.map 은 배열 순회하면서 엘레먼트 각각 조진다s
  // Number로 0을 없애면 부동소수점 에러가 난다 숫자가 엄청 클 때
  // 그냥 parseInt로 해도 0을 없애준다