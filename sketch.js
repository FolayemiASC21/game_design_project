let ballXPos = 400
let ballYPos = 300
let ballLeft
let ballTop
let ballBottom
let ballXSpeed;
let ballYSpeed;
let ballXChange = 1
let ballYChange = 1

let paddleXPos = 50
let paddleYPos = 300
let paddleTop
let paddleBottom
let paddleRight
let paddleLeft
let paddleSpeed = 5

let score = -1
let highScore = 0


function setup() {
    createCanvas(800, 600)
    rectMode(CENTER)

    ballXSpeed = 5.5
    ballYSpeed = 5.5
}

function draw() {
    background(0)
    
    stroke(255)
    line(400, 0, 400, 600)
    noStroke()


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

    ballXPos += ballXSpeed * ballXChange
    ballYPos += ballYSpeed * ballYChange

    if (ballXPos > 768.5) {
        ballXChange *= -1
        score++
    }
    if (ballYPos < 12.5 || ballYPos > 587.5) {
        ballYChange *= -1
    }
    if (ballXPos < 12.5) {
        ballXSpeed = 0
        ballYSpeed = 0
        ballXPos = 400
        ballYPos = 300
    } 

    if (ballXPos == 400 && ballYPos == 300 && score>highScore) {
        highScore = score
        score = -1
    }
    else if (ballXPos == 400 && ballYPos == 300 && score<highScore) {
        score = -1
    }

    if (ballLeft < paddleRight && ballYPos > paddleTop && ballYPos < paddleBottom) {
        ballXChange = 1
    }

    if (keyIsDown(UP_ARROW)) {
        paddleYPos -= paddleSpeed
    }
    if (keyIsDown(DOWN_ARROW)) {
        paddleYPos += paddleSpeed
    }

    textSize(22)
    text("Your score is: " + score, 320, 600)

    textSize(22)
    text("Your Highscore is: " + highScore, 320, 20)

}

function mouseClicked() {
    if (ballXPos == 400 && ballYPos == 300) {
    ballXSpeed = 3.5
    ballYSpeed = 3.5

    ballXChange = 2
    ballYChange = 2
    }
}