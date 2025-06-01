<link href="../../markdown.css" rel="stylesheet"></link> 

# Loops
*Doing something repeatedly while a condition is true: iterative structures*

Chapter 3 of *Make: Getting Started with P5.js* gets into the `for()` loop a littl bit. This is a tricky concept for many new programmers.

### `draw()` is a loop.

First, I want to remind you that the `draw()` function in P5.js runs like a loop. Code inside the curly brackets of `draw()`  is executed in order from top to bottom and then repeats in that order for as long as the page is loaded. The frequency (or rate) of the `draw()` loop is 60 frames per second by default. This is looping feature is how we will use P5 to make animations. If the values (variables) that control the position of an image change over time, we will see a series of images on the canvas that, at 60 frames per second, will appear as movement. This is the same principle as flip-book animation, film, and TV.

Again, the `draw()` function normally repeats at a rate of 60 times per second. You can change this with the P5 function `frameRate()`. Like the system variables `width` and `height`, there is a system variable called `frameCount` that stores the number of frames that have elapsed since the page was loaded. In the example below, the frame rate is set to 1. Therefore `draw()` will execute once per second. The background is a little bit transparent in this example, so you can see how each frame is layered on top of the previous image (like a flip book). Note the little "metronome" waving to you from the bottom right side. Move the slider to change the frame rate (1-60).

<iframe src="https://editor.p5js.org/dbwetzel/full/jy0cg0jGZ" height="285" width="400" ></iframe>

Source code: <a href = "https://editor.p5js.org/dbwetzel/sketches/jy0cg0jGZ" target="_blank">https://editor.p5js.org/dbwetzel/sketches/jy0cg0jGZ</a>

### `for()` loops

A `for()` loop is an *iterative* structure (repeating) common to most proceedural programming languages (Java, C, C++, etc.). 

A for() loop is a loop that typically involves several steps:

1. **initialize** an index variable (e.g., `var i = 0;`)
2. **test** a condition (e.g., `i < totalLoops;`) as long as the condition evaluates as `true`, execute the `{block of code}` (assume you had already declared `var totalLoops = 10;`)
3. **execute** code ( e.g., `{ ellipse(i * 10, 50, 10, 10); }`) 
    * anything inside  `{ }` will execute once for each iteration of the loop
4. **update** the index variable (e.g., `i++`). 
    * The '`++`' operator will increment `i` by one for each iteration of the loop.

 If the value of `totalLoops` is 10, the loop will execute 10 times. That's because `i` starts at 0 and increments by 1 with each iteration. On the tenth iteration, the value of `i` is 9. Nine is still less than 10, so the block executes. On the 11th iteration, the value of `i` is 10. Ten is NOT less than 10, so the test evaluates as `false` and the loop terminates. 
 
 >**Important!** If the test *never* evaluates as `false`, you have an "infinite loop" and probably a browser (or computer!) crash. Be careful in constructing loops so that you avoid that situation!
 
 All together, our basic `for()` loop would look like this:
```javascript
    var totalLoops = 10;
    for(var i = 0; i < totalLoops; i++) {
        ellipse(i * 10, 50, 10, 10);
        // draw a row of 10 dots spaced 10 pixels apart
        // 0 * 10, 1 * 10,  2 * 10 ...
    }
```

**Making patterns with loops**

Loops are useful for many things in a program. At this stage we are mainly concerned with drawing things on the canvas with P5. What if you wanted to draw a complex repeating pattern? Take a look at this implementation of a `for()` loop, and then consider how many lines of code it would take to do the same thing *without* a `for()` loop.

```javascript
    function setup() {
        createCanvas(200, 200);
    }

    function draw() {
        background(220);
  
        for(let i = 0; i < height; i += 10){
            line(i, height, 0, i);
            line(i, 0, 0, height-i);
            line(i, height, width, height-i);
            line(i, 0, width, i);
        }
    }
```
<iframe src="https://editor.p5js.org/dbwetzel/full/dd22tG7On" width="400" height="245"></iframe>

Source code: <a href = "https://editor.p5js.org/dbwetzel/sketches/dd22tG7On" target="_blank">https://editor.p5js.org/dbwetzel/sketches/dd22tG7On</a>

**Nested `for()` loops**

It's possible (actually common) to "nest" a `for()` loop inside the `{code block}` of another `for()` loop. This is especially useful for managing rows and columns. The outer loop executes once for each row (from `w/2` to the `height` of the canvas). The inner loop executes once for each column for each row. The ellipse inside the inner loop's `{code block}` is drawn for each row and column. Notice that this loop will *adapt* to whatever size is set for `createCanvas()` and to any value of `w`.

**Example:** Nested `for()` loop to make a simple wallpaper:

```javascript
    var w = 20;
    function setup() {
        createCanvas(200, 200);
    }

    function draw() {
        background("blue");
        fill("pink");
        for(let y = w/2; y < height; y += w){
            for(let x = w/2; x < width; x += w){
                ellipse(x, y, w);
            }
        }
    }
```

<iframe src="https://editor.p5js.org/dbwetzel/full/mBDy8XRhD" height="245"></iframe>

Source code: <a href = "https://editor.p5js.org/dbwetzel/sketches/mBDy8XRhD" target="_blank">https://editor.p5js.org/dbwetzel/sketches/mBDy8XRhD</a>

