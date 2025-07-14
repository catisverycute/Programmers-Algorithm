function solution(arr, divisor) {
    let answer = arr.filter((i) => i % divisor === 0);
    return answer.length ? answer.sort((x , y) => x - y) : [-1]
}