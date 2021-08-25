function d(num) {
    let str = String(num);
    for (let i = 0; i < str.length; i++) {
        num += Number(str[i]);
    }
    return num;
}

let i = 0;
let result = Array.from(new Array(10001), () => i++);
let v = [];

result[0] = true;

while (result[0]) {
    result[0] = false;
    i = result.findIndex((e, i) => e === i && !v.includes(e));
    v.push(i);

    while (v[v.length - 1] !== -1 && i <= 10001) {
        i = d(i);
        result[i] = 0;
        result[0] = true;
    }
}

for (let i = 1; i <= 10001; i++) {
    if (result[i] > 0) console.log(result[i]);
}