function solution(my_string, overwrite_string, s) {
    const arr = [...my_string] //문자열 배열로 바꾸기
    arr.splice(s, overwrite_string.length, overwrite_string)
    var answer = arr.join("");
    return answer;
}