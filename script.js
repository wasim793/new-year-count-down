const daysE1 = document.getElementById("days");
const hourE1 = document.getElementById("hours");
const minE1 = document.getElementById("miniutes");
const secE1 = document.getElementById("second");
const newYear="1 Jan 2022";

function cutdown(){
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    // console.log(days,hours, mins,seconds);
    daysE1.innerHTML = days;
    hourE1.innerHTML = hours;
    minE1.innerHTML = mins;
    secE1.innerHTML = seconds;

}
cutdown();
setInterval(cutdown,1000);