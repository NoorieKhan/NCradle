const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1,ball2,ball3,ball4;
var con1,con2,con3,con4

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true
				
	}
var ball_options = {
  isStatic:false,
  restitution:1,
  friction:0,
  density:0.8	
}
// change x pos
ball1 = Bodies.circle(300,350,20,ball_options)
ball2 = Bodies.circle(325,350,20,ball_options)
ball3 = Bodies.circle(350,350,20,ball_options)
ball4 = Bodies.circle(400,350,20,ball_options)
World.add(world,ball1)
World.add(world,ball2)
World.add(world,ball3)
World.add(world,ball4)


/*con1 = Matter.Constraint.create({
	pointA:{x:200,y:20},
	bodyB:ball1,
	pointB:{x:0,y:0},
	length:100,
	stiffness:0.1
  });
  World.add(world,con1);
  con2 = Matter.Constraint.create({
	bodyA:ball1,
	bodyB:ball2,
	pointB:{x:0,y:0},
	length:100,
	stiffness:0.1
  });
  World.add(world,con2);
  con3 = Matter.Constraint.create({
	bodyA:ball2,
	bodyB:ball3,
	pointB:{x:0,y:0},
	length:100,
	stiffness:0.1
  });
  World.add(world,con3);
  con4 = Matter.Constraint.create({
	bodyA:ball3,
	bodyB:ball4,
	pointB:{x:0,y:0},
	length:100,
	stiffness:0.1
  });
  World.add(world,con4);*/
  roof = Bodies.rectangle(400,100,230,20,roof_options);
  World.add(world,roof);

Engine.run(engine);

con1=new rope(ball1,roof,-80, 0)
con2=new rope(ball2,roof,-40, 0)
con3=new rope(ball3,roof,0, 0)
con4=new rope(ball4,roof,40, 0)
	//rope5=new rope(bob5,roof,80, 0)




	
	
  
}

function draw() {
  rectMode(CENTER);
  background("purple");

  

  strokeWeight(2);
  stroke(255);
  
  background("purple");
  Engine.update(engine);
  ellipse(ball1.position.x,ball1.position.y,40,40);
  ellipse(ball2.position.x,ball2.position.y,40,40);
  ellipse(ball3.position.x,ball3.position.y,40,40);
  ellipse(ball4.position.x,ball4.position.y,40,40);
  
  rect(roof.position.x,roof.position.y,230,20);
  
 
 

  //call display() to show ropes here

  con1.display()
  con2.display()
  con3.display()
  con4.display()
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      
      Matter.Body.applyForce(ball1,ball1.position,{x:-50,y:-45});
    }
}
