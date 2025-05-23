<link href="../markdown.css" rel="stylesheet"></link> 

## Lab 3 - Conditional Statements

*Make a P5 sketch interactive with `if() else`*

Use the following template link to get started:

* <a href ="https://editor.p5js.org/dbwetzel/sketches/wFzdPfCXV" target="_blank">https://editor.p5js.org/dbwetzel/sketches/wFzdPfCXV</a>
* **log in** to your editor account on p5.js
* **File->Duplicate** to make your own copy

In this lab, we see the following block of code already set up for you in the draw() function:
``` javascript
  if(mouseIsPressed){ // true or false?
    // if true, change the fill color here
    
  }
  else { 
    // otherwise do this:
    
  }
  ellipse(width/2, height/2, 100, 100);
```

### Explanation:

The state of the P5 variable`mouseIsPressed` is always either `true` or `false` (depending on whether you are pressing the mouse button or not). Because this `if()` statement is inside the P5 `draw()` function, it is evaluated 60 times per second (the default P5 animation frame rate). Whatever code you place in the `if(){ }` block will execute while the mouse is down. Whatever code you place in the `else { }` block will execute when the mouse is up.

### Intstructions:

* add some code into the `if( ){} else {}` statements to make the circle **change color when the mouse is pressed.** Your code will go between the `{ curly brackets }`

* for extra credit (1pt), restructure this so that the `if()` statement also controls the value of a variable that re-sizes or moves the circle.

### When you're done:
* Make sure you save your work in the P5 editor (**File->Save**)
* Download a backup copy and submit the .zip file (**File->Download**)
* Share a link to your sketch (**File->Share->Edit**)