// Circle + arms visualization for z(theta) = e^(i theta) + e^(i √2 theta)
// Same style as the Pi reel, but with √2 instead of π. [web:111][web:118]

let theta = 0;
let speed = 0.01;     // change for faster/slower motion
let zoom = 0.9;       // global zoom so the whole figure fits

let r1, r2;           // radii of the two circles
const RATIO = Math.SQRT2;   // second rotation speed = √2

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
  // fade slowly so many past positions are visible
  noStroke();
  fill(0, 18);
  rect(0, 0, width, height);

  translate(width / 2, height / 2);
  scale(zoom);

  // first arm endpoint: e^(i theta)
  let x1 = r1 * cos(theta);
  let y1 = r1 * sin(theta);

  // second arm endpoint: e^(i √2 theta) added on
  let x2 = x1 + r2 * cos(RATIO * theta);
  let y2 = y1 + r2 * sin(RATIO * theta);

  // helper circles
  noFill();
  stroke(120);
  strokeWeight(1);
  circle(0, 0, 2 * r1);
  circle(x1, y1, 2 * r2);

  // arms
  stroke(200);
  line(0, 0, x1, y1);
  line(x1, y1, x2, y2);

  // moving point
  fill(255);
  noStroke();
  circle(x2, y2, 4);

  theta += speed;
}
