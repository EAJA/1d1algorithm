function solution(n) {

    var answer = 1;
    let arr = new Array();
    for(let i = 2 ; i*(i+1)/2 <= n ; i++){
        arr.push([i, i*(i+1)/2]);
    }

    for(let a of arr){
        if((n-a[1])%a[0] === 0){
            answer++;
        }
    }
    return answer;
}