function solution(word) {
    let answer = word.length;

    const ap = ['A', 'E', 'I', 'O', 'U'];
    const ac = [781, 156, 31, 6, 1];

    for (let i = 0; i < word.length; i++) {
        const cur = word[i];
        answer += ap.indexOf(cur) * ac[i];
    }

    return answer;
}