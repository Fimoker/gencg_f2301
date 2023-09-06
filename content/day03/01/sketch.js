function setup() {
  w = windowWidth
  h = windowHeight
  createCanvas(w, h);
  angleMode(DEGREES);
  frameRate(60)
  
}


function keyPressed() {
  // this will download the first 5 seconds of the animation!
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}


function draw() {
  background(0);
  translate(width/2, height/2)
  rotate(-180)
  clock()


}

function clock(){
  strokeWeight(5)  
  let sec = second()
  let mins = minute()
  let hr = hour()
  let circleSize = 20
  let noiseScale = map(mouseX, 0, windowHeight, 1, 0.0001)
  let actualCircle = mins * 60 + sec 
  console.log (mins + sec)
  console.log(actualCircle)
  let amplitude = map(mouseY, 0, windowWidth, 2, 90)
 
  noFill()
  stroke(255)



  

// Past Hours
for(let c = 1; c <= hr; c+= 1){
  let hourRadius =circleSize * c +200
  strokeWeight(1+c/2)
  beginShape();
  for(let r = 0; r <= 60; r+= 1){
    radiusBig = map(r, 0, 60, 0, 360)

      noiseX = (sin(radiusBig))*noiseScale
      noiseY = (cos(radiusBig))*noiseScale
      x = (sin(radiusBig)*hourRadius)
      y = (cos(radiusBig)*hourRadius)
      curveVertex(x+noise(x, noiseX)*amplitude, y+noise(y, noiseY)*amplitude)
  }
  endShape(CLOSE)
}

  let minuteRadius = circleSize * (hr+1) + 200

  beginShape();
  for(let r = 0; r <= actualCircle; r+= 5){
      rmap = map(r, 1, 3600, 1, -360) 

      noiseX = (sin(rmap))*noiseScale
      noiseY = (cos(rmap))*noiseScale
      x = (sin(rmap)*minuteRadius)
      y = (cos(rmap)*minuteRadius)
      curveVertex(x+noise(x, noiseX)*amplitude, y+noise(y, noiseY)*amplitude)
  }
  endShape()


  stroke(240)
  strokeWeight(1)
  push()
  rotate(-180)
  display = hr + ":" + mins +":" + sec 
  text(display,-width/2,-height/2+15)
  pop()
  

}
  
