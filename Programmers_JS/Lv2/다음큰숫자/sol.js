function solution(n) {
    let num2 = n.toString(2).match(/[1]/g).length;
    do {
        n += 1;
    }
    while (n.toString(2).match(/[1]/g).length !== num2)
    return n;
}