function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5;

    let cache = new Array(cacheSize);
    let answer = 0;

    cities.forEach(el => {
        let now = el.toUpperCase();

        if (cache.includes(now)) {
            answer += 1;
            let current = cache.indexOf(now);
            if (current !== cache.length) {
                cache.splice(current, 1);
                cache.push(now);
            }
        } else {
            answer += 5;
            cache.push(now);
            if (cache.length > cacheSize) cache.shift();
        }
    });

    return answer;
}