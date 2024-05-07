function solution(n, m, section) {
    var answer = 0;
    var startP = 0;
    for(let i=0; i<n; i++){
        if(section[i] > startP){
            answer ++
            startP = section[i] + m - 1;
        }
    }
    return answer
}