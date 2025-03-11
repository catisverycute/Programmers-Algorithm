function solution(a, d, included) {
    let num = 0;
    for(let i = 0; i < included.length; i++){
       if(included[i]){
           num += (a + i * d)
       }
    }

    return num;
}