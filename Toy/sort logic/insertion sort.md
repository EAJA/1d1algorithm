## 삽입정렬 insertion sort

- Insertion Sort 는 말 그대로 '삽입' 꽂아 넣는 정렬
- 자신보다 앞의 원소가 큰지 작은지 비교를 하여서 자신의 위치를 찾아서 '삽입' 하는 정렬
- 앞의 원소를 비교해야 하기 때문에 arr[1]~arr[n] 까지 진행 (두번째 원소인 arr[1] 부터 시작)
- 삽입을 하면 데이터가 하나씩 밀려야 하기 때문에 배열이 길어질수록 효율이 떨어진다
  
<br/>
  
| 시간복잡도 | Best | Avg | Worst |
| ---------- | ---- | --- | ----- |
| 삽입정렬   | n    | n^2 | n^2   |
  
<br/>
  
- Best
  - 비교 횟수
    - 이동 없이 1번의 비교만 이루어진다.
    - 외부 루프: (n-1)번
  - Best T(n) = O(n)
- Worst(입력 자료가 역순일 경우)
  - 비교 횟수
    - 외부 루프 안의 각 반복마다 i번의 비교 수행
    - 외부 루프: (n-1) + (n-2) + … + 2 + 1 = n(n-1)/2 = O(n^2)
  - 교환 횟수
    - 외부 루프의 각 단계마다 (i+2)번의 이동 발생
    - n(n-1)/2 + 2(n-1) = (n^2+3n-4)/2 = O(n^2)
  - Worst T(n) = O(n^2)
  
<br/>
  
### 코드
  
```js
const insertionSort = function (arr, func = item => item) {
    let key, mov = true;

    for (let i = 1; i < arr.length; i++) {
        key = arr[i];

        for (let j = i - 1; j >= 0; j--) {
            if (func(arr[j]) > func(key)) {
                arr[j + 1] = arr[j];
            } else {
                arr[j + 1] = key;
                mov = false;
                break;
            }
        }

        if (mov) arr[0] = key;
        mov = true;
    }

    return arr;
};
```