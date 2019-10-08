
//good car
var myCar;

//bad cars
var allMyBalls = [];
var amountOfBalls = 7;

//winnerLine
var myWinnerLine;

//trees
var allMyTrees = [];
var amountOfTrees = 60;



function preload(){



}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background('gray');

// good car
myCar = new Car(100, mouseY, 180,90);



//random bad car
  for(var i=0; i<amountOfBalls; i++){
    //instance
    var tempBall = new Ball(random()*(13*windowWidth) + windowWidth, (windowHeight/2)-291, 180, 90, 2);
    allMyBalls.push(tempBall); //si azzerano ogni volta gli imput
  }

  //random bad car
    for(var i=0; i<amountOfBalls; i++){
      //instance
      var tempBall2 = new Ball(random()*(13*windowWidth) + windowWidth, (windowHeight/2)-168, 180, 90, 2.5);
      allMyBalls.push(tempBall2); //si azzerano ogni volta gli imput
    }

    //random bad car
      for(var i=0; i<amountOfBalls; i++){
        //instance
        var tempBall3 = new Ball(random()*(13*windowWidth) + windowWidth, (windowHeight/2)-45, 180, 90, 2);
        allMyBalls.push(tempBall3); //si azzerano ogni volta gli imput
      }

      //random bad car
        for(var i=0; i<amountOfBalls; i++){
          //instance
          var tempBall4 = new Ball(random()*(13*windowWidth) + windowWidth, (windowHeight/2)+48, 180, 90, 3);
          allMyBalls.push(tempBall4); //si azzerano ogni volta gli imput
        }

        //random bad car
          for(var i=0; i<amountOfBalls; i++){
            //instance
            var tempBall5 = new Ball(random()*(13*windowWidth) + windowWidth, (windowHeight/2)+201, 180, 90, 2);
            allMyBalls.push(tempBall5); //si azzerano ogni volta gli imput
          }


  // winnerline
myWinnerLine = new WinnerLine(5.5*windowWidth, 0, 50,windowHeight);

//random trees
  for(var i=0; i<amountOfTrees; i++){
    //instance
    var tempTree = new Tree(random()*(8*windowWidth) + 0, random()*((windowHeight/2)-310) + 0, 20,'darkGreen');
    allMyTrees.push(tempTree);
  }

  for(var i=0; i<amountOfTrees; i++){
    //instance
    var tempTree2 = new Tree(random()*(8*windowWidth) + 0, random()*((windowHeight/2)-310) + 0, 10,'pink');
    allMyTrees.push(tempTree2);
  }

  for(var i=0; i<amountOfTrees; i++){
    //instance
    var tempTree3 = new Tree(random()*(8*windowWidth) + 0, windowHeight-30, 20,'darkGreen');
    allMyTrees.push(tempTree3);
  }

  for(var i=0; i<amountOfTrees; i++){
    //instance
    var tempTree4 = new Tree(random()*(8*windowWidth) + 0, windowHeight-15, 10,'pink');
    allMyTrees.push(tempTree4);
  }



  // put setup code here
}

function draw() {

  //grass
  background('green');

//instruction


  //streetline
    stroke('white');
    strokeWeight(5);
    line(0,windowHeight/2,windowWidth,windowHeight/2);



  //street
  push();
    noStroke();
    fill('gray');
    rectMode(CENTER)
    rect(windowWidth/2,windowHeight/2,windowWidth,600);
    pop();

    fill('white');
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(20);
    text('move the mouse, dodge all the cars and win', width/2, 80 + 30);


//---------------------------------------------------
//display e move bad car


    for (var i=0; i<allMyBalls.length; i++) { //va da 0 alla lunghezza delle mie balls
      var tempBall = allMyBalls[i];
      tempBall.move();
      tempBall.display();
    }

    for (var i=0; i<allMyBalls.length; i++) { //va da 0 alla lunghezza delle mie balls
      var tempBall2 = allMyBalls[i];
      tempBall2.move();
      tempBall2.display();
    }

    for (var i=0; i<allMyBalls.length; i++) { //va da 0 alla lunghezza delle mie balls
      var tempBall3 = allMyBalls[i];
      tempBall3.move();
      tempBall3.display();
    }


    for (var i=0; i<allMyBalls.length; i++) { //va da 0 alla lunghezza delle mie balls
      var tempBall4 = allMyBalls[i];
      tempBall4.move();
      tempBall4.display();
    }

    for (var i=0; i<allMyBalls.length; i++) { //va da 0 alla lunghezza delle mie balls
      var tempBall5 = allMyBalls[i];
      tempBall5.move();
      tempBall5.display();
    }






  //display e move trees

        for (var i=0; i<allMyTrees.length; i++) { //va da 0 alla lunghezza delle mie balls
          var tempTree = allMyTrees[i];
          tempTree.move();
          tempTree.display();
        }

        for (var i=0; i<allMyTrees.length; i++) { //va da 0 alla lunghezza delle mie balls
          var tempTree2 = allMyTrees[i];
          tempTree2.move();
          tempTree2.display();
        }

        for (var i=0; i<allMyTrees.length; i++) { //va da 0 alla lunghezza delle mie balls
          var tempTree3 = allMyTrees[i];
          tempTree3.move();
          tempTree3.display();
        }

        for (var i=0; i<allMyTrees.length; i++) { //va da 0 alla lunghezza delle mie balls
          var tempTree4 = allMyTrees[i];
          tempTree4.move();
          tempTree4.display();
        }


        //winnerline
            myWinnerLine.move();
            myWinnerLine.display();

            //my car
                myCar.display();




//--------------------
//end of draw
}

//-----------------------------------------

//good car
function Car(_x, _y, _width, _height){
  //inner properties
  this.width = _width;
  this.height= _height;
  this.x = _x;


  



//display method
  this.display = function() {



    noStroke();
    fill('red');
    rect(this.x, mouseY, this.width,this.height);
    //car roof
    stroke('darkRed');
    rect(this.x+30, mouseY+10, 80,70);
    //windows
    fill('darkRed');
    quad(this.x+110,mouseY+10,this.x+110,mouseY+80,this.x+130,mouseY+75,this.x+130,mouseY+15);
    quad(this.x+20,mouseY+12,this.x+20,mouseY+77,this.x+30,mouseY+80,this.x+30,mouseY+10);
    //lights
    fill('yellow');
    noStroke();
    rect(this.x+170, mouseY+5, 10,20);
    rect(this.x+170, mouseY+65, 10,20);


  }



}

//end of good car
//-----------------------------------------

//bad car
function Ball(_x, _y, _width, _height, _speed){
  //inner properties
  this.width = _width;
  this.height= _height;
  this.x = _x;
  this.y = _y;
  this.speed = _speed;
  this.stroke = 'aquamarine';

  var xIncrease = 1;
  var yIncrease = 0;

  //methods
  this.move = function(){
    this.x += -xIncrease*this.speed;

    //bad car stops when it touches the good car
    if((this.x < 280) && ((this.x > 100) && (this.y < mouseY + 90) && (this.y > mouseY - 90)))
    {
    xIncrease = xIncrease * 0;
    this.speed == 0.0;
    }

    //gameover
    if((this.x < 280) && ((this.x > 100) && (this.y < mouseY + 90) && (this.y > mouseY - 90)))
    {
        //background
          fill('red');
          rect(0,0, windowWidth,windowHeight);

        //text
        noStroke();
          fill('white');
          textAlign(CENTER,CENTER);
          textSize(30);
          text('Refresh to try again', width/2, height/2 + 30);
          textSize(90);
          text('OH NO!', width/2, height/2 - 30);
          gameover()=true;
      }

    }



//display method
  this.display = function() {

  //create the car
    fill('blue');
    rect(this.x, this.y, this.width,this.height);
    //car roof
    stroke('darkBlue');
    rect(this.x+30, this.y+10, 80,70);
    //windows
    fill('darkBlue');
    quad(this.x+110,this.y+10,this.x+110,this.y+80,this.x+130,this.y+75,this.x+130,this.y+15);
    quad(this.x+20,this.y+12,this.x+20,this.y+77,this.x+30,this.y+80,this.x+30,this.y+10);
    //lights
    fill('yellow');
    noStroke();
    rect(this.x+170, this.y+5, 10,20);
    rect(this.x+170, this.y+65, 10,20);

  }
}

//end of bad car
//-----------------------------------------


//winnerline
function WinnerLine(_x, _y, _width, _height){
  //inner properties
  this.width = _width;
  this.height= _height;
  this.x = _x;
  this.y = _y;
  this.speed = 4;


  var xIncrease = 1;
  var yIncrease = 0;

  //methods
  this.move = function(){
    this.x += -xIncrease*this.speed;

    //bad car stops when it touches the good car
    if((this.x < 280) && (this.x > 100))
    {
    xIncrease = xIncrease * 0;
    this.speed == 0.0;
    }

    //win
    if((this.x < 280) && (this.x > 100))
    {
        //background
          fill('gold');
          rect(0,0, windowWidth,windowHeight);

        //text
        noStroke();
          fill('brown');
          textAlign(CENTER,CENTER);
          textSize(30);
          text('Refresh to play again', width/2, height/2 + 30);
          textSize(90);
          text('CONGRATS, YOU WIN!', width/2, height/2 - 30);
          gameover()=true;
      }
    }



//display method
  this.display = function() {
    angleMode(DEGREES);

  //create the line
    fill('white');
    rect(this.x, this.y, this.width,this.height);

  }
}

//end of winnerline
//-----------------------------------------


//trees
function Tree(_x, _y, _diameter, _color){
  //inner properties
  this.diameter = _diameter
  this.x = _x;
  this.y = _y;
  this.speed = 1;


  var xIncrease = 1;
  var yIncrease = 0;

  //methods
  this.move = function(){
    this.x += -xIncrease*this.speed;

    }



//display method
  this.display = function() {

  //create the line
    fill(_color);
    ellipse(this.x,this.y,_diameter,_diameter);

  }
}

//end of winnerline
//-----------------------------------------
