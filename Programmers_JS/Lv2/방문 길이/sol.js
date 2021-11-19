function solution(dirs) {
    let now = [0, 0];
    let mov = false;
    let log = new Array();

    for (let el of dirs.split('')) {
        let tmp = now.join('');
        mov = false;

        if (el === 'L' && now[0] > -5) {
            now[0]--;
            mov = true;
        } else if (el === 'R' && now[0] < 5) {
            now[0]++;
            mov = true;
        } else if (el === 'U' && now[1] < 5) {
            now[1]++;
            mov = true;
        } else if (el === 'D' && now[1] > -5) {
            now[1]--;
            mov = true;
        }

        for(let a of log){
            let b = a.split(' ').reverse().join(' ');
            let cur = `${tmp} ${now.join('')}`;
            if(a === cur || b === cur){
                mov = false;
                break;
            }
        }

        if(mov){
            log.push(`${tmp} ${now.join('')}`);
        }
    }

    return log.length;
}