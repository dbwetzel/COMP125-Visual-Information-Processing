<link href="../../markdown.css" rel="stylesheet"></link> 

# Draw
*Make drawings with basic shapes on a web canvas*

In most programming classes, your first assignment would be to write a program that produces the phrase "Hello, World!" on the screen. In this class, our equivalent to the traditional "Hello World" assignment will be to draw a circle on the canvas in your browser. Your first lab assignment (Lab 0) uses a template that contains a web page ("`index.html`") linked to a JavaScript file ("`script.js`"). Your first step is to link this project to the P5.js code library, which gives us some tools that we can use to make graphics with very little effort or coding knowledge. Once we add a link to P5.js in the `index.html` file, all we have to type, in the "`script.js`" file, is the following:
```javascript
function setup() {

  ellipse(50, 50, 40, 40);

}
```

Run the sketch, and we should see a circle appear on the "output" side of the window. P5.js executes the "setup" function and sees "`ellipse`" (also a function, and part of P5). It uses the series of numbers, separated by commas, inside the parentheses to specify *where* (50 pixels from the left edge of the canvas and 50 pixels from the top) and *how big* (40 x 40 pixels) to draw an ellipse.

<iframe src="https://editor.p5js.org/dbwetzel/full/W9nvrWi4u" height = 200></iframe>

some key concepts:
* `ellipse()` is a *function* in P5.js. It draws an ellipse
* The number values given in parentheses are known as *arguments* to the function.
* A function does a thing. Maybe it draws a shape. Maybe it calculates a value. 
* *Arguments* specify how that function will do its thing.
* Each function takes a certain number of arguments (but sometimes no arguments), and expects them in a specific order.
* In the case of the P5 function `ellipse()`, the first argument is horizontal position, the second argument is vertical position, the third argument is width, and if there is a fourth argument, it is interpreted as height.

Other basic shapes you can use:
* `line(x1, y1, x2, y2);` - specify two coordinate points and connect with a solid line
* `rect(x, y, w, h);` - specify a location on the canvas an draw a rectangle with a given width and height
* `triangle(x1, y1, x2, y2, x3, y3);` - specify three coordinate points to make a triangle

## Color

In P5 you can specify fill colors and line colors using numerical values.

### fill()

 The color of the space inside a closed shape (`circle()`, `square()`, `ellipse()`, `rect()`, `triangle()`, etc.) can be set as "gray-scale" using a single numerical argument that determines "white" level between 0 and 255. Do this with the P5 `fill()` function.

```javascript
  fill(0); // black
  ellipse(100, 100, 40); // 40px black circle
  fill(150); // medium gray
  ellipse(200, 100, 40); // 40px gray circle
  fill(255); // white
  ellipse(300, 100, 40); // 40px white circle
```

<iframe src="https://editor.p5js.org/dbwetzel/full/PO6RR9Y1O" height=250 width = 400></iframe>

A second numerical argument to the `fill()` function sets a transparency value ("alpha channel"). If semi-transparent shapes overlap, you will see one shape behind the other.

```javascript
  fill(0, 200); // black, semi-tranparent
  ellipse(100, 100, 80); // 80px black circle
  fill(150, 200); // medium gray, semi-tranparent
  ellipse(150, 100, 80); // 80px gray circle
  fill(255, 200); // white, semi-tranparent
  ellipse(200, 100, 80); // 80px white circle
```
<iframe src="https://editor.p5js.org/dbwetzel/full/7lLdyrDWQ" height=250 width=400></iframe>

Using the `fill()` function with three arguments sets color values (in 'RGB' mode by default) for red, green, and blue. Values are still numbers between 0 and 255 (we can talk about 8-bit binary numbers in another section). 

```javascript
  fill(255, 0, 0); // max red, no green, no blue
  ellipse(100, 100, 80); // 80px red circle
  fill(0, 255, 0); // no red, max green, no blue 
  ellipse(150, 100, 80); // 80px green circle
  fill(0, 0, 255); // no red, no green, max blue
  ellipse(200, 100, 80); // 80px blue circle
```
A fourth argument to fill() sets rgb + transparency.

<iframe src="https://editor.p5js.org/dbwetzel/full/-w8L_S3zV" width=400 height=250></iframe>

Alternatively, you can set simple colors by name if given in quotes. These are based on CSS <named-color> attributes. You can find a comprehensive list of colors from [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/named-color).

```javascript
  fill("orange"); // orange
  ellipse(100, 100, 80); // 80px orange circle
  fill("brown"); // brown
  ellipse(150, 100, 80); // 80px brown circle
  fill("purple"); // purple
  ellipse(200, 100, 80); // 80px purple circle
```
<iframe src="https://editor.p5js.org/dbwetzel/full/FNKnTlRoB" width=400 height=250></iframe>

### stroke()

You can set the color of lines and the outlines for shapes in P5 using the `stroke()` function. Arguments for `stroke()` work the same way as `fill()`. Use `strokeWeight()` to set the thickness of a line or outline. The numerical argument to `strokeWeight()` sets the line thickness in pixels. The P5 funciton `noStroke()` removes the outline from subsequent shapes.

```javascript
  background(200); // light gray background
  stroke(255); // white outline
  strokeWeight(6); // 6 pixels (thick)
  fill("orange"); // orange fill
  ellipse(80, 100, 70); // 70px orange circle with a thick white outline
  stroke(0); // black outline
  strokeWeight(0.5); // very thin
  fill("brown"); // brown fill
  ellipse(160, 100, 70); // 70px brown circle with a thin black outline
  stroke("pink"); // pink outline
  strokeWeight(2); // 2px outline
  fill("purple"); // purple fill
  ellipse(240, 100, 70); // 70px purple circle with a 2px pink outline
  noStroke(); // turn off outline
  fill("lightblue"); // light blue fill
  ellipse(320, 100, 70); // 70px light blue circle with no outline
```
<iframe src="https://editor.p5js.org/dbwetzel/full/bLipPlKqx" width=400 height=250></iframe>

Note that fill and stroke functions apply to all subsequent shapes in a sketch. Calling `fill()` or `sroke()` overrides previous settings.