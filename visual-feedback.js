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
  text('Click once\n inside the canvas.\nThen press A/S/D/F\n keys to play.\n:P', width/2, 150);
  textSize(50)
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
  
