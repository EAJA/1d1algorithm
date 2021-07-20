function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let on_bridge = [];

    while (truck_weights.length !== 0 || on_bridge.length !== 0) {
        let bridge_weight = on_bridge.reduce((a, b) => a + b[0], 0);
        if (weight >= bridge_weight + truck_weights[0]) {
            on_bridge.push([truck_weights.shift(), 0]);
        }
        if (on_bridge.length !== 0) on_bridge.map(a => a[1]++);
        if (on_bridge[0][1] === bridge_length) on_bridge.shift();
        answer++;
    }
    return answer + 1;
}