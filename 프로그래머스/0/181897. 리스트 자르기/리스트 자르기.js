function solution(n, slicer, num_list) {
    const [a, b, c] = [...slicer];
    const arr = [];
    
    switch(n){
        case 1:
          return num_list.slice(0, b + 1)
          break;
        case 2:
          return num_list.slice(a)
          break;
        case 3:
           return num_list.slice(a, b+1)
            break;
        case 4:
           for(let i = a; i <= b; i += c){
               arr.push(num_list[i])
           }
            break;
    }
    return arr
}