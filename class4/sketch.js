var size = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,0,0);

  strokeWeight(2);

  for (let i = 20; i < 400; i +=20 ){
    //line(i, 0, i + 1/2, 80);
    line(i + i/2, 80, i * 1.2, 120);
    //line()
  }
  /// noLoop();

}
