function solution(s){
    let len = 0;
    let j = 0;
    let overlapD, numArr, splitS;

    while(len !== s.length){
        len = s.length;
        splitS = s.split('');
        s = '';
        overlapD = splitS.filter((el,i) => el!==splitS[i+1]);
        numArr = overlapD.map(a => 1);

        for(let i = 0 ; i < splitS.length ; i++){
            if(splitS[i] === splitS[i+1]){
                numArr[j] += 1;
            } else j++;
        }
        j = 0;

        numArr = numArr.map(a => a%2);

        for(let i = 0 ; i < overlapD.length ; i++){
            if(numArr[i] === 1) s += overlapD[i];
        }
    }

    return s.length === 0 ? 1 : 0 ;
}

//시간초과
//for문 너무많음 한번에 다 처리해야 할거같음

function solution(s){
    if(s.length % 2 === 1){
        return 0;
    }

    let arr = new Array();
    let len = 0;
    let i = 0;

    while(len !== s.length){
        len = s.length;
        while(s.length > 0){
            if(s[i] !== s[i+1]){
                if(i%2 === 0){
                    arr.push(s[0]);
                }
                s = s.slice(i+1);
                i = 0;
                continue;
            }
            i++;
        }
        s = arr.join('');
        arr = [];
    }
    return s.length === 0 ? 1 : 0 ;
}

//시간초과
//2번째 와일문이 너무 오래걸리는거 같음
//반복문 하나만 써야할거같음

function solution(s){
    if(s.length % 2 === 1)return 0;
    let len = 0;
    while(len !== s.length){
        len = s.length;
        s = s.replace(/a{2}|b{2}|c{2}|d{2}|e{2}|f{2}|g{2}|h{2}|i{2}|j{2}|k{2}|l{2}|m{2}|n{2}|o{2}|p{2}|q{2}|r{2}|s{2}|t{2}|u{2}|v{2}|w{2}|x{2}|y{2}|z{2}/g,'');
    }
    return s.length === 0 ? 1 : 0;
}
//시간초과 ㅋㅋㅋ
//한번에 많은거 검색말고 하나씩 검색??