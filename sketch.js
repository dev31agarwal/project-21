var bullet,wall;
var speed, weight, thickness;
var damage;

function setup() {
  var canvas=createCanvas(1600,400);
  bullet=createSprite(50, 200 , 60, 10);
  thickness=random(22, 83);
  wall=createSprite(1500, 200, thickness, height/2);

  speed=random(223, 321);
  weight=random(30, 52);
 
  bullet.velocityX=speed;
}

function draw() {
  background(0);  
  drawSprites();
  
  if(bullet.collide(wall)){
    damage=(0.5*weight*speed*speed)/(wall.width*wall.width*wall.width);
  }

  if(damage<10){
    wall.shapeColor="red";
  }
  else{
    wall.shapeColor="green"
  }

  
}
