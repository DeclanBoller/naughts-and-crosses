// Assign Noughts and Crosses Icons
const $cross = '<i class="fas fa-times"></i>';
const $noughts = '<i class="far fa-circle"></i>';


// Baseline Game Info
const game = {
  currentplayer: 'X',
  player1: '',
  player2: '',
  moves: 0,
  gamesWonX: 0,
  gamesWonO: 0,
};


// Players Score
const score = {
  X: [],
  O: [],
};


// All possible combos of Wins
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

// Smart Computer -- 

// Loop through the Winning Combos
// Loop through the other players score
// If OP's tile is filled *Ignore* and place in the next available spot




// Fireworks Canvas Parameters
const fireworks = function () {
  $('.winner').append(canvas);
  canvas.width = SCREEN_WIDTH;
  canvas.height = SCREEN_HEIGHT;
  setInterval(launch, 100);
  setInterval(loop, 700 / 50);
};


// Init Fireworks && Hide Fireworks
const fireworksDisplay = function () {
  $('.winner').fadeIn(1500);
  setTimeout(function () {
    $('.winner').fadeOut(1500);
    reset();
  }, 5000);;
};


// Assign Player Based off Input from Buttons -- Default Player is X (game.currentplayer = 'X' --
function assignPlayer() {
  $('#X').on('click', function () {
    game.player1 = 'X';
    game.player2 = 'O';
    game.currentplayer = 'X';
    $('#X').addClass('activeX');
    $('#O').removeClass('activeO');
  });
  $('#O').on('click', function () {
    game.player1 = 'O';
    game.player2 = 'X';
    game.currentplayer = 'O';
    $('#O').addClass('activeO');
    $('#X').removeClass('activeX');
  });
};


// Clears all Icons, Resets Score, Resets Move Count, Re-Enables Clicks, Sets Current Player Back to X
const reset = function () {
  $('.grid-container .box').html('');
  score.X.length = 0;
  score.O.length = 0;
  $('.grid-container .box').attr('disabled', false);
  game.currentplayer = 'X';
  $('#X').addClass('activeX');
  $('#O').removeClass('activeO');
  game.moves = 0;
  $('h1').html('Noughts &amp; Crosses').hide().fadeIn(2500);
};


// Loops Through Winning Combos && Finds if the Index Matches the Players Moves 
const win = function () {
  for (let i = 0; i < winningCombos.length; i++) {
    let currentCombos = winningCombos[i];
    var Winner_X = score.X.includes(currentCombos[0]) && score.X.includes(currentCombos[1]) && score.X.includes(currentCombos[2]);
    var Winner_O = score.O.includes(currentCombos[0]) && score.O.includes(currentCombos[1]) && score.O.includes(currentCombos[2]);

// Disables Specified Button, Adds +1 to gamesWon, Sets Fireworks Display off, Changes H1
    if (Winner_X) {
      $('.grid-container .box').attr('disabled', true);
      game.gamesWonX++;
      fireworksDisplay();
      $('#PlayerX').html(game.gamesWonX);
      $('h1').html('Crosses Wins').hide().fadeIn(2000);
      return
    } else if (Winner_O) {
      $('.grid-container .box').attr('disabled', true);
      game.gamesWonO++;
      fireworksDisplay();
      $('#PlayerO').html(game.gamesWonO);
      $('h1').html('Noughts Wins').hide().fadeIn(2000);
      return
    }
  }
  
// If Nothing Above Returns True, Its a Draw, Reset Count, Change H1 
  if (game.moves >= 9) {
    $('h1').html('Draw').hide().fadeIn(2000);
    setTimeout(function () {
      reset();
    }, 5000);
  };
};


// Checks Current Player, adds Icon to button, Sends ID of button to score array, Switch players
const check = function (element) {
  if (game.currentplayer === 'X') {
    $(element).html($($cross).hide().fadeIn(300));
    score.X.push(Number($(element).attr('id')));
    $('#X').removeClass('activeX');
    $('#O').addClass('activeO');
    game.currentplayer = 'O';
  } else {
    $(element).html($($noughts).hide().fadeIn(300));
    score.O.push(Number($(element).attr('id')));
    game.currentplayer = 'X';
    $('#O').removeClass('activeO');
    $('#X').addClass('activeX');
  };
// Disables clicked Button
  $(element).attr('disabled', true);
// Sends +1 Moves to game.moves array
  game.moves++
// Check for Win
  win();
};
