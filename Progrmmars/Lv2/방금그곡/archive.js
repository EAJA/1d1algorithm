function solution(m, musicinfos) {

    let title = new Array();
    let play = new Array();
    let runTime = new Array();
    let result = ['',0];

    for (let i = 0; i < musicinfos.length; i++) {
        let time = musicinfos[i].split(',');
        title.push(time[2]); // 제목저장

        let time1 = time[0].split(':');
        time1 = Number(time1[0]) * 60 + Number(time1[1]);

        let time2 = time[1].split(':');
        time2 = Number(time2[0]) * 60 + Number(time2[1]);

        let playTime = time2 - time1;
        runTime.push(playTime);

        play[i] = '';

        while (playTime > time[3].length) {
            play[i] += time[3];
            playTime -= time[3].length;
        }

        play[i] += time[3].slice(0, playTime);
    }

    for (let j in play) {
        if (play[j].includes(m)) {
            let lastPang = play[j].slice(play[j].indexOf(m),play[j].indexOf(m)+m.length+1);
            if (m[m.length - 1] === '#') {
                if(result[1] < runTime[j]){
                    result[0] = title[j];
                    result[1] = runTime[j];
                }
            } else if (m[m.length - 1] !== '#' &&  lastPang[lastPang.length-1]!== '#'){
                if(result[1] < runTime[j]){
                    result[0] = title[j];
                    result[1] = runTime[j];
                }
            }
        }
    }
    return result[0] === '' ? "(None)" : result[0];
}