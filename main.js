var time = document.querySelector(".time");
const selectMenu = document.querySelectorAll("select");

//Clock function
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
   

  // display time
    var period = hours < 12 ? "AM" : "PM";
    time.innerHTML = hours + ":" + minutes + ":" + seconds + " " + period;

}
updateClock();
setInterval(updateClock, 1000);

//Scroll selectors 
for (let i=12; i>0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value= "${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i=59; i>0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value= "${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i=2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value= "${AMPM}">${AMPM}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}











