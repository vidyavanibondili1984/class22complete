const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;
function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;
  var options={isStatic:true}
  var opt={restitution:0.9}
  ground=Bodies.rectangle(10,380,400,20,options);
  ball=Bodies.circle(200,100,20,opt);
  World.add(world,ground);
  World.add(world,ball);
  //console.log(object);
  //console.log(object.position.x);
 
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,800,50)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
}