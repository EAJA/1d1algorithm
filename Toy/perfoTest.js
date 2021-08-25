// const testF1 = require('testF1');
// const testF2 = require('testF2');

function getMax(arr) {
    return arr.reduce((max, item) => {
        if (item > max) return item;
        return max;
    }, 0);
}

function countingSort(arr, radix) {
    const N = arr.length;
    const output = Array(N).fill(0);
    const count = Array(10).fill(0);

    // 현재 자리수를 기준으로 0~9의 개수를 센다.
    arr.forEach((item) => {
        const idx = Math.floor(item / radix) % 10;
        count[idx]++;
    });

    // count[i]가 i까지의 누적 개수가 되도록 만든다.
    count.reduce((totalNum, num, idx) => {
        count[idx] = totalNum + num;
        return totalNum + num;
    });

    // 아래 속성이 유지되도록 하기 위해 배열을 거꾸로 순회한다.
    //  1. 가장 큰 값을 먼저 본다.
    //  2. 가장 큰 값을 가장 마지막에 놓는다.
    let i = N - 1;
    while (i >= 0) {
        const idx = Math.floor(arr[i] / radix) % 10;
        // count[idx]: 현재 radix의 idx까지 누적 개수
        // count[idx]개만큼 있으므로, 인덱스는 count[idx] - 1
        output[count[idx] - 1] = arr[i];
        count[idx] -= 1;
        i--;
    }

    return output;
}

// naive solution
// 양의 정수만 정렬 가능
// function radixSort(arr) {
//   const max = getMax(arr);
//   let radix = 1;
//   while (parseInt(max / radix) > 0) {
//     arr = countingSort(arr, radix);
//     radix *= 10;
//   }
//   return arr;
// }

// 음의 정수를 포함한 기수 정렬
// 1. 주어진 배열을 음수 부분과 양수 부분으로 나눈다.
// 2. 음수는 절대값을 기준으로, 즉 양수로 변환하여 기수 정렬한다.
// 3. 양수를 정렬한다.
// 4. 정렬된 음수 부분을 다시 음수로 바꾸고 순서를 뒤짚는다.
// 5. 음수 부분과 양수 부분을 붙인다.
function radixSort2(arr) {
    let left = [];
    let right = [];
    arr.forEach((item) => {
        if (item >= 0) right.push(item);
        else left.push(item * -1);
    });

    let max = getMax(left);
    let radix = 1;
    while (parseInt(max / radix) > 0) {
        left = countingSort(left, radix);
        radix *= 10;
    }

    max = getMax(right);
    radix = 1;
    while (parseInt(max / radix) > 0) {
        right = countingSort(right, radix);
        radix *= 10;
    }

    return left
        .reverse()
        .map((item) => item * -1)
        .concat(right);
}

function radixSort(arr) {
    // todo: 여기에 코드를 작성합니다.

    let arrP = [];
    let arrM = [];

    for (let el of arr) {
        el < 0 ? arrM.push(el * -1) : arrP.push(el);
    }

    function sortP(arr) {
        const max = String(Math.max.apply(null, arr)).length;

        for (let i = 1; i <= max; i++) {
            let bucket = Array.from(Array(10), () => new Array());

            for (let a of arr) {
                const s = String(a);

                if (s.length < i) {
                    bucket[0].push(a);
                    continue;
                }

                bucket[Number(s[s.length - i])].push(a);
            }

            let newArr = [];

            for (let e of bucket) {
                if (e.length === 0) {
                    continue;
                }

                for (let i in e) {
                    newArr.push(e[i]);
                }
            }

            arr = newArr;
        }

        return arr;
    }

    return sortP(arrM).reverse().map(a => a * -1).concat(sortP(arrP));
}

const t = [];

for (let i = 0; i < 100000; i++) {
    t.push(parseInt(Math.random() * 100));
}

let now = Date.now();
radixSort(t);
console.log(Date.now() - now);

now = Date.now();
radixSort2(t);
console.log(Date.now() - now);