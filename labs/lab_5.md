<link href="../markdown.css" rel="stylesheet"></link> 

## Lab 5 - Translation and Rotation

*Move the origin point to a new location on the canvas and rotate the image*

Use the following template link to get started:

* <a href ="https://editor.p5js.org/dbwetzel/sketches/cW-WdgGPj_" target="_blank">https://editor.p5js.org/dbwetzel/sketches/cW-WdgGPj_</a>
* **log in** to your editor account on p5.js
* **File->Duplicate** to make your own copy

In P5, if you want to rotate an image, you actually have to rotate the entire canvas. All rotation in P5 happens relative to the "origin point," also known as coordinate point (0, 0). If you call the P5 `rotate()` function without doing anything else, everything on the canvas will rotate around the top left corner. That may not be the effect you were looking for.

If instead you want to rotate an image in the middle of the canvas around its own center, you can do this by first moving the origin point to a new location on the p5 canvas with the P5 function `translate()`, and then drawing your image relative to (0, 0)

In this lab, there is a complex shape already drawn for you. Your job is to move it to the middle of the canvas and then rotate it when the mouse is pressed. The shape is drawn relative to (0, 0), so changing the arguments to `translate()` will shift the origin point, and therefore the image to a new location.

### Instructions:

* Modify the arguments to `translate()` in line 15 of **script.js** so that the image appears in the **center** of the canvas.
* Add a conditional statement (`if()` statement) that will execute when the mouse is pressed.
* In your `if()` statement. use the `rotate()` function to turn the image around the (0, 0) point.
* Pass an argument to `rotate()` that equals one quarter of a full rotation.
    * Remember that `rotate()` takes its arguments in "radians" by default. The P5 constant `PI` (~ 3.14 ...) is 180 degrees. `TWO_PI` is full circle (~ 6.28). A value of 1 will rotate by just less that 1/6 of a circle.
* The image should appear to tip over when you press the mouse.

### When you're done:
* Make sure you save your work in the P5 editor (**File->Save**)
* Download a backup copy and submit the .zip file (**File->Download**)
* Share a link to your sketch (**File->Share->Edit**)