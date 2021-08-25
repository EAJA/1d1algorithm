const input = require('fs').readFileSync('/dev/stdin').toString()
    .trim().split('\n');

const count = Number(input.shift());

function warp(start, end) {
    if(end - start === 1) return console.log(1);
    let jump = 1;
    let result = 0;

    while (start < end) {
        start += jump;
        end -= jump;
        jump++;
        result += 2;
        if (end - start < jump * 2) {
            if(end === start){
                break;
            }
            else if (end - start <= jump) {
                result++;
                break;
            } else {
                result += 2;
                break;
            }
        }
    }

    return console.log(result);
}

for (let i = 0; i < count; i++) {
    let [s, e] = input[i].split(' ').map(a => Number(a));
    warp(s, e);
}