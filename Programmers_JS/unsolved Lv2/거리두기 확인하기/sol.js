let arr = [
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]
];

let brr = [1, 0, 1, 1, 1];

function solution(places) {
    var answer = [];
    for (let i = 0; i < places.length; i++) {
        let check = '';
        places[i] = places[i].map(a => a.split(''));

        for (let j = 0; j < places[i].length; j++) {
            for (let k = 0; k < places[i][j].length; k++) {
                check += places[i][j][k];
                if (check.length !== 1 && check[check.length - 1] === "P") {
                    console.log(check);
                    if (check.slice(1, -1).includes("X") === false && check.slice(1, -1).length < 2) {
                        answer.push(0);
                        break;
                    }
                    check = check.slice(-1);
                }
            }
            check = '';
        }
        if (answer[i] === undefined) answer.push(1);
    }
    return answer;
}

console.table(solution(arr))