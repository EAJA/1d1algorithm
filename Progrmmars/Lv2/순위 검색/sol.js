function solution(info, query) {
    let answer = [];

    info = info.map(a => a.split(' '));
    query = query.map(a => {
        a = a.split(' and ');
        [a[3],a[4]] = a[3].split(' ');
        return a;
    });

    for (let el of query) {
        let chosen = info.slice();

        for (let i = 0; i < 4; i++) {
            if (el[i] === '-') continue;
            else chosen = chosen.filter(a => a[i] === el[i]);
        }
        answer.push(chosen.filter(a => Number(a[4]) >= el[4]).length);
    }
    return answer;
}