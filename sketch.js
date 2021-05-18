var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

bananaImage = loadImage("banana.png");
obstaceImage = loadImage("obstacle.png");
}

function setup() {
createCanvas(1000,590);  
var survivalTime=0;
score=0;

var monkey=createSprite(50,435,20,20);
monkey.addAnimation("running",monkey_running);
monkey.scale=0.2;

var ground=createSprite(0,570,5000,150);
ground.shapeColor="green";
ground.VelocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);

var sun= createSprite(910,50,50,50);
sun.shapeColor="yellow";

FoodGroup= new Group();
obstaclesGroup= new Group();
    }

function draw() {
background("skyblue");
if(ground.x<0){
ground.x=ground.width/2;
}
if(keyDown("space")){
monkey.velocityY=-12;
}

monkey.velocityY=monkey.velocityY + 0.8;
monkey.collide(ground);
drawSprites();
 

}






