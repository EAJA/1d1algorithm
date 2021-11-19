function solution(priorities, location) {
    var answer = 0;

    let index = new Array();
    for(let i in priorities){
        index.push(i);
    }
    while(priorities.length > 0){
        let max = Math.max.apply(null, priorities);
        let point = priorities.indexOf(max);
        priorities = [...priorities.slice(point), ...priorities.slice(0, point)]
        index = [...index.slice(point), ...index.slice(0, point)]
        priorities.shift();
        let a = index.shift();
        answer++;
        if(location === Number(a)){
            return answer;
        }
    }
    return priorities;
}