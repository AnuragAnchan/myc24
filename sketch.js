const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;


function preload()
{
    
}

function setup() {
    createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;
        paper= new Paper(100,20,20,20);
        
//Create the Bodies Here.


    Engine.run(engine);
  
}

function draw() {
  
  background("black");

paper.display();



  
drawSprites();
 
}




