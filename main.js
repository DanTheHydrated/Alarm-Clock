var time = document.querySelector(".time");
const selectMenu = document.querySelectorAll("select");
setAlarmBtn = document.querySelector('button');
let alarmTime;


//Clock function
function updateClock() {

  // Get the current time
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds(); 

  // format time
    hours = hours < 12 || hours - 12 ;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

  // display time
    period = hours < 12 ? "PM" : "AM";
    time.innerHTML = hours + ":" + minutes + ":" + seconds + " " + period;

}
updateClock();
setInterval(updateClock, 1000);


//Scroll selectors 

for (let i=12; i>0; i--) {
    i = i < 10 ? "0" + i : i;
    let hour = `<option value= "${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", hour);
}

for (let i=59; i>0; i--) {
    i = i < 10 ? "0" + i : i;
    let min = `<option value= "${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", min);
}

for (let i=2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let zone = `<option value= "${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", zone);
}


//Alarm Function
function setAlarm() {
    let alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}`;
    console.log('alarm set');
    if(alarmTime === time) {
        alert('The time has come!');
    }
}
setAlarmBtn.addEventListener('click', setAlarm);










