<link href="../../markdown.css" rel="stylesheet"></link> 

# Variables
*Storing data in a named location*

A variable is a named placeholder for a thing or quantity. An everyday variable might be something like your "age." Its numerical value increases over time, but you still know it by the same name. Another might be today's lunch menu. The variable name is "lunch" but the value of that variable might be "ham sandwich" or "salad" or "pizza." Its contents can be anything you feel like, but it's filed under the same location in your working memory.

This exercises in this unit will focus on one of the most useful features of any programming language: the ability to store and manipulate numerical values, or other data, in named memory locations, known as "variables." Mathematically, you probably already know this concept from Algebra.

Remember the linear graphing function, `y = mx + b`?

Those letters are all *variables*, meaning they can represent different number values at different times. If we assigned values to 'm' and 'b' (e.g. m = 2 and b = 6), then we could easily draw a graph by plugging in different values of 'x' to generate corresponding values for 'y' (e.g. if x is 5, then y = 2 * 5 + 6). In a computer program, variables make it possible to temporarily store and change values over time, making the program dynamic and responsive.

In P5, we could use that same linear function to draw a line or move a shape across the canvas. Each new "x" coordinate could generate a new "y" coordinate for each frame of an animation. Those "x" and "y" values could be used to determine the location of an object on the canvas. If the values of x and y change in each drawing frame (P5's `draw()` function runs 60 times per second!), the object will appear to move. Magic!

>Code Example: <a href = "" target="_blank">Linear Function</a>

### Variable Types 

Variables in JavaScript (remember that P5 is an extension of JavaScript) are fairly simple and flexible. In other languages, such as Java (no actual relation to JavaScript!) or C, variables have a "type" -- in other words, a variable must be a particular type of number (integer, floating point decimal, etc) or other specific data type (char, boolean, etc). Once the variable is declared as a particular type of data, it generally can't change. However, in JavaScript, even though we initialized `x` as a number, there is nothing stopping us from doing the following:
```javascript
    x = "hamburger";
```
... and now the variable `x` contains a string of characters (an object known simply as a "String" in JavaScript). In general though, you should try to avoid doing this. Once you decide what your variable is supposed to contain, try to stick with it. If it's declared and initialized as a number, don't assign other data types to it later. In fact, you can get away with this in JavaScript, but not in other languages such as *Java* or *C*.

**Basic JavaScript variable types we will use in this class:**

* **Number** (may be integer or float)
    * integer (int) is a whole number
    * float is a decimal number
* **String** (text string of characters)
* **Boolean** (contains value of either `true` or `false`)

### About Variable "Scope"

A variable declared in one part of your code may or may not be accessible from other parts of your code. The accessibility of a variable and its data depends on the variable's "scope." We will use the term "scope" to mean the boundaries in which something operates. The scope of a variable depends on the section of your code in which it is declared. For instance, in **Example 4-1** from *Getting Started with P5.JS*, you have the following code:
 
```javascript
    var y = 60;
    var d = 80;

    function setup(){
        createCanvas(480, 120);
    }
 
    function draw(){
        background(204);
        ellipse(75, y, d, d);   // Left
        ellipse(175, y, d, d);  // Middle
        ellipse(275, y, d, d);  // Right
    }
```

### Global variables

In this example, the variables 'y' and 'd' are declared at the top of the program, outside of any function definitions (such as setup() and draw()). This give the variables "global" scope, meaning they are accessible from anywhere in the program, including from other functions. The code inside the draw() function references the values of 'y' and 'd.' Because these are global variables, the draw() function could also make changes to the variables (assign new values). If there were other functions in the program, they could reference these global variables too, and any changes made by one function to their values would affect the operation of the other functions as well. A variable declared this way has "global scope."

### Local Variables

Unlike global variables, which exist outside of a function and accessible by all functions in a program, a local variable is declared inside a function definition, and its "scope" is confined to that function. In other words, if you declare a variable within the curly brackets of the `setup()` function, that variable will not exist inside the `draw()` function. Its scope will be local to `setup()` and not to `draw()`. In the following example, there are two functions that draw shapes on the canvas `square()` and `circle()`. These functions are defined in the code below the `draw()` function (scroll down to see). Inside each of these functions, variables `x`, `y`, and `d` are declared locally. Since they are defined inside the function, their scope is confined locally to that function. The fact that `circle()` has a variable called '`x`' does not interfere with the operation of `square()`, which has its own, local, version of '`x`' to work with. Any change to the value of `x` in either `circle()` or `square()` will affect only the output of that function. That's an example of local scope. 
``` javascript
    var x = 0; // global variable

    function setup() {
        createCanvas(200, 150);
        frameRate(1);
    }

    function draw() {
        background(200);
        drawSquare(); // see function definition below
        drawCircle(); // scroll down to see circle() function ...
        console.log("global x: " + x);
        x ++; // increment x    
    }

    function drawSquare(){
        var x = 10; // x location
        var y = 10; // y location
        var d = 50; // diameter
        fill(255, 0, 0);
        // draw using local variables
        rect(x, y, d, d);
        console.log("drawSquare() local x: " + x);
    }

    function drawCircle(){
        var x = 100; // x location
        var y = 70; // y location
        var d = 40; // diameter
        fill(0, 0, 255);
        // draw using local variables
        ellipse(x, y, d, d);
        console.log("drawCircle() local x: " + x);
    }
```

See the working version at <a href="https://editor.p5js.org/dbwetzel/sketches/Lmy4l-k41" target ="_blank"> https://editor.p5js.org/dbwetzel/sketches/Lmy4l-k41</a>

### More Code Examples:

* <a href = "https://editor.p5js.org/dbwetzel/sketches/sdjlP7Cp8" target="_blank">Alien Relativity</a> - draw a UFO relative to variables for 'x' and 'y'
* <a href = "https://editor.p5js.org/dbwetzel/sketches/Rq3yh2Uuo" target="_blank">Alien Mouse Relativity</a> - draw a UFO relative to the position of the mouse (interactive animation!)
