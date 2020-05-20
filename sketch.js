const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var rect1,rect2;
var ground;
var paper,shooter;
var dustbin,dustIm
function preload(){
   dustIm=loadImage("images/trashbin.png");
}

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;

 ground = new Rect(400,575,800,50);
 paper = new Paper(100,250,60,60);
 shooter = new Sling(paper.body,{x:100,y:230});
 dustbin = createSprite(650,500,1,1);
 dustbin.addImage(dustIm);
 dustbin.scale = 0.25;
 rect1 = new Rect(610,500,2,110);
 rect2 = new Rect(688,500,2,110);

}

function draw() {
  background(200,0,0);  

  ground.display();
  paper.display();
  shooter.display();
  rect1.display();
  rect2.display();

Engine.update(engine);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  shooter.fly();
}