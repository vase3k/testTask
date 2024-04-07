//const w = +prompt('width', 6);
//const h = +prompt('height', 6);
const w = 6, h = 5;

function matrix(w, h) {
    let result = new Array(h).fill().map(() => new Array(w).fill(''));
    let counter = 1;
    let startCol = 0;
    let endCol = w - 1;
    let startRow = 0;
    let endRow = h - 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    return result;
}

console.table(matrix(w,h));
