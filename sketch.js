var garden,rabbit;
var gardenImg,rabbitImg;
var leaf,leafImage;
var apple,appleImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImage = loadImage("orangeLeaf.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apple = createSprite(200,150,30,30);
    apple.scale =0.09;
    apple.addImage("apple",appleImg);
    apple.velocityY=2;
    apple.y=Math.round(random(50,120));
}


function draw() {
  background(0);
  rabbit.x=World.mouseX; 
  edges= createEdgeSprites();
  rabbit.collide(edges);

  if (rabbit.isTouching(apple)) {
    apple.destroy();
  }
  
  spawnleaf();
  
  drawSprites();
}
function spawnleaf(){
  if (frameCount%80===0) {
    leaf=createSprite(50,50,40,10);
    leaf.addImage("leaf",leafImage);
    leaf.velocityY=4;
    leaf.scale=0.1;
    leaf.y=Math.round(random(300,50));
    leaf.depth=rabbit.depth;
    rabbit.depth=rabbit.depth+1;
}
}






    



