//! 프로그래머스 소수만들기
// - - - - - - - - - - - - - - - - - - - - - - - - - -
const getCombinations = (arr, selectNumber) => {
    let results = [];
    if (selectNumber === 1) return arr.map((value) => [value]);
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((combination) => [fixed, ...combination]);
      results.push(...attached);
    });
    return results;
  }
  const sumArr3 = (arr) => {
    let sumArr = [];
    for(let i = 0 ; i < arr.length ; i++){
        sumArr.push(arr[i][0]+arr[i][1]+arr[i][2]);
    }
    return sumArr;
  }
  const isPrime = (n) => {
    if(n%2===0){return false;}
    for(let i = 2; i <= n**0.5; i++){
        if(n%i === 0 ){
            return false;
        }
    }
    return true;
  }
  function solution(nums) {
    let result = [];
    let newArr = sumArr3(getCombinations(nums,3));
    for(let a = 0 ; a < newArr.length ; a++){
        if(isPrime(newArr[a])){
            result++;
        }
    }
    return result;
  }
  
  let arr = [1,2,7,6,4];
  console.log(solution(arr));
  // - - - - - - - - - - - - - - - - - - - - - - - - - -
  //! 효율성 탈락