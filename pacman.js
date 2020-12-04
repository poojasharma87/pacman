//////////////////////////////////////////
// PACMAN CLASS
///////////////////////////////////////////

class Pacman
{
  constructor(){
  // set default properties
  this.xpos = 400;
  this.ypos = 350;
  this.speed = 2;
  //this.direction = "stopped";
  
  
}

display()
{
  
  // if pacman is just starting out and hasn't started moving yet
  
 if(keyCode === RIGHT_ARROW)
  {
    this.xpos=this.xpos+5;
    image(pacmanRight, this.xpos, this.ypos);
  }
  else if(keyCode === LEFT_ARROW)
  {
    this.xpos=this.xpos-5;
    image(pacmanLeft, this.xpos-5, this.ypos);
  }
  else if(keyCode === UP_ARROW)
  {
    this.ypos=this.ypos-5;
    image(pacmanUp, this.xpos, this.ypos-5);
  }
  else if(keyCode === DOWN_ARROW)
  {
    this.ypos=this.ypos+5;
    image(pacmanDown, this.xpos, this.ypos+5);
  }
  else{

    image(pacmanStand, this.xpos, this.ypos);
  }
  
  // wrap pacman if pacman reaches the edge of the screen
  if(this.xpos > 800)
  {
    this.xpos = 0;
  }
  if(this.xpos < 0)
  {
    this.xpos = width;
  }
}
}