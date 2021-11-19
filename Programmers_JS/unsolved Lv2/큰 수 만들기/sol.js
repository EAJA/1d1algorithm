// 스택
function solution(number, k) {

    let result = [number[0]];
    let splNumber = number.split('');
    let max = String(Math.max.apply(null, number.slice(0, k)));
    k -= number.indexOf(max);

    for (let i = 1; i < number.length; i++) {
        if (number[i] > result[result.length - 1]) {
            result.pop();
            result.push(number[i]);
            k--;
        } else result.push(number[i])

        if(k === 0){
            result = [...result , ...number.slice(-(number.length-i-1))];
            break;
        }
    }

    return result.join('');
}
/*
    오래걸려서 포기
*/

function solution(number, k) {

    number = number.split('');

    for (let i = 0; i < number.length && k > 0; i++) {
        if (number[i] === '9') {
            continue;
        } else if (i === number.length - 1) {
            number.pop();
            i -= 2;
            k--;
        } else if (number[i] < number[i + 1]) {
            number.splice(i, 1);
            i = -1;
            k--;
        }
    }

    if (k > 0) {
        number = number.slice(-(number.length - k));
    }

    return number.join('');
}

// 10번 시간초과를 어떻게 해결하지
// 스플라이스 때문에 배열 재정렬 하느라 오래걸리는거 같음