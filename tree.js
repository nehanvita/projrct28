class Tree {

    constructor(x,y,width,height){
        var options ={
            isStatic :true 
        }
this.body =Bodies.rectangle(x,y,width,height,options)
this.width=width;
this.height=height;
World.add(world,this.body)
this.image = loadImage("Plucking mangoes/tree.png");

    }
     
    display(){
    var treepos=this.body.position
    imageMode(CENTER)
    image(this.image,treepos.x,treepos.y,500,500); 

    }








}