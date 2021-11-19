function solution(N, road, K) {
    let map = new Array();
    for (let i = 0; i < N; i++) {
        map.push([]);
        for (let j = 0; j < N; j++) {
            map[i].push('-');
        }
    }
    road.forEach(a => {
        if (map[a[0] - 1][a[1] - 1] === '-') {
            map[a[0] - 1][a[1] - 1] = a[2];
            map[a[1] - 1][a[0] - 1] = a[2];
        } else if (map[a[0] - 1][a[1] - 1] > a[2]) {
            map[a[0] - 1][a[1] - 1] = a[2];
            map[a[1] - 1][a[0] - 1] = a[2];
        }
    })

    let answer = new Set('0');

    let Ekfqo = (arr, time) => {
        arr.forEach((a, idx) => {
            let remainTime = time;
            if (time >= a && a !== '-') {
                remainTime -= a;
                answer.add(String(idx));
                Ekfqo(map[idx], remainTime);
            }
        })
    }

    Ekfqo(map[0], K);
    return Array.from(answer).length;
}

// 무지성 재귀가 만들어낸 시간초과