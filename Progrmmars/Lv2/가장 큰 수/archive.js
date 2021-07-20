function solution(numbers) {
    let answer = new Array();
    
    numbers = numbers.map(a => String(a));

    numbers.sort((a,b) => Number(b[0]) - Number(a[0])); // 1의자리 높은거 맞춰놓기

    numbers.sort((a,b) => {
        if(b.length > a.length){
            return Number(b[a.length]) - Number(a[a.length-1])
        }else if(a.length > b.length){
            return Number(b[b.length-1]) - Number(a[b.length])
        }
    })

    return numbers.join('');
}

//잘못된 방향