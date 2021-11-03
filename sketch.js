var sword,swordImage,enemy1,enemy2,fruit1,fruit2,fruit3,fruit4,fruit,gameOver;
var score=0;
var end=0;
var play=1;
var gameState=1;


function preload(){
  
 fruit1Image=loadImage("fruit1.png");
 fruit2Image=loadImage("fruit2.png");
 fruit3Image=loadImage("fruit3.png");
 fruit4Image=loadImage("fruit4.png");
 swordImage=loadImage("sword.png");
 enemy1Image=loadImage("alien1.png");
 enemy2Image=loadImage("alien2.png");
  gameOverImage=loadImage("gameover.png");
}

function setup(){
createCanvas(600,600);
  
  
 sword=createSprite(540,300,10,10);
 sword.addImage(swordImage);

  gameOver=createSprite(300,300,10,10);
 gameOver.addImage(gameOverImage);
  gameOver.visible=false;
  
  fruitGroup=new Group();
  enemyGroup=new Group();
 

}

function draw(){
background("lightblue")
  

  
  if(gameState===play){
 sword.y=World.mouseY;
 sword.x=World.mouseX;
 
  fruits();
  enemies();
    
   if(fruitGroup.isTouching(sword)){
     fruitGroup.destroyEach();
     score=score+2;
   }
    
     if(enemyGroup.isTouching(sword)){
      enemyGroup.destroyEach();
      fruitGroup.destroyEach();
      sword.destroy();
      gameState=end ;
       
     gameOver.visible=true;
      
    }

    
  }  
  
 
    
  sword.debug=false;
  sword.setCollider("circle",0,0,50);
  
  drawSprites();
  
  fill("black");
  text("score:"+score,300,15);
}

function fruits(){
  
  if(World.frameCount%80===0){
    fruit=createSprite(600,200,60,60);
    fruit.scale=0.2;
    
    r=Math.round(random(1,4));
   if(r==1){
     fruit.addImage(fruit1Image);
   }else if(r==2){
     fruit.addImage(fruit2Image);
   }else if(r==3){
     fruit.addImage(fruit3Image);
   }else if(r==4){
     fruit.addImage(fruit4Image);
   }
  
    fruit.y=Math.round(random(50,340));
    fruit.velocityX=-7;
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
}
}

function enemies(){
  
   if(World.frameCount%200===0){
    monster=createSprite(600,200,60,60);
    monster.scale=0.9;
     
     monster.addAnimation("moving",enemy1Image); 
     monster.y=Math.round(random(100,300));
     monster.velocityX=-8;
     monster.setLifetime=50;
     
     enemyGroup.add(monster);
   }

}