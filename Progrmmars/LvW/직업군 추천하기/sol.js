function solution(table, languages, preference) {
    let max = 0;
    let maxStr = [];

    table.forEach(el => {
        let tab = el.split(' ');
        const name = tab.shift();
        tab = tab.reverse();

        let cur = 0;
        for (let i = 0; i < languages.length; i++) {
            const curRank = tab.indexOf(languages[i]);
            if (curRank > -1) cur += (tab.indexOf(languages[i]) + 1) * preference[i];
        }

        if (cur > max) {
            max = cur;
            maxStr = [name];
        } else if (cur === max) {
            maxStr.push(name);
        } else return;
    });

    return maxStr.sort()[0];
}