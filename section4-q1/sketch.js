// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;
  //let h = height * scores[i] / 100;
  let px, py; // 線を引くために一つ前の点を覚えておく変数
  for(let i = 0; i < scores.length; i++){
    let h = height * scores[i] / 100;
    strokeWeight(10);
    point(dx*i+20, height-h);
  }
  for(let i = 0; i < scores.length; i++){
    strokeWeight(3);
    line(dx*i+20, height-height * scores[i] / 100, dx*(i+1)+20, height-height * scores[i+1] / 100)
  }
}
