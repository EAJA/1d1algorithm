function solution(s) {
    const answer = [0, 0];

    while (s !== '1') {
        if (s.includes('0')) {
            answer[1] += s.match(/0/g).length;
            s = s.replace(/0/g, '').length.toString(2);
        } else {
            s = s.length.toString(2);
        }
        answer[0]++;
    }

    return answer;
}