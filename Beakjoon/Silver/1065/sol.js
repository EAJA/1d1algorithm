const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

if (input < 100) {
    console.log(input);
} else {
    let han = [];

    for (let i = 100; i <= input; i++) {
        let s = String(i).split('').map(a => Number(a));

        if (s[0] - s[1] === s[1] - s[2]) han.push(i);
    }

    han = han.filter(a => a <= input);
    console.log(99 + han.length);
}