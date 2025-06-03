<link href="../../markdown.css" rel="stylesheet"></link> 

# Translate-Rotate-Scale
*Move, rotate, and resize a matrix layer*

Sometimes it's easier and more efficient to move the entire reference grid around than to change all the location arguments of an image. In P5, this is especially true if you want to **rotate** an image. For "Sprite" images, this is the prefered method, since all the shapes that make the Sprite can be positioned relative to (0, 0) rather than variable names or arbitrary numbers. **Translation** is the repositioning of the origin point (0, 0) to a new location on the canvas. **Rotation** is the turning of the *entire grid* around its origin point. **Scaling** is the *resizing* of the coordinate grid.

### The Matrix

Your P5 canvas is like a window into a world of graphics. It has a size in pixels (set by `createCanvas()`), but you are looking through that window at a "matrix" of pixels. That matrix is a 2-dimensional grid with a set of coordinates.

The P5 coordinate system has an origin point (0, 0) and x and y coordinates radiating out infinitely in all directions. When we create a P5 canvas we specify pixel dimensions for the visible pixel area (i.e., `createCanvas(400, 400)`). This sets up a default matrix with it's (0, 0) origin point located at the top left corner (position 0, 0 on the canvas). Also, the rotation of this matrix is '0'  (no rotation) and its scale factor is '1' (normal size). Any transformations (`translate()`, `rotate()`, `scale()`) appy to the entire matrix. If you want to apply transformations to an isolated group of shapes so that you can position, scale, and rotate them separately from other parts of an image (e.g. a cartoon character's arm) you can create a separate, temporary matrix layer using the P5 functions `push()` and `pop()`. The function `push()` saves the current matrix layer and creates a fresh one. Then any calls to `translate()`, `rotate()`, or `scale()` will affect only that layer defined between `push()` and `pop()`. If you call `push()`, you have to end the matrix group with a call to `pop()`, which restores the previous matrix and its transformations.

```javascript
    function draw(){
        let a = sin(frameCount/60 * TWO_PI); //-1 to 1
        background(200);
        push(); // create temp matrix layer
        translate(width/2, height/2); // move origin
        rotate(a); // wave back and forth
        ellipse(0, 0, 5); //5px dot in center
        line(0, 0, 0, -40); //metronome arm
        pop(); //dispose of temp layer
    }
```

### Translation 

The arguments to `translate()` take care of positioning on the canvas. Be careful, though! Calls to `translate()` are cumulative in a sketch (multiple calls will continue shifting from the last translated point), unless you separate elements from each other on separate "matrix" layers with `push()` and `pop()`. For example:
```javascript
    push(); // create a new matrix layer
    translate(200, 100); // move the (0, 0) point on the canvas
    ellipse(0, 0, 50); // circle at translated position
    pop(); //reset the matrix
    push(); // create another new matrix layer
    translate(100, 300); // move the (0, 0) point on the canvas
    ellipse(0, 0, 50); // circle at different translated position
    pop(); //reset the matrix

```

## Rotate

In P5, you can't simply rotate a single shape without doing something extra. Instead, you rotate the whole image matrix (the pixel grid) around it's origin point. This might seem kind of weird, especially if you imagine rotating different items independently. However, P5 doesn't know which shapes are supposed to rotate together (cosider the complex sprite image in the example below), or which point to center the rotation. So in P5, rotation always takes place around the (0, 0) origin. To isolate a group of shapes in an independent layer for rotation, use `push()` and `pop()` to make a separate matrix layer first. By default, the numerical argument to `rotate()` is given in radians (1 radian is an angle with a circumference equal to the radius of the unit circle; `PI` is a half rotation; `TWO_PI` is a full rotation). If you prefer to work in degrees instead of radians, be sure to call `angleMode(DEGREES);` before calling `rotate()`.

## Scale

In p5, you can change the size of your shapes by adjusting the `width` and `height` arguments, or you can simply re-scale the entire drawing canvas. The `scale()` function in P5 applies to the entire active matrix (everything on the canvas if you don't use `push()` and `pop()` to isolate a section or image layer). `Scale()` takes a single numerical argument to resize a matrix without affecting the proportions ("aspect ratio"). If you give two arguments to `scale()`, you can affect the horizontal and vertical scaling separately. A value of '1' sets the image to its original size. A value of '2' would double it, and a value of '0.5' would shrink it to half size.

### Interactive Example

In the example below, the entire coordinate grid gets moved on the canvas to whatever the current values of x and y are. All drawing functions will appear relative to that new origin point. Use the sliders to change the values for `x` (horizontal translation), `y` (vertical translation), `r` (rotation angle), and `s` (scale factor);

This sketch features a complex composite image (a "robot" sprite), with all of its component shapes drawn relative to (0, 0).

The code that draws the center box (robot body) is simply:
```javascript
    rect(0, 0, 50, 50); // draw a box
```
... which appears centered on the grid, wherever the origin point gets translated. 

The code for the head is
```javascript
    rect(0, -45, 40, 30); // head
```
 ... which will appear 45 pixels above whatever point is given to translate().

The grid you see represents the matrix layer created with the P5 functions `push()` and `pop()`. Notice that the *entire grid* moves, rotates, and scales as a unified layer. Individual shapes can't do this independently in P5, so these transformations have to be done on the "matrix" (layer) level. 

<iframe src="https://editor.p5js.org/dbwetzel/full/dwh9JG5FAc" height=500 width=500></iframe>

Source code: <a href="https://editor.p5js.org/dbwetzel/sketches/dwh9JG5FAc" target="_blank">https://editor.p5js.org/dbwetzel/sketches/dwh9JG5FAc</a>