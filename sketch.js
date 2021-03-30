var background1,garden, cat1,tom,jerry, mouse1,mouse2,mouse3,mouse4,cat2,cat3,cat4;



function preload() {
    //load the images here
    background1 = loadImage("garden.png");
    cat1 = loadAnimation("cat1.png")
    cat2 = loadAnimation("cat2.png","cat3.png")
    cat4 = loadAnimation("cat4.png")
    mouse1 = loadAnimation("mouse1.png")
    mouse2 = loadAnimation("mouse2.png")
    mouse3 = loadAnimation("mouse3.png")
    mouse4 = loadAnimation("mouse4.png")
}

function setup(){
createCanvas(1000,800);

jerry = createSprite(200,600);
jerry.addAnimation("Jerry Image",mouse1)
jerry.scale = 0.2

tom = createSprite(800,600)
tom.addAnimation("Tom image", cat1);
tom.scale = 0.2


}

function draw() {
background(background1);
    
if (tom.x < jerry.x + 130){

  tom.velocityX = 0
  tom.addAnimation("Tom sit", cat4);
  tom.changeAnimation("Tom sit");

  jerry.addAnimation("jerry1", mouse4);
  jerry.changeAnimation("jerry1");
}

    drawSprites();
}

function keyPressed(){

if (keyDown (LEFT_ARROW)){
  tom.addAnimation("tom running", cat2  )
  tom.changeAnimation("tom running")

  jerry.addAnimation("taunt", mouse3)
  jerry.changeAnimation("taunt")
  tom.velocityX = -2
}



}

