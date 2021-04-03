const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var arr = [], food
var snake;
function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;



  createFood()
  snake = new Snake()
}

function draw() {
  // background(255,255,25);
  Engine.update(engine);







  if (isTouching(snake,food)) {
    //World.remove(world, food);
   console.log('touching')
    Matter.Body.setPosition(food.body,random(50, 350),random(50, 350))
    // over here, rather than removing it, you may simply place it at some other random location
  }
  else { }
  //  var position=[a.x,a.y]
  //  arr.push(position)
  //  if(arr.length >= 5)
  //  arr.pop();
  // food.destroy()
  //   food=createSprite(random(50,350),random(50,350),20,20)
  // food.shapeColor="red"
  // arr.length+=1
  // }


  // for(var i=0;i<arr.length;i++){

  //   ellipse(arr[i][0],arr[i][1],20,20)
  // }
  if (food)
    console.log(food.x, food.y)

  snake.display()
  drawSprites();
}



function createFood() {
  food = Bodies.rectangle(random(50, 350), random(50, 350), 20, 20);
  World.add(world, food);
  ellipseMode(RADIUS)
  fill("red");
  ellipse(food.position.x, food.position.y, 20, 20)


}