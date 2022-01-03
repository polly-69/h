var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost=createSprite(300,300);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.3

doorsGroup=new Group()
climbersGroup=new Group() 
}
 


function draw() {
  background(200);

if (gameState==="play"){



console.log(tower.y);
  if(tower.y > 400){
      tower.y = 300
    }

  if (keyDown("space")){
  ghost.velocityY=-5
  }
ghost.velocityY+= 0.4

if (keyDown("left_arrow")){
  ghost.x=ghost.x-2
}

if (keyDown("right_arrow")){
  ghost.x=ghost.x+2
}

  doors()

if (climbersGroup.isTouching(ghost)){
ghost.velocityY=0
ghost.destroy()
gameState="end"
}

}
if (gameState==="end")
{stroke("yellow"); 
fill("yellow");
 textSize(30); 
 text("Game Over", 230,250)}

 
    drawSprites();
}

function doors()  {
  if(frameCount%240===0){
 door=createSprite(200,-50)
 door.addImage("door",doorImg);
 //door.scale=0.6
 door.x=Math.round(random(120,400))
door.velocityY=1

climber=createSprite(200,10)
climber.addImage("climber",climberImg);
//climber.scale=0.3
climber.x=door.x
climber.velocityY=1

doorsGroup.add(door)
climbersGroup.add(climber)
   }
}