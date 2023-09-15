function setup() {
  createCanvas(1500, 700);
  frameRate(1)
  rectMode(CENTER)
  ellipseMode(CENTER)

}

let eyecolor = ["#F29325", "#F2133C"," #F2561D"]
let bodycolorArr = ["#025259","#007172", "#0A0D40", "#114BBF"]
let backgroundColor = ["#0A0D40", "#F4E2DE"]



function draw() {

  let eyeMin = 70
  let eyeMax = 140
  let eyePicker = random([1,2,3])
  let themePicker = random(backgroundColor)
  console.log(themePicker)
  let bodycolor = random(bodycolorArr)
  background(themePicker);
  if (themePicker == "#0A0D40"){
    stroke("#F4E2DE")
  } else if (bodycolor == "#0A0D40"){
    stroke("#F4E2DE")
  } else {
    stroke("#0A0D40")
  }

  fill("#FF9800")
  strokeCap(ROUND)
  strokeJoin(ROUND)
  pattern(eyePicker)
  strokeWeight(5)
  circle(width, height/3, height*1.5)

  shoulder(bodycolor)
  head()
  
  eyeLeft(eyecolor, eyeMin,eyeMax, eyePicker, bodycolor)
  eyeRight(eyecolor, eyeMin,eyeMax, eyePicker, bodycolor)
  mouth()
  
  angleMode(RADIANS)
  eyebrowsLeft(eyeMin,eyeMax)
  eyebrowsRight(eyeMin,eyeMax)


}


function head(){

  circle(width/2, height/2, random(width / 3, width / 5))
  
}

function eyebrowsLeft(eyeMin,eyeMax){
  
  noFill()
  
  let amplitude = random(1,10);
  let frequency = random(0.1, 1); 
  let widthEye = random(eyeMin, eyeMax)
  console.log(widthEye)
  let detail = random(1, 10)


  beginShape();
  for (let x = 0; x < widthEye; x += detail) {
    let y = height / 2 - 80 + amplitude * sin(frequency * x);
    vertex((width / 2) -  widthEye -50  +x, y);
  }
  endShape();
  
}

function eyebrowsRight(eyeMin,eyeMax){
  
  noFill()
  
  let amplitude = random(1,10);
  let frequency = random(0.1, 1); 
  let widthEye = random(eyeMin, eyeMax)
  let detail = random(1, 10)


  beginShape();
  for (let x = 0; x < widthEye; x += detail) {
    let y = height / 2 - 80 + amplitude * sin(frequency * x);
    vertex((width / 2) + 50 + x, y);
  }
  endShape();
  
}

function eyeLeft(eyecolor, eyeMin,eyeMax, eyePicker, bodycolor) {
  x = width/2 * .8
  y = height / 2
  let widthEye = random(eyeMin, eyeMax)

  fill(random(eyecolor))
  size = random(100, 170)
  
  circle (x, y, widthEye)
  if(eyePicker == 2 ){
    push()
    translate(x, y)
    rotate(random([0, 45]))
    square(0, 0, widthEye/3)
    pop()
  } else if ( eyePicker == 3){
    push()
    translate(x, y)
    fill(bodycolor)
    rotate(random([0, 45]))
    square(0, 0, widthEye/3)
    pop()
  }

}

function eyeRight(eyecolor, eyeMin,eyeMax, eyePicker, bodycolor) {
  x = width/2 * 1.2
  y = height / 2
  let widthEye = random(eyeMin, eyeMax)


  circle (x, y, widthEye)
  if(eyePicker == 2 ){
    push()
    translate(x, y)
    rotate(random([0, 45]))
    square(0, 0, widthEye/3)
    pop()
  } else if ( eyePicker == 3){
    push()
    translate(x, y)
    fill(bodycolor)
    rotate(random([0, 45]))
    square(0, 0, widthEye/3)
    pop()
  }

}

function mouth(){
  fill(255)
  angleMode(DEGREES)
  // arc(width/2, height-height/3, random(width/3), random(width/2), 180,200, PIE);
  // arc(width/2, height-height/3, random(width/3), 400, 180,200, PIE);
  push()
  translate(0, random(-10,40))
  arc(width/2, height-height/3, random(100,300), random(150,400), 240,300);
  pop()
}

function shoulder(bodycolor){
  x1 = random(-20, 20)
  x2 = random(-30, 20)
  fill(bodycolor)

  quad(
    0,height, 
    width,height, 
    width/2, height/2, 
    300+x2,height-height/3+x2 )
   
}


function pattern(eyepicker) {
  let patternPadding = random(40, 50)

  if (eyepicker == 1){ 
      for(let i = 20; i < height*2; i+=patternPadding){
    strokeWeight(3)
    line(0 + i, 0, 0, i) 
    } 
  } else {
     for(let i = 20; i < height*2; i+=patternPadding){
    strokeWeight(3)
    line(width + i, 0, 0, i) 
    } 
  }
}



function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 15);
  }
}