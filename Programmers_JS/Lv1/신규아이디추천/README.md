```js
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
```
정규식 더썼으면 코드 조금 줄일수 있을거같은데
정규식이 너무 못생겨서 쓰기싫다