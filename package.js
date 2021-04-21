class Package {
    constructor(x,y,r){
     var options = {
         isStatic: true,
         restitution: 0.4,
         
     }
     this.r = r;
     this.body = Bodies.circle(x,y,r,options);
     this.image = loadImage("package.png");
     World.add(world,this.body);
    }

    display(){
        var boxobj = this.body.position;
         
        push();
        translate(boxobj.x,boxobj.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}