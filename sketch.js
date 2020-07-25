//SUPPLY MISSION

//............................................................................................................................
//GLOBAL VARIABLES
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var part1, part2, part3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//...........................................................................................................................
//preload function
function preload()
{
	//loading image for helicopter and package
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

//...........................................................................................................................
//setup function
function setup() {
	
	//create canvas
	createCanvas(800, 700);
	
	//keeping rect in centre
	rectMode(CENTER);
	
	//for package
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//for helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//for ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    //engine
	engine = Engine.create();
	world = engine.world;

	//package restitution etc
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
	 World.add(world, ground);

	//creating a box
	boxPart1 = createSprite(375, 650, 200, 20);
	boxPart1.shapeColor = color(255, 0, 0);
	part1 = Bodies.rectangle(375, 635, 200, 20, {isStatic:true});
	World.add(world, part1);
	
	boxPart2 = createSprite(275, 610, 20, 100);
	boxPart2.shapeColor = color(255, 0, 0);
	part2 = Bodies.rectangle(275, 610, 20, 100, {isStatic:true});
	World.add(world, part2);
	
	boxPart3 = createSprite(475, 610, 20, 100);
	boxPart3.shapeColor = color(255, 0, 0);
	part3 = Bodies.rectangle(475, 610, 20, 100, {isStatic:true});
	World.add(world, part3);
	
    //engine
	Engine.run(engine); 
}

//...........................................................................................................................
//draw function
function draw() {
  
  //rectangle in centre 	
  rectMode(CENTER);
 
  //background color
  background(0);
  
  // package position x and y
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  //to draw sprites 
  drawSprites();

}
//..........................................................................................................................
// keypressed funtion
function keyPressed() {
 
	//if down arrow is pressed
	if (keyCode === DOWN_ARROW) {
		
	  Matter.Body.setStatic(packageBody,false);
  }
}
//.........................................................................................................................
//END END END END END END END END END END END END END END END END END END END END END END END END END END END END END END END 
//.........................................................................................................................
