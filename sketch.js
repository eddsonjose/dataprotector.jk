//DOM
//by Eddson Jose
let counter = 0;
let i = 0;
let button;
let input;
let greeting;
let showInfoBool = false;
//-----------------------------------------------------------------------------
let userInfo = [
  "...gathering data...",
  "...locating IP address...",
  "...$_SERVER['REMOTE_ADDR'];...",
  "...identification found...",
  "...gathering banking data...",
  "access granted."
];
//-----------------------------------------------------------------------------
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  input = createInput();
  input.position(width/2 - 100, height/2);
  button = createButton('submit');
  button.position(input.x + input.width, height/2);
  button.mousePressed(response);
  greeting = createElement('h1', 'what is your name?');
  greeting.style('color', '#ffffff');
  greeting.style('width', '100%');
  greeting.position(0, height/2 - 60);

  textAlign(CENTER);
  textSize(12);
}
//-----------------------------------------------------------------------------
function draw() {
  background(20, 70);
  if (showInfoBool == true) {
    showInfo();
    showMatrix();
  } else {
    showInfoBool = false;
  }
}
//-----------------------------------------------------------------------------
function showInfo() {
  counter += 1;
  if (counter == 250) {
    i++; counter = 0;
  }
  noStroke();
  fill(255);
  text(userInfo[i], width/2, height/2 + 50);
}
//-----------------------------------------------------------------------------
function showMatrix() {
  text("1", random(0, width), random(0, height));
  text("0", random(0, width), random(0, height));
  text("1", random(0, width), random(0, height));
  text("0", random(0, width), random(0, height));
}
//-----------------------------------------------------------------------------
function response() {
  const name = input.value();
  greeting.html('thank you ' + name + ' for your information');
  input.value('');
  showInfoBool = true;
}
