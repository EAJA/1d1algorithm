function solution(numbers) {
    const isPrime = (n) => {
        if (n < 2) {
            return false;
        } else if (n === 2) {
            return true;
        } else if (n % 2 === 0) {
            return false;
        }
        for (let i = 2; i <= n ** 0.5; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    const permutation = (arr, selectNum) => {
        let result = [];
        if (selectNum === 1) return arr.map((v) => [v]);

        arr.forEach((v, idx, arr) => {
            const fixer = v;
            const restArr = arr.filter((_, index) => index !== idx);
            const permuationArr = permutation(restArr, selectNum - 1);
            const combineFixer = permuationArr.map((v) => [fixer, ...v]);
            result.push(...combineFixer);
        });
        return result;
    }

    let nums = Array();
    let answer = 0;

    numbers = numbers.split('');

    for (let i = 1; i <= numbers.length; i++) {
        nums = new Set([...nums, ...permutation(numbers, i).map(a => Number(a.join('')))]);
    }

    // console.table(nums);
    nums.forEach(a => {
        if (isPrime(a)) answer++;
    });

    return answer;
}