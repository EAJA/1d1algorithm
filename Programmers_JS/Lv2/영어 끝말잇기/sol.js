function solution(n, words) {
    let answer = Array(n).fill(0);
    let num = 0;
    for (let i in words) {
        if (answer[num] === 0) answer[num] = [];
        answer[num].push(words[i]);
        num++;
        if (i > 0) {
            if (words.slice(0, i).includes(words[i]) || words[i - 1].slice(-1) !== words[i][0]) {
                return [num, answer[num - 1].length];
            }
        }
        if (num === n) num = 0;
    }
    return [0, 0];
}