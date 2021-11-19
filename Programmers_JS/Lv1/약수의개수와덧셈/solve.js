function solution(left, right) {
    let answer = 0;
    while(left <= right){
        Number.isInteger(Math.sqrt(left)) ? answer-=left : answer+=left;
        left++;
    }
    return answer;
}