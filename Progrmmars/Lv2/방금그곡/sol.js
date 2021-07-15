function solution(m, musicinfos) {

    function hashChange(str) {
        let n = new Array();
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '#') {
                if (n[n.length - 1] === 'C') {
                    n[n.length - 1] = 'c';
                } else if (n[n.length - 1] === 'D') {
                    n[n.length - 1] = 'd';
                } else if (n[n.length - 1] === 'F') {
                    n[n.length - 1] = 'f';
                } else if (n[n.length - 1] === 'G') {
                    n[n.length - 1] = 'g';
                } else if (n[n.length - 1] === 'A') {
                    n[n.length - 1] = 'a';
                }
            } else n.push(str[i]);
        }
        return n.join('');
    }

    m = hashChange(m);

    let title = new Array();
    let play = new Array();
    let runTime = new Array();
    let result = ['', 0];

    for (let i = 0; i < musicinfos.length; i++) {
        let time = musicinfos[i].split(',');
        title.push(time[2]); // 제목저장

        let time1 = time[0].split(':');
        time1 = Number(time1[0]) * 60 + Number(time1[1]);

        let time2 = time[1].split(':');
        time2 = Number(time2[0]) * 60 + Number(time2[1]);

        let playTime = time2 - time1;
        runTime.push(playTime);

        time[3] = hashChange(time[3]);

        play[i] = '';

        while (playTime > time[3].length) {
            play[i] += time[3];
            playTime -= time[3].length;
        }

        play[i] += time[3].slice(0, playTime);
    }

    for (let j in play) {
        if (play[j].includes(m)) {
            if (result[1] < runTime[j]) {
                result[0] = title[j];
                result[1] = runTime[j];
            }
        }
    }
    return result[0] === '' ? "(None)" : result[0];
}