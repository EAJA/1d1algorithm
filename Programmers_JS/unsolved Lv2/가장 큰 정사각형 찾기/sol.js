function solution(board) {
    const my = board.length;
    const mx = board[0].length;
    let limit = 0;
    let max = 0;

    function isS(cy, cx, ay, ax) {
        for (let a = cy; a <= ay; a++) {
            for (let b = cx; b <= ax; b++) {
                if (a === b) continue;
                if (board[a][b] === 0) {
                    return 0;
                }
            }
        }

        return ay - cy + 1;
    }

    for (let y = 0; y < my - limit; y++) {
        for (let x = 0; x < mx - limit; x++) {
            if (board[y][x] === 1) {
                let [ny, nx] = [y, x];

                while (ny < my && nx < mx && board[ny][nx] === 1) {
                    ny++;
                    nx++;
                }

                while (ny > y) {
                    ny--;
                    nx--;

                    let c = isS(y, x, ny, nx);

                    if (c > limit) {
                        limit = c;
                        max = c ** 2;
                        break;
                    }
                }
            }
        }
    }

    return max;
}

//시간초과