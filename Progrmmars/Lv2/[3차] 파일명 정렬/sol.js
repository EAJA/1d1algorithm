function solution(files) {
    const getParts = (str) => {
        let idx = str.search(/[0-9]/g);
        let head = str.slice(0, idx);
        let body = str.slice(idx);
        idx = body.search(/[^0-9]/g) === -1 ? body.length : body.search(/[^0-9]/g);
        return [head.toLowerCase(), Number(body.slice(0, idx))];
    };

    return files.sort((a, b) => {
        let [a0, a1] = getParts(a),
            [b0, b1] = getParts(b);

        if (a0 !== b0) {
            let arr = [a0, b0].sort();
            return arr.indexOf(a0) - arr.indexOf(b0);
        } else {
            return a1 - b1;
        }
    });
}