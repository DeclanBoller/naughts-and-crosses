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

$(document).ready(function () {
  assignPlayer();

  $('#1').on('click', function () {
    if (game.currentplayer === 'X') {
      $('#1').html($cross);
      score.X.push(this.id);
      game.currentplayer = 'O';
    } else {
      $('#1').html($noughts);
      score.O.push(this.id);
      game.currentplayer = 'X';
    };
  })
  $('#2').on('click', function () {
    if (game.currentplayer === 'X') {
      $('#2').html($cross);
      score.X.push(this.id);
      game.currentplayer = 'O';
    } else {
      $('#2').html($noughts);
      score.O.push(this.id);
      game.currentplayer = 'X';
    };
  })
  $('#3').on('click', function () {
    if (game.currentplayer === 'X') {
      $('#3').html($cross);
      score.X.push(this.id);
      game.currentplayer = 'O';
    } else {
      $('#3').html($noughts);
      score.O.push(this.id);
      game.currentplayer = 'X';
    };
  })
  $('#4').on('click', function () {
    if (game.currentplayer === 'X') {
      $('#4').html($cross);
      score.X.push(this.id);
      game.currentplayer = 'O';
    } else {
      $('#4').html($noughts);
      score.O.push(this.id);
      game.currentplayer = 'X';
    };
  })
  $('#5').on('click', function () {
    if (game.currentplayer === 'X') {
      $('#5').html($cross);
      score.X.push(this.id);
      game.currentplayer = 'O';
    } else {
      $('#5').html($noughts);
      score.O.push(this.id);
      game.currentplayer = 'X';
    };
  })
  $('#6').on('click', function () {
    if (game.currentplayer === 'X') {
      $('#6').html($cross);
      score.X.push(this.id);
      game.currentplayer = 'O';
    } else {
      $('#6').html($noughts);
      score.O.push(this.id);
      game.currentplayer = 'X';
    };
  })
  $('#7').on('click', function () {
    if (game.currentplayer === 'X') {
      $('#7').html($cross);
      score.X.push(this.id);
      game.currentplayer = 'O';
    } else {
      $('#7').html($noughts);
      score.O.push(this.id);
      game.currentplayer = 'X';
    };
  })
  $('#8').on('click', function () {
    if (game.currentplayer === 'X') {
      $('#8').html($cross);
      score.X.push(this.id);
      game.currentplayer = 'O';
    } else {
      $('#8').html($noughts);
      score.O.push(this.id);
      game.currentplayer = 'X';
    };
  })
  $('#9').on('click', function () {
    if (game.currentplayer === 'X') {
      $('#9').html($cross);
      score.X.push(this.id);
      game.currentplayer = 'O';
    } else {
      $('#9').html($noughts);
      score.O.push(this.id);
      game.currentplayer = 'X';
    };
  })
});
