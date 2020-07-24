var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var ground1,ground2,ground3,ground4;
var divisionHeight = 300;
var score = 0;
var turn = 0;
var particle1;
var gameState = 'play';

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,height,width,20);
  ground2 = new Ground(0,height/2,10,height);
  ground3 = new Ground(width/2,0,width,20);
  ground4 = new Ground(width,height/2,10,height);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  //scores
  textSize(20)
  text("Score : "+score,20,30);
  text(100,20,700);
  text(100,100,700);
  text(200,180,700);
  text(200,260,700);
  text(1000,340,700);
  text(1000,420,700);
  text(200,500,700);
  text(200,580,700);
  text(100,660,700);
  text(100,740,700);

  Engine.update(engine);
 
  //display arrays:-
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if (particle1!=null) {
     particle1.display();
     pos = particle1.body.position;
     if (pos.y > 760) {
       if (pos.x < 100 || pos.x > 640) {
        score = score + 100;
        particle1 = null;
       }
       if (pos.x > 100 && pos.x < 320 ) {
        score = score + 200;
        particle1 = null;
       }

       if (pos.x > 480 && pos.x < 640) {
          score = score + 200;
          particle1 = null;
       }
       if (pos.x > 320 && pos.x < 480) {
        score = score + 1000;
        particle1 = null;
       }
     
     
   }
  }

  if (turn == 5) {
    gameState = 'end';
    textSize(50);
    text("GAME OVER",250,250);
  }

   //display
   ground1.display();
   ground2.display();
   ground3.display();
   ground4.display();
}

function mousePressed(){

  if ( gameState !== 'end' ) {
    turn++
    particle1 = new Particle(mouseX,10,10,10);
  }
}