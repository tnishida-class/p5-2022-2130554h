// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0);
  balloon(50,50,"I love keyakizaka46",0,255,0);
}

function balloon(x,y,t,r,g,b){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;

  fill(r,g,b);
  noStroke();
  rect(x, y, w + p * 2, h + p * 2);
  triangle(x + w + p * 2 - (w + p * 2)/5, y + h + p * 2,
           x + w + p * 2 - (w + p * 2)/10, y + h + p * 2 + (h + p * 2)/2,   
           x + w + p * 2, y + h + p * 2);

  fill(255);
  textAlign(CENTER,BOTTOM);
  text(t, x + (w+p*2)/2, y + (h+p*2));
}
