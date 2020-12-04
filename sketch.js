var pacman;
var ghosts = [];
var dots = [];
var lives;
var score;
var ghostRed, ghostGreen, ghostBlue, ghostOrange;
var pacmanLeft, pacmanRight, pacmanUp, pacmanDown, pacmanStand;
var heart;
var sirenSound, gameoverSound, startSound, scoreSound;
var gameStarted;

function preload()
{
  // load in ghost images
  ghostRed = loadImage('pacman/monster4.gif');
  ghostGreen = loadImage('pacman/monster1.gif');
  ghostOrange = loadImage('pacman/monster3.gif');
  ghostBlue = loadImage('pacman/monster5.gif');
  
  // load in pacman images
  pacmanLeft = loadImage('pacman/pacman_left.gif');
  pacmanRight = loadImage('pacman/pacman_right.gif');
  pacmanUp = loadImage('pacman/pacman_up.gif');
  pacmanDown = loadImage('pacman/pacman_down.gif');
  pacmanStand = loadImage('pacman/pacman_stand.gif');
 // pacmanRight3 = loadImage('pacman_right_3.png');
  
  // load in heart image
 heart = loadImage('pacman/special.gif');
  
  // load in sounds
  //soundFormats('mp3', 'ogg');
 sirenSound = loadSound('pacman/sirensound.wav');
 gameoverSound = loadSound('pacman/gameOversound.wav');
 scoreSound = loadSound('pacman/scoresound.wav');
startSound = loadSound('pacman/startSound.wav');
  
}

function setup() 
{
  // set canvas size
  createCanvas(800, 400);
  
  // create pacman object
  pacman = new Pacman();
  
  // default lives and score values
  lives = 3;
  score = 0;
  
  // create clear button
  startButton = createButton('Start Game');
  startButton.position(375, 200);
  startButton.mousePressed(startGame);
  
  // set gameStarted equal to false
  gameStarted = false;
  
}

function draw() 
{
  background(0);

  if(gameStarted == true)
  {
  
    // hide start button
    startButton.hide();
  
    // display score
    fill(200);
    noStroke();
    textSize(24);
    text("Score: " + score, 30, 50);
  
    // display number of lives
    switch(lives)
    {
      case 3:
        image(heart, 650, 30);
        image(heart, 690, 30);
        image(heart, 730, 30);
      break;
      case 2:
        image(heart, 690, 30);
        image(heart, 730, 30);
      break;
      case 1:
        image(heart, 730, 30);
      break;
    }

    // display pacman
    pacman.display();
  
    // random ghost hatching
    var ghostHatch = Math.ceil(random(30));
    if(ghostHatch == 1)
    {
      ghosts.push(new Ghost());
    }
  
    // random dot hatching
    var dotHatch = Math.ceil(random(30));
    if(dotHatch == 1)
    {
      dots.push(new Dot());
    }
  
    // loop through each ghost
    for (var i=0; i<ghosts.length; i++) 
    {
      // display ghost
      ghosts[i].display();
    
      // check if ghost reaches bottom of the screen
      if(ghosts[i].ypos > 500)
      {
        // remove ghost
        ghosts.splice(i, 1);
      
      } else {
      
        // check if pacman is touching ghost
        var d1 = dist(ghosts[i].xpos, ghosts[i].ypos, pacman.xpos, pacman.ypos);
        if(d1 < 50)
        {
          // remove ghost
          ghosts.splice(i, 1);
         
          // decrease lives by one
          lives --;
         
          // play siren sound
          sirenSound.play();
        }
      }
    }

    // loop through each dot
    for (var j=0; j<dots.length; j++) 
    {
      // display dots
      dots[j].display();
    
      // check if dot reaches bottom of screen
      if(dots[j].ypos > 500)
      {
        // remove dot
        dots.splice(j, 1);
    
      } else {
    
        // check if pacman is touching dot
        var d2 = dist(dots[j].xpos, dots[j].ypos, pacman.xpos, pacman.ypos);
        if(d2 < 25)
        {
          // remove dot
          dots.splice(j, 1);
        
          // increase score by one
          score++;
        
          // play score sound
          scoreSound.play();
        }
      }
    }
  
    // check for game over
    if(lives <= 0)
    {
      // reset lives and score
      lives = 3;
      score = 0;
      
      // reset pacman's position
      pacman.xpos = 400;
      pacman.direction = "stopped";
    
      // remove ghosts and dots
      ghosts = [];
      dots = [];
      
      // play gameover sound
      gameoverSound.play();
      
      // set gameStarted to false
      gameStarted = false;
    }
  
  } else {
	  
    // show start button
    startButton.show();
	  
  }
}

function startGame()
{
  // change gameStarted variable
  gameStarted = true;
  
  // play starting sound
 startSound.play();
}






