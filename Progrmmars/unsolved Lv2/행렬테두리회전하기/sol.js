function solution(rows, columns, queries) {
    let arr = [[]];
    let first, last;
    let j = 0;
    queries = queries.map(a => a-1);

    for (let i = 1; i <= rows * columns; i++) {
        arr[j].push(i)
        if(i%columns === 0){
            j++;
            arr[j] = [];
        }
    }
    arr.pop();

    console.table(arr);
    
    //반복은 쿼리[0]-[2]+1
    arr[0].map(a => {
        
    })

    var answer = [];
    return answer;
}

//행렬 만들고

solution(4,4,[1,2,3,4])
//[0,1,2,3]
//1번라인 => pop후 // unshift 2번째라인 첫번째거
//마지막 라인 = shift후 // push 그전라인 마지막거