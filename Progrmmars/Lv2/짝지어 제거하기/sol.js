function solution(s){
    if(s.length % 2 === 1){
        return 0;
    }
    
    let arr = new Array();
    
    for(let i = 0 ; i < s.length ; i++){
        if(arr.length === 0 || arr[arr.length-1] !== s[i]){
            arr.push(s[i]);
        }else arr.pop();
    }
    
    return arr.length === 0 ? 1 : 0;
}

//없애는거보다 안받고 마지막거 빼는거로