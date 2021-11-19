function solution(participant, completion) {
    while(completion.includes(participant[0])){
        completion.splice(completion.indexOf(participant[0]), 1);
        participant.shift();
    }
    return participant[0];
}
//! 효율성 탈락