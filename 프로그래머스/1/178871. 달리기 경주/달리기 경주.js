function solution(players, callings) {
    let result = {};
    for(let i=0;  i<players.length; i++){
        result[players[i]] = i;
    }
    
    for(let j=0; j<callings.length; j++){
        let player = result[callings[j]];
        let fastP = players[player-1];
        players[player-1] = callings[j];
        players[player] = fastP;
        result[callings[j]] = player - 1;
        result[fastP] = player;
    }
    return players
}


