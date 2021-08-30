function solution(maps) {
    const maxY = maps.length;
    const maxX = maps[0].length;

    const visited = Array.from(Array(maxY), () => new Array(maxX).fill(false));
    const distance = Array.from(Array(maxY), () => new Array(maxX).fill(null));
    const next = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    const q = [[0, 0]];
    distance[0][0] = 1;

    while (q.length > 0) {
        let [y, x] = q.shift();
        visited[y][x] = true;

        for (let i = 0; i < 4; i++) {
            let [ny, nx] = [y + next[i][0], x + next[i][1]];

            if (ny < 0 || ny >= maxY || nx < 0 || nx >= maxX) continue;
            if (maps[ny][nx] === 0) continue;
            if (visited[ny][nx] === true) continue;

            q.push([ny, nx]);
            visited[ny][nx] = true;
            distance[ny][nx] = distance[y][x] + 1;
        }

        if (visited[maxY - 1][maxX - 1]) break;
    }

    return visited[maxY - 1][maxX - 1] ? distance[maxY - 1][maxX - 1] : -1;
};