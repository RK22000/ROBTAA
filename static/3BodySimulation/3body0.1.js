class Sun {
  constructor(color) {
    this.color = color
    this.x = random(width/3, 2*width/3); // width/2;
    this.y = random(height/3, 2*height/3); //height/2;//
    this.r = 50;
    this.xSpeed = random(-0.5,0.5);
    this.ySpeed = random(-0.5,0.5);
    this.xForce = 0;
    this.yForce = 0;
  }
  drawSun() {
    fill(this.color)
    circle(this.x, this.y, this.r)
  }
  moveSun() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
    this.xSpeed+=this.xForce;
    this.ySpeed+=this.yForce;
    this.xForce=0;
    this.yForce=0;
  }
}

function gravity(s1, s2) {
  distance = dist(s1.x, s1.y, s2.x, s2.y);
  let g=100
  s1.xForce = g*(s2.x-s1.x)/(distance*distance*distance);
  s1.yForce = g*(s2.y-s1.y)/(distance*distance*distance);
  s2.xForce = -1*s1.xForce;
  s2.yForce = -1*s1.yForce;
}

let suns = []

function calcForces() {
  let correction_factor = 0.001
  let damping_factor = -0.01
  for (let i = 0; i < suns.length; i++) {
    for (let j = i+1; j < suns.length; j++) {
      gravity(suns[i], suns[j]);
    }
    if(suns[i].x < width/3 || suns[i].x > 2*width/3) suns[i].xForce+=(width/2-suns[i].x)*correction_factor;
    if(suns[i].y < height/3 || suns[i].y > 2*height/3) suns[i].yForce+=(height/2-suns[i].y)*correction_factor;

    if(suns[i].x < width/3 || suns[i].x > 2*width/3) suns[i].xForce+=suns[i].xSpeed*damping_factor;
    if(suns[i].y < height/3 || suns[i].y > 2*height/3) suns[i].yForce+=suns[i].ySpeed*damping_factor;
  }
}

function setup() {
  createCanvas(800, 800);
  suns.push(new Sun("rgba(245,212,145,1)"));
  suns.push(new Sun("rgba(82,153,211,1)"));
  suns.push(new Sun("rgba(107,116,100,1)"));
  calcForces()
}

function draw() {
  background('#0f0f0f');
  fill("#ffffff")
  rect(width/3, height/3, width/3, height/3)
  suns.forEach((sun)=>{
    sun.drawSun()
    sun.moveSun()
  })
  calcForces()
}
