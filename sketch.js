var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1200,400);

  bullet=createSprite(50,200,50,50);
  bullet.shapeColor="blue";

  wall=createSprite(1100,200,60,height/2);

  speed=random(223,321);

  thickness=random(22,83);

  weight=random(30,52);
  
console.log(100);
}

function draw() {
  background("black"); 

  fill ("white");

  stroke ("white");

  bullet.velocityX=speed;

  bullet.X=wall.X;

  text ( Math.abs(bullet.x - wall.x) , 100, 100);

  if(wall.x-bullet.x <(bullet.width + wall.width)/2){
    bullet.velocityX=0;

    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
     wall.shapeColor=color(255,0,0)
    }
    if(damage<10) {
     wall.shapeColor=color(0,255,0);
  }
}
  
  drawSprites();
}
















































