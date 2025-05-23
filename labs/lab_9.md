<link href="../markdown.css" rel="stylesheet"></link> 

## Lab 9 - Objects
*Create objects based on a constructor function*

Use the following template link to get started:
* <a href ="https://editor.p5js.org/dbwetzel/sketches/OwVDpLPpY" target="_blank">https://editor.p5js.org/dbwetzel/sketches/OwVDpLPpY</a>
* **log in** to your editor account on p5.js
* **File->Duplicate** to make your own copy

In this lab, use the template to try some object oriented programming. Some of it is done for you. Finish the program so that you see **two different instances** of your object prototype. They should be moving independently. Ideally, they will stay on the canvas (you will need to modify the `move()` method in the constructor function's definition)

### Instructions
1. `setup()`: There are two global variables at the beginning of the program, `myObj1` and `myObj2`. In the `setup()` function, add two lines, one for each `myObj` variable. Assign a new object to each one using the `new` keyword:
``` javascript
    myobj1 = new MyClass(100, 100); 
    /* arguments determine the initial (x, y) location of the new object. do the same thing for myObj2. Change the location arguments to put it in a different location. */
```
2. `draw()`: Add code to invoke the `.move()` and `.display()` methods of your new objects. In each frame, the `.move()` method will update the x/y location of the object, and `.display()` will draw it on the canvas in that location. The way this is done is to type the name of the object and append a "dot" ('.') followed by the name of the method (function), e.g. `myObj.move();` Remember to do this for both `myObj1` and `myObj2`.
3. `this.move()`: If that's all you do, when you run your code you should see two circles that begin moving in different directions until they leave the canvas. It would be better to fix this. In the class definition for `MyClass()`, look at the definition for `this.move = function()`. It has the basic code for making the x and y positions change. **Add some code** to either make the objects bounce off the edges or wrap around. See code from the book or my other examples for a model of how to do this.
4. `this.display()`: The objects in this example are pretty boring. Spice it up with a slightly more complex drawing. I have started it with a single ellipse. Go ahead and add a few more shapes to this object's appearance! Because the image is already translated to (`this.x`, `this.y`) you can draw all your shapes relative to (0, 0) . Remember to use "`this`" to refer to the object's own properties (`this.d`, etc).

### When you're done:
* Make sure you save your work in the P5 editor (**File->Save**)
* Download a backup copy and submit the .zip file (**File->Download**)
* Share a link to your sketch (**File->Share->Edit**)