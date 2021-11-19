function solution(citations) {
    var answer = 0;
    citations = citations.sort((a, b) => a - b);
    let max = citations[Math.floor(citations.length / 2)]
    for (let i = 1; i <= max; i++) {
        const admission = citations.filter(a => a >= i);
        if (admission.length >= i) answer = i;
        else break;
    }
    return answer;
}