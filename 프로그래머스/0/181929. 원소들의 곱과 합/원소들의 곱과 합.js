function solution(num_list) {
    let mulNum = num_list.reduce((acc, curr) => acc * curr, 1);
    let powNum =  num_list.reduce((acc, curr) => acc + curr, 0);

    return mulNum < powNum * powNum ? 1 : 0
}