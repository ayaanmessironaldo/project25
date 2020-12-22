const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin, dustbinImage, ground;
var boxL, boxR, boxD;

function setup() {
	
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,400,70);

	ground = new Ground(400,675,800,20);

	/*dustbin = createSprite(600,555,1,1);
	dustbin.addImage("dustbinImage",dustbinImage);
	dustbin.scale = 0.5;*/

	box = new Box(600,650);
	/*boxL = new Box(680);
	boxR = new Box(675,555,20,165);*/

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(200);

  paper.display();
  ground.display();
  box.display(); 
}

function keyPressed(){

	if(keyDown(UP_ARROW)){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:14,y:-15})
	}
}