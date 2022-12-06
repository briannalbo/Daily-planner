// sets variables
var currentDay = $("#currentDay")
var clock = $("#clock");
var hours = [$("#09"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16"), $("#17")];
// remove variable will be used to clear local storage
var remove = $("#delete");
var save = $(".saveBtn");

// the current date is pulled from dayjs
// this displays the current date in the header of the webpage
currentDay.text(dayjs().format('MMMM-DD-YYYY'));
$("#currentDay").css("font-size","32px");

// the current time is pulled from dayjs
// this displays the current time in the header of the webpage
clock.text(dayjs().format('h:mm:a'));
$("#clock").css("font-size", "26px");
$("#clock").css("padding-left", "20px");



currentHour = dayjs().hour();

console.log(currentHour);

// this function loops through the hours array to color code each time block between 9am-5pm
function timeBlock() {
  
  for (i = 0; i < hours.length; i++) {
    currentHour = dayjs().hour();
    // sets the ids to the hour they represent in order to compare with the current time
    var hourNumber = hours[i].attr("id");
    console.log(hourNumber);
// displays input the user saves in the specified time block
    hours[i].children("textarea").val(JSON.parse(localStorage.getItem(hourNumber)));
    
    // future times will be green
    if (hourNumber > currentHour) {
      hours[i].children("textarea").css("background-color", "green");
    }
  //  past times will be turquoise
  else if (hourNumber < currentHour) {
    hours[i].children("textarea").css("background-color", "turquoise");
  }
  // the present hour's timeblock will be displayed as red
  else if (hourNumber == currentHour) {
    hours[i].children("textarea").css("background-color", "red");
  }
}
}
timeBlock();

// when user enters input then clicks save button their input witll be saved to local storage
$(save).on("click", function() {
  var userInput = $(this).siblings("textarea");

  localStorage.setItem(userInput.parent().attr("id"), JSON.stringify(userInput.val()));
  
})

// The code below is a work in progress 
// it will serve as a function to clear local storage in each time block using checkboxes and a 'clear button'
// it is hidden from page to avoid user confusion and be worked on at a later date

// $ (remove).on("click", function() {
//   for (i = 0; i < hours.length; i++); 
//   var cb = document.querySelectorAll('.form-check-input');
// if (cb.checked == true) {
//   console.log('keep');
// }
// else if (cb.checked == false) {
//   var textArea = $(this).siblings("textarea");
//     textArea.val("");
//     localStorage.removeItem(textArea.parent().attr("id"));
// }
// })
// var cb = document.querySelectorAll('.form-check-input');
        // console.log(cb.checked); // false


