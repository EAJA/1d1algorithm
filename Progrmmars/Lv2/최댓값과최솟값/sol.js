function solution(s) {
    s = s.split(' ').map(a => Number(a))
    return [Math.min.apply(null, s),Math.max.apply(null, s)].join(' ');
}