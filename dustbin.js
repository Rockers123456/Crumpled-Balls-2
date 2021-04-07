class Dustbin {
    constructor() {
      var options = {
          isStatic:true
      }
      this.body1 = Bodies.rectangle(600,520,20,100,options);
      this.body2 = Bodies.rectangle(700,520,20,100,options);
      this.body3 = Bodies.rectangle(650,520,0,0, options);
      this.image=loadImage("dustbingreen.png");
      World.add(world, this.body1);
      World.add(world, this.body2);
      World.add(world, this.body3);
    }
    display(){
      var pos =this.body1.position;
      push();
      //rectMode(CENTER);
      //fill(45,45,54);
      //rect(pos.x,pos.y,20,100);
      pop();
      var pos =this.body2.position;
      push();
      //rectMode(CENTER);
      //fill(45,45,54);
      //rect(pos.x,pos.y,20,100);
      pop();
      var pos =this.body3.position;
      push();
      imageMode(CENTER);
      //fill(45,45,54);
      image(this.image,pos.x,pos.y,100,100);
      pop();
    }
  }
  