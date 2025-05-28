<link href="../markdown.css" rel="stylesheet"></link> 

## Lab 0 - Getting Started with P5.js

*This "Lab" is for participation/engagement credit*

Create an account, or log in to your account, at [editor.p5js.org](editor.p5js.org). Then click the link below to get started:

* https://editor.p5js.org/dbwetzel/sketches/SN87Rrjmc

In this lab, you will add some simple P5 functions to the sketch that will draw shapes in the P5 canvas. Once you have done that, submit your sketch files and a link for course credit.

### coding instructions

1. **Explore your project.** Look at the "files" list for your sketch (click the '>' under the play/run button to open the file browser sidebar). You should see two essential files for this project (viewable as a web page): index.html and sketch.js. To complete this lab, you will edit each of these files a little bit ...
2. **Link your project** to the P5.js Code Library (Don't worry if that doesn't mean anything to you yet). Click on the link for "index.html." Copy and paste the following code block into index.html at line 5:
``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.3/p5.js"></script>
```
3. **Prove that it works.** Press the "Play/Run" button. You should see a gray square "canvas" in the right-hand "preview" window
4. **Draw something on the Canvas.** Open and edit sketch.js. Add the following two lines of code, starting at line 7 (inside the `draw()` function):
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

5. **Run your sketch.** You should see a black circle in the upper left corner of the gray canvas.

6. **Submit your work:**
    * Download your code from the editor as a ".zip" file (File->Download)
    * Submit that .zip archive file as an attachment to the Sakai assignment submission (it will probably be in your "Downloads" folder)
    * Share a link to your sketch in the Sakai comments (**important!**). In the P5 editor, go to File->Share and click the "Edit" link to copy it to the clipboard. Paste that link into the comments before submitting
