const homeScoreEl = document.getElementById('homeScore')
const guestScoreEl = document.getElementById('guestScore')
const timerEl = document.getElementById('timer')
const periodEl = document.getElementById('periodText')
const plusOneHome = document.getElementById('plus-1-home')
const plusTwoHome = document.getElementById('plus-2-home')
const plusThreeHome = document.getElementById('plus-3-home')
const plusOneGuest = document.getElementById('plus-1-guest')
const plusTwoGuest = document.getElementById('plus-2-guest')
const plusThreeGuest = document.getElementById('plus-3-guest')
const start = document.getElementById('startBtn')
const reset = document.getElementById('resetBtn')
const checkbox = document.getElementById('test')

let homeScore = 0
let guestScore = 0
let mins = 12
let secs = 0

checkbox.addEventListener('change', test)

start.addEventListener('click', () => {
    countdown( 'timer', mins, secs );
})



plusOneHome.addEventListener('click', ()=>{
    homeScore++
    
    setScoreChars(homeScore, homeScoreEl)
})

plusTwoHome.addEventListener('click', ()=>{
    homeScore = homeScore + 2
    
    setScoreChars(homeScore, homeScoreEl)
})

plusThreeHome.addEventListener('click', ()=>{
    homeScore = homeScore + 3
    
    setScoreChars(homeScore, homeScoreEl)
})

plusOneGuest.addEventListener('click', ()=>{
    guestScore++
    
    setScoreChars(guestScore, guestScoreEl)
})

plusTwoGuest.addEventListener('click', ()=>{
    guestScore = guestScore + 2
    
    setScoreChars(guestScore, guestScoreEl)
})

plusThreeGuest.addEventListener('click', ()=>{
    guestScore = guestScore + 3
    
    setScoreChars(guestScore, guestScoreEl)
})

reset.addEventListener('click', ()=>{
    window.location.reload()
})

function setPeriod() {
    if(periodEl.textContent == 1) {
        periodEl.textContent = 2
    } else if(periodEl.textContent == 2) {
        periodEl.textContent = 3
    } else if(periodEl.textContent == 3) {
        periodEl.textContent = 4
    } else {
        periodEl.textContent = 1
    }
}



function countdown( elementName, minutes, seconds )
{
    let element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return n < 10 ? `0${n}` : n;
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "00:00";
            start.disabled = false
            setTimeout(() => {
                test()
                setPeriod()
            }, 1500);
        } else {
            start.disabled = true
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );

            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}

function setScoreChars(score, scoreEl) {
    if(score < 10) {
        scoreEl.textContent = `00${score}`
    } else if(score < 100) {
        scoreEl.textContent = `0${score}`
    } else {
        scoreEl.textContent = score
    }
}

function test() {
    if(checkbox.checked) {
        mins = 0
        secs = 5
        timerEl.textContent = "0:05"
    } else if(!checkbox.checked) {
        mins = 12
        secs = 0
        timerEl.textContent = '12:00'
    }
}
