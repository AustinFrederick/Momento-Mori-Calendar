$(document).ready(function(){ //get the input date, calculate how many weeks since that date, fill in that many week cells
  $('#dateForm').submit(function(event){
    event.preventDefault();
    var inputDate = new Date($('#dateInput').val());
    var currentDate = new Date();
    var weeksSince = Math.floor((currentDate - inputDate) / (1000* 60 * 60 * 24 * 7));
    var cellsToColor = Math.min(weeksSince, 52);
    $('.weekCell').removeClass('weekLived');

    for(var i=0; i<weeksSince; i++){
      $('.weekCell').eq(i).addClass('weekLived');
    }
  });
});
