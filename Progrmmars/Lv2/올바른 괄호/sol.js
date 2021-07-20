function solution(s) {
    let l = 0,
        r = 0;
    if (s.length % 2 === 1) return false;
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        s[i] === '(' ? l++ : r++;
        if (l < r) return false;
    }
    return l === r ? true : false;
}