function solution(progresses, speeds) {
    
    let answer = [];
    let i = 0;

    for(let i in progresses){
        progresses[i] = [progresses[i], speeds[i]];
    }
    while(progresses.length > 0){

        progresses = progresses.map(a => a = [a[0]+a[1],a[1]]);
        while(progresses.length > 0 && progresses[0][0] >= 100){
            progresses.shift();
            i++;
        }
        
        if(i > 0){
            answer.push(i);
            i = 0;
        }
    }
    return answer;
}

let a = [93, 30, 55];
let b = [1, 30, 5];

solution(a,b);