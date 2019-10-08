
//good car
var myCar;

//bad cars
var allMyBadCar = [];
var amountOfBadCar = 7;

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
  for(var i=0; i<amountOfBadCar; i++){
    //instance
    var tempBadCar = new BadCar(random()*(13*windowWidth) + windowWidth, (windowHeight/2)-291, 180, 90, 2);
    allMyBadCar.push(tempBadCar); //si azzerano ogni volta gli imput
  }

  //random bad car 2
    for(var i=0; i<amountOfBadCar; i++){
      //instance
      var tempBadCar2 = new BadCar(random()*(13*windowWidth) + windowWidth, (windowHeight/2)-168, 180, 90, 2.5);
      allMyBadCar.push(tempBadCar2); //si azzerano ogni volta gli imput
    }

    //random bad car 3
      for(var i=0; i<amountOfBadCar; i++){
        //instance
        var tempBadCar3 = new BadCar(random()*(13*windowWidth) + windowWidth, (windowHeight/2)-45, 180, 90, 2);
        allMyBadCar.push(tempBadCar3); //si azzerano ogni volta gli imput
      }

      //random bad car 4
        for(var i=0; i<amountOfBadCar; i++){
          //instance
          var tempBadCar4 = new BadCar(random()*(13*windowWidth) + windowWidth, (windowHeight/2)+48, 180, 90, 3);
          allMyBadCar.push(tempBadCar4); //si azzerano ogni volta gli imput
        }

        //random bad car 5
          for(var i=0; i<amountOfBadCar; i++){
            //instance
            var tempBadCar5 = new BadCar(random()*(13*windowWidth) + windowWidth, (windowHeight/2)+201, 180, 90, 2);
            allMyBadCar.push(tempBadCar5); //si azzerano ogni volta gli imput
          }

//------------------------------------------------------------------------------------------------

  // winnerline
myWinnerLine = new WinnerLine(5.5*windowWidth, 0, 50,windowHeight);

//------------------------------------------------------------------------------------------------

//random trees
  for(var i=0; i<amountOfTrees; i++){
    //instance top trees
    var tempTree = new Tree(random()*(8*windowWidth) + 0, random()*((windowHeight/2)-310) + 0, 20,'darkGreen');
    allMyTrees.push(tempTree);
  }

  for(var i=0; i<amountOfTrees; i++){
    //instance top flowers
    var tempTree2 = new Tree(random()*(8*windowWidth) + 0, random()*((windowHeight/2)-310) + 0, 10,'pink');
    allMyTrees.push(tempTree2);
  }

  for(var i=0; i<amountOfTrees; i++){
    //instance bottom trees
    var tempTree3 = new Tree(random()*(8*windowWidth) + 0, windowHeight-30, 20,'darkGreen');
    allMyTrees.push(tempTree3);
  }

  for(var i=0; i<amountOfTrees; i++){
    //instance bottom flowers
    var tempTree4 = new Tree(random()*(8*windowWidth) + 0, windowHeight-15, 10,'pink');
    allMyTrees.push(tempTree4);
  }

//------------------------------------------------------------------------------------------------

  // put setup code here
}


//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

function draw() {

  //grass
  background('green');

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

//instructions text
    fill('white');
    noStroke();
    textAlign(CENTER,CENTER);
    textSize(20);
    text('move the mouse, dodge all the cars and win', width/2, 80 + 30);


//---------------------------------------------------

//display e move bad cars

    for (var i=0; i<allMyBadCar.length; i++) {
      var tempBadCar = allMyBadCar[i];
      tempBadCar.move();
      tempBadCar.display();
    }

    for (var i=0; i<allMyBadCar.length; i++) {
      var tempBadCar2 = allMyBadCar[i];
      tempBadCar2.move();
      tempBadCar2.display();
    }

    for (var i=0; i<allMyBadCar.length; i++) {
      var tempBadCar3 = allMyBadCar[i];
      tempBadCar3.move();
      tempBadCar3.display();
    }


    for (var i=0; i<allMyBadCar.length; i++) {
      var tempBadCar4 = allMyBadCar[i];
      tempBadCar4.move();
      tempBadCar4.display();
    }

    for (var i=0; i<allMyBadCar.length; i++) {
      var tempBadCar5 = allMyBadCar[i];
      tempBadCar5.move();
      tempBadCar5.display();
    }



//------------------------------------------------------------------------------------------------


  //display e move trees

        for (var i=0; i<allMyTrees.length; i++) {
          var tempTree = allMyTrees[i];
          tempTree.move();
          tempTree.display();
        }

        for (var i=0; i<allMyTrees.length; i++) {
          var tempTree2 = allMyTrees[i];
          tempTree2.move();
          tempTree2.display();
        }

        for (var i=0; i<allMyTrees.length; i++) {
          var tempTree3 = allMyTrees[i];
          tempTree3.move();
          tempTree3.display();
        }

        for (var i=0; i<allMyTrees.length; i++) {
          var tempTree4 = allMyTrees[i];
          tempTree4.move();
          tempTree4.display();
        }

//------------------------------------------------------------------------------------------------

        //winnerline
            myWinnerLine.move();
            myWinnerLine.display();

            //my car
                myCar.display();


//end of draw
}

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//-----------------------------------------

//good car
function Car(_x, _y, _width, _height){
  //inner properties
  this.width = _width;
  this.height= _height;
  this.x = _x;

//display method
  this.display = function() {

    //body
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
  //end of good car
}

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//-----------------------------------------

//bad cars
function BadCar(_x, _y, _width, _height, _speed){
  //inner properties
  this.width = _width;
  this.height= _height;
  this.x = _x;
  this.y = _y;
  this.speed = _speed;

  var xIncrease = 1;

  //move method
  this.move = function(){
    this.x += -xIncrease*this.speed;

    //------------------------------------------------------------------------------------------------

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

    //------------------------------------------------------------------------------------------------

//display method
  this.display = function() {

  //create the car
    fill('blue');
    rect(this.x, this.y, this.width,this.height);
    //car roof
    stroke('darkBlue');
    rect(this.x+70, this.y+10, 80,70);
    //windows
    fill('darkBlue');
    quad(this.x+70,this.y+10,this.x+50,this.y+15,this.x+50,this.y+75,this.x+70,this.y+80);
    quad(this.x+150,this.y+10,this.x+160,this.y+12,this.x+160,this.y+78,this.x+150,this.y+80);
    //lights
    fill('yellow');
    noStroke();
    rect(this.x+0, this.y+5, 10,20);
    rect(this.x+0, this.y+65, 10,20);

  }
}

//end of bad car
//-----------------------------------------
//-----------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

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

  //move method
  this.move = function(){
    this.x += -xIncrease*this.speed;

//------------------------------------------------------------------------------------------------

    //winner line stops when it touches the good car
    if((this.x < 280) && (this.x > 100))
    {
    xIncrease = xIncrease * 0;
    this.speed == 0.0;
    }

//------------------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------------------

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
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

//trees
function Tree(_x, _y, _diameter, _color){
  //inner properties
  this.diameter = _diameter
  this.x = _x;
  this.y = _y;
  this.speed = 1;


  var xIncrease = 1;
  var yIncrease = 0;

//------------------------------------------------------------------------------------------------
  //move methods
  this.move = function(){
    this.x += -xIncrease*this.speed;

    }

//------------------------------------------------------------------------------------------------

//display method
  this.display = function() {

  //create the line
    fill(_color);
    ellipse(this.x,this.y,_diameter,_diameter);

  }
}

//end of winnerline
//-----------------------------------------
//------------------------------------------------------------------------------------------------
