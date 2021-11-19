function solution(str1, str2) {

    const changeArr = str => {
        str = str.toLowerCase();
        let result = new Array();
        for (let i = 0; i < str.length - 1; i++) {
            let now = str[i] + str[i + 1];
            if (now.search(/[^a-z]/gi) === -1) {
                result.push(now);
            }
        }
        return result;
    }

    let arr1 = changeArr(str1),
        arr2 = changeArr(str2),
        union = [],
        inter = [];

    Array.from(new Set([...arr1, ...arr2])).forEach(el => {
        let few1 = arr1.filter(a => a === el).length;
        let few2 = arr2.filter(a => a === el).length;

        let max = Math.max(few1, few2),
            min = Math.min(few1, few2);

        for (let i = 0; i < max; i++) {
            union.push(el);
            if (i < min) inter.push(el);
        }
    });

    return union.length === 0 ? 65536 : Math.floor((inter.length / union.length) * 65536);
}