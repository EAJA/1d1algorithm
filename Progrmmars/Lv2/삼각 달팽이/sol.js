function solution(n) {
    let answer = [];

    let row = -1;
    let column = 0;
    let num = 0;

    for (let i = 1; i <= n; i++) {
        answer.push(new Array(i).fill(0));
    }

    for (let i = n; i > 0; i -= 3) {
        answer[++row][column] = ++num;
        for (let j = 0; j < i - 1; j++) {
            answer[++row][column] = ++num;
        }
        for (let j = 0; j < i - 1; j++) {
            answer[row][++column] = ++num;
        }
        for (let j = 0; j < i - 2; j++) {
            answer[--row][--column] = ++num;
        }
    }
    
    return answer.flat();
}

solution(9);