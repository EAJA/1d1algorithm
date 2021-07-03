function solution(numbers, target) {
    let answer = [1,1]; // n r
    let n = numbers.length;
    let r = (numbers.reduce((a,b) => a+b) - target) / numbers[0] / 2;
    if(r === 0) return 1;
    for(let i = n ; i >= n-r+1 ; i--){
        answer[0] *= i;
    }
    for(let i = 1; i <= r ; i++){
        answer[1] *= i;
    }
    return answer[0]/answer[1];
}