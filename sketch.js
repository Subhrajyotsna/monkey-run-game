//create global variables
var monkey , monkey_running
var banana ,bananaImage, obstacle3, obstacleImage,obstacle9
var FoodGroup, obstacleGroup
var score
var bg,bgrunning,ground,Oimage,Oimage2

var survivalTime = 0;

function preload(){
  
  //load images 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bgrunning = loadImage("ca9500b3e1c33107-scrolling-background-game-images.gif")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  Oimage = loadImage("0.gif");
   Oimage2 = loadImage("rainbow-banana-fruit-rainbow-banana.png");
  
 
}



function setup() {
  //create sprites and canvas
createCanvas(300,400)
  
  bg = createSprite(0,200,1550,300);
  bg.addImage("bg5",bgrunning)

  bg.x = bg.width/2
  bg.scale = 1.07;
  
  monkey = createSprite(50,300,6,6);
  monkey.addAnimation("move",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,335,900,10);
  ground.visible = false;
  
  obstacleGroup = new Group();
  
  FoodGroup = new Group();


}


function draw() {
  //to avoid repeating
background("black")
  
 //create infinite ground
    bg.velocityX = -4;
  if(bg.x<0) {
bg.x = bg.width/2;
  }
  //to make monkey jump and collide with the ground 
   monkey.collide(ground);
  if(keyDown("UP_ARROW")&&monkey.y>=120){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY+1.8
  //if(monkey.isTouching(obstacleGroup)){
  
    
 // }

   obstacles5();
   stone5();
  drawSprites();
  //display survival time
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :"+score,500,50);
  
   stroke("#fc46aa");
  textSize(20);
  fill("#fa86c4");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("SurvivalTime🐒 : "+survivalTime,75,25)
      
}

//function for banana 
function obstacles5(){
 if (frameCount%80 == 0) {
   obstacle9 = createSprite(400,5,5,5);
   obstacle9.y = Math.round(random(90,200));
    obstacle9.scale = 0.25
   obstacle9.lifetime = 250;
  
   obstacle9.velocityX = -2;
   
   var rando = Math.round(random(1,2));
   switch(rando) {
       case 1 :  obstacle9.addImage(Oimage2);
      
       break;
    case 2 :  obstacle9.addImage(bananaImage);
        obstacle9.scale =0.1
       break;
    default : break;
   }
   
   FoodGroup.add(obstacle9);
 }
}
//function for obstacles
function stone5(){
 if (frameCount%100 == 0) {
   obstacle3 = createSprite(400,315,5,5);
    obstacle3.scale = 0.09
  
   obstacle3.velocityX = -2; 
   obstacle3.addImage(obstacleImage);
   obstacle3.lifetime = 250;
      
   obstacleGroup.add(obstacle3);
     
   }
   
 }

