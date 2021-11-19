function solution(arr1, arr2) {

    let result = new Array();
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        result.push([]);
        for (let j = 0; j < arr2[0].length; j++) {
            for (let k = 0; k < arr1[0].length; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }
            result[i].push(sum);
            sum = 0;
        }
    }
    return result;
}

//반복 반복 반복