function solution(myString) {
    let arr = myString.split("x")
    

    var answer = arr.filter(index => index !== "").sort();
    return answer;
}