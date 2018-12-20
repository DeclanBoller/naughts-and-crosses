$(document).ready(function () {
  $('#1').on('click', function () {
    check(this);
  });
  $('#2').on('click', function () {
    check(this);
  });
  $('#3').on('click', function () {
    check(this);
  });
  $('#4').on('click', function () {
    check(this);
  });
  $('#5').on('click', function () {
    check(this);
  });
  $('#6').on('click', function () {
    check(this);
  });
  $('#7').on('click', function () {
    check(this);
  });
  $('#8').on('click', function () {
    check(this);
  });
  $('#9').on('click', function () {
    check(this);
  });
  $('#Reset').on('click', function () {
    reset();
  });
  assignPlayer();
  $('.winner').hide();
  fireworks();
});
