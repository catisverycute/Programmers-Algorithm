function solution(arr) {
    let answer = [];
    if(arr.length === 1) {
        return [-1]
    }
    
    let minNum = Math.min(...arr)
    answer = arr.filter((num) => num != minNum)

    return answer;
}