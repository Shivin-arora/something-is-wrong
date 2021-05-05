class Bob{

    constructor(x,y,r){
    
        var option={
           isStatic : true,
            restitution : 0.3,
            density : 0.5,
            friction :1.2
        }
        this.paper = Bodies.circle(x,y,r,option);
       this.radius=r;
        World.add(world, this.paper);
    
    }
    
    
    show(){
    
    push();
   var pos = this.paper.position; 
    var angle = this.paper.angle;
    
    translate(pos.x,pos.y);
    rotate(angle);
    fill("pink");
    ellipseMode(CENTER);
    ellipse(0,0,this.radius,this.radius);
    pop();
    }
    
    }