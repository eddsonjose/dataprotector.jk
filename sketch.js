//DOM
//by Eddson Jose
let h1;
//------------------------------------------------------------------
function setup() {
  createCanvas(windowWidth, windowHeight);
  h1 = createElement('h1', 'DOM');
}
//------------------------------------------------------------------
function draw() {
  background(0);
  h1.position(width/2, 0);
  h1.style('font-size', '24px');
  h1.style('color', color(random(150, 255)));
}
//------------------------------------------------------------------
