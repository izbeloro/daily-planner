let currentDate = new Date();
let time = currentDate.getHours() + ":" + currentDate.getMinutes();

$(document).ready(function () {
  getInfo();
  timeBlockColor();

  var current = dayjs();
  $("#currentDay").text(current.format("[Today is] MMMM dddd D, YYYY"));

  $(".saveBtn").click(function () {
    var timeBlockId = $(this).parent().attr("id");

    var value = $(this).siblings("textarea").val();
    localStorage.setItem("timeBlockId" + timeBlockId, value);
  });

});

function timeBlockColor() {
  var timeNow = dayjs().hour()
  $(".time-block").each(function () {

    var hour = $(this).attr("id");
    var currentHour = parseInt(hour);

    if (currentHour > timeNow) {
      $(this).addClass("future");
    }
    else if (currentHour === timeNow) {
      $(this).addClass("present");
    }
    else {
      $(this).addClass("past");
    }
  })
}

function getInfo() {
  $('#9 .description').val(localStorage.getItem('timeBlockId9'));
  $('#10 .description').val(localStorage.getItem('timeBlockId10'));
  $('#11 .description').val(localStorage.getItem('timeBlockId11'));
  $('#12 .description').val(localStorage.getItem('timeBlockId12'));
  $('#13 .description').val(localStorage.getItem('timeBlockId13'));
  $('#14 .description').val(localStorage.getItem('timeBlockId14'));
  $('#15 .description').val(localStorage.getItem('timeBlockId15'));
  $('#16 .description').val(localStorage.getItem('timeBlockId16'));
  $('#17 .description').val(localStorage.getItem('timeBlockId17'));
}

getInfo();


