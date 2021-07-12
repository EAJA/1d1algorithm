function solution(n, a, b) {

    let match = new Array();
    let matchArr = new Array();
    let now = 1;

    for (let i = 0; i < n; i++) {
        if (i === a - 1) match.push(a)
        else if (i === b - 1) match.push(b)
        else match.push('');
    }

    for(let q = 2; q <= n; q = q**2) {

        for (let i = 0; i < match.length; i += 2) {
            matchArr.push(match.slice(i, i + 2).join(''));
            if (matchArr[i / 2] === a + '' + b || matchArr[i / 2] === b + '' + a) {
                return now;
            }
        }

        match = matchArr;
        matchArr = new Array();
        now++;
    }
    return now;
}

console.log(solution(16, 4, 15));
//3