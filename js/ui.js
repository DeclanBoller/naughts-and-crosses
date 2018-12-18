function getButton(){
  const number = 
}

$(document).ready(function () {
   assignPlayer();

   $('#1').on('click', function () {
     if (game.currentplayer === 'X') {
       $('#1').html($cross);
       score.X.push(Number(this.id));
       game.currentplayer = 'O';
     } else {
       $('#1').html($noughts);
       score.O.push(Number(this.id));
       game.currentplayer = 'X';
     };
     $('#1').attr('disabled', true);
     win();
   })
   $('#2').on('click', function () {
     if (game.currentplayer === 'X') {
       $('#2').html($cross);
       score.X.push(Number(this.id));
       game.currentplayer = 'O';
     } else {
       $('#2').html($noughts);
       score.O.push(Number(this.id));
       game.currentplayer = 'X';
     };
     $('#2').attr('disabled', true);
     win();
   })
   $('#3').on('click', function () {
     if (game.currentplayer === 'X') {
       $('#3').html($cross);
       score.X.push(Number(this.id));
       game.currentplayer = 'O';
     } else {
       $('#3').html($noughts);
       score.O.push(Number(this.id));
       game.currentplayer = 'X';
     };
     $('#3').attr('disabled', true);
     win();
   })
   $('#4').on('click', function () {
     if (game.currentplayer === 'X') {
       $('#4').html($cross);
       score.X.push(Number(this.id));
       game.currentplayer = 'O';
     } else {
       $('#4').html($noughts);
       score.O.push(Number(this.id));
       game.currentplayer = 'X';
     };
     $('#4').attr('disabled', true);
     win();
   })
   $('#5').on('click', function () {
     if (game.currentplayer === 'X') {
       $('#5').html($cross);
       score.X.push(Number(this.id));
       game.currentplayer = 'O';
     } else {
       $('#5').html($noughts);
       score.O.push(Number(this.id));
       game.currentplayer = 'X';
     };
     $('#5').attr('disabled', true);
     win();
   })
   $('#6').on('click', function () {
     if (game.currentplayer === 'X') {
       $('#6').html($cross);
       score.X.push(Number(this.id));
       game.currentplayer = 'O';
     } else {
       $('#6').html($noughts);
       score.O.push(Number(this.id));
       game.currentplayer = 'X';
     };
     $('#6').attr('disabled', true);
     win();
   })
   $('#7').on('click', function () {
     if (game.currentplayer === 'X') {
       $('#7').html($cross);
       score.X.push(Number(this.id));
       game.currentplayer = 'O';
     } else {
       $('#7').html($noughts);
       score.O.push(Number(this.id));
       game.currentplayer = 'X';
     };
     $('#7').attr('disabled', true);
     win();
   })
   $('#8').on('click', function () {
     if (game.currentplayer === 'X') {
       $('#8').html($cross);
       score.X.push(Number(this.id));
       game.currentplayer = 'O';
     } else {
       $('#8').html($noughts);
       score.O.push(Number(this.id));
       game.currentplayer = 'X';
     };
     $('#8').attr('disabled', true);
     win();
   })
   $('#9').on('click', function () {
     if (game.currentplayer === 'X') {
       $('#9').html($cross);
       score.X.push(Number(this.id));
       game.currentplayer = 'O';
     } else {
       $('#9').html($noughts);
       score.O.push(Number(this.id));
       game.currentplayer = 'X';
     };
     $('#9').attr('disabled', true);
     win();
   })
 });
