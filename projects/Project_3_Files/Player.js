function Player(_x, _y, _mouse) {
  // properties
  this.x = _x; // canvas position
  this.y = _y;
  this.xSpeed = 0; // horzontal speed
  this.ySpeed = 0; // vertical speed
  this.xBrake = 0; // horizontal braking factor
  this.yBrake = 0; // vertical braking factor
  this.diam = 50; // initial size
  this.angle = 0; // rotation in radians
  this.mode = _mouse; // initial movement mode (arg 3)

  this.display = function () {
    push(); // create a drawing layer
    translate(this.x, this.y); // move origin point
    rotate(this.angle); // player can rotate

    fill(0); // black
    /** calculate points on a triangle based on a unit circle. You could use this method to draw more complex polygons that would fit inside a circle centered on (this.x, this.y)
     * For any point around the circle, x = the cosine of the angle in radians from 0 to TWO_PI, and y = the sine of that angle. an angle of 0 is the right side of the circle, PI is the left side.
     * The points generated this way are relative to the coordinate point (0,0).
     * The translate() function (above, line 10) takes care of moving it on the canvas.
     */
    let r = this.diam / 2; // radius
    // 270 degrees (top):
    let x1 = cos(PI + HALF_PI) * r;
    let y1 = sin(PI + HALF_PI) * r;
    // 30 degrees (bottom right):
    let x2 = cos(PI / 6) * r;
    let y2 = sin(PI / 6) * r;
    // 150 degrees (bottom left):
    let x3 = cos((PI * 5) / 6) * r;
    let y3 = sin((PI * 5) / 6) * r;

    //draw a complex polygon
    beginShape();
      vertex(x1, y1); // triangle points
      vertex(x2, y2);
      vertex(x3, y3);
    endShape();
    strokeWeight(10);
    line(x1, 10, x1, this.diam/2);
    pop(); // dispose of this layer
  };

  this.move = function(){
    // add to this in step 2.
  }
}
