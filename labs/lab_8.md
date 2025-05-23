<link href="../markdown.css" rel="stylesheet"></link> 

## Lab 8 - Functions
*Outsource complex drawings to a separate function*

Use the following template link to get started:
* <a href ="https://editor.p5js.org/dbwetzel/sketches/1LjAD2ctg" target="_blank">https://editor.p5js.org/dbwetzel/sketches/1LjAD2ctg</a>
* **log in** to your editor account on p5.js
* **File->Duplicate** to make your own copy

One of the most powerful features of programming languages like JavaScript is the function. We have been using functions since the beginning of this class. Functions are blocks of code that run when they are called. A function typically performs a predetermined task. Functions can receive data to work on in the form of *arguments* (data that is included between the parentheses after the name of the function).

In this lab, the function `myShape()` will take care of drawing multiple versions of the same image in different locations and different sizes, based on the arguments you give when calling it. Once you have a function that works reliably, you can concentrate on the bigger picture in your delightfully uncluttered `draw()` function.

### Instructions:
1. Add some original drawing code to the function `myShape()` so that it makes something interesting (and more complex than a single primitive shape). **5 points!**
2. Modify the `draw()` function to include at least three calls to `myShape()` with different arguments (for x location, y location, scale factor). You should see at least three copies of your image in different places on the canvas. **5 points!**

### When you're done:
* Make sure you save your work in the P5 editor (**File->Save**)
* Download a backup copy and submit the .zip file (**File->Download**)
* Share a link to your sketch (**File->Share->Edit**)