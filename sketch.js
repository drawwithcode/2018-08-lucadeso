var value = 10;
var rotation = 1;
var inclination = 1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB);

  angleMode(DEGREES);

  setShakeThreshold(15);
  frameRate(12);
}

function draw() {
  background(0);

  rotateY(rotation);
  rotateX(-rotation);

  var dirX = (inclination / width - 0.5) * 3;
  var dirY = (inclination / height - 0.5) * 3;


  directionalLight(250,204,100, -dirX, -dirY, -0.5);
  directionalLight(0,204,100, dirX, -dirY, -0.025);

  ambientMaterial(255);

  noStroke();

  torus(value,value/2);

  camera(0,0,200,0,0,0,0,1,0);
}

function deviceShaken() {
    value = value + 1;
    rotation = rotation + 10;
    if (value > 50) {
      value = 0;
    }
}

function deviceTurned() {

    inclination = inclination + 50;
    if (value > 50) {
      inclination = 0;
    }
}
