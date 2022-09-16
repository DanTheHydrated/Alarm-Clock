var time = document.querySelector(".time");
const selectMenu = document.querySelectorAll("select");



function updateClock() {
  // Get the current time
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

 
  // format date and time
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  date = date < 10 ? "0" + date : date;

  // display time
  var period = hours < 12 ? "AM" : "PM";
  time.innerHTML = hours + ":" + minutes + ":" + seconds + " " + period;
  
}
updateClock();
setInterval(updateClock, 1000);












