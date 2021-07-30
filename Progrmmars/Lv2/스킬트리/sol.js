function solution(skill, skill_trees) {
    let answer = 0;

    skill_trees.forEach(el => {
        let skill_tech_tree = skill.split('');
        for (let i = 0; i < el.length; i++) {
            if (skill_tech_tree.includes(el[i])) {
                if (skill_tech_tree.indexOf(el[i]) !== 0) {
                    answer--;
                    break;
                }
                skill_tech_tree.shift();
            }
        }
        answer++;
    });

    return answer;
}