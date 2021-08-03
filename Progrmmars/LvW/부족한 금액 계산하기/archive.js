function solution(price, money, count) {

    for (let i = 1; i <= count; i++) {
        money -= i * price;
    }

    return Math.max(money, 0)
}