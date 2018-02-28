function setup() {
  createCanvas(900, 600);

  noLoop();
}

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function draw() {
  var color = randomInt(2);
  console.log(color);

  for(var i = 0; i < 600; i++) {
    var randomSize = randomInt(40);

    if(color % 2 === 0) {
      fill(randomInt(256), randomInt(256), randomInt(256));
    }
    else {
      fill(randomInt(200));
    }

    stroke('rgba(100%,100%,100%,0.2)');
    strokeWeight(randomInt(5));

    ellipse(randomInt(900), randomInt(600), randomSize, randomSize);
  }
}

function mouseClicked() {
  clear();
  redraw();
}
