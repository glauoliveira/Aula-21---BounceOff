var retFixo, retMovendo;

function setup() {
  createCanvas(1200,800);
  retFixo = createSprite(800, 100, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(400, 800,80,30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;

  retMovendo.velocityY = -5;
  retFixo.velocityY = +5;

  obj1 = createSprite(100, 100, 50, 80);
  obj1.shapeColor = "green";
  obj2 = createSprite(200, 100, 50, 80);
  obj2.shapeColor = "green";
  obj3 = createSprite(300, 100, 50, 80);
  obj3.shapeColor = "green";
  obj4 = createSprite(400, 100, 50, 80);
  obj4.shapeColor = "green";

}

function draw() {
  background(0,0,0);  

  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;
  
  if (isTouching(retMovendo, obj1)){
    retMovendo.shapeColor = "blue";
    obj1.shapeColor = "blue";
  }else{
    retMovendo.shapeColor = "green";
    obj1.shapeColor = "green";
  }
  
  if (retMovendo.x - retFixo.x < retFixo.width/2 + retMovendo.width/2
    && retFixo.x - retMovendo.x < retFixo.width/2 + retMovendo.width/2) {
  retMovendo.velocityX = retMovendo.velocityX * (-1);
  retFixo.velocityX = retFixo.velocityX * (-1);
}
if (retMovendo.y - retFixo.y < retFixo.height/2 + retMovendo.height/2
  && retFixo.y - retMovendo.y < retFixo.height/2 + retMovendo.height/2){
  retMovendo.velocityY = retMovendo.velocityY * (-1);
  retFixo.velocityY = retFixo.velocityY * (-1);
}
  drawSprites();
}

function isTouching(objeto1, objeto2){
    if (objeto1.x - objeto2.x < objeto2.width/2 + objeto1.width/2
      && objeto2.x - objeto1.x < objeto2.width/2 + objeto1.width/2
      && objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2
      && objeto1.y - objeto2.y < objeto2.height/2 + objeto1.height/2) {
      return true;
    }
  else {
    return false;
    }
  }