## 퀵 정렬 quick sort

- ‘찰스 앤터니 리처드 호어(Charles Antony Richard Hoare)’가 개발한 정렬 알고리즘  
- 퀵 정렬은 불안정 정렬 에 속하며, 다른 원소와의 비교만으로 정렬을 수행하는 비교 정렬 에 속한다
- 분할 정복 알고리즘의 하나로, 평균적으로 매우 빠른 수행 속도를 자랑하는 정렬 방법
  - 합병 정렬(merge sort)과 달리 퀵 정렬은 리스트를 비균등하게 분할한다
- 분할 정복(divide and conquer) 방법
  - 문제를 작은 2개의 문제로 분리하고 각각을 해결한 다음, 결과를 모아서 원래의 문제를 해결하는 전략이다
  - 분할 정복 방법은 대개 순환 호출을 이용하여 구현한다
  
<br/>
  
| 시간복잡도 | Best | Avg | Worst |
| ---------- | ---- | --- | ----- |
| 삽입정렬   | nlog₂n    | nlog₂n | n^2   |
  
<br/>
  
```
                        B E S T

        |           ╔══════════════╗
        |                   n
        |           ╚══════════════╝
        |               ⬋      ⬊
        |       ╔════════╗     ╔════════╗           크기 n/2인 부분 배열 1쌍 * n번 비교 => n번 비교
순환     |           n/2            n/2 
호출의    |       ╚════════╝     ╚════════╝
깊이     |        ⬋      ⬊       ⬋      ⬊
k=log₂n |     ╔════╗  ╔════╗ ╔════╗  ╔════╗         크기 n/4인 부분 배열 2쌍 * n/2번 비교 => n번 비교
        |      n/4     n/4    n/4     n/4
        |     ╚════╝  ╚════╝ ╚════╝  ╚════╝
        |                  ...
        | ╔═╗ ╔═╗ ╔═╗ ╔═╗ ╔═╗ ╔═╗ ╔═╗ ╔═╗ ╔═╗ ╔═╗   크기 1인 부분 배열 n/2쌍 * 2번 비교 => n번 비교
        |  1   1   1   1   1   1   1   1   1   1
        | ╚═╝ ╚═╝ ╚═╝ ╚═╝ ╚═╝ ╚═╝ ╚═╝ ╚═╝ ╚═╝ ╚═╝
        |           마지막 부분 배열의 개수 :n개
```
- Best  
  - 비교 횟수
    - 레코드의 개수 n이 2의 거듭제곱이라고 가정(n=2^k)했을 때, n=2^3의 경우,<br/>2^3 -> 2^2 -> 2^1 -> 2^0 순으로 줄어들어 순환 호출의 깊이가 3임을 알 수 있다<br/>이것을 일반화하면 n=2^k의 경우, k(k=log₂n)임을 알 수 있다
    - k=log₂n
  - 각 순환 호출 단계의 비교 연산
    - 각 순환 호출에서는 전체 리스트의 대부분의 레코드를 비교해야 하므로 평균 n번 정도의 비교가 이루어진다.
    - 평균 n번
  - 순환 호출의 깊이 * 각 순환 호출 단계의 비교 연산 = **nlog₂n**
  
```
                  W O R S T

        |    ╔════════════════════╗
        |    ╚════════════════════╝
        |       ⬋           ⬊
        |    ╔═╗   ╔══════════════╗
순환     |    ╚═╝   ╚══════════════╝
호출의    |           ⬋           ⬊
깊이     |         ╔═╗      ╔══════════╗
n       |         ╚═╝      ╚══════════╝
        |                     ⬋      ⬊
        |                  ╔═╗     ╔════╗    
        |                  ╚═╝     ╚════╝
        |                         ⬋      ⬊
        |                       ╔═╗      ╔═╗
        |                       ╚═╝      ╚═╝ 
```
  
- Worst
  - 리스트가 계속 불균형하게 나누어지는 경우
    - 특히, 이미 정렬된 리스트에 대하여 퀵 정렬을 실행하는 경우
  - 비교 횟수
    - 레코드의 개수 n이 2의 거듭제곱이라고 가정(n=2^k) 했을때, 순환호출의 깊이는 n이다
    - n
  - 각 순환 호출 단계의 비교 연산
    - 각 순환 호출에서는 전체 리스트의 대부분의 레코드를 비교해야 하므로 평균 n번 정도의 비교가 이루어짐
    - 평균 n번
  - 순환 호출의 깊이 * 각 순환 호출 단계의 비교 연산 = **n^2**
  
<br/>  
  
- Avg
  - 평균 T(n) = O(nlog₂n)
  - 시간 복잡도가 O(nlog₂n)를 가지는 다른 정렬 알고리즘과 비교했을 때도 가장 빠르다.
  - 퀵 정렬이 불필요한 데이터의 이동을 줄이고 먼 거리의 데이터를 교환할 뿐만 아니라, 한 번 결정된 피벗들이 추후 연산에서 제외되는 특성 때문이다.
  
<br/>
  
### 코드
  
기본 모양  
```js
const quickSort = function (arr, func = a => a) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length <= 1) {
        return arr;
    }

    let pi = Math.floor(arr.length / 2);

    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i !== pi) {
            func(arr[i]) > func(arr[pi]) ? right.push(arr[i]) : left.push(arr[i]);
        }
    }

    return [...quickSort(left, func), arr[pi], ...quickSort(right, func)];
};
```
재귀 호출을 할때마다 새로운 배열을 생성하고 병합하기에
메모리 소모량이 크고 병합에 연산이 추가로 들어감
  
<br/>  
<br/>  
<br/>  
  
### 퀵소트 개선판
  
![img](../0%20reference%20img/quicksort.png)

```js
function quickSort(arr, func = a => a, left = 0, right = arr.length - 1) {

    if (left >= right) {
        return;
    }

    function getPartition(arr, left, right) {
        const pivot = arr[Math.floor((left + right) / 2)];

        while (left <= right) {
            while (func(arr[left]) < func(pivot)) {
                left++;
            }
            while (func(arr[right]) > func(pivot)) {
                right--;
            }
            if (left <= right) {
                [arr[left], arr[right]] = [arr[right], arr[left]]
                left++;
                right--;
            }
        }
        return left;
    }

    const partition = getPartition(arr, left, right);
    quickSort(arr, func, left, partition - 1);
    quickSort(arr, func, partition, right);

    return arr;
}
```