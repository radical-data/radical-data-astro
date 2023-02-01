var formResolution = 40;
var stepSize = 2;
var distortionFactor = 1;
var initRadius = 150;
var centerX;
var centerY;
var x = [];
var y = [];

var filled = false;
var freeze = false;

function setup() {
  createCanvas(70, 70);

  // init shape
  centerX = width / 2;
  centerY = height / 2;
  var angle = radians(360 / formResolution);
  for (var i = 0; i < formResolution; i++) {
    x.push(cos(angle * i) * initRadius);
    y.push(sin(angle * i) * initRadius);
  }

  stroke(0);
  fill(255, 0, 0);
  strokeWeight(10);
  background(255);
}

function draw() {
  background(255, 255, 255);

  push();
  translate(width / 2, height / 2);

  for (var i = 0; i < formResolution; i++) {
    x[i] += random(-stepSize, stepSize);
    y[i] += random(-stepSize, stepSize);
    //ellipse(x[i], y[i], 5, 5);
  }

  beginShape();
  curveVertex(x[formResolution - 1], y[formResolution - 1]);

  for (var i = 0; i < formResolution; i++) {
    curveVertex(x[i], y[i]);
  }
  curveVertex(x[0], y[0]);

  curveVertex(x[1], y[1]);
  endShape();
  pop();
}
