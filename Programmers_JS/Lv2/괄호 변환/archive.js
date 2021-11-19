function solution(p) {

    let l = 0,
        j = 0,
        k = 0,
        r = 0;
    let answer = new Array();

    for (let i = 0; i < p.length; i++) {
        if (p[i] === '(') {
            l++;
        } else r++;

        if (l >= r && j > 0) {
            j = Math.ceil(j / 2);
            k = Math.ceil(k / 2);

            while (j > 0) {
                answer.push('(')
                j -= 1;
            }
            while (k > 0) {
                answer.push(')')
                k -= 1;
            }
        } else if (l >= r) {
            answer.push(p[i])
        } else if (r > l) {
            j++;
            k++;
        }
    }
    return answer.join('');
}