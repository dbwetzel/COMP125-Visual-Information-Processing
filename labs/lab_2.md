<link href="../markdown.css" rel="stylesheet"></link> 

## Lab 2 - Declare Your Own Variables

Use the following template link to get started:

* <a href ="https://editor.p5js.org/dbwetzel/sketches/OAPPtWaOY" target="_blank">https://editor.p5js.org/dbwetzel/sketches/OAPPtWaOY</a>
* **log in** to your editor account on p5.js
* **File->Duplicate** to make your own copy

In this sketch, we start with a blank gray canvas. Your job is to create a new variable, using the "var" keyword and assign it an initial value. You can name your variable anything you like as long as it does not begin with a number (`var 1potato` is NOT allowed, but `var potato1` is OK). Variables also can't have spaces. Everything in JavaScript is **case sensitive** so your spelling and capitalization must alsways match.

### What to do:

* declare a variable in line 7 of script.js and assign it a value. For example:
```javascript
    var x = 320; 
```
* Apply that variable in a P5 function call inside the `draw()` function (line 18), for example:
```javascript
    ellipse(x, 240, 50, 50);
```
... draws a 50 pixel diameter circle `x` pixels from the left and 240 pixels from the top. What happens if you assign a different number to the value of x?

**Challenge:** can you create a complex image using more than one shape tied to the same variable? Can you create more than one variable and use it to control a different parameter of your image (like the 'y' position)?

For example:
```javascript
    var x = 320, y = 240;
```
... and in draw():
```javascript
    ellipse(x, y, 50, 50); // x and y determine canvas location
    ellipse(x, y + 25, 50, 50); // another circle 50 pixels lower!
```
### When you're done:
* Make sure you save your work in the P5 editor (**File->Save**)
* Download a backup copy and submit the .zip file (**File->Download**)
* Share a link to your sketch (**File->Share->Edit**)
