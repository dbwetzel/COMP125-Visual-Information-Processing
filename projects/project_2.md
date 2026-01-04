<link href="../markdown.css" rel="stylesheet"></link> 

## Project 2 - Array of Objects
*Create an array of objects that move and behave independently on screen*

Use this link to get started:
* https://editor.p5js.org/dbwetzel/sketches/Yi-bKsyDB
* **Log in** to the p5 Editor
* **Save** your own copy of the template (File->Duplicate)

In this project you will use *object oriented* techniques and also employ an array to manage a larger number of objects in a single sketch. Your object(s) will have **properties** (variables that apply to each object instance separately) and **methods** (object functions that cause it to do things like appear on screen or change location).

Also, your code should have copious **comments** explaining the operation of your program. Code comments will be a factor in grading this project. If you have borrowed any code or based your code on examples found online or other sources, you must **cite your sources** and explain in your code comments how you have used and modified the example. Plagiarism is not only a serious offense against academic standards and university policy, it is also really easy to detect. Avoid problems by a) doing your own work, and b) citing sources where appropriate.

### Instructions

**Part A - Object Constructor**

1. Create a **constructor function** that will generate instances of an object. At a minimum, your constructor will have properties that define canvas location (x, y). It will probably have other properties that define things like size, color, etc. Also, minimally, your constructor definition will include methods (functions) that control movement and appearance. Call these functions `.move()` and `.display()`.

Again, a constructor is a special function that defines an object type (including its properties and methods). Here's a bare-bones example to give you a starting idea. You can copy and paste this into the file `MyClass` (provided and linked from `index.html`):

```javascript
    // the Name of a constructor class should be capitalized
    function MyClass (tempX, tempY){ 
      // this constructor expects two arguments
      // all object properties and methods begin with "this."
      this.x = tempX; // assign 1st argument to this.x 
      this.y = tempY; // assign 2nd argument to this.y
      this.d = 50; // initialize .d property to 50
      this.speed = random(-1, 1); // initialize .speed to a random number between 1 and -1

      // methods are functions that are assigned to property names
      this.move = function() {
        // define how the object will change location on screen each frame
        this.x += this.speed; // move by the value of .speed
        if (this.x > width || this.x < 0){
          // if the object reaches the right edge OR left edge
          this.speed = this.speed * -1; // reverse polarity!
        }
      }
      this.display = function(){ 
        // define how the object will look
        push();
        translate(this.x, this.y) // center the drawing at the .x and .y properties of the object
        fill(255, 0, 0); // red
        ellipse(0, 0, this.d, this.d); // draw a circle at the center of the object image
        pop();
      }
    } // end of MyClass() constructor
```

2. Create global variables that will contain test instances of your object created from the constructor function. Place these at the top of your script.js file

```javascript
    var obj1, obj2;
```

3. Try out your object by making at least two instances in your sketch. Create new instances in the `setup()` function, e.g.,
```javascript
    function setup(){
        createCanvas(320, 240);
        obj1 = new MyClass(100, 100);
        obj2 = new MyClass(200, 100):
    }
```
4. In the `draw()` definition, make your objects appear on screen and move around independently, e.g.:
```javascript
    function draw(){
        background(200);
        obj1.move(); // move object 1 (obj1)
        obj1.display(); // display obj1 on screen
        obj2.move();
        obj2.display();
    }
```
If the objects are instantiated with different locations and speed values, they will move on their own. This is an important step in verifying that your object-oriented code is working properly before moving on to the next step.

**Part B - Make an array of objects**

Now that you have a working class definition and you have successfully created objects based on it, it's time to make a bunch of them. The best way to handle multiple objects of the same type is to contain them in an **Array** (see Chapter 11).

1. Disable your test objects by commenting out the lines in `draw()` that display and move them. e.g.,
```javascript
    function draw(){
        background(200);
        // obj1.move(); // move object 1 (obj1)
        // obj1.display(); // display obj1 on screen
        // obj2.move();
        // obj2.display();
    }
```

2. Instead of listing multiple global variables (var obj1, obj2, obj3, ...), start your code (top of `scipt.js`) with an **array declaration**, like so:
```javascript
    var objects = new Array(10); // the argument to Array() defines its size
```
... this will create an array called "objects" with 10 "slots" for `MyClass` objects. It is also placed *outside* any of the function definitions (in "global" space)

3. Inside the `setup()` function, initialize the array with ten unique instances of the `MyClass` object. Use a `for()` loop to make it easy (and more flexible if you want to make the array bigger or smaller than 10 later).
```javascript
    function setup(){
        createCanvas(300, 300);
        /* for each element of the array, a new MyClass is created with a random location on the canvas */
        for(var i = 0; i < objects.length; i++) {
            objects[i] = new MyClass(random(width), random(height));
        }
    }
```
... about the `for()` loop: 
    * a temporary variable `i` is declared at the beginning of the loop
    * each element of the array is accessed by an "index" number in the square brackets represented by '`i`'; `objects[0]` is the first element. 
    * The `for()` loop cycles through the entire array (0 - 9 for a ten element array), adding a new object to each element of the array
    * each time through the loop, the value of `i` increments by 1 (`i++`)
    * each time through the loop the value of `i` is compared to the length of the array (`objects.length`); when `i` is no longer *less than* the length of the array, the loop quits

4. When you get to the `draw()` function, you will have to handle things like we just did in `setup()`, with another `for()` loop. Another bare-bones example:
```javascript
    function draw() {
        background(255);
        for(var i = 0; i < objects.length; i++){
            objects[i].move(); // each time through the loop, move the next object in the array
            objects[i].display(); // call the display method for each object (0 - 9)
        }
    }
```
**Note:**
Your project should exhibit more creativity and individuality. The previous examples are meant to get you started. You might consider adding more methods to your object class. think about ways to make them more interactive. Look at some of my code examples and tutorial videos for ideas.

### When you are done:
* **Save** your work in the P5 editor (File->Save)
* **Share** a link to your project (File->Share ... Edit)
* **Download** a .zip file of your project (File->Download)
