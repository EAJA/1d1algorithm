function solution(people, limit) {
    people = people.sort((a, b) => a - b);

    let answer = 0;
    let index = people.length - 1;
    for (let i = 0; i <= index; i++, answer++)
        while (index > i && people[i] + people[index--] > limit)
            answer++;

    return answer;
}