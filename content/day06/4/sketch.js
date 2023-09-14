
function setup() {
  createCanvas(1000,580, WEBGL);
  rectMode(CORNER)
  angleMode(DEGREES)
  pixelDensity(1)
}


function preload() {
  img = loadImage('tree_2.png');
  img2 = loadImage('mountain.png');

  print(img.width, img.height)
  print(img2.width, img2.height)
}

function draw() {
  background(0)

  orbitControl()
  translate(-width/2, -height/2)
  imageCreate()
}

let xpos = 0
function imageCreate(){
  let w = width / img.width
  let h = height / img.height
  let size = 15
  var maxDistance = 200;

  img.loadPixels()
  img2.loadPixels()
  for (let i = 0; i < img.width; i+= size){
    for(let j =0;  j < img.height; j+= size){
      let diameter = dist(mouseX, mouseY, i ,j)

      let pixelIndex = (i+j*img.width)*4
      let pixelIndex2 = (i+j*img2.width)*4

      let r = img.pixels[pixelIndex + 0]
      let g = img.pixels[pixelIndex + 1]
      let b = img.pixels[pixelIndex + 2]
      let r2 = img2.pixels[pixelIndex2 + 0]
      let g2 = img2.pixels[pixelIndex2 + 1]
      let b2 = img2.pixels[pixelIndex2 + 2]

      let avg = (r + g + b) / 3
      let avg2 = (r + g + b) / 3
      noStroke()
        if (diameter < 250) {
          push()
          fill(r2,g2,b2)
          translate(i*w, j*h,-g)
          box(size, size, avg)
          pop()
          pop()
        } else {
  
        push()
        fill(r,g,b)
        translate(i*w, j*h,-g)
        box(size, size, avg)
        pop()
      }

  }
 }
}

function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}