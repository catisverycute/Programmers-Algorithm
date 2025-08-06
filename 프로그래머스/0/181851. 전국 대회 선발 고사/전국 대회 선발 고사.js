function solution(rank, attendance) {
    let filterRank = rank.filter((e, idx) => attendance[idx] == true);
    let sortRank = filterRank.sort((a, b)=> a-b);

    return  rank.indexOf(sortRank[0]) * 10000 + rank.indexOf(sortRank[1]) * 100 + rank.indexOf(sortRank[2]);
}