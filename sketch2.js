var snake,food,lives=3,group,gameState="play",score=0,edges;
function setup(){
    snake=createSprite(200,200,20,20)
    snake.shapeColor=("lightgreen")

    food=createSprite(random(20,380),random(20,380),20,20)
    food.shapeColor="red"

    group=new Group();
    group.add(snake);

    edges=createEdgeSprites();

}

function draw(){
    background(0)
fill(255)
textSize(20)
text("Lives left: "+ lives,250,20)
text("Score: "+ score,20,20)

if(gameState==="play"){

    if(snake.isTouching(food)){
        food.x=random(20,380)
        food.y=random(20,380)
       score+=1; 

        var s = createSprite(200,200, 20,20);
        s.shapeColor=(random(120,255),random(120,255),random(120,255))
        
        group.add(s);

    }

  //make each snake block follow the previous one
  for (var i = group.length - 1; i > 0; i--) {
    group.get(i).x = group.get(i-1).x;
    group.get(i).y = group.get(i-1).y;

  }

  if(lives===0){
  gameState="end"
  }

  if(snake.isTouching(edges)){
    lives-=1;
  }
    
    keyPressed()
    drawSprites();
}

if(gameState==="end"){
    textSize(50)
    fill("red")
    text("GameOver",100,200)
}


}

function keyPressed(){
    console.log("key pressed")
    if(keyDown("up"))
  {
    snake.velocityY=-10;
    snake.velocityX=0

  }

    if(keyDown("down"))
    {
    snake.velocityY=10;
    snake.velocityX=0
    }

    if(keyDown("left"))
   {
    snake.velocityX=-10;
    snake.velocityY=0;
   }

    
    if(keyDown("right"))
   {
    snake.velocityX=10;
    snake.velocityY=0;
   }
}