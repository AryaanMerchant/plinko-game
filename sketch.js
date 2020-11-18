const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var stand1, stand2, stand3, stand4, stand5, stand6, stand7;
var particles = [];
var plinkos = [];


function setup() {
  createCanvas(1000,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500, 780, 1000, 20);

  stand1 = new Division(0, 680, 10, 200);
  stand2 = new Division(50, 680, 10, 200);
  stand3 = new Division(100, 680, 10, 200);
  stand4 = new Division(150, 680, 10, 200);
  stand5 = new Division(200, 680, 10, 200);
  stand6 = new Division(250, 680, 10, 200);
  stand7 = new Division(300, 680, 10, 200);
  stand8 = new Division(350, 680, 10, 200);
  stand9 = new Division(400, 680, 10, 200);
  stand10 = new Division(450, 680, 10, 200);
  stand11 = new Division(500, 680, 10, 200);
  stand12 = new Division(550, 680, 10, 200);
  stand13 = new Division(600, 680, 10, 200);
  stand14 = new Division(650, 680, 10, 200);
  stand15 = new Division(700, 680, 10, 200);
  stand16 = new Division(750, 680, 10, 200);
  stand17 = new Division(800, 680, 10, 200);
  stand18 = new Division(850, 680, 10, 200);
  stand19 = new Division(900, 680, 10, 200);
  stand20 = new Division(950, 680, 10, 200);
  stand21 = new Division(1000, 680, 10, 200);


  for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,75,10));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,175,10));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plink(j,275,10));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plink(j,375,10));
     
  }

  

  
  
}

function draw() {
   background(0);

   Engine.update(engine);

   ground.display();

   stand1.display();
   stand2.display();
   stand3.display();
   stand4.display();
   stand5.display();
   stand6.display();
   stand7.display();
   stand8.display();
   stand9.display();
   stand10.display();
   stand11.display();
   stand12.display();
   stand13.display();
   stand14.display();
   stand15.display();
   stand16.display();
   stand17.display();
   stand18.display();
   stand19.display();
   stand20.display();
   stand21.display();
   


   for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  
  if(frameCount%60===0){
   particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   
 }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }

   

}