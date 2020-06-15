var player,ground,playerimage,groundimage;
function preload(){
  playerimage=loadAnimation("IMAGES/player.gif");
  groundimage=loadImage("IMAGES/ground.png")
  
}

function setup() {

  createCanvas(displayWidth,displayHeight-150);
  player=new Player();
  ground=createSprite(displayWidth/2,displayHeight-200,displayWidth,20);
}

function draw() {
  background(255,255,255);  
  player.move();
  player.body.addAnimation("playerAnimation",playerimage);
  player.body.scale=0.5;
  drawSprites();
  
}