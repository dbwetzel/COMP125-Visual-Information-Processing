<link href="../markdown.css" rel="stylesheet"></link> 

# Project 3, Part 2 - player movement
*Import a Player object and make it move in response to player actions*

**Pick up where you left off in Part 1**
* **Log in** to your account in the P5 Editor (editor.p5js.org) 
* find your own **Project 3** under "My Sketches." 
* **Save a new version:** 
    * File -> Duplicate
    * Click on the sketch name box and change it to "Project 3 v.2 - Player movement"

>In this step, you will import an object constructor function contained in a separate .js file. Link this file to your sketch, create an instance of that object, and define how it's sprite moves on the canvas in response to user actions.

### Instructions:

1. Add the Player object constructor to your sketch
    * **Download** the "<a href = "Project_3_Files.zip">Project_3_Files.zip</a>" archive (then look for it in your Downloads folder)
    * **Extract** the .zip archive (on Mac, double-click the .zip file, on Windows, right click and choose "Extract All")
    * **Upload** the file "Player.js" to your project.
        * Open the sketch file explorer in the P5 Editor (there is a '>' button next the the file name in the top left of the editor window. Click it to open the file explorer). 
        * Click the '+' button and choose "Upload File" to select the Player.js file
    * **Problems with the .zip archive? Here are is the required file for this step by itself <a href="Project_3_Files/Player.js">Player.js</a>

2. Link the file to your sketch 
    * Open the file "index.html" to edit. 
    * Add a reference to "Player.js" inside the <body> section. Look at the line that links "sketch.js" for a model of how to do this. 
    * You should end up with:
    ```javascript
    <body>
        <script src = "sketch.js"></script>
        <script src = "Player.js"></script>
    </body>
    ```
>The object defined in Player.js is meant to get you started. You may (should) replace it with something of your own design. You can work with this version for now.

3. Create an instance of the `Player` object and make it show up on screen when the game is in "play" mode
    * Open the **sketch.js** file and add a **global variable** at the top called `player1`
    ```javascript
        var player1;
    ```
    * In the `setup()` function, create a new instance of a Player object and assign it to `player1`. Give it initial arguments to place it in the middle of the screen, but 4/5 down from the top. The third argument defines how it responds to user actions (see below). Let's start with `"mouse"`:
    ```javascript
        player1 = new Player(width/2, height * 4/5, "mouse");
    ```
    * in the `play()` function, add a line to show the `player1` sprite image on screen:
    ```javascript   
        player1.display();
    ```

### Make it move in response to player actions

> Choose your own adventure! You can make the player object move a lot of different ways, depending on how you want things to work in your own game. Below are three possible ways to control the position of `player1` in response to user actions. You will be able to choose which mode you want at any time later.

**A. Mouse following.**

The `player1` object will follow the mouse horizontally while maintaining its vertical position near the bottom of the canvas.

This is the simplest way to control an object on screen. It might be right for your game idea, or you may want to modify it or try something else.

1. Open the file **Player.js** and scroll down to find `this.move = function(){}`.  Add the following to the `.move()` method of the Player object
```javascript
    this.move = function(){
        if(this.mode == "mouse"){
            this.x = this.mouseX;
        }
    }
```
2. Go back to the file **sketch.js** and add a line to the `play()` function (after `player1.display()`):
```javascript
    player1.display();
    player1.move();
```
> Run your sketch to see `player1` move on the "Play" screen. It should follow the mouse on the x axis only
 
**B. Arrow Key Jump.**

This is a little more complex, but it allows you to control player1 from the keyboard with the arrow keys (or any other set of keys you like).

1. Edit Player.js (sketch files->Player.js) to add an `else if()` condition after the `if()` statement (from **Step A**, above) in the `move()` method. This time we're looking for the "mode" property value of` "jump"`. Also, we *only* want to activate this block if a key is pressed (`keyIsPressed == true`). We use the "logical AND" operator (`&&`) to check that BOTH conditions are true.
```javascript
    this.move = function(){
        if(this.mode == "mouse"){
            this.x = this.mouseX;
        } // end of mouse mode
        else if(this.mode == "jump" && keyIsPressed){

        }
    }
```

2. Inside that `if else()` block (`{ ... }`), add a nested `if()` statement that slows execution down to only every tenth frame. We can do this with the P5 variable `frameCount` (which keeps track of the running total of frames, 60 per second, since the page was loaded) 
>You don't really need to know the actual value of frame count, but if we divide that whole number by 10 and take the remainder, the value will be '0' every 10 frames (1/6 second). In most programming languages, you can do that operation with the 'modulo' operator: `%` (e.g. 10 % 10 == 0; 11 % 10 == 1; 12 % 10 == 2, etc.). So in this example, we can make the player object "jump" while holding down a key.
```javascript
    this.move = function(){
        if(this.mode == "mouse"){
            this.x = this.mouseX;
        } // end of mouse mode
        else if(this.mode == "jump" && keyIsPressed){
            if(frameCount % 10 == 0){
               // this block only executes on every tenth frame
               // and only in "jump" mode with a key pressed​​​​​​
            }
        }
    }
```
3. Add a `switch()` statement to that last `if()` statement block that moves the player in response to specific keys:
```javascript
    this.move = function(){
        if(this.mode == "mouse"){
            this.x = this.mouseX;
        } // end of mouse mode
        else if (this.mode == "jump" && keyIsPressed){
            if(frameCount % 10 == 0){
                switch(keyCode) {
                   case UP_ARROW : 
                        this.y -= 30; // move up 30px 
                        this.angle = 0; // no rotation 
                        if(this.y < 0) {
                            this.y = height; // wrap to bottom 
                        }
                        break; 
                   case DOWN_ARROW : 
                        this.y += 30; // move down 30px 
                        this.angle = PI; // point down (rotate 180 deg.) 
                    if(this.y > height) {
                        this.y = 0; // wrap to top 
                    }
                    break; 
                case LEFT_ARROW : 
                    this.x -= 30; // move down 30px 
                    this.angle = PI + HALF_PI; // point left (rotate 270 deg.) 
                    if(this.x < 0) { 
                        this.x = width; // wrap to right 
                    } 
                    break; 
                case RIGHT_ARROW : 
                    this.x += 30; // move right 30px 
                    this.angle = HALF_PI; // point right (rotate 90 deg.) 
                    if(this.x > width) { 
                        this.x = 0; // wrap to left 
                    } 
                    break;
                default :
                    console.log ("hold down arrow keys to move");
                } // end of switch statement
            } // end of if(frameCount % 10 == 0)
        } // end of else if (this.mode == "jump" && keyIsPressed)
    } // end of move() method
```
> To implement this mode in your game, we need to add one more line of code to the `setup()` function in sketch.js. In this case, we are looking for the place where we created an instance of a Player object, and we will follow that up with a change to one of the object's properties (.mode)
4. Override the initial `player1` mode property
```javascript
    function setup() {
        createCanvas(600, 400);
        player1 = new Player(width / 2, (height * 4) / 5, "mouse");
        player1.mode = "jump"; // change value of .mode property
    }
``` 
> You may have noticed that we set the initial `player1` mode to `"mouse"` when we created the object instance (`new Player()`), and then immediately changed it to `"jump"`. You could save a line of code here and just initialize to `"jump"` instead of `"mouse"` but it's useful to see how to dynamically change the values of an object's properties.

    > Try out your game and see if the `player1` movement responds to the arrow keys (hold a key down for a moment to see the effect)

**C. Rocket thruster.**

This one is the challenge round! It isn't really that hard, but it will require just a little more work in a few different places. The basic idea is to use the LEFT and RIGHT arrow keys to rotate the sprite and use the UP and DOWN keys to accelerate and brake. The rotation not only points the sprite in a direction, but sets a direction of travel (there's a wee bit of math involved). The UP and DOWN keys just add to or subtract from a speed property of the player object. Here's how to do it:

1. In `Player.js` add four new properties to the `Player()` constructor: `this.xSpeed`,  `this.ySpeed`, `this.xBrake`, and `this.yBrake`. Initialize them all to 0 (zero). If those already exist, take note of their initial values.
```javascript
    this.x = tempX; 
    this.y = tempY; 
    this.xSpeed = 0;
    this.ySpeed = 0; 
    this.xBrake = 0;
    this.yBrake = 0; 
    this.diam = 50;
    this.angle = 0;
    this.mode = _mode;
```
2. In `Player.js`, scroll to the method `this.move()` and add a new conditional statement (`else if(){ ... }`) that looks for the `.mode` property set to `"rocket"`:
```javascript
    this.move = function(){
        if(this.mode == "mouse"){
            this.x = this.mouseX;
        } // end of mouse mode
        else if(this.mode == "jump" && keyIsPressed){
            if(frameCount % 10 == 0){
                switch(keyCode) { ... } // end of switch statement
            } // end of if(frameCount % 10 == 0)
        } // end of if else (this.mode == "jump" && keyIsPressed)
        else if(this.mode == "rocket") {
 
        } // end of rocket mode
    } // end of .move() method
```

3. Next let's implement one of our standard techniques for moving an object around on screen and keeping it on the canvas
```javascript
    this.move = function(){
        if(this.mode == "mouse"){
            this.x = this.mouseX;
        } else if(this.mode == "jump" && keyIsPressed){
            if(frameCount % 10 == 0){
                switch(keyCode) { ... } // end of switch statement
            } // end of if(frameCount % 10 == 0)
        } // end of if else (this.mode == "jump" && keyIsPressed)
        else if(this.mode == "rocket") {
            this.x += this.xSpeed; // move the horizontal position
            this.y += this.ySpeed; // move the vertical position
            if(this.x > width || this.x < 0) {
                this.x = abs(this.x - width); // wrap around horizontally
            }
            if(this.y > height || this.y < 0) {
                this.y = abs(this.y - height); // wrap around vertically
            }
        } // end of rocket mode
    } // end of .move() method
```
> However, the `player1` object won't move until we do something to affect the values of `.xSpeed` and `.ySpeed` (initialized to 0).  Here we will first check for `keyIsPressed` and pass the `keyCode` to a `switch()` statement, like the one we used in the `"jump"` mode. This one, however, will use the `LEFT_ARROW` to rotate left, the `RIGHT_ARROW` to rotate right, the `UP_ARROW` to accelerate, and the `DOWN_ARROW` to brake.

4. After the code that moves player1 in "rocket" mode (step 3 above), add an `if()` statement that tests `mouseIsDown`. Inside the if() statement's curly brackets (`{ }`) add a `switch()` statement that tests the P5 variable `keyCode`. 
```javascript
this.move = function(){
    if(this.mode == "mouse"){ ... }
    else if(this.mode == "jump" && keyIsPressed){
         if(frameCount % 10 == 0){
           switch(keyCode) { ... } // end of switch statement
          } // end of if(frameCount % 10 == 0)
    } // end of else if(this.mode == "jump" && keyIsPressed)
    else if(this.mode == "rocket") {
      this.x += this.xSpeed; // move the horizontal position
      this.y += this.ySpeed; // move the vertical position
      if(this.x > width || this.x < 0) {
        this.x = abs(this.x - width); // wrap around horizontally
      }
      if(this.y > height || this.y < 0) {
        this.y = abs(this.y - height); // wrap around vertically
      }
      if(keyIsPressed){
        switch (keyCode) {
            case UP_ARROW:
              this.thrust(); // accelerate
              break;
            case DOWN_ARROW:
              this.brake(); // slow down
              break;
            case LEFT_ARROW:
              this.angle -= 0.02; //turn left
              break;
            case RIGHT_ARROW:
              this.angle += 0.02; //turn right
              break;
          } // end of switch()
       } // end of if(keyIsPressed)
    } // end of rocket mode
} // end of .move() method
```
>**Note:** The `UP_ARROW` case calls the method `this.thrust()` and the `DOWN_ARROW` case calls `this.brake()`. These methods don't exist yet in the `Player()` constructor, so we need to add them. Let's start with the acceleration.

5. In `Player.js`, fter the `.move()` method, add a new method for `thrust()`. 
> Be careful with placement and brackets. You can use the little triangle next to the function declaration lines to "fold up" the code and get it out of your way so it's easier to see where you should place this next block.  
```javascript
    function Player(tempX, tempY) {
        // properties
        this.x = tempX;
        this.y = tempY;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.diam = 50;
        this.angle = 0;
        this.mode = "mouse";

        this.display = function () { ... } // end of display method

        this.move = function () { ... } // end of move method
 
        this.thrust = function() {

        }
    } // end of Player() constructor
```

6. Add some code (inside those curly brackets) that first calculates the direction that the sprite is pointing, and then adds a value to the `.xSpeed` and `.ySpeed` properties of `player1` (an application of basic trigonometry!):
```javascript
    this.thrust = function(){
        let h = Math.sin(this.angle); // calculate a percentage to the left or right
        let v = Math.cos(this.angle); // calculate a percentage up or down
        this.xSpeed += .02 * h; // modify the basic acceleration factor (.02) by the amount of rotation
        this.ySpeed -= .02 * v;
    }
```
> We should add a method for braking. The easiest way would be to declare a new method for `Player()` called `.brake()` and use it to simply subtract a value ("braking factor") from `.xSpeed` and `.ySpeed`. That would work, but once it slows to 0 it will start accelerating backwards. If you want to prevent that, you need to make sure it returns to 0. Also, xSpeed and ySpeed will be different values from each other. To make sure that the player comes to a smooth stop, we need to get both values to zero at the same time. We can calculate the "braking factor" based on the current speed in each direction, using P5's animation frame rate. 
7. Add two lines to the end of `this.thrust()` to calculate the amount of speed to subtract each frame for both `xSpeed` and `ySpeed` so they both reach 0 simultaneously. The P5 function `abs()` gives the absolute value of the calculation so we don't end up subtracting a negative value (acceleration!) from our speed when we hit the brakes!
```javascript
    this.thrust = function(){
        let h = Math.sin(this.angle); // calculate a percentage to the left or right
        let v = Math.cos(this.angle); // calculate a percentage up or down
        this.xSpeed += .02 * h; // modify the basic acceleration factor (.02) by the amount of rotation
        this.ySpeed -= .02 * v;
        this.xBrake = abs(this.xSpeed / frameRate()); 
        this.yBrake = abs(this.ySpeed / frameRate());
    }
```
8. In `Player.js` add a `.brake()` method to the `Player()` constructor. Be sure to add this method *inside* the `Player()` function, but *outside* any other method definitions. It should have two `if() {} else {}` pairs, one that tests `if(this.xSpeed > 0)` and one that tests `if(this.ySpeed > 0)`
```javascript
    function Player(tempX, tempY) {
        // properties
        this.x = tempX;
        this.y = tempY;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.diam = 50;
        this.angle = 0;
        this.mode = "mouse";

        this.display = function () { ... } // end of display method

        this.move = function () { ... } // end of move method
 
        this.thrust = function() { ... } // end of thrust method

        this.brake = function() {
            if(this.xSpeed > 0) {
                this.xSpeed -= this.xBrake; // slow down!
            } else {
                this.xSpeed += this.xBrake // speed was less than 0, so bring it back up
            }
            if (this.ySpeed > 0) {
                this.ySpeed -= this.yBrake; // slow down on y axis, too!
            } else {
                this.ySpeed += this.yBrake; // bring up to 0 if we went too far
            }
        } // end of brake() function
    } // end of Player() constructor
``` 
> Now that we have a modified `.move()` method and new `.thrust()` and `.brake()` methods in our `Player()` constructor (and therefore our `player1` object) we can implement those features in our game! 

9. change the mode of our `player1` object in `setup()`:
```javascript
    function setup() {
        createCanvas(600, 400);
        player1 = new Player(width / 2, (height * 4) / 5, "mouse");
        player1.mode = "rocket"; 
    }
```
> Go ahead and run your sketch to see if it works. You should see the `player1` sprite turning in response to the left and right arrow keys. When you press the up arrow, it should accelerate in the direction it is pointing. When you press the down arrow, it should slow to a stop.

Is your project working so far? Does `player1` appear on the canvas and move in response to either the mouse or the arrow keys? Awesome!

**Save your work!** (File->Save)

**Save a backup!** (File->Download)

 