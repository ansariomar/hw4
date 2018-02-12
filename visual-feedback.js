var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;


var playingA = false
var playingS = false
var playingD = false
var playingF = false


var oscA, oscS, oscD, oscF;

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
  text('click here,\nthen press A/S/D/F\n keys to play', width/2, 200);
  if (playingA) {
    background(58,172,226);
    }
  if (playingS) {
    background(255, 36, 0);
   }
    if (playingD) {
      background(204,0,255);
      }
  if (playingF) {
    background(37, 216, 36);
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
