// based on https://necessarydisorder.wordpress.com/2018/03/31/a-trick-to-get-looping-curves-with-lerp-and-delay/

let slider;

function setup() {
  w = windowWidth
  h = windowHeight-100
  
   sPoints = createSlider(25, 500, 100);
   sHeight = createSlider(0, 100, 50);
   rColor = createSlider(50, 255, 255);
   gColor = createSlider(50, 255, 255);
   bColor = createSlider(50, 255, 255);
   sDensitiy = createSlider(1, 25, 1);
   sPoints.style('width', '80px' );
   sPoints.style('position', 'top');
  
  
  createCanvas(w, h);
}

function draw() {

  stroke(255,50)
  strokeWeight(2)

  
circles()


  
}

numFrames = 100



function circles(){
  let vHeight = sHeight.value();
  let density = sPoints.value();
  let vRcolor = rColor.value()
  let vGcolor = gColor.value()
  let VGcolor = bColor.value()
  let vDensity = sDensitiy.value()

 
  t = (frameCount - 1) / numFrames
  
  stroke(vRcolor*noise(t*0.5), vGcolor, VGcolor)
  console.log(vRcolor+noise(t*0.05), vGcolor, VGcolor)
  // Position
  x1 = mouseX + 0.1 * h + vHeight * cos(TWO_PI*t)
  y1 = mouseY + 0.2 * w + 50 * sin(TWO_PI*t)
  
  x2 = mouseX + 0.1 * w + 50 * cos(TWO_PI*t)
  y2 = mouseY + 0.1 * h + 50 * sin(TWO_PI*t) 
  
  
  point(x1,y1)

  
  for (let i = 0; i <= density; i+= vDensity){
    tt = 1*i/density 
    x = lerp(x1,w/2,tt)
    y = lerp(y1,y2,tt)
    point(x,y)
  }
}

// you can put it in the mousePressed function,
// or keyPressed for example
function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 5);
  }
  
  if (key === "r"){
    clear();
  }
}