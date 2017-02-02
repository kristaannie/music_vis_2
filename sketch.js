var song;
var bald;

function preload(){
  bald = loadImage("bald.png")
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound("baobab.mp3", loaded);
  amp = new p5.Amplitude();
  fft = new p5.FFT();
  
}

function loaded() {
  song.play();
}

function draw() {
  
  seconds = millis()/1000;
  
  glide = map(sin(seconds*.05), -1, 1, 0, 255)
  background(50, 220, glide, 100); 
  
  imageMode(CENTER);
  // tint(200,200,255,100);
  // image(bald, windowWidth/2, windowHeight/2, 500, 500);
  
  
  var spectrum = fft.analyze();

  noStroke();
  
  // for (i = 200; i<spectrum.length - 200; i++) {
  //   stroke(200, spectrum[i], 255, spectrum[i]);
  //   line(i, map(spectrum[i], 0, 255, windowHeight/2, windowHeight), 0, 0);
  // }
   
   
  // for (j = 200; j<spectrum.length - 200; j++) {
  //   stroke(100, spectrum[j], 255, spectrum[j]);
  //   line(j, map(spectrum[j], 0, 255, windowHeight/2, windowHeight), windowWidth, windowHeight);
  // }
   
   
  // for (b = 200; b<spectrum.length - 200; b++) {
  //   stroke(100, spectrum[b], 200, spectrum[b]);
  //   line(b, map(spectrum[b], 0, 255, windowHeight/2, windowHeight), windowWidth, 0);
  // }
   
   
  // for (c = 200; c<spectrum.length - 200; c++) {
  //   stroke(100, spectrum[c], 170, spectrum[c]);
  //   line(c, map(spectrum[c], 0, 255, windowHeight/2, windowHeight), 0, windowHeight);
  // }
   
   
  for (b = 0; b<spectrum.length; b+=2) {
    stroke(100, spectrum[b], 255, spectrum[b]);
    line(windowWidth, b, map(spectrum[b], 0, 255, 0, windowWidth), b);
  }
   
  for (c = 0; c<spectrum.length; c+=2) {
    stroke(255, 100, spectrum[c], spectrum[c]);
    line(0, c, map(spectrum[c], 0, 255, windowWidth, 0), c);
  }
   
  
  
  
  
}