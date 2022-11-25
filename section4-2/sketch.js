//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(160, 192, 255);
  balls = [];
  let n = 0
}

function draw(){
  //background(160, 192, 255);
  //for(let i = 0; i < balls.length; i++){
    //let b = balls[i];
    //ellipse(b.x, b.y, b.size);
    //b.x += b.vx;
    //b.y += b.vy;
    
  //}
if(balls.length<60){
    let n={x: random(0,width), y: random(0,height), size: random(5,60), vx:5, vy:5};
    balls.push(n);
    ellipse(n.x, n.y, n.size);
    n++;
}
else{
  background(160, 192, 255);
  balls.length=0
}
  

}

 //balls[i] = { x: random(0,width), y: random(0,height), size: random(5,60), vx: random(1,100), vy:random(1,100) };
    //balls.push(b);

    //function mouseDragged(){ // ドラッグされたらボールを増やす
      //const dx = mouseX - pmouseX;
      //const dy = mouseY - pmouseY;
      //if(mag(dx, dy) > 5){ // mag(x,y) はベクトル(x,y)の長さ
        //const b = { x: mouseX, y: mouseY, size: 20, vx: dx, vy: dy };
        //balls.push(b);
      //}
    //}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
