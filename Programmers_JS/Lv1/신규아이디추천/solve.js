function solution(new_id) {
    let answer = new_id.toLocaleLowerCase().replace(/[^\.a-z0-9-_]/g, '');
    
    while(answer.includes('..')){
        answer = answer.replace('..','.');
    }
    
    if(answer[0] === '.'){
        answer = answer.slice(1);
    }
    
    answer = answer.slice(0,15);
    
    if(answer[answer.length-1] === '.'){
        answer = answer.slice(0,-1);
    }
    
    if(answer === ''){
        return 'aaa';
    }
    
    if(answer.length <= 2){
        while(answer.length !== 3){
            answer += answer[answer.length-1];
        }
    }
    
    return answer;
}