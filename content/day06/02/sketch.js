
function setup() {
  createCanvas(1000, 1000, WEBGL);
  rectMode(CORNER)
}

let img;
function preload() {
  img = loadImage('tree2.jpeg');
  print(img.width, img.height)
}

function draw() {
  background(0)
  orbitControl()
  translate( -width / 2 , -height / 2 )

  // image(img, 0,0,width,height)
  imageCreate()
}


function imageCreate(){
  let w = width / img.width
  let h = height / img.height
  let size = 10

  img.loadPixels()
  for (let i = 0; i < img.width; i+= size){
    for(let j =0;  j < img.height; j+= size){
      const pixelIndex = (i+j*img.width)*4
      const r = img.pixels[pixelIndex + 0]
      const g = img.pixels[pixelIndex + 1]
      const b = img.pixels[pixelIndex + 2]
      const avg = (r + g + b) / 3
      noStroke()
         
      // circle(i*w, j*h, size)
      // fill(255-2,g,1)
      if(r == 255 || g == 255 | b == 255){

      } else {

      push()
        fill(r,g,b)
        translate(0,0,-avg*0.7)
        circle(i*w+1, j*h+1, size+avg)
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