
let x, y, vy, X, Y, VX, VY, n, ny, vny;
let startTime, state;
const g = 1;
const jump = 20;
const second = 15;
let moji=["G","a","m","e"," ","O","v","e","r"];


function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height*6/7;
  vy = 0;
  X = width / 2;
  Y = height / 2;
  VX = 2;
  VY = 2;
  n = 20;
  ny = 0;
  vny = 4;
  state = 0;
}


function draw(){
 
  background(160, 192, 255);
  line(0, height*6/7 + 25, width, height*6/7 + 25);
  
  fill(255-n*7,0,0);
  rect(X, Y, 70, 70);
  X += VX;
  Y += VY;
  if(X < 0 || X > width){ VX = -1 * VX;}
  if(Y < 0 || Y > height*2/3){ VY = -1 * VY;}
  X = constrain(X, 0, width);
  Y = constrain(Y, 0, height);

  fill(0);
  ellipse(x, y, 50);
  y += vy;
  if(y < height*6/7){ vy += g;}
  else{
    vy += 0;
    y = height*6/7;
  }
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  
  textSize(40);
  textAlign(CENTER,CENTER);
  text(n, X + 35, Y + 35);
  if(dist(X+35, Y+35, x, y) < 25){n = n-1};
  n = constrain(n,0,20);

  if(n == 0){state = 3}

  if (state == 0) {gameStart()} 
  else if (state == 1){gameTime()} 
  else if (state == 2){gameOver()}
  else if (state == 3){gameClear()}
   
}

function gameStart(){
  background(255);
  fill(0);
  textSize(50);
  textAlign(CENTER);
  text("画面をクリックでスタート", width / 2, height / 2);
}

function gameTime(){
  let ellapsedTime = (millis() - startTime) / 1000;
    if (ellapsedTime > second) {
      state = 2;
    } 
    else {
      let remainingTime = second - ellapsedTime;
      textSize(40);
      text("残り時間"+floor(remainingTime)+"秒", width/2,height-20);
    }
}

function gameOver(){
  background(255,0,0);
  textSize(60);
  fill(0);
  for(let i = 0; i < 9; i++){
    text(moji[i], width/10 * (i + 1) , ny)
  }
  ny += vny;
  textSize(40);
  fill(255);
  text("Enterで再スタート",width / 2, height / 2 + 30)
}

function gameClear(){
  fill(random(100,255),random(100,255),random(100,255));
  textAlign(CENTER,CENTER);
  textSize(80);
  text("♥",X+35,Y+35);
  textAlign(CENTER,BOTTOM);
  text("オメデトウ！", width/2, height/2);
  textSize(50);
  fill(255);
  text("Enterで再スタート",width/2,height-20);
  textSize(15);
  text("^_^", x, y); 
} 

function keyPressed(){
  if(key == " "){vy = -jump};
  if(key == "Enter"){
    n = 20;
    state = 0;
  }
}

function mouseClicked() {
  if (state == 0) {
    startTime = millis();
    state = 1;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}