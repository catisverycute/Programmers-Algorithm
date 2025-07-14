function solution(s){
    let str = s.toLowerCase();
    let yCount = str.split("y").length - 1;
    let pCount = str.split("p").length - 1;

    return yCount === pCount
}