function solution(scores) {
    var answer = '';
    let tmp;

    const grade = (num) => {
        if (num >= 90) return 'A';
        else if (num >= 80) return 'B';
        else if (num >= 70) return 'C';
        else if (num >= 50) return 'D';
        else return 'F';
    }

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
        answer += grade(cur.reduce((a, b) => a + b) / len);
    }

    return answer;
}