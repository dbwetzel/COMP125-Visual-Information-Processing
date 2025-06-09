<link href="../markdown.css" rel="stylesheet"></link> 

## Lab 4 - For Loops
*Draw repeating shapes using an interative structure*

Use the following template link to get started:
* <a href ="https://editor.p5js.org/dbwetzel/sketches/eG8hPWguF" target="_blank">https://editor.p5js.org/dbwetzel/sketches/eG8hPWguF</a>
* **log in** to your editor account on p5.js
* **File->Duplicate** to make your own copy

### Explanation

Looping structures are fundamental to computer programming. In fact, the ability to do something repetetive very quickly and precicely is probably the main reason for using a computer to do anything in the first place. There are several different types of loops you might use in a program. In each case, there has to be some condition that is met eventually the ends the loop (an "infinite loop" will crash your computer). Think of a loop as an `if()` statement that repeats a finite number of times (until the condition is `false`). A `do while()` loop will execute at least once before testing the condition in the parentheses. A `while()` loop tests the condition first before proceeding. A `for()` loop sets an index variable, tests it's value against a condition, and the modifies the index value for each iteration of the loop. It's the most complex, but the most useful of the three. It's the one we will use most in this class. 

### Coding Instructions

Line 14 demonstrates how to call the `smiley()` function. It takes two arguments. The first specifies the horizontal placement of a smiley face on the canvas. The second argument specifies its vertical placement. 

* Run the sketch to see the smiley face in the middle of the canvas (`smiley(width/2, height/2);`).

* use the `for()` loop (already created for you) to draw ten smiley faces (`smiley()` function) while adding **only one line** of code at line 17 (inside the `for()` loop).
```javascript
16    for(let i = 0; i > 10; i++){
17
18    }
```

In the for loop.
* horizontally, start 50px from the left edge and space them evenly 55px apart (first argument to `smiley()`)
* place them vertically 50px from the top of the canvas (second argument to `smiley()`)
* remember that the value of `i` changes with each iteration of the loop (0, 1, 2, 3 ...) up to one less than 10. You can use that to place the smileys horizontally
