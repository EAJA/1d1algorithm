function solution(msg) {
    let dic = ['dic index +1'];

    let deck = msg.split('');

    for (let i = 0; i < 26; i++) {
        dic.push(String.fromCharCode(65 + i));
    }

    let answer = [];
    let cur = '';

    while (deck.length) {
        cur += deck.shift();
        if(deck.length === 0 && dic.includes(cur)){
            answer.push(dic.indexOf(cur));
            break;
        }
        if (dic.includes(cur)) {
            continue;
        } else {
            dic.push(cur);
            answer.push(dic.indexOf(cur.slice(0, -1)));
            deck.unshift(cur.slice(-1));
            cur = '';
        }
    }
    return answer;
}