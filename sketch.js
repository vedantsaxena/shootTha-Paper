const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;



function setup() {
  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;

  rect1 = new Rect(280,420,60,160);
  rect2 = new Rect(520,420,60,160);
  rect3 = new Rect(400,260,560,40);
  rect4 = new Rect(280,310,80,60);
  rect5 = new Rect(520,310,80,60);
  rect6 = new Rect(90,330,60,340);
  rect7 = new Rect(710,330,60,340);
  rf1 = new Rect(710,150,90,20);
  rf2 = new Rect(710,130,60,20);
  rf3 = new Rect(710,110,30,20);
  rf4 = new Rect(90,150,90,20);
  rf5 = new Rect(90,130,60,20);
  rf6 = new Rect(90,110,30,20);
  rf7 = new Rect(250,70,90,20);
  rf8 = new Rect(250,50,60,20);
  rf9 = new Rect(250,30,30,20);
  rf10 = new Rect(550,70,90,20);
  rf11 = new Rect(550,50,60,20);
  rf12 = new Rect(550,30,30,20);
  rect8 = new Rect(250,160,60,160);
  rect9 = new Rect(550,160,60,160);

}

function draw() {
  background(0);  

  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rect5.display();
  rect6.display();
  rect7.display();
  rf1.display();
  rf2.display();
  rf3.display();
  rf4.display();
  rf5.display();
  rf6.display();
  rf7.display();
  rf8.display();
  rf9.display();
  rf10.display();
  rf11.display();
  rf12.display();
  rect8.display();
  rect9.display();


  drawSprites();
}