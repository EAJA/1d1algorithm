function solution(maps) {
    var answer = 0;
    let a = 0,
        b = 0;
    while (answer < 100) {
        if (maps[a][b + 1] === 1) { // r
            b += 1;
        } else if (maps[a + 1][b] === 1) { // d
            a += 1;
        } else if (maps[a - 1][b] === 1) { // u
            a -= 1;
        } else if (maps[a][b - 1] === 1) { // l
            b -= 1;
        }
        console.log(a+' '+b)
        answer++;
        if(a === maps.length-1 && b === maps[0].length-1){
            break;
        }
    }
    return answer === 100 ? -1 : answer+1;
}

let test = [
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1]
];
console.log(solution(test));
/* 아래쪽 오른쪽 기준으로 이동
없으면 위쪽 왼쪽

기준은 아래쪽 오른쪽 이동
없을시 되돌아갈때는 -값을 줌

아래쪽 오른쪽 위쪽 왼쪽 순서로


*/