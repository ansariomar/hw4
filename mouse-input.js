// http://alpha.editor.p5js.org/omarprograms/sketches/SkiKOoA8z
//use the above link in order to run the program with the necessary asset


var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;


var playingA = false
var playingS = false
var playingD = false
var playingF = false


var oscA, oscS, oscD, oscF;

var playing = false;
var mickey = false;

function ellipseParty(){
fill(random(0,255));
ellipse(random(width), random(height), random(100), random(100));
ellipse(random(width), random(height), random(500), random(500));
}

function rectParty(){
fill(random(0,255));
rect(random(width), random(height), random(100), random(100));
rect(random(width), random(height), random(500), random(500));
}
  
function triangleParty(){
fill(random(0,255));
triangle(random(width*2), random(height*2), random(200), random(200),random(200), random(200));
triangle(random(width/2), random(height/2), random(500), random(500),random(500), random(500));

}


function lewittParty() {
  createCanvas(400, 400);
  noFill;
  rect(0, 0, 399, 399);
  noStroke();

  fill(random(0,255)); //gray
  rect(35, 35, 165, 165); //top L 
  fill(random(0,255),random(0,255),random(0,255)); //yellow
  rect(200, 35, 165, 165); //top R 
  fill(random(0,255),random(0,255),random(0,255)); //pink
  rect(35, 200, 165, 165); //bottom L 
  fill(random(0,255)); //blue
  rect(200, 200, 165, 165); //bottom R 
}




var img;
function preload() {
  img = loadImage('Mickey.png');
}

function setup() {
  frameRate(10);

  createCanvas (500,500);
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);

  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();

  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();

  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();

  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function draw() {
  background(255, 255, 0)
  text('Click once inside\n the canvas to begin.\nThen press A/S/D/F\n keys to play.\nClick and hold for fun!\n(ᵔᴥᵔ)', width/2, 100);
  textSize(50)
  if (playingA) {
    lewittParty();
    
  }
  if (playingS) {
    background(100, 0, 255);
    rectParty();
  }
    if (playingD) {
      background(100,50,100);
      triangleParty();
    }
  if (playingF) {
    background(100, 100, 50);
    ellipseParty();
  }
  
  if(mickey){
    image(img, mouseX, mouseY);
  }
  }



  function keyPressed() {
    print("got key press for ", key);
    var osc;
    if (key == 'A') {
      osc = oscA;
      playingA = true
    } else if (key == 'S') {
      osc = oscS;
      playingS = true
    } else if (key == 'D') {
      osc = oscD;
      playingD = true

    } else if (key == 'F') {
      osc = oscF;
      playingF = true
    }
    if (osc) {
      osc.amp(0.5, 0.1);
      playing = true;
    }
  }

  function keyReleased() {
    print("got key release for ", key);
    var osc;
    if (key == 'A') {
      osc = oscA;
      playingA = false
    } else if (key == 'S') {
      osc = oscS;
      playingS = false
    } else if (key == 'D') {
      osc = oscD;
      playingD = false

    } else if (key == 'F') {
      osc = oscF;
      playingF = false

    }
    if (osc) {
      osc.amp(0, 0.5);
      playing = false;
    }
  }
function mousePressed(){
  mickey = true;
  
}

function mouseReleased(){
	mickey = false;
}
