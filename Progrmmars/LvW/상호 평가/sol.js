function solution(scores) {
    var answer = '';
    let tmp;

    for (let i = 0; i < scores.length; i++) {
        let cur = [];

        for (let j = 0; j < scores.length; j++) {
            if (i === j) {
                tmp = scores[j][i];
            }
            cur.push(scores[j][i]);
        }

        if (Math.max(...cur) === tmp || Math.min(...cur) === tmp) {
            let [now] = cur.splice(i, 1);
            if (cur.includes(now)) {
                cur.push(now)
            }
        }

        let len = cur.length;
        answer += "FDDCBAA"[Math.max(parseInt(s.reduce((a, b) => a + b) / len / 10) - 4, 0)];
    }

    return answer;
}