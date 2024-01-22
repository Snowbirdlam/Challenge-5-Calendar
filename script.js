// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
  $('.timeblock').each(function() {
    var 倉庫warehouse = localStorage.getItem(time);
    $(this).find('description').val(倉庫warehouse);
    });
    
  let 日期Date = dayjs();

$('#currentDay').text(日期Date.format('MMM DD, YYYY'));

function handleButtonClick(event) {

  var 時間表scheduleInput = $(this).closest('.time-block').find('.description');
  var time = $(this).parent().attr('id');

  event.preventDefault();

  console.log('.description', 時間表scheduleInput.val());
  localStorage.setItem(time, 時間表scheduleInput.val());  
  };

  $('.btn').click(handleButtonClick);
  const 每小時Hourly = dayjs().hour();


  $('.time-block').each(function () {

    const 此時此刻currentTime = parseInt($(this).find('.hour').text());

    if (此時此刻currentTime < 每小時Hourly) {
      $(this).addClass('past');
      $('.description');
    } else if (此時此刻currentTime === 每小時Hourly) {
      $(this).addClass('present');
      $('.description');
    } else {
      $(this).addClass('future');
      $('.description');
    };
  });
});