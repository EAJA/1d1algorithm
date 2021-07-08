function solution(land) {

    let max = 0;

    for (let i = 0; i < land.length; i++) {
        for(let j = 0 ; j < land[i].length ; j++){
            if(!i) continue;
            else {
                let arr = land[i-1].slice();
                console.table(arr);
                arr[j] = 0;
                land[i][j] += Math.max.apply(null , arr);
                max = Math.max(land[i][j], max);
            }
        }
    }
    return max;
}