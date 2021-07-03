function solution(w, h) {
    var answer = 0;
    let lastH = h;
    let nowH = 0;
    for(let i = 1 ; i <= w ; i++){
        nowH = parseFloat(h-h/w*i);
        answer += Math.ceil(lastH-nowH);
        lastH = Math.ceil(nowH);
    }
    return w * h - answer;
}

//6번 빼고 다 통과