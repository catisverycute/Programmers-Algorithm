function solution(myString, pat) {
    const index = myString.lastIndexOf(pat);
    return index !== -1 ? myString.slice(0, index + pat.length) : 0;
}