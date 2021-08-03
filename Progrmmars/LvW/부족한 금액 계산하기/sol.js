function solution(price, money, count) {
    money = price * count * (count + 1) / 2 - money;
    return Math.max(money,0)
}