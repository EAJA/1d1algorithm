function connectedVertices(edges) {
    let 지도 = new Object();

    for (let el of edges) {
        let 키 = Object.keys(지도).map(a => Number(a));

        if (키.length) {
            let 체크 = '';
            let now;
            for (let i of 키) {
                if (지도[i].includes(el[0])) {
                    체크 += i;
                    now = el[1];
                }
                if (지도[i].includes(el[1])) {
                    체크 += i;
                    now = el[0];
                }
            }
            if (체크.length === 2) {
                if (체크[0] === 체크[1]) continue; // 사이클 제거
                지도[체크[0]].push(체크[1], ...지도[체크[1]]);
                delete 지도[체크[1]];
                continue;
            } else if (체크.length === 1 && Number(체크[0]) !== now) {
                지도[체크[0]].push(now);
                continue;
            }
        }

        if (키.includes(el[0])) {
            지도[el[0]].push(el[1]);
            continue;
        }

        if (키.includes(el[1])) {
            지도[el[1]].push(el[0]);
            continue;
        }
        지도[el[0]] = [el[1]];
    }

    console.table(지도);
    return Object.keys(지도).length;
}

let a = [
    [0, 1],
    [1, 7],
    [4, 7],
    [3, 4],
    [7, 3],
    [5, 6],
    [2, 5],
    [6, 2],
    [0, 1]
]