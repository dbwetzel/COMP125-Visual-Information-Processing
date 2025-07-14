<link href="../markdown.css" rel="stylesheet"></link> 

# Project 3, Part 5 - Keeping Score

*Add a "score" variable to keep track of player progress. Reset when the game ends*

**Important:** Pick up where you left off in **Part 4 - Collisions**. 

* **Log in** to editor.p5js.org
* Find your latest Project 3 sketch (top right: "Hello, userName" -> **"My Sketches"**)
* **Save** a new version:
    * File -> Duplicate
    * Click on the sketch name box and change it to **"Project 3 v.5 - Keeping Score"**

> In this stage of your game development, you will add a global variable to keep track of points scored by the player. We can use that number to make decisions about what happens next.

1. Create a new variable to keep track of user progress.    
    * At the top of your sketch (`sketch.js`), add:
    ```javascript
        var score = 0; // keep track of points (starting at 0)
    ```

2. Display the score to the player. 
    * At the bottom of your `play()` function, you should have a couple lines of code that display the elapsed time on the game timer (`timer.elapsedTime`).
    ```javascript
        textAlign(LEFT);
        text("Elapsed time: " + gameTimer.elapsedTime, 20, 100); //show elapsed time in ms
    ```
    ... let's scooch it up a bit to make room (20px from the top):
    ```javascript
        textAlign(LEFT);
        text("Elapsed time: " + gameTimer.elapsedTime, 20, 30); //show elapsed time in ms
    ```
    ... add a line below that to show the score on screen as well:
    ```javascript
        text("Score: " + score, 20, 50);
    ```
    > If you run your sketch, you should see the score at the top left corner of the canvas. However, it won't change until we program it to do so.

    > **N.B.** If you want to make the game timer look better, we could make it count down instead. Take the .time property and subtract the .elapsedTime. Also, lets round it (`round()` is a built-in P5 function) and display it as seconds (divide milliseconds by 1000):
    ```javascript
        textAlign(LEFT);
        let s = round(gameTimer.time - gameTimer.elapsedTime)/1000;
        text("Time remaining: " + s, 20, 100); //show time remaining in seconds
        text("Score: " + score, 20, 50);
    ```
When the player intersects with a box object in the `presents` array, the box is removed. You can find that moment in the `play()` function inside the `for()` loop that moves (`.move()`) and displays (`.display()`) all the `presents` and disposes of them if they reach the bottom or intersect with `player1`. It should look like this:
```javascript
        for (let i = 0; i < presents.length; i++) {
            presents[i].display();
            presents[i].move();
            presents[i].spin();

            let d = dist(presents[i].x, presents[i].y, player1.x, player1.y);
            // d is the distance in pixels between presents[i] and player1

            if (presents[i].y > height || d < 50) {
                presents.splice(i, 1); // remove from array
            }

        } // end of for() loop
```
3. After the line that calculates the value of `d`, add a new `if()` statement it to a set radius (`if(d < 50)`). If that statement is true, increment the score by 1:
```javascript
    for (let i = 0; i < presents.length; i++) {
        presents[i].display();
        presents[i].move();
        presents[i].spin();

        let d = dist(presents[i].x, presents[i].y, player1.x, player1.y);
        // d is the distance in pixels between presents[i] and player1

        if (d < 50) {
            score ++; // add 1 point!
        }

        if (presents[i].y > height || d < 50) {
            presents.splice(i, 1); // remove from array
        }

    } // end of for() loop
```
> Run your sketch again and see if your scoring mechanism is working. If you have collision detection set up properly (from Part 4) and you got this far it should be working. Each time you catch a falling present, you should get a point and it should show up on screen in the top left corner. Working? Yay! 

4. What if you miss one and it gets by you? Add another `if()` statement in the `for()` loop in `play()` to handle that situation:
```javascript
    for (let i = 0; i < presents.length; i++) {
        presents[i].display();
        presents[i].move();
        presents[i].spin();

        let d = dist(presents[i].x, presents[i].y, player1.x, player1.y);
        // d is the distance in pixels between presents[i] and player1

        if (d < 50) {
            score ++; // add 1 point!
        }
        if(presents[i].y > height){
            score --; // remove 1 point
        }
        if (presents[i].y > height || d < 50) {
            presents.splice(i, 1); // remove from array
        }

    } // end of for() loop
```
> Run your game and let a few presents go by. You should see the score going down. When you catch one it goes back up again!

The game ends when the timer goes off. You may want to change that behavior later, but let's leave it for now. However, it would be nice to know what your score was when the game ended. We should also reset it when you start the game again. 

5. First, let's show the final score on the `gameOver` screen. In the `gameOver()` function, add a line at the end that displays your score:
    ```javascript
        text("Your final score: " + score, width/2, height * 2/3);
    ```
    > ... and run your project again. You should see your final score displayed on the Game Over screen. However, if you start the game again, your score will pick up where you left off. If you want it to start again a 0, we have to re-initialize it to 0 (zero).


6. Scroll down to where you find the `mousePressed()` function. There is a conditional statement that checks to see if `gameState` is `"splash"` when the mouse is clicked. We're already using that to start the game and its timers. It should look like this:
    ```javascript
        if (gameState == "splash") {
            gameState = "play";
            timer.start(); // start the game timer
            dropTimer.start();
        }
     ```
 ... add a line after `dropTimer.start();` that will reset the score to 0. Then add lines to re-initialize the `player1` object and the `presents` array. Like so:
 
```javascript
        if (gameState == "splash") {
            gameState = "play";
            timer.start(); // start the game timer
            dropTimer.start();
            score = 0; // reset score to 0 at start of game
            player1 = new Player(width/2, height * 4/5, "mouse"); // re-instantiate the player1 object
            // set the last argument to "mouse" "jump" or "rocket" depending on your preference
            presents = new Array(0); // replace the presents array with a new empty one
        }
```

Go ahead and **Run** your project.

* Does you gme start with a "splash" screen and move on to a "play" screen when the user clicks the mouse?

* Is there a player object that is controlled by the user (mouse or keyboard)?

* Does a timer control the length of game play

* Does another timer control the appearance of new "box" objects?

* Do box objects fall from the top of the canvas when the game starts?

* Do you score points when you catch a present?

* Do you lose points when you miss?

* Does your score display in the top left corner of the play screen and in the middle and lower third of the Game Over screen?

* Does everything reset when you restart the game?

If you answered "yes" to all those, **congratulations!** You have a functional Project 3.

You have the option to turn it in "as is" for a maximum of **85 points** (out of 100). See the Project 3 home page for guidance on how to enhance your project for more points.

**Save your work! (File->Save)**

**Download a .zip archive of your project so far as a backup.**
