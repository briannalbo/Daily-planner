// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $("#currentDay")
var clock = $("#clock");
var hours = [$("#09"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16"), $("#17")];

currentDay.text(dayjs().format('MMMM-DD-YYYY'));
$("#currentDay").css("font-size","32px");

clock.text(dayjs().format('h:mm:a'));
$("#clock").css("font-size", "26px");
$("#clock").css("padding-left", "20px");



currentHour = dayjs().hour();
console.log(currentHour);

function timeBlock() {
  
  for (i = 0; i < hours.length; i++) {
    currentHour = dayjs().hour();
    var hourNumber = hours[i].attr("id");
    console.log(hourNumber);
    hours[i].children("textarea").val(JSON.parse(localStorage.getItem(hourNumber)));
    
    if (hourNumber > currentHour) {
      hours[i].children("textarea").css("background-color", "green");
    }
   
  else if (hourNumber < currentHour) {
    hours[i].children("textarea").css("background-color", "turquoise");
  }
  else if (hourNumber == currentHour) {
    hours[i].children("textarea").css("background-color", "red");
  }
}
}
timeBlock();

$("button").on("click", function() {
  var userInput = $(this).siblings("textarea");
  
  localStorage.setItem(userInput.parent().attr("id"), JSON.stringify(userInput.val()));
  
})


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
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
