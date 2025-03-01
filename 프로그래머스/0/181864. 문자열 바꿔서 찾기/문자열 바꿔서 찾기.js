function solution(myString, pat) {
    let arr = myString.split("").map((idx) => idx === "A" ? "B" : "A").join("")

    return arr.includes(pat) ? 1 : 0
}