var size = 30;


function setup() {
  createCanvas(500, 600);
  //background(100, 100, 255);
}

function draw() {
  background(100, 100, 255);
  noStroke();
  frameRate(40);

  let range = 100;
  let change1 = frameCount%range;
  /// map(**name of variable we are trying to scale/map**, original range "min", original range "max",
          //// new range "min", new range "max")
          //// min = value A; max = value B;

   let change2 = map(change1, 0, 255, 255, 0);

  background(change1, change2, 0);
  print("change1", change1);
  print("change2", change2)


}
