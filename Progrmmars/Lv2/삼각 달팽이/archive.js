function solution(n) {
    var answer = [];
    let now = n,
        num = 1;
    let oneColumn = 0,
        oneRow = 0;
    let twoColumn = 1,
        twoRow = n - 1;
    let thrColumn = n - 2,
        thrRow = n - 2;

    for (let i = 1; i <= n; i++) {
        answer.push(new Array(i).fill(0))
    }

    //row
    const one = function () {
        for (let i = oneColumn, j = 0; j < now; i++, j++) {
            answer[i][oneRow] = num;
            num++;
        }
        now--;
        oneColumn += 2;
        oneRow++;
    }

    //column
    const two = function () {
        for (let i = twoColumn, j = 0; j < now; i++, j++) {
            answer[twoRow][i] = num;
            num++;
        }
        now--;
        twoColumn++;
        twoRow--;
    }

    //rowcolumn
    const thr = function () {
        for (let i = thrColumn, j = thrRow, k = 0; k < now; i--, j--, k++) {
            answer[i][j] = num;
            num++;
        }
        now--;
        thrColumn--;
        thrRow -= 2;
    }

    let func = [one, two, thr, 0];

    while (func[3] < n) {
        func[func[3] % 3]();
        func[3]++;
    }

    return answer.flat();
}