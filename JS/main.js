const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
let swapTStop = document.getElementById("swapTStop");
let swapTTimer = document.getElementById("swapTTimer");
let STOPWATCH = document.getElementById("STOPWATCH");
let TIMER = document.getElementById("TIMER");
let SecondPart2 = document.getElementById("Second-part-2");
let MileSecond = document.getElementById("Mile-second");
let btnStartStop = document.getElementById("btnStartStop");
var btnStart = document.getElementById("btn-start");
let btnStop = document.getElementById("btn-stop");
var btnStart1 = document.getElementById("btn-start-1");
let btnStop1 = document.getElementById("btn-stop-1");
let mute = document.getElementById("mute");

let interval;

function countDown(timeToSeconds) {
  btnStart1.style.display = "none";
  timeToSeconds = 0.1;
  if (timeToSeconds !== -1) {
    interval = setInterval(function () {
      MileSecond.innerHTML = timeToSeconds;
      if (timeToSeconds >= 0.1 && timeToSeconds <= 99) {
        timeToSeconds += 0.1;
      } else {
        let i = 1;
        SecondPart2.innerHTML = i;
        timeToSeconds = 0;
        timeToSeconds += 0.1;
        i++;
        SecondPart2.innerHTML = i;
      }
    }, 100);
  } else if (timeToSeconds <= 0) {
    SecondPart2.innerHTML = "The time is over.";
  }
}
countDown(0.1);
btnStop1.onclick = function () {
  clearInterval(interval);
  btnStart1.style.display = "block";
  btnStop1.style.display = "none";
};

swapTStop.onclick = function () {
  STOPWATCH.style.display = "block";
  TIMER.style.display = "none";
};
swapTTimer.onclick = function () {
  STOPWATCH.style.display = "none";
  TIMER.style.display = "block";
};

var ding;
function playSound() {
  ding = new Audio("../sound/ding.mp3");
  ding.play();
}

mute.onclick = function playSound(elm) {
  mute.classList.toggle("mute");
  elem.muted = true;
  ding.pause();
};
var interVal;
function CountDown(duration) {
  if (!isNaN(duration)) {
    var timer = duration,
      m,
      s;

    interVal = setInterval(function () {
      btnStart.style.display = "none";

      m = parseInt(timer / 60, 10);
      s = parseInt(timer % 60, 10);

      minutes.innerHTML = m < 10 ? "0" + m : m;
      seconds.innerHTML = s < 10 ? "0" + s : s;

      if (--timer < 0) {
        timer = duration;
        clearInterval(interVal);
        playSound();
      }
    }, 1000);
  }
}
CountDown(300);
btnStop.onclick = function () {
  clearInterval(interVal);
  btnStart.style.display = "block";
  btnStop.style.display = "none";
};
