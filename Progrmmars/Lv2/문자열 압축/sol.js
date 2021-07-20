function solution(s) {
    let copyS = s;
    let sliceArr = new Array();
    let arr = new Array();
    let numArr = new Array();
    let overlapD;
    let j = 0;
    let toPushStr = new String();

    for(let i = 1 ; i < s.length ; i++){

        while(copyS.length>0){
            sliceArr.push(copyS.slice(0,i));
            copyS = copyS.slice(i);
        }
    
        overlapD = sliceArr.filter((el,i) => el!==sliceArr[i+1]);
        numArr = overlapD.map(a => 1);

        for(let i = 0 ; i < sliceArr.length ; i++){
            if(sliceArr[i] === sliceArr[i+1]){
                numArr[j] += 1;
            } else j++;
        }
        j = 0;

    
        for(let i = 0 ; i < overlapD.length ; i++){
            if(numArr[i] > 1) toPushStr += numArr[i];
            toPushStr += overlapD[i];
        }
   
        arr.push(toPushStr);

        toPushStr = '';
        sliceArr = new Array();
        overlapD = new Array();
        copyS = s;
    }
    arr = arr.map(a => a.length);
    return arr.length === 0 ? 1 : Math.min.apply(null , arr);
}