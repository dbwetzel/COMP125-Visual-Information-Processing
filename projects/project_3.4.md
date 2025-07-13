<link href="../markdown.css" rel="stylesheet"></link> 

# Project 3, Part 4 - Collisions

*Add new objects to your game, detect the intersection of two objects and decide what to do about it*

**Important:** Pick up where you left off in **Part 3 - Timers**. 

* **Log in** to editor.p5js.org
* Find your latest Project 3 sketch (top right: "Hello, userName" -> **"My Sketches"**)
* **Save** a new version:
    * File -> Duplicate
    * Click on the sketch name box and change it to **"Project 3 v.4 - Collisions"**

> In this step, you will add an array of objects to the game, control them with a timer and a `for()` loop, and add some code to detect the intersection of your `player1` object with the new objects in the game.

1. Add the file Box.js to your project
    * **Download** the "<a href = "Project_3_Files.zip">Project_3_Files.zip</a>" archive (then look for it in your Downloads folder)
    * **Extract** the .zip archive (on Mac, double-click the .zip file, on Windows, right click and choose "Extract All")
    * **Upload** the file "Box.js" to your project.
        * Open the sketch file explorer in the P5 Editor (there is a '>' button next the the file name in the top left of the editor window. Click it to open the file explorer).
        * Click the '+' button and choose "Upload File" to select the Box.js file

2. Link the file to your sketch
    * Open the file "index.html" to edit.
    * Add a reference to "Box.js" inside the `<body>` section. 
    * You should end up with:
```html
        <body>
            <script src = "sketch.js"></script>
            <script src = "Player.js"></script>
            <script src = "Timer.js"></script>
            <script src = "Box.js"></script>
        </body>
```

3. In `sketch.js`, go to the top of the code where the global variables are declared (`gameState`, `player1`, etc). Add a new line for each of these new variables:
```javascript
        var testBox; // a box to preview on the splash screen
        var dropTimer; // regulate box drops
        var presents = new Array(0); // an empty array called "presents"
 ```
4. In `setup()`, assign a new `Timer` object to `dropTimer`, and set it for 1000 ms (1 second). This assumes you already added the `Timer()` constructor to your project in Project 3, Part 3.
```javascript
        dropTimer = new Timer(1000);
```

5. Also in `setup()`, make a test version of the `Box()` object to show on the splash screen. This will prove that the box object works properly.
```javascript
        testBox = new Box(width/2, height/3);
```
> Run your project and look for errors in the Console window (below your code in the P5 editor). No errors? Awesome.

6. Add the test box to the splash screen so we know what it looks like. In the splash() function, towards the bottom, add these two lines:
```javascript
        testBox.display();
        testBox.spin();
```
> ... and run your project again. You should see a little red and green present rotating above the splash screen text.

Here's where it gets interesting, so pay attention! We're going to use the `dropTimer` object to control an array of presents falling from the sky. It's very similar to the `gameTimer` we made previously, but we will use it for a different purpose. Here we go!

7. Scroll down to the `mousePressed()` function. 
    * You should already have an `if()` statement looking for a condition in which `(gameState == "splash")`.
    * Add a line to that same {block} that starts the `dropTimer` as well as the original `gameTimer`. It should look like this:
```javascript
        if (gameState == "splash") {
            gameState = "play"; // go to the play() screen
            gameTimer.start(); // start the game timer
            dropTimer.start(); // start the drop timer for presents
        }
```

8. In the `play()` function, check the drop timer. If the drop timer (`dropTimer`) is finished (`.isFinished()`), add a new present to the array and re-start the timer (`.push()` is a built-in method of Arrays in JavaScript).
```javascript
        if(dropTimer.isFinished()) {
            let p = new Box(random(width), -40);
            // new box, anywhere across the width of the canvas, but 40px above the canvas
            presents.push(p); // add object 'p' to the 'presents' Array
            dropTimer.start(); // restart timer for next drop
        }
```

9. Manage the presents array with a for() loop.
    * Each time through the loop, we will operate on an individual element of the presents array.
    > Make sure the array is working and the objects behave properly on screen. Keep it simple at first and add some features later.
    * First, make a for() loop:
    ```javascript
        for(let i = 0; i < presents.length; i++) { }
    ```
    * add something useful to this loop:
    ```javascript
        for(let i = 0; i < presents.length; i++) {
            // for each element of the array, represented by 'i', do the following:
            presents[i].display(); // draw it on the canvas
            presents[i].move(); // make it drop
            presents[i].spin() // make it rotate
        }
    ```
    > ... go ahead and run your project. Do you see presents falling from the "sky"? Yay!

So far, the `play()` screen continuously adds `Box` objects to the '`presents`' array and the `for()` loop dutifully displays, moves, and spins each one. After a while, this might start to bog down your computer. Let's take care of some "garbage collection" (that's an actual software dev term), and remove presents from the array after they fall past the visible canvas.

10. In the `for()` loop, right after `presents[i].spin();`, add an `if()` statement that looks for presents that went past the bottom and then removes them from the array with the `.splice()` method (a built-in method of all JavaScrip arrays):
```javascript
        if(presents[i].y > height) {
            // present went below the canvas
            presents.splice(i, 1);
            // remove 1 element from from "presents" at index 'i'
        }
```
> ... your for loop should look like this now:
```javascript
        for(let i = 0; i < presents.length; i++) { 
            // for each present in the array, do the following:
            presents[i].display(); // show it on the canvas
            presents[i].move(); // make it fall
            presents[i].spin(); // make it spin

            if(presents[i].y > height) {
                // present went below the canvas
                presents.splice(i, 1); // remove from array
            }
        }
```
11. Last step: Collision Detection!
    * Add one more task to the `for()` loop. Since we are already looking at each object in the presents array (one per iteration of the loop), we can take a moment to compare their positions to the position of `player1`.
    * If they are close enough together, we can call it a "collision" and take some action. Let's use the .splice() method again to simply remove the object from the array when it collides with the player1 object.
    * First, compare locations using the P5 `dist()` function and store its result temporarily in a variable (`d`). Add this *above* the if() statement from step 10:
    ```javascript
        let d = dist(presents[i].x, presents[i].y, player1.x, player1.y);
    ```
    * next, add an alternative condition to the if() statement from step 10 (above) to see if the result of the `dist()` function meets our criteria for a collision. Use the logical OR operator ('`||`') to remove the box if it wen too far OR if it intersects with the Player:
    ```javascript
 
    ```
    ... the `for()` loop in `play()` should look like this now:
    ```javascript
        for(let i = 0; i < presents.length; i++) { 
            // for each present in the array, do the following:
            presents[i].display(); // show it on the canvas
            presents[i].move(); // make it fall
            presents[i].spin(); // make it spin

            let d = dist(presents[i].x, presents[i].y, player1.x, player1.y);

            if(presents[i].y > height || d < 50) {
                // present went below the canvas OR caught by player1
                presents.splice(i, 1); // remove from array
            }

        }
    ```
> Go ahead and Run your project. Look for error messages in the Console. Can you move your player object into position so that it intersects with a falling present? What happens when they cross paths? Does the present disappear?

**Save your work! (File->Save)**

**Download a .zip archive of your project so far as a backup.**
