var a,b,c,d,e,f;
var canx=1282;
var cany=800;
var i=0;
function setup() {
  createCanvas(canx,cany);
  background(0);
}

function draw() {
  if(millis()<6717){
  a=random(canx);
  b=random(cany);
  c=random(100);
  d=random(60,100);
  textSize(c);
  textFont("Courier");
  fill(255,d);
  text("Leave",a,b);
  frameRate(12);
  i++;
  }
  else if(millis()<12000){
    for(var e=0;e<4;e++){
    background(0,e/4*100);
    frameRate(1);
    }
  }
  // else if(millis()>9000){
  //   window.open("index2.html");
  //   load("signal.mp4");
  // }
  // else if(millis()<19000){
  //   createVideo("signal.mp4");
  // }
  else if(millis()>9000){
    background(0);
    textSize(50);
    textAlign(CENTER);
    fill(0,255,0);
    text("[Disconnected]",canx/2,cany/2);
  }
}
setTimeout(function(){window.location.href='disconnected.html'},10000);