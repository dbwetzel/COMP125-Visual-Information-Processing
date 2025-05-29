<link href="../markdown.css" rel="stylesheet"></link> 

## Lab 6 - Basic Motion
*Make an image move across the screen*

Use the following template link to get started:
* <a href ="https://editor.p5js.org/dbwetzel/sketches/G6gG2sFkA" target="_blank">https://editor.p5js.org/dbwetzel/sketches/G6gG2sFkA</a>
* **log in** to your editor account on p5.js
* **File->Duplicate** to make your own copy

In this lab, I want you to think through the logic that makes an image move across the screen. The basic idea is that this image has "x" and "y" values that determine its location on screen for each frame. As it is now, the x and y values don't change from frame to frame, so the image does not appear to move.

Remember that the `draw()` function repeats at a rate of 60 frames per second. If you add some code that changes the value of either `x` or `y` in each frame (by adding a value to it cumulatively), the image will start moving!

### Instructions

Add code to the `draw()` function (which loops) so that the spaceship moves across the screen. You can choose to make it move left, right, up, or down.

Hint: you will need to do something to *increase* or *decrease* the value of `x` or `y` each frame.

For **extra credit** (1 point), use an `if()` statement to make it wrap around to the other side of the screen when it goes off the edge.
