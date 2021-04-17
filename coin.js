class Coin{
    constructor(x,y){
        this.image=loadImage("coin.png")
this.body=Bodies.circle(x,y,10)
this.radius=50;
World.add(world,this.body)

    }
    display(){
        var pos=this.body.position;
        imageMode(RADIUS)
        image(this.image,pos.x,pos.y,this.radius,this.radius)
    }
}