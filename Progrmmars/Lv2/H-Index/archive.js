function solution(citations) {
    let i = 0;

    while (i + 1 <= citations.sort((a, b) => b - a)[i]) i++;

    return i;
}