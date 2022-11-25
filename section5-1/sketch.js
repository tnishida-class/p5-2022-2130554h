// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(260, 200);
  background(0,0,255);
  //for(let i = 0; i < 12; i++){
    //let theta = TWO_PI *i / 12;
    //let x = 130 + cos(theta) * 60;
    //let y = 100 + sin(theta) * 60;
    //ellipse(x,y,10)
    
}

function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }

  endShape(CLOSE);
}

function draw(){
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI *i / 12;
    let x = 130 + cos(theta) * 60;
    let y = 100 + sin(theta) * 60;
  fill(255,255,0);
  stroke(255,255,0);
  star(x,y,9);
}
}
// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
