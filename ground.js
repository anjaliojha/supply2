class Ground {
    constructor(x,y,width,height){
     var options = {
         isStatic: true,
         restitution: 0.3
     }
     this.width = width;
     this.height = height;
     this.body = Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body);
    }

    display(){
        var groundobj = this.body.position;
         
        push();
        //translate(groundobj.x,groundobj.y);
        fill("brown");
        rectMode(CENTER);
        rect(groundobj.x,groundobj.y,this.width,this.height);
        pop();
    }
}
