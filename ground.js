class Ground{
    constructor(){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,390,800,20,option);
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,1200,20);

    }
}