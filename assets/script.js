let time = parseInt(dayjs().format("H"));
var currentHour = currentDate.getHours();
var currentDate = new Date();

$(document).ready(function() {
  
  var current = dayjs();
  $("#currentDay").text(current.format("[Today is] MMMM dddd D, YYYY"));
  
  $(".saveBtn").click(function() {
    var timeBlockId = $(this).parent().attr("id");
    
    var value = $(this).siblings("textarea").val();
    localStorage.setItem("timeBlockId" + timeBlockId, value);
});

var rows = document.getElementsByClassName("row");
Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {

    if (time === rowHour) {
      row.classList.add("present");
      
    } else if (time < rowHour) {
      row.classList.add("future");
    }
    } else {
      row.classList.add("past");
    }
  
});

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
// $(function () 
  // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

