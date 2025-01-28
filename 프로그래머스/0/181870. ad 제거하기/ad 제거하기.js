function solution(strArr) {
    var answer = [];
    answer = strArr.filter(index => !index.includes("ad"))

    return answer;
}