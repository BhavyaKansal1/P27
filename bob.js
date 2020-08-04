class Bob {
    constructor(x,y) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction:0,
            density:0.75
        }
        this.body = Bodies.circle(x,y,20,options);
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(255,20,147);
        ellipse(0,0,20);
        pop();
    }
}