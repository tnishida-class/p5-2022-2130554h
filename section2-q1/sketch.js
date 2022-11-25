// 小手調べ
function setup(){
  createCanvas(100,100);
  noFill();
  strokeWeight(1);



  


  //strokeWeight(1);
  //stroke(255,0,0);
  //ellipse(50,50,100);
  //ellipse(50,50,90);
  //ellipse(50,50,80);
  //ellipse(50,50,70);
  //ellipse(50,50,60);
  //stroke(0,0,255);
  //ellipse(50,50,50);
  //ellipse(50,50,40);
  //ellipse(50,50,30);
  //ellipse(50,50,i*5)


  for(let i = 0; i < 10; i++){
    if(i < 5){
     stroke(0,0,255)
    }
    else{
      stroke(255,0,0)
    }
     ellipse(50,50, (i + 1)*10);
  }
}