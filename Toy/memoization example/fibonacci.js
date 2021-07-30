let mem = [1, 2, 3, 5, 8];

let fibonacci = function (n) {
    return mem[n - 1] ? mem[n - 1] : mem[n - 1] = fibonacci(n - 2) + fibonacci(n - 1);
};

//피보나치 일반항이 있지만
//부동소수 계산이 맛이감
function fibonacci_nth_term(n) {
    let s5 = 5 ** 0.5;
    return Math.floor(1 / s5 * (((1 + s5) / 2) ** n - ((1 - s5) / 2) ** n));
}