class Stone{

    constructor(x,y,radius){

        var options = {
            isStatic:false,
            friction: 1.0,
            restitution:0,
            density:1.0

        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius = radius;
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world, this.body)
       
    }
    display(){
        var stonepos =this.body.position;
        fill(255,0,255);
        imageMode(CENTER);    
        image(this.image,stonepos.x,stonepos.y,70,70);
        
    }
}