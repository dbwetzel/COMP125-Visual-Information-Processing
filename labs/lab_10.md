<link href="../markdown.css" rel="stylesheet"></link> 

## Lab 10 - Spin
*Rotate an object on the canvas.*

Use the following template link to get started:
* <a href ="https://editor.p5js.org/dbwetzel/sketches/l1cBRWdLW" target="_blank">https://editor.p5js.org/dbwetzel/sketches/l1cBRWdLW</a>
* **log in** to your editor account on p5.js
* **File->Duplicate** to make your own copy

In P5, if you want to rotate and move objects independently on screen, it's really helpful to know how to use `push()` and `pop()` correctly. Once you have those two functions in place, you can use `translate()`, `rotate()`, and `scale()` and only affect one object at a time. In this lab, you will get a little practice doing this with a really simple object.

### Instructions:
1. Modify the `display()` method of the `myClass()` object constructor function so that it
    * creates a new layer with `push()`
    * moves the origin point to the object's x and y location using `translate()`
    * rotates the image around the new origin point using `rotate()` and the object's `angle` property
    * (optional) scales the image using `scale()`
    * draws the image with x and y positions at 0
    * resets the layer with `pop()`
2. Add a `spin()` method to the `myClass()` object constructor function. It should affect the `.angle` property of the object.  
    * You might set it up to take an argument that sets the rotation speed and direction. That's up to you (more fun if you do, though!).
3. In `draw()`, call the `spin()` method for each object in the appropriate `if()` statements (each one checks to see if you clicked the mouse on a specific object)

Each square should spin independently (and scale?) while you press the mouse on it.

### When you're done:
* Make sure you save your work in the P5 editor (**File->Save**)
* Download a backup copy and submit the .zip file (**File->Download**)
* Share a link to your sketch (**File->Share->Edit**)