function solution(hp) {
    const army = [5, 3, 1];
    let count = 0; 
    for (let i = 0; i < army.length; i++) {
        count += Math.floor(hp / army[i]);
        hp %= army[i];
    }
    return count;
}