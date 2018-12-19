$(document).ready(function () {
  assignPlayer();
    $('#1').on('click', function () {
      check(this);
    })
    $('#2').on('click', function () {
      check(this);
    })
    $('#3').on('click', function () {
      check(this);
    })
    $('#4').on('click', function () {
      check(this);
    })
    $('#5').on('click', function () {
      check(this);
    })
    $('#6').on('click', function () {
      check(this);
    })
    $('#7').on('click', function () {
      check(this);
    })
    $('#8').on('click', function () {
      check(this);
    })
    $('#9').on('click', function () {
      check(this);
    })

    $('#Reset').on('click', function () {
      reset();
    })
});

//Original Code Was Repeated For Each Click

//if (game.currentplayer === 'X') {
//  $('#9').html($cross);
//  score.X.push(Number(this.id));
//  game.currentplayer = 'O';
//} else {
//  $('#9').html($noughts);
//  score.O.push(Number(this.id));
//  game.currentplayer = 'X';
//};
//$('#9').attr('disabled', true);
//win();
