//- 배열의 최대 최소 구하는 문제

function minMax(arr) {
    let minResult = arr[0];
    let maxResult = arr[(arr.length-1)];
    if(arr.length===1){
      return [arr[0] , arr[0]];
    }
    else if(arr.length>1){
      for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]<minResult){
          minResult = arr[i];
        }
        if(arr[i]>maxResult){
          maxResult = arr[i];
        }
      }
    }else{};
    return [minResult, maxResult];
}