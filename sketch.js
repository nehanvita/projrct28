const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone;
var boyIMG, boy;

function preload(){
}

function setup() {
	createCanvas(1000, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,580,1000,40);
	boy = new Boy(190,520,10,10);
	tree = new Tree(800,340,10,10);

	mango1 = new Mango(800,150,40,40);
	mango2 = new Mango(700,200,30,30);
	mango3 = new Mango(750,260,30,30);
	mango4 = new Mango(900,230,50,50);
	mango5 = new Mango(950,300,50,50);
	mango6 = new Mango(600,300,40,40);
	

	stone = new Stone(120,450,10,10);
	sling = new Slingshot(stone.body,{x:135,y:460})


	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(200);

	ground.display();
	boy.display();
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	stone.display();
	sling.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);

	drawSprites();

}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY})
}

function mouseReleased() {
    sling.fly();
}

function detectCollision(Stone, Mango) {
	mangoBodyPosition = Mango.body.position;
	stoneBodyPosition = Stone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if(distance<=Mango.width+Stone.radius||distance<=Mango.height+Stone.radius) {
		Matter.Body.setStatic(Mango.body,false);
	}
}

function keyPressed() {
	if(keyCode == 32) {
		Matter.Body.setPosition(stone.body, {x:135,y:460});
		sling.attach();
	}
}
