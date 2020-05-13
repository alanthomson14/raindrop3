var raindrop;

function setup() {
  createCanvas(800,400);
  raindrop = createSprite(20,20,5,5);

  raindrop.velocityY = 3;
  raindrop.shapeColor ="blue"
}

function draw() {
  background(0); 
  if(raindrop.y>400){
    raindrop.x = Math.round(random(20,780))
    raindrop.velocityY = (random(5,9))
  } 
  raindrops();
  drawSprites();
}
function raindrops(){
  if (frameCount%25 === 0){
  var raindrops1 = createsprite(50,0,10,45)
  raindrop1.x = Math.round(random(0,100))
  raindrops1.shapeColor = "green";
  raindrops1.velocity =4;
  }
}


