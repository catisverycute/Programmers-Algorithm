function solution(num_list) {
    let even = 0;
    let odd = 0;
    for(let i=0; i<num_list.length; i++){
        if(i % 2 == 0 || i == 0){
            odd += num_list[i]
        } else {
            even += num_list[i]
        }
    }
    
    if(even > odd) return even
    else if(even < odd) return odd
    else return even

}