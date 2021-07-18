function solution(orders, course) {

    function comb(chosen, len) {
        let result = Array();
        let f = (str, lastIdx) => {
            if (str.length === len) {
                result.push(str);
                return;
            }
            for (let i = lastIdx + 1; i < chosen.length; i++) {
                f(str + chosen[i], i);
            }
        }
        f("", -1);
        return result;
    }

    let answer = Array();

    orders = orders.map(a => a.split('').sort().join(''));

    for (let i = course.length - 1; i >= 0; i--) {
        let now = course[i];
        let overlap = new Object();

        for (let a of orders) {
            if (a.length >= now) {
                comb(a, now).forEach(a => {
                    Object.keys(overlap).includes(a) ? overlap[a]++ : overlap[a] = 1;
                })
            }
        }

        let max = Math.max.apply(null, Object.values(overlap));
        for (let b in overlap) {
            if (overlap[b] === max && max !== 1) {
                answer.push(b);
            }
        }
    }
    return answer.sort();
}