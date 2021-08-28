   class Snow {
        constructor(x, y) {
            var options = {
                restitution: 1,
                friction: 0,
            }
            //this.r = 10;
             this.x=x;
	         this.y=y;
             this.image = loadImage("snow4.webp")
            // this.body=Bodies.circle(this.x, this.y, options)
            //World.add(world, this.body);
        }
        display() {
    
           // var pos = this.body.position;
           // var angle = this.body.angle;
            
            push();
            //translate(pos.x, pos.y);
            //rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0, 50, 50);
            pop();
        }
    
    };
