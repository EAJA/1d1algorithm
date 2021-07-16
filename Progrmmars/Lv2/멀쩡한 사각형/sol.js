function solution(w, h) {
    let answer = 0; // 호이스팅 제거
    if(h>w){
        answer = h;
        h = w;
        w = answer;
        answer = 0;        
    } //y=x 대칭
    let lastH = h;
    let nowH = 0;
    for(let i = 1 ; i <= w ; i++){
        nowH = parseFloat(h-h/w*i);
        answer += Math.ceil(lastH-nowH);
        lastH = Math.ceil(nowH);
    }
    return w * h - answer;
}