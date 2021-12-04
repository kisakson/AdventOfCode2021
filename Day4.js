 const input = '', // Copy/paste in from https://adventofcode.com/2021/day/4/input
   inputSections = input.split('\n\n'),
   bingoNumbers = inputSections[0].split(',').map(num => Number.parseInt(num));
 
// Create an array from the board string input
function getBoardArray(input) {
  const board = new Array(5),
    boardRows = input.split('\n');
  for (let i = 0; i < 5; i++) {
    board[i] = boardRows[i].split(/ +/).map(num => {
     return { num: Number.parseInt(num), selected: false };
    });
  }
  
  return board;
}

// Get all boards in an array
function getAllBoardArrays(inputSections) {
  const boards = [];
  
  for (let i = 1; i < inputSections.length; i++) {
    boards.push(getBoardArray(inputSections[i]));
  }
  
  return boards;
}

// Mark a number on a board if it exists
function markBoard(board, number) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (board[i][j].num === number) {
        board[i][j].selected = true;
        return;
      }
    }
  }
}

// Check if a board has gotten bingo
function checkBoard(board) {
  // Check rows
  for (let i = 0; i < 5; i++) {
    if (board[i].every(pair => pair.selected)) {
      return true;
    }
  }
  
  // Check columns
  for (let i = 0; i < 5; i++) {
    if (board.map(row => row[i]).every(pair => pair.selected)) {
      return true;
    }
  }
  
  // No bingo yet
  return false;
}

// Process a number on all boards.
function processNumber(boards, number) {
  boards.forEach(board => markBoard(board, number));
  
  for (let i = 0; i < boards.length; i++) {
    const bingo = checkBoard(boards[i]);
    if (bingo) {
      console.log('WINNER!!!')
      window.console.log(boards[i]);
      window.console.log(number);
      console.log(`winning sum is ${processWinner(boards[i], number)}`);
      console.log('END OF WINNER')
      
      return true;
    }
  }
  
  return false;
}

// Get the winning sum for a winning board
function processWinner(board, winningNumber) {
  let unmarkedSum = 0;
  
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (!board[i][j].selected) {
        unmarkedSum += board[i][j].num;
      }
    }
  }
  
  return unmarkedSum * winningNumber;
}

// Part 1
let boards = getAllBoardArrays(inputSections);
for (let i = 0; i < bingoNumbers.length; i++) {
  if (processNumber(boards, bingoNumbers[i])) {
    break; // Found a winner
  }
}


// Part 2
// TODO
let boards = getAllBoardArrays(inputSections);
for (let i = 0; i < bingoNumbers.length; i++) {
  // I'll want to remove winning boards from the boards array and continue processing as I go
  // As soon as there is one board left in the array, continue the game until it wins and process its winning number.
}
