```js
function solution(nums) {
  const isPrime = (n) => {
    if (n % 2 === 0) {
      return false;
    }
    for (let i = 2; i <= n ** 0.5; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if(isPrime(nums[i] + nums[j] + nums[k])) result++;
      }
    }
  }

  return result;
}
```