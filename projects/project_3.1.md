<link href="../markdown.css" rel="stylesheet"></link> 

# Project 3, Part 1 - Start-Play-GameOver

*Set up game screen navigation*

Use this link to get started:
* <a href="https://editor.p5js.org/dbwetzel/sketches/xI48hmpit" target="_blank">https://editor.p5js.org/dbwetzel/sketches/xI48hmpit</a>
* **Log in** to the P5 editor
* **Save** your own copy of the template (**File -> Duplicate**)
* **Change the name** to "Project 3 v.1 - Start-Play-GameOver"

The starter template sketch for this project has three separate screens. Each screen represents a different game state:

* the "Splash" screen that you see when the game loads, but before you begin
* the "Play" screen that you see while the game is running
* the "Game Over" screen that you see when the game ends

Your job in this step is to add the code that allows the user to move through the three screens one at a time in response to mouse clicks.

## Instructions:

1. In the file sketch.js, add a global variable at the top (Global space) called `gameState`. Initialize its value to "splash," like so:
```javascript
    var gameState = "splash";
```
2. Further down, you will find the function `mousePressed()`. Add code to this function that checks the current value of `gameState` and changes it to move to the next screen:
```javascript
    if(gameState == "splash") { 
        gameState = "play"; 
    } // go to "play"
    else if(gameState == "play") { 
        gameState = "gameOver"; 
    } // go to "gameOver"
    else if(gameState == "gameOver") { 
        gameState = "splash"; 
    } // go to "splash"
```
3. In the `draw()` function, create a `switch` statement that checks the value of `gameState` and branches to the correct screen function.
```javascript
    switch (gameState)  {
        case "splash" :
            splash(); // go to the "splash" screen
            break;
        case "play" :
            play(); // go to the "play" screen
            break;
        case "gameOver" :
            gameOver(); // go to the "game over" screen
            break;
        default :
            console.log("no match found - check your mousePressed() function!");
    }
```
4. Check your work. Your completed sketch should cycle through all three screens in response to mouse clicks. It should move to the next screen only on a single mouse click.

If you want to take a moment to make the three screens more interesting, go ahead! Any drawing code you add to `splash()`, `play()`, or `gameOver()` will appear on screen when their respective game states are active.