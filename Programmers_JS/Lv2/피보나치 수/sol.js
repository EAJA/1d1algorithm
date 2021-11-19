function solution(n) {
    let pibo = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        pibo[i] = pibo[i - 1]%1234567 + pibo[i - 2]%1234567;
    }

    return pibo[n]%1234567;
}