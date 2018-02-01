function setup() {
  createCanvas(windowWidth,windowHeight)
  background(51)
  frameRate(60)
}
function draw() {
	if(mouseIsPressed)
	{
	fill(255)
  	rect(mouseX,mouseY,130,1000)
	}
}
