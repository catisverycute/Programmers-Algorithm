function solution(polynomial) {
    let arr = polynomial.split(" + ")
    let xNum = 0; 
    let num = 0;
    let addNum = false;
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i].includes("x")) {
            arr[i].split("x").join("") === "" ? xNum += 1 : xNum += Number(arr[i].split("x").join(""))
        } 

        else {
            addNum = true;
            num += Number(arr[i])
        }
    }

    if(xNum === 0) return `${num}`;
    else if(xNum === 1) return addNum ? `x + ${num}` : "x";
    else return addNum ? `${xNum}x + ${num}` : `${xNum}x`   
}