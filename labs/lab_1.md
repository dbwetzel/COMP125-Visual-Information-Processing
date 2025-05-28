<link href="../markdown.css" rel="stylesheet"></link> 

## Lab 1 - Draw!

*Use P5 basic shape functions to draw a picture*

Use this link to get started:

* <a href="https://editor.p5js.org/dbwetzel/sketches/rAdIyonr7" target="_blank">https://editor.p5js.org/dbwetzel/sketches/rAdIyonr7</a>

In the first Lab, you created a new P5.js sketch. Credit for that lab is awarded for successfully linking a web page (index.html) to the P5.js code library and adding some JavaScript code to a connected script file (script.js). For some of you, that might have been a leap of faith already.

Now it's time to actually write some original code that will generate your own graphics in a browser window! You should carefully read **Chapter 3 - Draw** in McCarthy, et al: *Make: Getting Started with P5.js.* Consider using this lab as a place to try out some of the examples in chapter 3.

In the sketch file explorer (left side '>'), edit the file "script.js" to create something original with code.

Try to draw something interesting (a character? animal? object?) using basic P5 shape functions. Think about coordinates on the canvas as numbers in pixels (0, 0 is the top left corner). Again, see chapter 3 of the textbook for ideas and details. Maybe start with a simple shape and see how it goes. Add to it gradually, one shape at a time, and always test your work by running the sketch to see how it looks. You should get used to some trial and error. That's how programming works!

**NOTE:** In your script, there should be only one instance of `setup()` and only one instance of `draw()`!

This lab is worth **10 points**, allocated according to the following criteria/rubric:

**1 - 4 points:** Generate at least four different shapes, using at least three of the following basic shape functions:
``` javascript
    point()
    line()
    rect()
    ellipse()
    triangle()
```
Each P5 shape function has slightly differnt requirements. If you are confused, you can always check the <a href="https://p5js.org/reference/" target="_blank">P5 reference</a> for examples and detailed explanations.

**1 - 3 points:** Apply color, line weighting, and advanced shape techniques with at least three of the following:
``` javascript
    fill()
    stroke()
    strokeWeight()
    arc()
    vertex() // with appropriate use of beginShape() and endShape()
    for(){
        // loop to draw a repetitive pattern
    }
```

**1 - 2 points:** Creativity: 
    
* 2 points if the image that appears on the canvas is a coherent composite image made up of multiple basic shapes
* 1 point if the image is disjointed or incoherent, or is mostly derivative of one of the textbook examples

**1 point:** Submitted complete and in the correct format

* Uploaded to Sakai as .zip archive (from the P5 editor, "File->Download" to save a .zip archive of your work)
* Paste a link to your project in the Sakai submission comments box (copy from the address bar in your browser, or File->Share)
