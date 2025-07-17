function solution(num_str) {
    let answer = 0;
    let num_arr = num_str.split("")
    for(let i = 0; i < num_arr.length; i++){
        answer += Number(num_arr[i])
    }
    
    return answer;
}