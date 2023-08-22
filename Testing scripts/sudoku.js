// Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.
// The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.
// For Sudoku rules, see the Wikipedia article.

var puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

// Analyzes a partucular cell
function analyzer(board, sI, sJ) {
  let result = [];
  let object = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let squares = [
    [
      [0, 0],
      [2, 2],
    ],
    [
      [0, 3],
      [2, 5],
    ],
    [
      [0, 6],
      [2, 8],
    ],
    [
      [3, 0],
      [5, 2],
    ],
    [
      [3, 3],
      [5, 5],
    ],
    [
      [3, 6],
      [5, 8],
    ],
    [
      [6, 0],
      [8, 2],
    ],
    [
      [6, 3],
      [8, 5],
    ],
    [
      [6, 6],
      [8, 8],
    ],
  ];

  // Horizontal check
  for (let j = 0; j < 9; j++) {
    let key = board[sI][j];
    if (key !== 0) {
      object.delete(key);
    }
  }

  // Vertical check
  for (let i = 0; i < 9; i++) {
    let key = board[i][sJ];
    if (key !== 0) {
      object.delete(key);
    }
  }

  // Square check
  for (let item of squares) {
    if (sI >= item[0][0] && sI <= item[1][0] && sJ >= item[0][1] && sJ <= item[1][1]) {
      let startI = item[0][0];
      let endI = +item[1][0];
      let startJ = +item[0][1];
      let endJ = +item[1][1];

      for (let i = startI; i <= endI; i++) {
        for (let j = startJ; j <= endJ; j++) {
          let key = board[i][j];
          if (key !== 0) {
            object.delete(key);
          }
        }
      }
    }
  }

  return [...object.keys()];
}

function findEmpty(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        return [i, j];
      }
    }
  }
  return false;
}

/********************* Recursion solver *************************/
function solver(board) {
  let find = findEmpty(board);
  let row = find[0];
  let col = find[1];
  if (!find) {
    return true;
  }

  for (let i = 1; i < 10; i++) {
    if (analyzer(board, row, col).includes(i)) {
      board[row][col] = i;
      if (solver(board)) return true;
      board[row][col] = 0;
    }
  }

  return false;
}


function sudoku(puzzle) {
  solver(puzzle);
  console.table(puzzle);
}

sudoku(puzzle);

