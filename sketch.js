var bg;
var bg1;
var boy,boyImg;
var plane,planeImg;
var score=0;
var ball,ballImg;
var robot,robotImg;
var pencil,pencilImg;
var pump,pumpImg;
var dust,dustImg;
var doormat,dmImg;
var kitchenImg;
var roomSound;
var sword,swordImg;
var score1=0;




function preload(){
  bg1=loadImage("Images/Room.png");
boyRight=loadAnimation("Images/Boy1.png","Images/Boy2.png","Images/Boy3.png","Images/Boy4.png","Images/Boy5.png","Images/Boy6.png");
boyLeft=loadAnimation("Images/Boy1.1.png","Images/Boy2.2.png","Images/Boy3.3.png","Images/Boy4.4.png","Images/Boy5.5.png","Images/Boy6.6.png");
boyUP=loadAnimation("Images/Boy.png");
planeImg=loadImage("Images/Plane.png");
ballImg=loadImage("Images/Ball.png");
robotImg=loadImage("Images/Robot.png");
pencilImg=loadImage("Images/Pencil.png");
pumpImg=loadImage("Images/Pump.png");
dmImg=loadImage("Images/Doormat.png");
dustImg=loadImage("Images/Dustbin.png");
kitchenImg=loadImage("Images/Kitchen.png");
fruit1=loadImage("Images/Fruits1.png");
fruit2=loadImage("Images/Fruits2.png");
fruit3=loadImage("Images/Fruits3.png");
//roomSound=loadSound("Sound/Room.mp3");
swordImg=loadImage("Images/sword.png");

}


function setup() {
  createCanvas(1200,550);
  bg=createSprite(600,200,50,50);
  bg.scale=2;

  boy=createSprite(500,500,10,10);
  boy.addAnimation("boy",boyUP);
  boy.addAnimation("boy-Right", boyRight);
  boy.addAnimation("boy-Left", boyLeft);
  boy.scale=1;
  //boy.debug=true;
  boy.setCollider("circle",0,0,50);

  plane=createSprite(220,240,50,50);
  plane.addImage("plane",planeImg);
  //plane.debug=true;
  plane.scale=0.05;

  ball=createSprite(1060,400,50,50);
  //ball.debug=true;
  ball.addImage("ball",ballImg);
  ball.scale=0.08;

  robot=createSprite(350,110,50,50);
//robot.debug=true;
  robot.addImage("ball",robotImg);
  robot.scale=0.15;

  pencil=createSprite(100,340,50,50);
  pencil.addImage("pencil",pencilImg);
  pencil.scale=0.05;
  //pencil.debug=true;

  pump=createSprite(250,430,50,50);
  pump.addImage("pencil",pumpImg);
  pump.scale=0.07;
  
  dust=createSprite(100,460,50,50);
  dust.addImage("pencil",dustImg);
  dust.scale=0.15;

  doormat=createSprite(800,410,50,50);
  doormat.addImage("pencil",dmImg);
  doormat.scale=0.25;
  doormat.setCollider("circle",0,0,5);
  //doormat.debug=true;

  sword=createSprite(100,200,20,20);
  sword.scale=0.72;
  sword.addImage(swordImg);

  fruitGroup=createGroup();

}
var gameState="home";

function draw() {
  background("black");  
  //roomSound.play();
  sword.visible=false;
  
  if(gameState==="home"){
    background("black");  
    textSize(40);
    
    fill("white");
    text("Nayan's Helping Hand",400,100);
    
    if(keyDown("space")){
      gameState="room";
    }

  }

  if(gameState==="room"){
    bg.addImage("room",bg1);
   
  //roomSound.play();

  if(keyDown(RIGHT_ARROW)){
    boy.x=boy.x+10;
    boy.changeAnimation("boy-Right",boyRight);
  }

  if(keyDown(LEFT_ARROW)){
    boy.x=boy.x-10;
    boy.changeAnimation("boy-Left",boyLeft);
    
  }

//console.log(boy.x);
//console.log("y"+boy.y);

  if(keyDown(UP_ARROW)){
    boy.y=boy.y-10;
  boy.changeAnimation("boy",boyUP);
  }

if(keyDown(DOWN_ARROW)){
  boy.y+=10;
  boy.changeAnimation("boy",boyUP);
}

if(boy.isTouching(plane)){
  score=score+10;
  plane.destroy();
}
if(boy.isTouching(ball)){
  score=score+10;
  ball.destroy();
}

if(boy.isTouching(robot)){
  score=score+10;
  robot.destroy();
}

if(boy.isTouching(pencil)){
  score=score+10;
  pencil.destroy();
}

if(boy.isTouching(pump)){
  score=score+10;
  pump.destroy();
}

if(boy.isTouching(dust)){
  score=score+10;
  dust.destroy();
}

if(boy.isTouching(doormat)){
  score=score+10;
  doormat.destroy();
}




drawSprites();

fill("red");
textSize(20);
text("Score:"+score,170,300);
if(score===70){
  gameState="cook";
}
}


if(gameState==="cook"){
  spawnFruits();
  sword.visible=true;

 
 bg.destroy();


  sword.x=mouseX;
  sword.y=mouseY;

  textSize(30);
  text("Score : "+score1,700,50);
  text("Kitchen",500,50);
  

  if(fruitGroup.isTouching(sword)) {
    fruitGroup.destroyEach();
    score1=score1+2;
  }
  drawSprites();

  if(score1===20){
    gameState="End";
  }
}

if(gameState==="End"){
  textSize(30);
  fill("white");
  text("Thank you for playing!!", 500,100);
  text("Hope you enjoyed!!", 500,200);
}





}


