function solution(numbers) {
    function f(x) {
        if (x % 2 === 0) return x + 1;
        let l = "0" + x.toString(2);
        let i = l.lastIndexOf("0");
        return parseInt(`${l.slice(0, i)}10${l.slice(i + 2)}`, 2);
    }
    const answer = [];
    for (let el of numbers) answer.push(f(el));
    return answer;
}