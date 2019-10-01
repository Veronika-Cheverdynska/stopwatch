let hours = 0;
let minutes = 0;
let seconds = 0;

let displayHours = 0;
let displayMinutes = 0;
let displaySeconds = 0;

let interval = null;
let counting = "no";

function stopWatch() {
   seconds++;

   if(seconds === 60) {
      seconds = 0;
      minutes++;

      if(minutes === 60) {
         minutes = 0;
         hours++;
      }
   }
   
   //If hours/minutes/seconds are only one digit
   if(seconds < 10) {
      displaySeconds = `0${seconds}`.toString();
   }else{
      displaySeconds = seconds;
   }
   if(minutes < 10) {
      displayMinutes = `0${minutes}`.toString();
   }else{
      displayMinutes = minutes;
   }
   if(hours < 10) {
      displayHours = `0${hours}`.toString();
   }else{
      displayHours = hours;
   }

   document.querySelector(".display").innerHTML = `${displayHours} : ${displayMinutes} : ${displaySeconds}`;
}

document.querySelector("#start-stop-btn").addEventListener("click", function() {
   if(counting === "no") {
      //Turn on the stopwatch
      interval = window.setInterval(stopWatch, 1000);
      document.querySelector("#start-stop-btn").innerHTML = "Stop";
      counting = "yes";
   }else{
      window.clearInterval(interval);
      document.querySelector("#start-stop-btn").innerHTML = "Start";
      counting = "no";
   }
});
document.querySelector("#reset-btn").addEventListener("click", function() {
   window.clearInterval(interval);
   hours = 0;
   minutes = 0;
   seconds = 0;
   document.querySelector("#start-stop-btn").innerHTML = "Start";
   document.querySelector(".display").innerHTML = "00:00:00";
   counting = "no";
});