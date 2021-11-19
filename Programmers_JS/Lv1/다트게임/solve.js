function solution(dartResult) {
    let answer = new Array();
    let mem = 0;
    let dartHitted = dartResult.split(/[^0-9]/).filter(a => a!=='' && Number(a) >= 0);
    let dartBonus = dartResult.split(/[0-9]/).filter(a => a!=='');
    for(let i = 0 ; i < dartBonus.length ; i++){
        if(dartBonus[i][0] === 'S'){
            mem = Number(dartHitted[i]);
        }else if(dartBonus[i][0] === 'D'){
            mem = Number(dartHitted[i])**2;
        }else{
            mem = Number(dartHitted[i])**3;
        }

        if(dartBonus[i][1] !== undefined){
            if(dartBonus[i][1] === '*'){
                if(answer[i-1] !== undefined) answer[i-1] *= 2;
                mem *= 2;
            }else if(dartBonus[i][1] === '#'){
                mem *= -1;
            }
        }
        answer.push(mem);
        mem = 0;
    }
    return answer.reduce((a,b) => a+b);
}

//s d**2 t**3
// * = 해당+이전 점수 *2 / 이전점수 없으면 해당거만 *2
// * * = 해당*2 이전 *4 이이전*2
// # = 해당점수 = 마이너스
// #* 이전점수 *2