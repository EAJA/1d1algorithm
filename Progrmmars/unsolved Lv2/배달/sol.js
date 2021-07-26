function solution(N, road, K) {
    let answer = new Set('1');

    let reRoad = new Object();

    road.map(a => {
        return [...[a[0], a[1]].sort((a, b) => a - b), a[2]];
    }).sort((a, b) => a[0] - b[0]).forEach(element => {
        if (reRoad[`${element[0]}-${element[1]}`] === undefined || reRoad[`${element[0]}-${element[1]}`] > element[2]) {
            reRoad[`${element[0]}-${element[1]}`] = element[2];
        }
    });

    let key = Object.keys(reRoad);

    const func = (sibal, time) => {
        let d = key.filter(a => a[0] === sibal);

        d.forEach(a => {
            if (time >= reRoad[a]) {
                answer.add(a[2]);
                func(a[2], time-reRoad[a]);
            }
        })
    }

    func('1',K);

    return answer.size;
}

solution(6, [
    [1, 2, 1],
    [1, 3, 2],
    [2, 3, 2],
    [3, 4, 3],
    [3, 5, 2],
    [3, 5, 3],
    [5, 6, 1]
], 4);