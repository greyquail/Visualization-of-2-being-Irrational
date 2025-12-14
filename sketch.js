let theta = 0;
let speed = 0.002;
let zoom = 0.7;

let r1, r2;
const RATIO = Math.SQRT2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS);
  computeRadii();
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  computeRadii();
  background(0);
}

function computeRadii() {
  const s = min(width, height);
  r1 = s * 0.18;
  r2 = s * 0.32;
}

function draw() {
  noStroke();
  fill(0, 6);
  rect(0, 0, width, height);

  translate(width / 2, height / 2);
  scale(zoom);

  let x1 = r1 * cos(theta);
  let y1 = r1 * sin(theta);

  let x2 = x1 + r2 * cos(RATIO * theta);
  let y2 = y1 + r2 * sin(RATIO * theta);

  noFill();
  stroke(120);
  strokeWeight(1);
  circle(0, 0, 2 * r1);
  circle(x1, y1, 2 * r2);

  stroke(200);
  line(0, 0, x1, y1);
  line(x1, y1, x2, y2);

  fill(255);
  noStroke();
  circle(x2, y2, 4);

  theta += speed;
}
