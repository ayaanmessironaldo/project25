class Ground{

    constructor(x,y,width,height){

        var options = {

            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(){

        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }  
}