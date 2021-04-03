class Snake{
    constructor(){
        this.body=Bodies.rectangle(200,200,20,20,{isStatic:true})
        World.add(world,this.body)
        this.snakeArr=[]
       
    }

    display(){
        text(this.snakeArr.length, 350,20)
        var pos=this.body.position
        ellipseMode(RADIUS)
        fill("green")
        ellipse(pos.x,pos.y,20,20)
        if(keyDown("up"))
        {
          pos.y-=20;
          
        
        }
        
         if(keyDown("down")){
          pos.y+=20;
        
         }
        
         if(keyDown("left")){
          pos.x-=20;
      
        }
        
        if(keyDown("right")){
          pos.x+=20;
          
        }

        //make each snake block follow the previous one
    // for (var i = group.length - 1; i > 0; i--) {
    //     group.get(i).x = group.get(i-1).x;
    //     group.get(i).y = group.get(i-1).y;
    
     // }

    }
}