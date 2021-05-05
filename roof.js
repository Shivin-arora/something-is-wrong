class Roof{

    constructor(x,y,width,height){
    
        var option={
           isStatic : true,
        }
        this.roof = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world, this.roof);
    
    }
    
    
    show(){
    
    push();
    var pos = this.roof.position; 
    var angle = roof.roof.angle;
    
    translate(pos.x,pos.y);
    rotate(angle);
    fill("yellow");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }
    
    }