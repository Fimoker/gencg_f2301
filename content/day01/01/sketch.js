function setup() {
  createCanvas(500, 500);
  rectMode(CORNER);
  angleMode(DEGREES)
  stroke(0)
}

  let speedy = 4
  let winkel = 0
  let tNoise = 1
  let scaler = 0.1
  
function draw() {
  let strokeM = map(mouseX, 1, windowWidth, 1, 5)
  let colorM = map (mouseY, 0, windowHeight, 150, 255)
  
  colorMap = map(sin(winkel), -1, 1, 0, 255)
  noiseMap = map(noise(tNoise), -1, 1, 0, 255)
  stroke(colorM, noiseMap, noiseMap)
  translate(250, 250)
  
  strokeWeight(strokeM)
  scale(noise(tNoise) )
  rotate(winkel)
  triangle(width-50, height-50, 50, height-50, width/2,50)

  rect(100, height-150, width-200, 100)
  rect(150, height-250, width-300, 100)
  rect(200, height-350, width-400, 100)
  line(width/2, 50, width/2, 150)
  line(width/2, 350, width/2, 450)
  
  
  tNoise += 0.01
  winkel += speedy
  

  

  
}