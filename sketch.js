var car ,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
  
  weight =random(400,700);
  
  car = createSprite(50, 200, 50, 50);
 
  wall = createSprite(700,200,60,height/2);
  wall.shapeColor=color(80,80,80)
  
}

function draw() {
  background(255,255,255);  
  if(car.x-wall.x<(car.width/2+wall.width)/2)
  {
     car.velocityX=0
     var deformation = 0.5*weight*speed*speed/22509
     if( deformation>180){
       car.shapeColor= color(255,0,0);
       console.log("t")
     }
     if(deformation<180&&deformation>100){
       car.shapeColor=color(230,230,0);
       console.log("p")

     }
     if(deformation<100){
      car.shapeColor=color(0,255,0);
      console.log("c")
    }
  }
  if(keyCode===32){
    car.velocityX=5;
  }
  drawSprites();
}