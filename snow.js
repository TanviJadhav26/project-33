class Snow{
    constructor(x,y,r){
        var option={
            restitution:0.5,
                density:1,
            friction:0.5,
        }
        this.body=Bodies.circle(x,y,r,option);

        World.add(world,this.body);
       this.r=r;
       this.image1=loadImage("snow4.webp");
       this.image2=loadImage("snow5.webp");

    }
    display(){
        var pos=this.body.position;
        var rand=random(1,2);

        push ();
        translate (pos.x,pos.y);
        rotate (this.body.angle);
        imageMode(CENTER);
        if(rand===1){
            image(this.image1,0,0,this.r,this.r);
        }
       else{
        image(this.image2,0,0,this.r,this.r);
       }
        
        
        pop ();

    }
}