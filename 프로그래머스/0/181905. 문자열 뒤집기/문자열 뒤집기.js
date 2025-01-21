function solution(my_string, s, e) {
    const str = my_string.split("").slice(s, e+1).reverse().join("")
    var answer= my_string.slice(0, s) + str + my_string.slice(e+1)

    return answer;
}