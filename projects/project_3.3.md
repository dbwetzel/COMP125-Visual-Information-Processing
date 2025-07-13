<link href="../markdown.css" rel="stylesheet"></link> 

# Project 3, Part 3 - Timers

*Use a Timer object to control game action*

**Important:** Pick up where you left off in **Part 2 - Player Movement**. 

* **Log in** to editor.p5js.org
* Find your previous Project 3 sketch (top right: "Hello, userName" -> **"My Sketches"**)
* **Save** a new version:
    * File -> Duplicate
    * Click on the sketch name box and change it to **"Project 3 v.3 - Timer"**

>In this step, add a timer to control how long the player has to complete the level. There is a `Timer()` constructor in a file called `Timer.js` for you to add to the sketch files. Take a moment to look at it and get to know its properties and methods. Pay special attention to the `.start()` and `.isFinished()` methods.

1. Add the file `Timer.js` to your project

    * **Download** the "<a href = "Project_3_Files.zip">Project_3_Files.zip</a>" archive (then look for it in your Downloads folder)
    * **Extract** the .zip archive (on Mac, double-click the .zip file, on Windows, right click and choose "Extract All")
    * **Upload** the file "Player.js" to your project.
        * Open the sketch file explorer in the P5 Editor (there is a '>' button next the the file name in the top left of the editor window. Click it to open the file explorer).
        * Click the '+' button and choose "Upload File" to select the `Player.js` file

2. Link the file to your sketch

    * Open the file "index.html" to edit.
    * Add a reference to "Timer.js" inside the `<body>` section. Look at the line that links "sketch.js" for a model of how to do this.
    * You should end up with:
    ```javascript
    <body>
        <script src = "sketch.js"></script>
        <script src = "Player.js"></script>
        <script src = "Timer.js"></script>
    </body>
    ```

3. In your `sketch.js` file, add a **global** variable (outside of any other {code blocks} ) to store the timer object. Call it `gameTimer`
```javascript
        var gameTimer;
 ```

4. In `setup()` (inside the curly brackets), create an *object instance* of `Timer()` and assign it to your variable. The `Timer()` constructor takes an argument to set the initial time for its countdown in milliseconds. What number value should you give as an argument? You can decide for yourself, but 5 seconds (5000 ms) is good for initial testing.
```javascript
        gameTimer = new Timer(5000); // 5 second timer
```
5. In `mousePressed()` (inside the curly brackets), start the timer with its `.start()` method when the game begins:
```javascript
        if (gameState == "splash") {
            gameState = "play"; // go to the play() screen
            gameTimer.start(); // start the timer
        }
```
6. Also in the `mousePressed()` function, use an inline comment to *disable* the "`else if()`" statement that checks for `gameState == "play"` and sends it to `"gameOver"`
```javascript
        else if (gameState == "play") {
            // gameState = "gameOver";
        }
```
7. Inside the `play()` function (inside the curly brackets), check your `gameTimer` with an `if()` statement. If the time is up, set `gameState` to `"gameOver"`
```javascript
        if (gameTimer.isFinished()) {
            gameState = "gameOver"
        }
        // note that the .isFinished() method has its own parentheses, placed inside the if() statement's parentheses
```
8. Also in `play()`, display the elapsed time on screen with `text()`:
```javascript
        textAlign(LEFT);
        text("elapsed time: " + gameTimer.elapsedTime, 40, 100);
    // show elapsed time in top left corner
```
> Try out your game. When you start the game (click on the "Splash" screen) you should see the play screen with a timer. When the timer reaches the limit it should automatically jump to "Game Over."

**Challenge:**

* How would you increase the time limit on the game so it lasts more than 5 seconds?
* How could you display the remaining time (count down) instead of the elapsed time?

**Save your work! (File->Save)**

**Download a .zip archive of your project so far as a backup.**
