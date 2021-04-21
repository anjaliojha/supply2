var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageImage = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	
	packagesprite = createSprite(width/2,80,10,10);
	packagesprite.addImage(packageImage);
	packagesprite.scale = 0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	

	engine = Engine.create();
	world = engine.world;

	box1 = new Box(400,655,200,20);
	ground = new Ground(400,660,800,10);
	packageBody = Bodies.circle(width/2,200,5,{restitution:0.4,isStatic:true});

	Engine.run(engine)
}


function draw() {
  background("blue");
  Engine.update(engine);

  rectMode(CENTER);
  
  box1.display();
  
  ground.display();

  packagesprite.x = packageBody.position.x;
  packagesprite.y = packageBody.position.y;

  drawSprites();


  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
     Matter.Body.setStatic(packageBody,false);
    
  }
}



