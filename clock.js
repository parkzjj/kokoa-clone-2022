// const date = new Date();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
const time = document.querySelector(".status-bar__column:nth-child(2) span");

function clock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    time.innerText = `${hours}:${minutes}:${seconds}`;
}

clock();
setInterval(clock, 1000);