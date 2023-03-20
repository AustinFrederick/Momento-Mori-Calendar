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
var dateDiv = $('<div class="dateDiv"></div>');
$('body').append(dateDiv);
// hide the dateDiv by default
dateDiv.hide();
$(document).on('mouseover', '.weekCell', function() {
  if ($('#dateInput').val() != '') {
    //get start date, get weekCells, creat date div
    var startDate = new Date($('#dateInput').val());
    var weekCells = $('.weekCell');
    var dateDiv = $('<div class="dateDiv"></div>');
    //append div, get index of last weekCell, calculate date , set css
    $('body').append(dateDiv);
    var index = weekCells.index($(this));
    var numWeeks = index * 7;
    var newDate = new Date(startDate.getTime());
    newDate.setDate(startDate.getDate() + numWeeks +1);
    dateDiv.html(newDate.toDateString());
    var cellOffset = $(this).offset();
    dateDiv.css({
      'position': 'absolute',
      'top': cellOffset.top - dateDiv.outerHeight(),
      'left': cellOffset.left,
      'z-index': 1000
    });
  }
});

$(document).on('mouseout', '.weekCell', function() {
  // Remove all date divs when the mouse leaves the table
  var dateDivs = $('.dateDiv');
  setTimeout(function() {
    dateDivs.remove();
  }, 0);
});
