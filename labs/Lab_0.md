<link href="../markdown.css" rel="stylesheet"></link> 

## Lab 0 - Hello P5.js!

*This "Lab" is for participation/engagement credit*

The purpose of this lab is to get you up and running as soon as possible. I have created lab and project templates in the P5 editor. All you need to do is open it and save it to your own account.

In most programming classes, your first assignment would be to write a program that produces the phrase **"Hello, World!"** on the screen. In this class, our equivalent to the traditional "Hello World" assignment will be to draw a circle on the canvas in your browser. 

In P5.js, we will refer to your program as a **"sketch."** A sketch is a JavaScript file (.js) linked to a web page (.html). The sketch file is where we will add code that draws images and controls animations with the P5 library.

To return to your homework later, make sure you save it and then go to "My Sketches" in the top right dropdown menu (under your user name).

**Create an account**, or **log in** to your account, at <a href="https://editor.p5js.org" target="_blank">editor.p5js.org</a>. Then click the link below to get started:

* <a href="https://editor.p5js.org/dbwetzel/sketches/SN87Rrjmc" target="_blank">https://editor.p5js.org/dbwetzel/sketches/SN87Rrjmc</a>

In this lab, you will add some simple P5 functions to the sketch that will draw shapes in the P5 canvas. Once you have done that, submit your sketch files and a link for course credit.

### coding instructions

1. **Save** your own copy. The P5 editor has its own menus. Look for "File" and choose "Duplicate" (**File->Duplicate**) to make a copy of the assignment in your own account. Look at the title of the sketch ("COMP 125 Lab 0 - Getting Started with P5"). Does it still say "by dbwetzel" or does it have your own user name listed as the author? If you're listed as the author, then you're ready to start coding! You can find your work later by loggin in and looking at the top right corner where is says "Hello, ___!" and choose "My Sketches" from the drop-down menu.

2. **Explore your project.** Look at the "files" list for your sketch (click the '>' under the play/run button to open the file browser sidebar). You should see two essential files for this project (viewable as a web page): index.html and sketch.js. To complete this lab, you will edit each of these files a little bit.

3. **Link your project** to the P5.js Code Library (Don't worry if that doesn't mean anything to you yet). Click on the link for "index.html." Copy and paste the following code block into index.html at line 5:
``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.3/p5.js"></script>
```
4. **Prove that it works.** Press the "Play/Run" button. You should see a gray square "canvas" in the right-hand "preview" window

5. **Draw something on the Canvas.** Open and edit sketch.js. Add the following two lines of code, starting at line 7 (inside the `draw()` function):
``` javascript
  fill(0);
  ellipse(50, 50, 50, 50);
```
Your completed `draw()` function should look like this:
``` javascript
function draw() {
  background(220);
  fill(0);
  ellipse(50, 50, 50, 50);
}
```

6. **Run your sketch.** You should see a black circle in the upper left corner of the gray canvas.

