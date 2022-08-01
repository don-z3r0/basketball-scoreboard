const plusOneHome = document.getElementById("plus1home")
const plusTwoHome = document.getElementById("plus2home")
const plusThreeHome = document.getElementById("plus3home")
const plusOneAway = document.getElementById("plus1away")
const plusTwoAway = document.getElementById("plus2away")
const plusThreeAway = document.getElementById("plus3away")
const startGameBtn = document.getElementById("")
const resetGameBtn = document.getElementById("")

let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("guest-score")


plusOneHome.addEventListener("click", function() {
    addHome(1)
})

plusTwoHome.addEventListener("click", function() {
    addHome(2)
})

plusThreeHome.addEventListener("click", function() {
    addHome(3)
})

plusOneAway.addEventListener("click", function() {
    addAway(1)
})

plusTwoAway.addEventListener("click", function() {
    addAway(2)
})

plusThreeAway.addEventListener("click", function() {
    addAway(3)
})

function addHome(num) {
    let score = homeScore.textContent
    score = Number(score) + num
    homeScore.textContent = score
}

function addAway(num) {
    let score = awayScore.textContent
    score = Number(score) + num
    awayScore.textContent = score
}
