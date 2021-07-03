function solution(record) {
    let result = new Array();
    let lastName = new Object();

    record = record.map(a => a.split(' '));

    for(let i = 0 ; i < record.length ; i++){
        if(record[i][0] === 'Enter'){
            record[i][0] = '들어왔습니다.';
        }else if(record[i][0] === 'Leave'){
            record[i][0] = '나갔습니다.';
        }else record[i][0] = '';
        
        if(record[i][2]!==undefined){
        lastName[record[i][1]] = record[i][2];
        }
    }

    for(let el of record){
        if(el[0]!==''){
            result.push(`${lastName[el[1]]}님이 ${el[0]}`);
        }
    }
    return result;
}