
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;


var snow=[];
var bg;
var snowman,snowmanImage;
function preload(){
  bg=loadImage("snow1.jpg");
snowmanImage=loadImage("snowman.png");
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    ground=new Ground();
    if(frameCount%100===0){
      for(var i=0;i<100;i=i+1){
        snow.push(new Snow(random(10,790),random(-10,100),30) )
      }
    }
  snowman=createSprite(400, 290, 50, 50);
  snowman.addImage(snowmanImage);
  snowman.scale=0.5;
}

function draw() {
  background(bg);  
  Engine.update(engine);
  drawSprites();
  ground.display();
  for(var i=0;i<100;i=i+1){
    snow[i].display();
  }
}