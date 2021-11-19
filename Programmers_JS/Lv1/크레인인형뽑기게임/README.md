```js
function solution(board, moves) {
    var answer = 0;
    let result = new Array();
    let grab = 0;
    for(let i = 0 ; i < moves.length ; i++){
        while(grab < board.length){
            if(board[grab][moves[i]-1] !== 0){
                result.push(board[grab][moves[i]-1]);
                board[grab][moves[i]-1] = 0;
                break;
            }
            grab++;
        }
        grab = 0;
        if(result[result.length-2]===result[result.length-1] && result.length>1){
            result.splice(result.length-2,2);
            answer += 2;
        }
    }
    return answer;
}
```