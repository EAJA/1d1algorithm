function solution(s) {
    let rhkfgh = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    function isCorrect(str) {
        const stack = [];
        for (let i = 0; i < str.length; i++) {
            if (rhkfgh[str[i]]) stack.push(str[i]);
            else {
                if (stack[stack.length - 1] !== rhkfgh[str[i]]) return false;
                stack.pop();
            }
        }
        if (stack.length) return false;
        return true;
    }
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        let x = s.slice(i) + s.slice(0, i);
        if (isCorrect(x)) answer++;
    }
    return answer;
}