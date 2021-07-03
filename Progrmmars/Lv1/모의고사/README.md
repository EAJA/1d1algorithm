```js
function solution(answers) {
    var answer = [];
    const len = answers.length;
    let isCorrect = [],
        arr1 = [1,2,3,4,5], //5
        arr2 = [2,1,2,3,2,4,2,5], //8
        arr3 = [3,3,1,1,2,2,4,4,5,5]; //10
    let C1 = 0, C2 = 0, C3 = 0, maxC = 0;
    if(len<10){
        arr1 = arr1.slice(0,len);
        arr2 = arr2.slice(0,len);
        arr3 = arr3.slice(0,len);
    }
    for(let i = 0 ; i<len ; i+=5){
        isCorrect = answers.slice(i,i+5);
        arr1 = arr1.slice(0,isCorrect.length);
        for(let j = 0 ; j < isCorrect.length ; j++){
            if(arr1[j]===isCorrect[j]){C1+=1;}
        }
    }
    for(let i = 0 ; i<len ; i+=8){
        isCorrect = answers.slice(i,i+8);
        arr2 = arr2.slice(0,isCorrect.length);
        for(let j = 0 ; j < isCorrect.length ; j++){
            if(arr2[j]===isCorrect[j]){C2+=1;}
        }
    }
    for(let i = 0 ; i<len ; i+=10){
        isCorrect = answers.slice(i,i+10);
        arr3 = arr3.slice(0,isCorrect.length);
        for(let j = 0 ; j < isCorrect.length ; j++){
            if(arr3[j]===isCorrect[j]){C3+=1;}
        }
    }
    maxC = Math.max(C1,C2,C3);
    C1 === maxC ? answer.push(1) : '';
    C2 === maxC ? answer.push(2) : '';
    C3 === maxC ? answer.push(3) : '';
    return answer;
}
```