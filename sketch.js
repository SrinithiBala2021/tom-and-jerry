var mouse;
var cat;
var bgImg,catImg1,catImg2,mouseImg1,mouseImg2,catImg4,mouseImg4;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catImg1 = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    mouseImg1 = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    catImg4 = loadAnimation("images/cat4.png")
    mouseImg4 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     cat = createSprite(750,620,20,20)
     mouse = createSprite(150,600,20,20)
     cat.addAnimation("cat",catImg1)
     mouse.addAnimation("mouse",mouseImg1)
     mouse.scale = 0.2
     cat.scale = 0.2
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
     
    if (cat.x - mouse.x < cat.width/2 - mouse.width/2 &&
         mouse.x - cat.x < cat.width/2 - mouse.width/2 
         
         ){

         mouse.addAnimation("mousehappy",mouseImg4)
         mouse.changeAnimation("mousehappy",mouseImg4)

         cat.addAnimation("cathappy",catImg4)
         cat.changeAnimation("cathappy",catImg4)
         cat.velocityX = 0
         }

         keyPressed()
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseteasing",mouseImg2)
      mouse.changeAnimation("mouseteasing",mouseImg2)
      mouse.frameDelay = 25

      cat.addAnimation("cat",catImg2)
      cat.changeAnimation("cat",catImg2)
      cat.velocityX = -2
  }

}
