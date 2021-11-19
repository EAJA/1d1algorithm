function solution(brown, yellow) {

    let squre = Math.sqrt(brown + yellow);
    if (Number.isInteger(squre)) {
        return [squre, squre];
    }

    let arr = new Array();
    let yellowArr = new Array();
    for(let i = 1 ; i <= yellow ; i ++){
        if(yellow%i === 0){
            arr.push(i);
        }
    }

    for(let i = 0 ; i < arr.length/2 ; i++){
        yellowArr.push([arr[i],arr[arr.length-1-i]]);
    }

    for(let a of yellowArr){
        if((a[1])*2 + (a[0]+2)*2 === brown){
            return [a[1]+2, a[0]+2];
        }
    }
}