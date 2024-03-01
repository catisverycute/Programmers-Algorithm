function solution(names) {
    var answer = [];

    for (let i = 0; i < names.length; i += 5) {
        const group = names.slice(i, i + 5);
        answer.push(group[0]);
    }

    return answer;
}