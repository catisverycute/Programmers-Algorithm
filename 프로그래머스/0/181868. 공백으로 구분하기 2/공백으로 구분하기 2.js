function solution(my_string) {
    let str = my_string.split(" ")
    
    return str.filter((word) => word !== "");
}