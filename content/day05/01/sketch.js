function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1)
}

let eyecolor = ["#F29325", "#F2133C"," #F2561D"]
let bodycolor = ["#025259","#007172", "#0A0D40", "#114BBF"]
let backgroundColor = ["#0A0D40", "#F4E2DE"]


function draw() {
  

  let themePicker = random(backgroundColor)
  background(themePicker);
  console.log(themePicker)

    stroke(255)

  
  
  fill("#FF9800")
  
  
  
  strokeCap(ROUND)
  strokeJoin(ROUND)
  pattern()
  strokeWeight(5)
  circle(width, height/3, height*1.5)
  shoulder(bodycolor)
  head()
  mouth()

  eyeRight(eyecolor)
  eyeLeft(eyecolor)
  
  eyebrowsLeft()
  eyebrowsRight()


}


function head(){
  
  circle(width/2, height/2, random(300, 600))
  
}

function eyebrowsLeft(){
  
  noFill()
  // Set the amplitude and frequency of the sine wave
  let amplitude = random(1,10);
  let frequency = random(0.1, 1); // Adjust this value to change the frequency
  let widthEye = random(170, 180)
  let detail = random(1, 10)
  let randomness = 10;

  beginShape();
  for (let x = 0; x < widthEye; x += detail) {
    let y = height / 2 - 100 + amplitude * sin(frequency * x);
    vertex((width / 2) -  widthEye -100  +x, y);
  }
  endShape();
  
}

function eyebrowsRight(){
  
  noFill()
  // Set the amplitude and frequency of the sine wave
  let amplitude = random(1,10);
  let frequency = random(0.1, 1); // Adjust this value to change the frequency
  let widthEye = random(170, 200)
  let detail = random(1, 10)
  let randomness = 10;

  beginShape();
  for (let x = 0; x < widthEye; x += detail) {
    let y = height / 2 - 80 + amplitude * sin(frequency * x);
    vertex((width / 2) + 100 + x, y);
  }
  endShape();
  
}

function eyeRight(eyecolor) {
  x = width/2 * .85
  y = height / 2
  fill(random(eyecolor))
  size = random(100, 170)
  circle (x, y, size)
}

function eyeLeft() {
  x = width/2 * 1.15
  y = height / 2

  size = random(100, 170)
  circle (x, y, size)
}

function mouth(){
  fill(255)
  // arc(width/2, height-height/3, random(width/3), random(width/2), 180,200, PIE);
    arc(width/2, height-height/3, random(width/3), 400, 180,200, PIE);
}

function shoulder(bodycolor){
  x1 = random(-20, 20)
  x2 = random(-30, 20)
  fill(random(bodycolor))
  
  quad(
    0,height, 
    width,height, 
    width/2, height/2, 
    300+x2,height-height/3+x2 )
}


function pattern() {
  let patternPadding = random(40, 50)
  for(let i = 20; i < height*2; i+=patternPadding){
    strokeWeight(3)
    line(0 + i, 0, 0, i) 
  }
}



function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 15);
  }
}