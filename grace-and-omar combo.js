var osc;
var oscType = 'sine';
var play = false
var c;
var sineTrue = true;
var triangleTrue = false;
var linesTrue = false;
var squaresTrue = false;

function triangleParty(){
fill(random(0,255));
triangle(random(width*2), random(height*2), random(200), random(200),random(200), random(200));
triangle(random(width/2), random(height/2), random(500), random(500),random(500), random(500));
}

//circle function for 'sine' oscType
function circles() {
  var x = 50;
  var y = 50;
  x = x + random(-1, 1);
  y = y + random(-1, 1);
  noStroke();
  ellipse(x, y, 50, 50);
  ellipse(x + 50, y + 50, 50, 50);
  ellipse(x + 100, y - 30, 50, 50);
  ellipse(x + 150, y + 40, 50, 50);
  ellipse(x + 220, y + 10, 50, 50);
  ellipse(x + 180, y - 50, 50, 50);
}

//triangle function for 'triangle' oscType
function triangles() {
  var a = 0;
  a = a + random(-1, 1);
  noStroke();
  triangle(a + 50, a + 50, a + 30, a + 90, a + 70, a + 90);
  triangle(a + 100, a + 50, a + 80, a + 10, a + 120, a + 10);
  triangle(a + 180, a + 30, a + 160, a + 70, a + 200, a + 70);
}

//line function for 'sawtooth' oscType
function lines() {
  var b = 0;
  b = b + random(-1, 1);
  stroke(c);
  line(b+10, b+10, b+70, b+50);
  line(b+40, b+30, b+20, b+80);
  line(b+80, b+60, b+200, b+20);
  line(b+80, b+60, b+200, b+20);
  line(b+180, b+30, b+200, b+80);
  line(b+220, b+90, b+290, b+10);
}

//rect function for 'square' oscType
function squares() {
  var d = 0
  d = d + random(-1,1);
  for (i = 10; i < 300; i += 50) {
 	 rect(d+i+10, d+40, d+10, d+50);
  }
  for (i = 10; i < 300; i += 50) {
 	 rect(d+i+40, d+10, d+10, d+50);
  }
}

function setup() {
  createCanvas(400, 400);
frameRate(5);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(255);
  osc.amp(0);
  osc.start();
  c = color(244, 188, 188)

}

function draw() {
  background(66, 134, 244);

  //code for running visuals
  if (play) {
    fill(c);
    if (sineTrue) {
      circles();
    } else if (triangleTrue) {
      triangles();
    } else if (linesTrue) {
      lines();
    } else if (squaresTrue) {
      squares();
    } else if (linesTrue, sqauresTrue) {
      squares(); triangles();
  }
  }

  //text
  textAlign(CENTER);
  fill(random(200,150));
  noStroke(1);
  textSize(32);
  text('Click to play! \nPress keys\n A,S,D,F,G,H,J,K \nfor different notes. \nPress 1 - 4 \nfor different sounds.\nPress M for mute \nand T for ∆.', width/2, 75);

}

//controls notes, type of oscillator and visuals
function keyPressed() {
  if (key == 'A') {
    osc.freq(255);
    c = color(244, 188, 188);
  } else if (key == 'S') {
    osc.freq(285);
    c = color(244, 219, 188);
  } else if (key == 'D') {
    osc.freq(320);
    c = color(244, 240, 188);
  } else if (key == 'F') {
    osc.freq(340);
    c = color(203, 244, 188);
  } else if (key == 'G') {
    osc.freq(380);
    c = color(188, 244, 240);
  } else if (key == 'H') {
    osc.freq(425);
    c = color(188, 204, 244);
  } else if (key == 'J') {
    osc.freq(475);
    c = color(217, 188, 244);
  } else if (key == 'K') {
    osc.freq(510);
    c = color(244, 188, 238);
  } else if (key == '1') {
    osc.setType('sine');
    sineTrue = true;
  } else if (key == '2') {
    osc.setType('triangle');
    triangleTrue = true;
    sineTrue = false;
  } else if (key == '3') {
    osc.setType('sawtooth');
    linesTrue = true;
    sineTrue = false;
    triangleTrue = false;
  } else if (key == '4') {
    osc.setType('square');
    squaresTrue = true;
    sineTrue = false;
    triangleTrue = false;
    linesTrue = false;
  }else if (key == 'T') {//triangle button
    triangleParty();
    } else if (key == 'M') {//mute button
    osc.freq(0);
    c = color(0, 0, 0);
  
    
  }
}

//smooth fade
function mouseClicked() {
  if (play == false) {
    osc.amp(1.0, 0.1);
    play = true;
  } else {
    osc.amp(0.1, 1.0);
    play = false;
  }
}
