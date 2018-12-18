let game = {
  currentplayer: 'X',
  player1: '',
  player2: '',
}

let score = {
  X: [],
  O: [],
};

let winningCombos = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]
  ];

function assignPlayer() {
  $('#X').on('click', function () {
    game.player1 = 'X';
    game.player2 = 'O';
    game.currentplayer = 'X';
  })
  $('#O').on('click', function () {
    game.player1 = 'O';
    game.player2 = 'X';
    game.currentplayer = 'O';
  })
};

let $cross = '<i class="fas fa-times"></i>'
let $noughts = '<i class="far fa-circle"></i>'

function win() {
  for (let i = 0; i < winningCombos.length; i++) {
    let currentCombos = winningCombos[i];
    let Winner_X = score.X.includes(currentCombos[0]) && score.X.includes(currentCombos[1]) && score.X.includes(currentCombos[2]);
    let Winner_O = score.O.includes(currentCombos[0]) && score.O.includes(currentCombos[1]) && score.O.includes(currentCombos[2]);
    
    if (Winner_X) {
      console.log('X Win');
    } else if (Winner_O) {
      console.log('O Win');
    } 
  }
}