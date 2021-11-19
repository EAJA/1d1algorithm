function solution(numbers, target) {
    let answer = [1, 1]; // n r
    let n = numbers.length;
    let r = (numbers.reduce((a, b) => a + b) - target) / numbers[0] / 2;
    if (r === 0) return 1;
    for (let i = n; i >= n - r + 1; i--) {
        answer[0] *= i;
    }
    for (let i = 1; i <= r; i++) {
        answer[1] *= i;
    }
    return answer[0] / answer[1];
}
// 같은 숫자로 된 배열일경우

function solution(numbers, target) {

    function sign(i) {
        return i === 1 ? 1 : -1;
    }

    let max = 1;
    for (let i = 0; i < numbers.length; i++) {
        max *= 2;
    }
    let cur = 0;
    let count = 0;
    while (cur < max) {
        let val = 0;
        for (let i = 0; i < numbers.length; i++) {
            let temp = cur;
            val += sign((temp >> i) & 1) * numbers[i];
        }

        if (val === target) {
            count++;
        }
        cur++;
    }
    return count;
}