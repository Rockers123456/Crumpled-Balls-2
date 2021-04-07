
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbin=new Dustbin();
ground=new Ground(400,580,800,20);
ball=new Ball(50,550,30);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,182,193);
  ground.display();
  ball.display();
  dustbin.display();
  
  
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:145,y:-145});
	}
}


