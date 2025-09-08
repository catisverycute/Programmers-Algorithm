function solution(n) {
 const arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
    const data_row = [0, 1, 0, -1];
    const data_col = [1, 0, -1, 0];
    
    let idx = 1;
    let row = 0;
    let col = 0;
    let k = 0;
    
    arr[row][col] = idx++;
    
    while (idx <= n * n) {
        if (0 <= row + data_row[k] && row + data_row[k] < n &&
            0 <= col + data_col[k] && col + data_col[k] < n &&
            arr[row + data_row[k]][col + data_col[k]] === 0) {
            row += data_row[k];
            col += data_col[k];
            arr[row][col] = idx++;
        } else {
            k = (k + 1) % 4;
        }
    }
    
    return arr;
}