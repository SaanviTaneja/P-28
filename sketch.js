
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;
	tree = new Tree(1150,300,20,20);
	mango1 = new Mango(400,350);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  tree.display();
  mango1.display();
  drawSprites();
 
}



