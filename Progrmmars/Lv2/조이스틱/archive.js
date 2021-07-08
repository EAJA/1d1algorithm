function solution(name) {
    var answer = 0;
    name = name.split('');
    let len = name.length - 1;
    let middle = [
        []
    ];

    for (let i = 0, j = 0; i < name.length; i++) {
        // 조이스틱 위아래
        if (name[i].charCodeAt() >= 78) {
            answer += 91 - name[i].charCodeAt();
        } else answer += name[i].charCodeAt() - 65;
        
        if (middle[j] === undefined) middle[j] = new Array();
        middle[j].push(name[i]);
        console.table(middle);
        if (name[i] === 'A' && name[i + 1] !== 'A') {
            j++;
        } else if (name[i] !== 'A' && name[i + 1] === 'A') {
            j++;
        }
    }
    
    console.table(middle);
    
    // 중간 빠꾸수
    // 조이스틱 좌우
    // 처음에 A면 뒤로가는게 나음
    return answer;
    //조이스틱 방향 설정 -> 다음에 바꿀게 A인지?
}

solution('AABBAABBBBB');