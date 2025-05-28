<link href="../../markdown.css" rel="stylesheet"></link> 

# Draw
*Make drawings with basic shapes on a web canvas*

In most programming classes, your first assignment would be to write a program that produces the phrase "Hello, World!" on the screen. In this class, our equivalent to the traditional "Hello World" assignment will be to draw a circle on the canvas in your browser. Your first lab assignment (Lab 0) uses a template that contains a web page ("`index.html`") linked to a JavaScript file ("`script.js`"). Your first step is to link this project to the P5.js code library, which gives us some tools that we can use to make graphics with very little effort or coding knowledge. Once we add a link to P5.js in the `index.html` file, all we have to type, in the "`script.js`" file, is the following:
```javascript
function setup() {

  ellipse(50, 50, 20, 20);

}
```
Run the sketch, and we should see a black circle appear on the "output" side of the window. P5.js executes the "setup" function and sees "`ellipse`" (also a function, and part of P5). It uses the series of numbers, separated by commas, inside the parentheses to specify *where* (50 pixels from the left edge of the canvas and 50 pixels from the top) and *how big* (20 x 20 pixels) to draw an ellipse.

some key concepts:
* `ellipse()` is a *function* in P5.js. It draws an ellipse
* The number values given in parentheses are known as *arguments* to the function.
* A function does a thing. Maybe it draws a shape. Maybe it calculates a value. 
* *Arguments* specify how that function will do its thing.
* Each function takes a certain number of arguments (but sometimes no arguments), and expects them in a specific order.
* In the case of the P5 function `ellipse()`, the first argument is horizontal position, the second argument is vertical position, the third argument is width, and if there is a fourth argument, it is interpreted as height.

**Next up:** how to draw animals with Ed Emberly and P5 ...