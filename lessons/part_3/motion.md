<link href="../../markdown.css" rel="stylesheet"></link> 

## Basic Motion
*Make things move on screen*

In this unit we will start to fully utilize the "flipbook" animation features of P5. As we saw previously, with user interaction, the `draw()` function in P5 executes repeatedly at a set rate (usually 60 times per second). In our exercises that looked for user actions, such as pressing the mouse button, moving the mouse, or pressing a key, we used this feature of `draw()` to check for user actions 60 times per second and then change something about the drawing in response.

Now we are going to create P5 sketches that update the drawing with new values every time `draw()` executes. For instance, if the value of the "x" coordinate of an object changes for each iteration of the `draw()` function, then it will appear in a new location each time. At this point, it's probably helpful to think in traditional film & animation terms. In this context, each iteration of `draw()` is an animation frame. You could think of frames as pages in a flip-book style animation. If you have the same image on each page, but gradually shifting in position from one page to the next, you will perceive it as a moving image when the pages are flipped past you fast enough. That's how P5 does it, but the image is drawn for each frame by the `draw()` function, allowing for user interaction (unlike a traditional flip book).

Note that the `background()` function at the beginning of the `draw()` `{ code block }` does a really important job! If you comment out (`//`) the `background()` function, you might notice some odd behavior in your animations. The background function re-draws a solid color background at the beginning of the frame. If you leave it out, the canvas doesn't change before `draw()` begins drawing images again. In other words, if you don't want to see traces of each frame, make sure `background()` is at the top of the `draw()` function's list of things to do.

### Bouncing Ball

This example shows some basic motion: a circle that changes position with each frame appears to move across the screen. When it reaches the edges, it changes direction. How? The ball has variables for its x and y position on canvas. In each frame, the values of those variables are incremented by a set amount (contained in a "speed" variable). A conditional statement (`if()`) checks to see if the "x" or "y" values are less than 0 (off the canvas' left or top edges) or greater that the canvas width (right edge) or height (bottom edge). If the condition is true, the appropriate speed variable is multiplied by -1, reversing its direction.

Here's the complete code:
```javascript
    var x = 0, y = 0;
    var diam = 40; // circle size
    var xSpeed = 2; // horizontal speed
    var ySpeed = 4; // verticaal speed

    function setup() {
        createCanvas(320, 240);
    }

    function draw() {
        background(200); //light gray background
        fill(255, 100, 0); // orange
        ellipse(x, y, diam); // draw a circle

        x += xSpeed; // increment the value of x by xSpeed value (2)
        y += ySpeed; // increment the value of y by ySpeed value (4)

        // if the ball goes out of bounds, change direction
        if (x > width || x < 0) {
        // if x is greater than width OR less than 0
            xSpeed *= -1; // reverse polarity!
        }

        if (y > height || y < 0) {
            ySpeed *= -1;
        } // same for the y axis
    }
```

<iframe src="https://editor.p5js.org/dbwetzel/full/7vWVJY_7Q" height=300 width=400></iframe>

Open in the editor: <a href="https://editor.p5js.org/dbwetzel/sketches/7vWVJY_7Q" target="_blank">https://editor.p5js.org/dbwetzel/sketches/7vWVJY_7Q</a>