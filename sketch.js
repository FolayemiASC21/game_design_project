let ballXPos = 400
let ballYPos = 300
let ballLeft
let ballTop
let ballBottom
let ballSpeed = 3
let ballXChange = 1
let ballYChange = 1

let paddleXPos = 50
let paddleYPos = 300
let paddleTop
let paddleBottom
let paddleRight
let paddleLeft
let paddleSpeed = 3

let score = 0
let trueScore = 0
let scoreToGet = 5
let lives = 3

let round = 1

let state = 1

function setup() {
    createCanvas(800, 600)
    rectMode(CENTER)

}

function draw() {
    background(0)
    
    stroke(255)
    line(400, 0, 400, 600)
    noStroke()

    if (state == 1) {
        fill(255, 0, 0)
        rect(400, 300, 100, 100)
        textSize(30)
        fill(0)
        text("Start", 368, 310)
        paddleYPos = 300
        ballYChange = 1
        ballXChange = 1
    }

    if (state == 2){
    fill(255, 0, 0)
    rect(paddleXPos, paddleYPos, 20, 100)

    fill(0, 0, 255)
    rect(790, 300, 20, 600)

    fill(255)
    ellipse(ballXPos, ballYPos, 25, 25)

    

    paddleTop = paddleYPos - 50
    paddleBottom = paddleYPos + 50
    paddleRight = paddleXPos + 10
    paddleLeft = paddleXPos - 10

    ballLeft = ballXPos - 12.5
    ballTop = ballYPos - 12.5
    ballBottom = ballYPos + 12.5

    ballXPos += ballSpeed * ballXChange
    ballYPos += ballSpeed * ballYChange

    if (ballXPos > 768.5) {
        ballXChange *= -1
    }
    if (ballYPos < 12.5 || ballYPos > 587.5) {
        ballYChange *= -1
    }
    if (ballXPos < 12.5) {
        lives--
        state = 1
        ballXPos = 400
        ballYPos = 300
    }
    if (ballLeft < paddleRight && ballYPos > paddleTop && ballYPos < paddleBottom) {
        ballXChange = 1
        score++
    }
    if (ballBottom > paddleTop && ballXPos > paddleLeft && ballXPos < paddleRight) {
        ballXChange = 1
        ballYChange = -1
        score++
    }
    if (ballTop > paddleBottom && ballXPos > paddleLeft && ballXPos < paddleRight) {
        ballXChange = 1
        ballYChange = -1
        score++
    }

    if (keyIsDown(UP_ARROW)) {
        paddleYPos -= paddleSpeed
    }
    if (keyIsDown(DOWN_ARROW)) {
        paddleYPos += paddleSpeed
    }
    trueScore = score/ 3
    textSize(22)
    text("Your score is: " + trueScore + "/ " + scoreToGet, 320, 600)}
    text("Lives: " + lives, 25, 600)
    text("Round: " + round, 685, 600)

    if (lives == 0) {
        state = 3
    }

    if (state == 3) {
        background(0)
        fill(255)
        rect(415, 390, 140, 30)
        fill(255, 0, 0)
        textSize(150)
        text("You LOSE!", 30, 310)
        textSize(30)
        text("try again?", 350, 400)
    }

    if (trueScore == 5 && round == 1) {
        ballSpeed ++
        state = 4
        round = 2
        scoreToGet += 5
        paddleSpeed++
        ballYChange = 1
        ballXChange = 1
    }
    if (trueScore == 10 && round == 2) {
        ballSpeed ++
        state = 4
        round = 3
        scoreToGet += 5
        paddleSpeed++
        ballYChange = 1
        ballXChange = 1
    }
    if (trueScore == 15 && round == 3) {
        ballSpeed ++
        state = 4
        round = 4
        scoreToGet += 5
        paddleSpeed++
        ballYChange = 1
        ballXChange = 1
    }
    if (trueScore == 20 && round == 4) {
        ballSpeed ++
        state = 4
        round = 5
        scoreToGet += 5
        paddleSpeed++
        ballYChange = 1
        ballXChange = 1
    }

    if (state == 4) {
        textSize(110)
        fill(255)
        text("round " + eval(round - 1) + "cleared", 30, 310)
        textSize(22)
        fill(255)
        rect(395, 390, 190, 30)
        textSize(30)
        fill(0)
        text("go to round " + round, 305, 400)
        textSize(25)
        fill(255, 0, 0)
        text("score to pass level: " + scoreToGet, 280, 500)
        fill(0)
        paddleYPos = 300
        ballXPos = 400
        ballYPos = 300
    }

    
}

function mouseClicked() {
    if (state == 1 && mouseX > 350 && mouseX < 450 && mouseY > 250 && mouseY < 350) {
        state = 2
    }

    if (state == 3 && mouseX > 345 && mouseX < 485 && mouseY > 375 && mouseY < 405) {
        lives = 3
        state = 1
    }

    if (state == 4 && mouseX > 300 && mouseX < 490 && mouseY > 375 && mouseY < 405) {
        state = 2
        score = 0
    }
}

console.log(ballSpeed)