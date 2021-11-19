function solution(number, k) {

    let result = [number[0]];

    for (let i = 1; i < number.length; i++) {
        if (k === 0) {
            result.push(number.slice(i))
        } else if (result[result.length - 1] < number[i]) {
            result.pop();
            result.push(number[i], number[i + 1]);
            k--;
            i++;
        } else if (result[result.length - 1] > number[i]) {
            result.push(number[i + 1]);
            k--;
            i++;
        } else if (result[result.length - 1] == number[i]) {
            result.push[number[i]]
        }
        console.table(result)
    }

    return result.join('');
}

let a = "89111111"
console.log(solution(a, 3));