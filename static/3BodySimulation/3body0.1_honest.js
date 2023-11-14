class Sun {
  constructor(color) {
    this.color = color
    this.mass = 1
    this.x = random(width/3, 2*width/3); // width/2;
    this.y = random(height/3, 2*height/3); //height/2;//
    this.r = 50;
    this.xSpeed = random(-0.5,0.5);
    this.ySpeed = random(-0.5,0.5);
    this.xForce = 0;
    this.yForce = 0;
  }
  drawSun(zoomFactor) {
    fill(this.color);
    noStroke();
    let offset = (1-zoomFactor)/2;
    this.xCanvas = this.x*zoomFactor+offset*width;
    this.yCanvas = this.y*zoomFactor+offset*height;
    circle(this.xCanvas, this.yCanvas, max(this.r*zoomFactor, 5));
  }
  moveSun() {
    if(this.xCanvas < 0 || this.xCanvas > width)
      this.xSpeed*=-1;
    if(this.yCanvas < 0 || this.yCanvas > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
    this.xSpeed+=this.xForce/this.mass;
    this.ySpeed+=this.yForce/this.mass;
    this.xForce=0;
    this.yForce=0;
  }
}

function gravity(s1, s2) {
  distance = dist(s1.x, s1.y, s2.x, s2.y);
  let g=100
  let force = g*s1.mass*s2.mass/(distance*distance)
  s1.xForce = force*(s2.x-s1.x)/distance;
  s1.yForce = force*(s2.y-s1.y)/distance;
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
    // if(suns[i].xCanvas < width/3 || suns[i].xCanvas > 2*width/3) suns[i].xForce+=(width/2-suns[i].x)*correction_factor;
    // if(suns[i].yCanvas < height/3 || suns[i].yCanvas > 2*height/3) suns[i].yForce+=(height/2-suns[i].y)*correction_factor;

    if(
      (suns[i].xCanvas < width/3 || suns[i].xCanvas > 2*width/3)
      && suns[i].xSpeed*suns[i].xForce < 0
      ) suns[i].xForce+=suns[i].xSpeed*damping_factor;
    if(
      (suns[i].yCanvas < height/3 || suns[i].yCanvas > 2*height/3)
      && suns[i].ySpeed*suns[i].yForce < 0
      ) suns[i].yForce+=suns[i].ySpeed*damping_factor;
  }
}

function setup() {
  createCanvas(800, 800);
  suns.push(new Sun("rgba(245,212,145,1)"));
  suns.push(new Sun("rgba(82,153,211,1)"));
  suns.push(new Sun("rgba(107,116,100,1)"));
  // suns.push(new Sun("rgba(245,212,145,1)"));
  // suns.push(new Sun("rgba(82,153,211,1)"));
  // suns.push(new Sun("rgba(107,116,100,1)"));
  // suns.push(new Sun("rgba(245,212,145,1)"));
  // suns.push(new Sun("rgba(82,153,211,1)"));
  // suns.push(new Sun("rgba(107,116,100,1)"));
  // suns.push(new Sun("rgba(245,212,145,1)"));
  // suns.push(new Sun("rgba(82,153,211,1)"));
  // suns.push(new Sun("rgba(107,116,100,1)"));
  // suns.push(new Sun("rgba(245,212,145,1)"));
  // suns.push(new Sun("rgba(82,153,211,1)"));
  // suns.push(new Sun("rgba(107,116,100,1)"));
  // suns.push(new Sun("rgba(245,212,145,1)"));
  // suns.push(new Sun("rgba(82,153,211,1)"));
  // suns.push(new Sun("rgba(107,116,100,1)"));
  // suns.push(new Sun("rgba(245,212,145,1)"));
  // suns.push(new Sun("rgba(82,153,211,1)"));
  // suns.push(new Sun("rgba(107,116,100,1)"));
  // suns.push(new Sun("rgba(245,212,145,1)"));
  // suns.push(new Sun("rgba(82,153,211,1)"));
  // suns.push(new Sun("rgba(107,116,100,1)"));
  // suns.push(new Sun("rgba(245,212,145,1)"));
  // suns.push(new Sun("rgba(82,153,211,1)"));
  // suns.push(new Sun("rgba(107,116,100,1)"));
  // suns.push(new Sun("rgba(245,212,145,1)"));
  // suns.push(new Sun("rgba(82,153,211,1)"));
  // suns.push(new Sun("rgba(107,116,100,1)"));
  // suns.push(new Sun("rgba(245,212,145,1)"));
  // suns.push(new Sun("rgba(82,153,211,1)"));
  // suns.push(new Sun("rgba(107,116,100,1)"));
  // suns.push(new Sun("rgba(245,212,145,1)"));
  // suns.push(new Sun("rgba(82,153,211,1)"));
  // suns.push(new Sun("rgba(107,116,100,1)"));
  // suns.push(new Sun("rgba(245,212,145,1)"));
  // suns.push(new Sun("rgba(82,153,211,1)"));
  // suns.push(new Sun("rgba(107,116,100,1)"));
  // suns.push(new Sun("rgba(245,212,145,1)"));
  // suns.push(new Sun("rgba(82,153,211,1)"));
  // suns.push(new Sun("rgba(107,116,100,1)"));
  // suns.push(new Sun("rgba(245,212,145,1)"));
  // suns.push(new Sun("rgba(82,153,211,1)"));
  // suns.push(new Sun("rgba(107,116,100,1)"));
  // suns.push(new Sun("rgba(245,212,145,1)"));
  // suns.push(new Sun("rgba(82,153,211,1)"));
  // suns.push(new Sun("rgba(107,116,100,1)"));
  calcForces()
}
let zoomF = 1;
function draw() {
  background('#0f0f0f');
  fill("#ffffff")
  rect(width/3, height/3, width/3, height/3)
  let maxd = max([...suns.map((s)=>abs(s.xCanvas-width/2)/width), ...suns.map((s)=>abs(s.yCanvas-height/2)/height)]);
  if (maxd > 3/8)
    zoomF*=0.5;
  suns.forEach((sun)=>{
    sun.drawSun(max(zoomF, 0.1));
    sun.moveSun();
  })
  calcForces()
}
