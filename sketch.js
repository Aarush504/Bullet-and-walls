var bullet,wall;
var speed,weight, thickness;
var deformation;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  

  wall = createSprite(1500, 200, thickness, height/2);

  speed = random(223,3210);
  weight  = random(30,52);
  wall.thickness = random(22,83);
}

function draw() {
  background(255,255,255);  
  bullet.velocityX = speed;

  if(bullet.x - wall.x < wall.width/2 + bullet.width/2 ){
    bullet.velocityX = 0;
    deformation = 0.5*speed*speed*weiht/thickness*thickness*thickness;
  

  /*if(deformation < 100){
    wall.shapeColor = (0,255,0);
  }*/

  if(deformation < 3.68 && deforation < 180){
    wall.shapeColor = (230,230,0);
  }

  if(deformation > 3.68){
    wall.shapeColor = (255,0,0);
  }
}
  drawSprites();
}
