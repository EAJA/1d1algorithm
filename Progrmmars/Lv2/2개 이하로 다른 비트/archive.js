function solution(numbers) {
    var answer = [];
    numbers.forEach(now => {
        let who = now;
        while (true) {
            who += 1;
            if ((who ^ now).toString(2).replace(/0/g, '').length <= 2) {
                answer.push(who);
                break;
            }
        }
    });
    return answer;
}

// 빅인트 낚시문제