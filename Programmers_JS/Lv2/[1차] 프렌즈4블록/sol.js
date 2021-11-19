function solution(m, n, board) {
    board = board.map(el => el.split(''));

    function find_square(arr) {
        let result = new Set();

        for (let r = 0; r < arr.length - 1; r++) {
            for (let c = 0; c < arr[0].length - 1; c++) {
                if (arr[r][c] === 0) continue;
                if (arr[r][c] === arr[r + 1][c + 1] && arr[r][c] === arr[r][c + 1] && arr[r][c] === arr[r + 1][c]) {
                    result.add(`${r+1},${c+1}`);
                    result.add(`${r+1},${c}`);
                    result.add(`${r},${c+1}`);
                    result.add(`${r},${c}`);
                }
            }
        }

        return Array.from(result);
    }

    function change_0(arr) {
        for (let r = arr.length - 1; r >= 2; r--) {
            for (let c = arr[0].length - 1; c >= 0; c--) {
                if (arr[r][c] === 0) {
                    let change_map = -1;
                    for (let i = r - 2; i >= 0; i--) {
                        if (arr[i][c]) {
                            change_map = i;
                            break;
                        }
                    }
                    if (change_map !== -1) {
                        [arr[r][c], arr[change_map][c]] = [arr[change_map][c], arr[r][c]];
                    }
                }
            }
        }
        return arr;
    }

    let answer = 0;

    while (true) {
        let remove = find_square(board);

        if (remove.length === 0) break;

        remove.forEach(el => {
            let read_map = el.split(',');
            board[read_map[0]][read_map[1]] = 0;
            answer++;
        });

        board = change_0(board);
    }

    return answer;
}