function solution(weights, head2head) {
    const len = weights.length;
    const info = new Object;

    for (let i = 0; i < len; i++) {
        const wei = weights[i];
        let match = len;
        let w = 0;
        let beat = 0;
        for (let j = 0; j < len; j++) {
            if (head2head[i][j] === 'L') continue;
            else if (head2head[i][j] === 'N') match--;
            else {
                w++;
                if (wei < weights[j]) beat++;
            }
        }
        const win = match === 0 ? 0 : w / match;
        info[i + 1] = [win, beat, wei];
    }

    return Object.keys(info).map(a => Number(a)).sort((a, b) =>
        info[b][0] - info[a][0] || info[b][1] - info[a][1] || info[b][2] - info[a][2] || a - b);
}