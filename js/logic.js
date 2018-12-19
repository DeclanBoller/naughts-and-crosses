const $cross = '<i class="fas fa-times"></i>';
const $noughts = '<i class="far fa-circle"></i>';



const game = {
  currentplayer: 'X',
  player1: '',
  player2: '',
  moves: 0,
  gamesWonX: 0,
  gamesWonO: 0,
};



const score = {
  X: [],
  O: [],
};



const winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
  ];



const fireworks = function () {
  $('.winner').append(canvas);
  canvas.width = SCREEN_WIDTH;
  canvas.height = SCREEN_HEIGHT;
  setInterval(launch, 200);
  setInterval(loop, 700 / 50);
};



const fireworksDisplay = function () {
  $('.winner').fadeIn(1500);
  setTimeout(function () {
    $('.winner').fadeOut(1500);
    reset();
  }, 5000);;
};



function assignPlayer() {
  $('#X').on('click', function () {
    game.player1 = 'X';
    game.player2 = 'O';
    game.currentplayer = 'X';
    $('#X').addClass('active');
    $('#O').removeClass('active');
  });
  $('#O').on('click', function () {
    game.player1 = 'O';
    game.player2 = 'X';
    game.currentplayer = 'O';
    $('#O').addClass('active');
    $('#X').removeClass('active');
  });
};



const reset = function () {
  $('.grid-container .box').html('');
  score.X.length = 0;
  score.O.length = 0;
  $('.grid-container .box').attr('disabled', false);
  game.currentplayer = 'X';
  $('#X').addClass('active');
  $('#O').removeClass('active');
  game.moves = 0;
  $('h1').html('Noughts &amp; Crosses').hide().fadeIn(2500);
};



const win = function () {
  for (let i = 0; i < winningCombos.length; i++) {
    let currentCombos = winningCombos[i];
    var Winner_X = score.X.includes(currentCombos[0]) && score.X.includes(currentCombos[1]) && score.X.includes(currentCombos[2]);
    var Winner_O = score.O.includes(currentCombos[0]) && score.O.includes(currentCombos[1]) && score.O.includes(currentCombos[2]);

    if (Winner_X) {
      $('.grid-container .box').attr('disabled', true);
      game.gamesWonX++;
      fireworksDisplay();
      $('#PlayerX').html(game.gamesWonX);
      $('h1').html('Crosses Wins').hide().fadeIn(2000);
    } else if (Winner_O) {
      $('.grid-container .box').attr('disabled', true);
      game.gamesWonO++;
      fireworksDisplay();
      $('#PlayerO').html(game.gamesWonO);
      $('h1').html('Noughts Wins').hide().fadeIn(2000);
    }
  }
  if (!Winner_O && !Winner_X && game.moves === 9) {
    $('h1').html('Draw').hide().fadeIn(2000);
    setTimeout(function () {
      reset();
    }, 5000);
  };
};



const check = function (element) {
  if (game.currentplayer === 'X') {
    $(element).html($($cross).hide().fadeIn(300));
    score.X.push(Number($(element).attr('id')));
    $('#X').removeClass('active');
    $('#O').addClass('active');
    game.currentplayer = 'O';
  } else {
    $(element).html($($noughts).hide().fadeIn(300));
    score.O.push(Number($(element).attr('id')));
    game.currentplayer = 'X';
    $('#O').removeClass('active');
    $('#X').addClass('active');
  };
  $(element).attr('disabled', true);
  game.moves++
  win();
};
