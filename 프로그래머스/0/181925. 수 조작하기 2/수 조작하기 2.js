function solution(numLog) {
 let result =""
    for(let i = 0; i < numLog.length - 1; i++){
        const subtraction = numLog[ i + 1 ] - numLog[i];
        if(subtraction ===1 ){
            result += "w"
        } else if (subtraction === -1){
            result += "s"
        } else if (subtraction === 10){
            result += "d"
        } else if(subtraction === -10) {
            result += "a"
        }
    } return result
}