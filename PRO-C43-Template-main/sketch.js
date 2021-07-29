var bg,bg2,form,system,code,security;
var score=0;
var gameState= 0;
function preload() {
bg= loadImage("images.jpg")
//load image for the treasure background
bg2 = loadImage('deaceNXy23NF8VsCrwZPgn.jpg')
bg3 = loadImage('images (1).jpg');
click = loadSound('zapsplat_multimedia_button_click_004_68776.mp3');
}

function setup() {
  createCanvas(1000,500);

  security = new Security();
  system = new System();
  form = new Form();
}

function draw() {
  if (gameState === 0){
    background(bg2); 
    security.hides();
    form.display();
  }
  if (gameState === 1){
    form.hide();
  
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  if(score === 3) {
    clear()
    background(bg3)
    fill("OrangeRed")
    textSize(40);
    text("TREASURE UNLOCKED!!",250, 200);
  }
}
  drawSprites()
}