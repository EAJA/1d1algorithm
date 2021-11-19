```js
function solution(nums) {
    const len = nums.length/2;
    nums = Array.from(new Set(nums));
    if(nums.length >= len){
        return len;
    }else return nums.length;
 }
```