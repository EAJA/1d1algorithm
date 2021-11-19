```js
function solution(numbers) {
    var answer = [];
    for(let el1 in numbers){
        for(let el2 in numbers){
            if(el1!==el2){answer.push(numbers[el1]+numbers[el2]);}
        }
    }
    return Array.from(new Set(answer)).sort((a,b) => a-b);
}
```