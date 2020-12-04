///////////////////////////////////////////
// DOT CLASS
///////////////////////////////////////////

class Dot
{  
    constructor(){
  // set default properties
  this.xpos = random(0, 600);
  this.ypos = 0;
  this.speed = random(1, 4);
}

display()
{
  ellipseMode(CENTER);
  fill(200);
  noStroke();
  ellipse(this.xpos, this.ypos, 25, 25);
  this.ypos = this.ypos + this.speed;
}
}