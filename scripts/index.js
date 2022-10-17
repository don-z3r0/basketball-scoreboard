const homeScoreEl = document.getElementById("homeScore");
const guestScoreEl = document.getElementById("guestScore");
const timerEl = document.getElementById("timer");
const periodEl = document.getElementById("periodText");
const plusOneHome = document.getElementById("plus-1-home");
const plusTwoHome = document.getElementById("plus-2-home");
const plusThreeHome = document.getElementById("plus-3-home");
const plusOneGuest = document.getElementById("plus-1-guest");
const plusTwoGuest = document.getElementById("plus-2-guest");
const plusThreeGuest = document.getElementById("plus-3-guest");
const start = document.getElementById("startBtn");
const reset = document.getElementById("resetBtn");
const checkbox = document.getElementById("test");

let homeScore = 0;
let guestScore = 0;

document.addEventListener('click', (e) =>{
    if(e.target.id === 'startBtn') {
      if(checkbox.checked) {
            countdownTimer(timerEl, 0, 5)
            start.disabled = true
        } else {
            countdownTimer(timerEl, 12, 0)
            start.disabled = true
        }
    } else if(e.target.id === 'plus-1-home') {
      homeScore++;
      highlightLeader()
      setScoreChars(homeScore, homeScoreEl);
    } else if(e.target.id === 'plus-2-home') {
      homeScore = homeScore + 2;
      highlightLeader()
      setScoreChars(homeScore, homeScoreEl);
    } else if(e.target.id === 'plus-3-home') {
      homeScore = homeScore + 3;
      highlightLeader()
      setScoreChars(homeScore, homeScoreEl);
    } else if(e.target.id === 'plus-1-guest') {
      guestScore++
      highlightLeader()
      setScoreChars(guestScore, guestScoreEl);
    } else if(e.target.id === 'plus-2-guest') {
      guestScore = guestScore + 2;
      highlightLeader()
      setScoreChars(guestScore, guestScoreEl);
    } else if(e.target.id === 'plus-3-guest') {
      guestScore = guestScore + 3;
      highlightLeader()
      setScoreChars(guestScore, guestScoreEl);
    }
})

checkbox.addEventListener("change", test);

reset.addEventListener("click", () => {
    window.location.reload()
    // countdownTimer(timerEl, 0, 0)
    // timerEl.textContent = '12:00'
    // checkbox.checked = false
    // homeScore = 0
    // guestScore = 0
    // periodEl.textContent = 0
});

function countdownTimer(timerEl, minutes, seconds) {
    let endTime, mins, secs, msLeft, time
    
    let x = setInterval(() => {
        msLeft = endTime - +new Date()
        if(msLeft < 1000) {
            clearInterval(x);
            timerEl.textContent = '00:00'
            setTimeout(() => {
                timerEl.textContent = checkbox.checked ? '00:05' : '12:00'
                setPeriod()
                start.disabled = false
            }, 1000);
        } else {
            time = new Date(msLeft)
            mins = time.getUTCMinutes()
            secs = time.getUTCSeconds()

            timerEl.textContent = `${twoDigits(mins)}:${twoDigits(secs)}`
        }
    }, 1000);

    endTime = +new Date() + 1000 * (60 * minutes + seconds) + 500
}

function setPeriod() {
    if (periodEl.textContent == 1) {
      periodEl.textContent = 2;
    } else if (periodEl.textContent == 2) {
      periodEl.textContent = 3;
    } else if (periodEl.textContent == 3) {
      periodEl.textContent = 4;
    } else {
      periodEl.textContent = 1;
    }
  }
  
  function setScoreChars(score, scoreEl) {
    if (score < 10) {
      scoreEl.textContent = `00${score}`;
    } else if (score < 100) {
      scoreEl.textContent = `0${score}`;
    } else {
      scoreEl.textContent = score;
    }
  }
  
  function test() {
    if (checkbox.checked) {
      timerEl.textContent = "00:05";
    } else if (!checkbox.checked) {
      timerEl.textContent = "12:00";
    }
  }

function twoDigits(num) {
    return num < 10 ? `0${num}` : num
}

function highlightLeader() {
  if(homeScore === guestScore) {
    homeScoreEl.style.color = 'limegreen'
    guestScoreEl.style.color = 'limegreen'
  }else if(guestScore > homeScore) {
    homeScoreEl.style.color = 'darkred'
    guestScoreEl.style.color = 'limegreen'
  } else if(homeScore > guestScore) {
    homeScoreEl.style.color = 'limegreen'
    guestScoreEl.style.color = 'darkred'
  }
}
