// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){

  createCanvas(800, 900);
  calendar(1972,1);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 1970; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

//カレンダー
function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  let day = ["日", "月", "火", "水", "木", "金", "土"];
  if(dow > 0){day.push(" ")};
  if(dow > 1){day.push(" ")};
  if(dow > 2){day.push(" ")};
  if(dow > 3){day.push(" ")};
  if(dow > 4){day.push(" ")};
  if(dow > 5){day.push(" ")};

  for(let d = 1; d <= daysInMonth(y, m); d++){
    day.push(d)
  }
  
  let size = width / 7;
  let n = 0
  for(let j = 0; j < 7; j++){
  for(let i = 0; i < 7; i++){
      rect(size*i,size*j,size,size);
      textSize(50);
      textAlign(CENTER);
      text(day[n],size*i + size/2,size*j + size/2);
      n++;
    }
  }
  textAlign(CENTER,BOTTOM);
  text(y +"年"+ m +"月のカレンダー" , 400,870)
}

//うるう年かどうか
function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

//うるう年なら1年は366日なので365を返す、そうでないなら365を返す関数(isLeapYearの結果を使う)
//一年が何日か
function daysInYear(y){
 if(isLeapYear(y)){
  return 366;
 }
 else{
  return 365;
 }
}


//1か月が何日あるか返す関数(2月はうるう年かどうかに依存、4/6/9/11は30、そのほかは31を返す)
function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

//y年m月d日が1年のうちで何日目かを返す関数(y年1月の日数+2月の日数+...として最後にd日を足す)
function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

//y年m月d日が何曜日か返す(基準日からの経過日数(daysInYearとdaysOfYearを使う)を7で割って判別)
function dayOfWeek(y, m, d){
  daycount = 0;
  for(let i = 1970; i < y; i++){
    if(isLeapYear(i)){daycount = daycount + 366;}
    else{daycount = daycount + 365;}
  }

  daycount = daycount + dayOfYear(y, m, d);

  if(daycount % 7 == 0){
    return 3;
  }
  else if(daycount % 7 == 1){
    return 4;
  }
  else if(daycount % 7 == 2){
    return 5;
  }
  else if(daycount % 7 == 3){
    return 6;
  }
  else if(daycount % 7 == 4){
    return 0;
  }
  else if(daycount % 7 == 5){
    return 1;
  }
  else{
    return 2;
  }
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
