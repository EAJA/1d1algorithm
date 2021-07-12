function solution(n, a, b) {

    let answer = [String(a) + String(b), String(b) + String(a)]
    let match = new Array();
    let matchArr = new Array();
    let now = 1;

    for (let i = 0; i < n; i++) {
        if (i === a - 1) match.push(String(a))
        else if (i === b - 1) match.push(String(b))
        else match.push('');
    }

    for (let q = 2; q <= n; q *= 2) {

        for (let i = 0; i < match.length; i += 2) {
            matchArr.push(match[i] + match[i + 1]);
            if (matchArr[i / 2] === answer[0] || matchArr[i / 2] === answer[1]) {
                return now;
            }
        }

        match = matchArr;
        matchArr = new Array();
        now++;
    }
    return now;
}