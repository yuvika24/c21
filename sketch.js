var fixedRect, movingRect,land,sea,sun;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  land = createSprite(200,400,80,30);
  sea = createSprite(300,400,80,80);
  sun = createSprite(800,400,40,40);
  land.debug = true;
  sea.debug= true;
  sun.debug = true;
 
}

function draw() {
  background(0,0,0); 
  console.log(movingRect.x-fixedRect.x);
  
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    
  }
  else{

      movingRect.shapeColor = "yellow";
      fixedRect.shapeColor = "yellow";
    
  }

  if(isTouching(movingRect,sun)){
    movingRect.shapeColor = "red";
    sun.shapeColor = "red";
    
  }
  else{

      movingRect.shapeColor = "yellow";
      sun.shapeColor = "yellow";
    
  }
  
  if(isTouching(movingRect,land)){
    movingRect.shapeColor = "red";
    land.shapeColor = "red";
    
  }
  else{

      movingRect.shapeColor = "yellow";
      land.shapeColor = "yellow";
    
  }
  
  if(isTouching(movingRect,sea)){
    movingRect.shapeColor = "red";
    sea.shapeColor = "red";
    
  }
  else{

      movingRect.shapeColor = "yellow";
      sea.shapeColor = "yellow";
    
  }
  drawSprites();
}

