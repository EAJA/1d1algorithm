function pow(base, exponent) {
    let num = 94906249;
    let result = base % num;
    let mem = {
        1: result
    };

    for (let j = 2; j < exponent; j *= 2) {
        result = (result * result) % num;
        mem[j] = result % num;
    }

    let e = exponent.toString(2);
    let answer = 1;

    for (let i = e.length - 1, k = 1; i >= 0; i--, k *= 2) {
        if (e[i] === '1') {
            answer = (answer * mem[k]) % num;
        }
    }

    return answer;
}