$(document).ready(function () {
    assignPlayer();
    $('#1').on('click', function () {
      check(this);
      win();
    })
    $('#2').on('click', function () {
      check(this);
      win();
    })
    $('#3').on('click', function () {
      check(this);
      win();
    })
    $('#4').on('click', function () {
      check(this);
      win();
    })
    $('#5').on('click', function () {
      check(this);
      win();
    })
    $('#6').on('click', function () {
      check(this);
      win();
    })
    $('#7').on('click', function () {
      check(this);
      win();
    })
    $('#8').on('click', function () {
      check(this);
      win();
    })
    $('#9').on('click', function () {
      check(this);
      win();
    })
  });

  //      if (game.currentplayer === 'X') {
  //        $('#9').html($cross);
  //        score.X.push(Number(this.id));
  //        game.currentplayer = 'O';
  //      } else {
  //        $('#9').html($noughts);
  //        score.O.push(Number(this.id));
  //        game.currentplayer = 'X';
  //      };
  //      $('#9').attr('disabled', true);
  //      win();
