function solution(n, t, m, p) {
    let answer = '';
    let word = '';
    for (let i = 0; i < t * m; i++) {
        word += i.toString(n).toUpperCase(); 
    }

    while (answer.length !== t) {
        answer += word[p - 1];
        p += m;
    }

    return answer;
}