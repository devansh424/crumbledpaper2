const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,paperImg,ground,side0,side1,side2,bin,binImg;

function preload() {
  binImg=loadImage("sprites/dustbingreen.png");
}

function setup() {
  createCanvas(900, 400);

  engine = Engine.create();
  world = engine.world;

  paper = new Paper(50, 360, 10);
  ground = new Ground(400, 380, 1100, 20);
  
  side0 = new Box(690, 300, 20, 110);
  side1 = new Box(735, 360, 70, 20);
  side2 = new Box(760, 300, 20, 110);

  bin = createSprite(725,305,20,20);
  bin.addImage(binImg);
  bin.scale = 0.4;
  
  Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  paper.display();
  ground.display();

  side0.display();
  side1.display();
  side2.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, {x:16, y: -17})
	}
}