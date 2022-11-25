// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

let x;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 200;
}



function draw(){
  background(160, 192, 255);
  
  if(keyIsDown(" ".charCodeAt())){x = 5};
  if(!keyIsDown(" ".charCodeAt())){x = 1};

  count = (count + x) % cycle;  
  
  if(count<100){ellipse(width / 2, height / 2, count);}
  else{ellipse(width / 2, height / 2, 200-count);}
}


