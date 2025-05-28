<link href="../../markdown.css" rel="stylesheet"></link> 

# Interaction
*Make your programs responsive to user input*

So far, we have mainly created static images. Static images may be complex, but they don't change from one frame to the next.

Now, we will tap into the power of the P5 `draw()` function to make your drawings dynamic and responsive. There are some big concepts to absorb here that are critical for writing interesting and responsive interactive animations. By "responsive," we mean that the animation changes in response to actions by the user (mouse position, clicks, touch actions, key presses, etc). To do that, we have to start designing logical structures in our code. This is probably one of the most useful parts of this course for you as an exercise in pure critical thinking. To write code that responds to user actions in a meaningful way, you will need to think through the consequences of your code and its logic very carefully. You may even find yourself applying these concepts to other situations in your real life!

# Conditional Statements
*if() ... else*

One of the most important tools of computer programming is the "conditional" statement. A conditional statement is a test of a variable that determines which action to take next. This is how branching logic is managed and controlled in a program.

### Testing a condition with "`if()`"
The most common conditional statement is the "`if() ... else`" statement. What you are testing is whether a given statement or condition is either **true** or **false**. For instance, if you are checking to see if the mouse is on the right side of the canvas, you could write a conditional statement that looks for that condition to be true. If the mouse is on the right side of the canvas, then the value of the P5 variable `mouseX` will be greater than half the value of the P5 variable `width` (the width of the P5 drawing canvas, in pixels). In code, we could write that as:
```javascript
    if(mouseX > width/2) { }
```

Assuming this statement is inside the P5 `draw()` function (where it will run 60 times per second), when the mouse is on the right side of the screen the statement "`mouseX > width/2`" will evaluate as `true`. When the mouse is on the left side of the canvas, mouseX is not greater than `width/2`, so the statement is `false`.

Then what? Well, if the condition is true, then you can place statements inside the *curly brackets* to define what happens.
```javascript
if(mouseX > width/2) {

  fill (0, 0, 255); // set the fill color to blue

}
```
And if you want something else to happen when the condition is `false`, you can add an "`else`" statement afterwards to take care of all situations in which your condition is not met.
```javascript
    function draw() {
        if(mouseX > width/2) {
            fill (0, 0, 255); // set the fill color to blue
        } else {
            fill (255, 0, 0); // set the fill color to red
        }

        ellipse(width/2, height/2, 50, 50); // circle changes color depending on mouse position
    }
```

