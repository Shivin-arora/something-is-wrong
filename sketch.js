
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(400,150,450,50);
bob1=new Bob(250,530,75,75);
bob2=new Bob(325,530,75,75);
bob3=new Bob(400,530,75,75);
bob4=new Bob(475,530,75,75);
bob5=new Bob(550,530,75,75);

rope1=new Chain(bob1.paper,roof.roof,2,150);
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
  background(80,80,80);
  roof.show();
  bob1.show();
  bob2.show();
  bob3.show();
  bob4.show();
  bob5.show();
  
  rope1.display();
  drawSprites();
 
}



