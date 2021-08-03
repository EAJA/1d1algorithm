## 이진검색

>-로직-  
중간수 뽑아서 타겟과 크면 오른쪽, 작으면 왼쪽만 따와서 타겟과 일치할때까지 재검색  
<br/>
반드시 정렬된 배열에서 실행해야됨  
예시는 오름차순이고 내림차순일때는 반대로 실행  

```js
const binarySearch = function (arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else low = mid + 1;
    }
    return -1;
};
```