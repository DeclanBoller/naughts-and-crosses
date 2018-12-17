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
  [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 6], [2, 5, 7], [3, 6, 9], [1, 5, 9], [3, 5, 7]
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