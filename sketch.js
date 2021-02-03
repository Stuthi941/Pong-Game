//Creating the memory
var playerPaddle;
var computerPaddle


function setup(){
  createCanvas(400,400);
  
  //player Paddle
  playerPaddle = new Paddle();
  
 //Creating computer paddle 
  computerPaddle = new Paddle();
}

function draw() {
  //set background to white
  background("white");
  
  //assigning x and y position to player paddle
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  
  //assigning x and y position for computer paddle
  computerPaddle.xPosition = 10;
  computerPaddle.yPosition = 145;
  
  //displaying the paddles
  playerPaddle.display();
  computerPaddle.display();
  
  //draw the ball
  rect(200,200,10,10);
}