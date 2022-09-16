const currentTime = document.queryselector("display")
const selectMenu = document.querySelectorAll("select");

setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    AMPM = "AM";

    if (h>12) {
        h = h -12;
        AMPM = "PM";
    }

    h = h == 0 ? h = 12 : h;

    h = h < 10 ? "0" + h: h;
    m = m < 10 ? "0" + m: m;
    s = s < 10 ? "0" + s: s;

    currentTime.insertText = `${h}: ${m}: ${s}: ${AMPM}`;
}, 1000)







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
    let AMPM = i == 1 ? "AM" : "PM";
    let option = `<option value= "${AMPM}">${AMPM}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}