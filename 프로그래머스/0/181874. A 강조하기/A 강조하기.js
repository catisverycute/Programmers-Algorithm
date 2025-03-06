function solution(myString) {
    myString = myString.toLowerCase()
    for(let i=0; i<myString.length; i++){
        if(myString[i] === "a"){
          myString = myString.replaceAll(myString[i], "A")
        }
    }
     
    return myString
}