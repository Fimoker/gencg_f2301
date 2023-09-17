// Based on https://editor.p5js.org/AhmadMoussa/sketches/b3xyreznH

function setup() {
  w = min(windowWidth);
  h =  windowHeight
  createCanvas(w, h);

  angleMode(DEGREES);
  frameRate(1)

  stroke(0);
  noStroke()
  noFill();

}

function draw() {
  background(0);

  // Calculate a looping frame count value between 0 and 20 (10 up and 10 down)
  let loopingFrameCount = frameCount % 20;

  // Map the looping frame count to the size value (10 to 1 to 10)
  let size = 5;
  if (loopingFrameCount <= 10) {
    size = map(loopingFrameCount, 0, 10, 10, 1);
  } else {
    size = map(loopingFrameCount, 11, 20, 1, 10);
  }

  console.log(size);

  // Now you can use the 'size' variable as needed
  subdivide(0, 0, h , h, size);
}




function subdivide(posX, posY, bWidth, bHeight, sub) {
  let noiseValue = noise(posX * 0.5, posY * 0.5)
  let colorPicker = map(noiseValue, 0, 1, 0, 255)

  let shade = 30
  let gap = 25

  if (sub > 0) {
  
    subdivide(posX, posY, bWidth / 2 , bHeight / 2, sub - random(1, 3));
    subdivide(posX,posY + bWidth / 2,bWidth / 2,bHeight / 2, sub - random(1, 3));
    subdivide(posX + bHeight / 2, posY,bWidth / 2,bHeight / 2,sub - random(1, 3));
    subdivide(posX + bWidth / 2, posY + bWidth / 2, bWidth / 2, bHeight / 2, sub - random(1, 3));
  } else {
      fill(colorPicker, shade, colorPicker) 
    let picker = floor(random(1, 5));
    if (picker == 1) {
      fill(255, shade, colorPicker) 
     
      circle(posX+bWidth/2, posY+bWidth/2, bWidth);
      circle(posX+bWidth/2, posY+bWidth/2, bWidth/2);
   
    } else if (picker == 2) {
      fill(colorPicker, colorPicker, 255)  
      push();
      translate(posX + bWidth / 2, posY + bHeight / 2); 
      rotate(90*floor(random(1,5))); 
      triangle(-bWidth / 2,-bHeight / 2,bWidth / 2,-bHeight / 2,0,bHeight / 2);
      pop();
      
    }   else if (picker == 3) {
      //fill(colorPicker, colorPicker, 255)
      fill("yellow")  
      push();
      translate(posX + bWidth / 2, posY + bHeight / 2); 
      rotate(45); 
      square(-bWidth/2*.7 ,-bHeight/2*.7 , bWidth*.7);
      pop();
      
    } else {
      fill(colorPicker, shade, colorPicker) 
      square(posX, posY, bWidth);
    }
  }
}


function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 20);
  }
}