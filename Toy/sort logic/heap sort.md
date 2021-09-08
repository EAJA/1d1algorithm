## 힙 정렬 heap sort
  
  
<br/>
  
| 시간복잡도 | Best  | Avg   | Worst |
| ---------- | ----- | ----- | ----- |
| 힙정렬     | nlogn | nlogn | nlogn |
  
<br/>
  
```js
const heapSort = function (arr) {
    function swap(idx1, idx2, arr) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    function insert(heap, item) {
        let lastIdx = heap.length;
        heap.push(item);

        while (true) {
            const pareIdx = Math.floor((lastIdx - 1) / 2);
            if (heap[lastIdx] < heap[pareIdx]) {
                swap(lastIdx, pareIdx, heap);
                lastIdx = pareIdx;
            } else break;
        }

        return heap;
    }

    function removeRoot(heap) {
        if (heap.length === 1) return heap.pop();

        let i = 0;
        swap(i, heap.length - 1, heap);
        const result = heap.pop();
        let mem = -1;
        while (i !== mem) {
            const [a, b] = [(i * 2) + 1, (i * 2) + 2];
            mem = i;
            if (a < heap.length && heap[a] < heap[i]) i = a;
            if (b < heap.length && heap[b] < heap[i]) i = b;
            swap(mem, i, heap);
        }

        return result;
    }

    let minHeap = arr.reduce((heap, item) => {
        return insert(heap, item);
    }, []);

    let result = [];
    while (minHeap.length) {
        const min = removeRoot(minHeap);
        result.push(min);
    }
    return result;
};
```