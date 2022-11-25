// ダーツ

function setup() {
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  createCanvas(400, 400);
  background(255);
  stroke(255);
  strokeWeight(3);

  const cx = width / 2; // 中心は (cx, cy)
  const cy = height / 2;
  const maxR = min(width, height); // 大きさは幅と高さのうち小さい方

  drawCircle1(cx, cy, black, maxR);
  drawArcs1(cx, cy, green, red, maxR * 0.8);
  // BLANK[1] (hint: drawArcs x 3, drawCircle x 1)

  drawArcs2(cx, cy, cream, black, maxR * 0.75);
  drawArcs3(cx, cy, green, red, maxR * 0.5);
  drawArcs4(cx, cy, cream, black, maxR * 0.45);
  drawCircle2(cx, cy, green, maxR*0.1);

  drawCircle3(cx, cy, red, maxR * 0.05);
}

function drawCircle1(cx, cy, c, r){
  fill(c);
  ellipse(cx, cy, r, r);
}


function drawArcs1(cx, cy, c1, c2, r) {
  for (let i = 0; i < 20; i++) {
    let start = TWO_PI / 20 * i;
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? c1 : c2);
    arc(cx, cy, r, r, start, stop, PIE);
  }
}

function drawArcs2(cx, cy, c1, c2, r) {
  for (let i = 0; i < 20; i++) {
    let start = TWO_PI / 20 * i;
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? c1 : c2);
    arc(cx, cy, r, r, start, stop, PIE);
  }
}

function drawArcs3(cx, cy, c1, c2, r) {
  for (let i = 0; i < 20; i++) {
    let start = TWO_PI / 20 * i;
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? c1 : c2);
    arc(cx, cy, r, r, start, stop, PIE);
  }
}

function drawArcs4(cx, cy, c1, c2, r) {
  for (let i = 0; i < 20; i++) {
    let start = TWO_PI / 20 * i;
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? c1 : c2);
    arc(cx, cy, r, r, start, stop, PIE);
  }
}

function drawCircle2(cx, cy, c, r){
  fill(c);
  ellipse(cx, cy, r, r);
}
function drawCircle3(cx, cy, c, r){
  fill(c);
  ellipse(cx, cy, r, r);
}