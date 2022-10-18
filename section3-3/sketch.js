// テキスト「キーボード操作に反応する」
let x, y, vy;
const g = 1;
const jump = 20;


function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vy = 0;
}

function draw(){
  background(160, 192, 255);
  line(0, height/2 + 25, width, height/2 +25);
  ellipse(x, y, 50);

  y += vy;

  if(y < height/2){ vy += g }
  else{
    vy += 0;
    y = height/2}

  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  //if(keyIsDown(UP_ARROW)){ y -= 5; }
  //if(keyIsDown(DOWN_ARROW)){ y += 5; }
  //if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
  //if(keyIsDown(" ".charCodeAt(0))){ x-= 10; }
}

function keyPressed(){
  if(key == " "){
  vy = -jump
  }
}


// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
