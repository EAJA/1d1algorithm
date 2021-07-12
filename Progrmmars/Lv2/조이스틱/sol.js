function solution(name) {
    var answer = 0;
    name = name.split('');
    let len = name.length - 1;
    let division = [
        []
    ];

    for (let i = 0, j = 0; i < name.length; i++) {
        if (name[i].charCodeAt() >= 78) {
            answer += 91 - name[i].charCodeAt();
        } else answer += name[i].charCodeAt() - 65;

        if (division[j] === undefined) division[j] = new Array();
        division[j].push(name[i]);
        if (name[i] === 'A' && name[i + 1] !== 'A') {
            j++;
        } else if (name[i] !== 'A' && name[i + 1] === 'A') {
            j++;
        }
    }
    division = division.map(a => a.join(''));

    let straight = len - (division[division.length - 1].includes('A') ? division[division.length - 1].length : 0);

    let arrA = division.map(a => a.includes('A') ? a.length : 0);
    let maxA = Math.max.apply(null, arrA);
    let maxAIndex = arrA.indexOf(maxA);
    let middle = (division.slice(0, maxAIndex).join('').length - 1) * 2 + division.slice(maxAIndex + 1).join('').length;
    if (middle < 0) middle = 500;

    let reverse = len + 1 - (division[0].includes('A') ? division[0].length : 0);

    return answer + Math.min(straight, middle, reverse);
}

console.log(solution('JEROEN'));