function solution(numbers, hand) {

    let result = '';
    let left = [10, 0, 0];
    let right = [10, 0, 0];

    for (let num of numbers) {
        left[1] = 0;
        right[1] = 0;

        if (num === 1 || num === 4 || num === 7) {
            result += 'L';
            left[0] = num;
        } else if (num === 3 || num === 6 || num === 9) {
            result += 'R';
            right[0] = num - 2;
        } else if (num === 2 || num === 5 || num === 8 || num === 0) {
            if (num === 0) num = 11;
            if (left[0] % 3 === 1) {
                left[2] = left[0] + 1;
                left[1]++;
            } else left[2] = left[0];
            if (right[0] % 3 === 1) {
                right[2] = right[0] + 1;
                right[1]++;
            } else right[2] = right[0];
            left[1] += (Math.abs(num - left[2]) / 3);
            right[1] += (Math.abs(num - right[2]) / 3);
            if (left[1] > right[1]) {
                result += 'R';
                right[0] = num;
            } else if (left[1] < right[1]) {
                result += 'L';
                left[0] = num;
            } else if (left[1] === right[1]) {
                if (hand === 'right') {
                    result += 'R';
                    right[0] = num;
                } else if (hand === 'left') {
                    result += 'L';
                    left[0] = num;
                }
            }
        }
    }
    return result;
}