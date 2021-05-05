class Chain{

    constructor(BodyA,BodyB,offsetX,offsetY){
this.offsetX=offsetX;
this.offsetY=offsetY;

        var options={
    bodyA:BodyA,
    bodyB:BodyB,
    pointB:{x:this.offsetX, y:this.offsetY}
   

}      
        this.body= Constraint.create(options);
        World.add(world,this.body);

    }

display(){ 
    var pos1 = this.bodyA.position;
    var pos2 = this.bodyB.position;

console.log("pos1 x"+ pos1.x+"pos1 y"+ pos1.y);

console.log("pos2 x"+ pos2.x+"pos2 y"+ pos2.y);

    strokeWeight(4);
    line(pos1.x,pos1.y,pos2.x,pos2.y);
}

}