<link href="../../markdown.css" rel="stylesheet"></link> 

# Object Constructors
*A function that generates a new object from a template*

The technique we will use for Object Oriented Programming in this course involves the **"constructor function"** from which individual **"object instances"** will be created. The constructor function is a *blueprint* that defines the properties and methods of each instance of that object type. In more modern Javascript, the prefered structure is the `class` declaration. More on that later. Since this course is mainly built around the concept of the (possibly outdated) *constructor function,* we will start there. 

In your programs, you can design an **object class** (in the form of a constructor function or in a formal `class` declaration) to create multiple object instances of the same thing. They will share the same properties and functions, but they will have their own property values and they will operate their functions independently.

In its simplest form, the Constructor Function looks like any other function definition:

```javascript
    function Cat(){
        // more to come here ...
    }
```

Note that the name of the function in this example is capitalized. It's a convention in Object Oriented Programming in Javascript to capitalize the names of constructors and classes. It's required to do so in other languages, but in Javascript its more of a courtesy. Javascript is case sensitive, so this matters when you call your constructor to generate a new object:

```javascript
    const stitch = new Cat(); // note the capitalization!
```

This example would work, but the object returned would be empty. It would be the same as doing this:

```javascript
    const stitch = {}; // stitch is an empty object :-(
```

Let's make the constructor function more useful. Remember, the idea is to create a template that defines a set of properties and methods. Here's a slightly more useful version that defines some Cat properties:

```javascript
    function Cat(){
        this.name = ""; // empty string
        this.color = "";
        this.toy_preference = undefined; // undefined property
        this.sex = undefined;
    }
```
Notice the word `this` prepended to the names of each property (with a *dot*)? In a constructor function, the keyword `this` refers to any property or method that is attached to the object instance and is therefore accessible using "dot" (`.`) notation. The keyword `this` helps distinguish between an object property and any other similarly named variables that may exist in your program (such as global or P5 system variables). In the body of the constructor, `this` is a stand-in for the name of any instances that will be created from the constructor template.

Also note that the values of these properties so far are either empty strings or `undefined`. The object created from this constructor will have those properties, but the values would have to be filled in later (in Javascript, a variable can have a value that is `undefined` which is a special state that is sometimes useful).

We can make this even more useful by passing arguments to the constructor function so that certain properties are set when the instance is created. It works like any other function in Javascript:

```javascript
    function Cat(_name, _color){
        this.name = _name; // first argument passed in becomes the value for .name
        this.color = _color; // second argument
        this.toy_preference = undefined; // undefined property
        this.sex = undefined;
    }
```

Some properties might be set algorithmically (programmatic procedure), rather than directly by passed arguments. For example, the new Cat's sex might be determined randomly upon instantiation (`new Cat()`). We could create a simple local function within the constructor (not accessible outside the constructor) that essentially flips a coin:

```javascript
    function Cat(_name, _color){
        this.name = _name; // first argument passed in becomes the value for .name
        this.color = _color; // second argument
        this.toy_preference = undefined; // undefined property
        this.sex = setSex();

        function setSex() {
            // this function is NOT an object instance method!
            let sex;
            if (random(1) > 0.5) { 
                sex = "female";
            } else {
                sex = "male";
            }
            return sex;
        }    
    }
```

If the sex of the cat, as wel as other characteristics that might determine "personality" are determined algorithmically or randomly when the object is instantiated, it might be better to have a method for naming the cat after you get to know it a bit better. This is a job for an instance method!

In a constructor function, instance methods are defined a bit differently. First, create a name usng `this` (which binds the name to the object instance) and initialize it with an "anonymous" function:

```javascript
    function Cat(_name, _color){
        this.name = _name; // first argument passed in becomes the value for .name
        this.color = _color; // second argument
        this.toy_preference = undefined; // undefined property
        this.sex = setSex();

        this.nameMyCat = function(){
            // instance method is a function assigned to a property
            this.name = prompt("name my cat", this.name); // set the value of .name with a user prompt
        }

        function setSex() {
            // this function is NOT an object instance method!
            let sex;
            if (random(1) > 0.5) { 
                sex = "female";
            } else {
                sex = "male";
            }
            return sex;
        }
    }
```

In your P5 sketch, you might use it this way:

```javascript

let newCat;

function setup(){
    createCanvas(400, 300);
    newCat = new Cat("cat 1", "orange");
}

function mousePressed(){
    newCat.nameMyCat(); // call the instance method
}
```

And since we're using P5, let's add a .display() method to our Cat() funciton so that we can see our cat on tha canvas as a sprite image:

```javascript
    function Cat(_name, _color){
        this.name = _name; // first argument passed in becomes the value for .name
        this.color = _color; // second argument
        this.toy_preference = undefined; // undefined property
        this.sex = setSex();
        this.x = width/2; // center it on the canvas
        this.y = height/2; // center it on the canvas

        this.display = function(){
            // draw a (vey basic) cat sprite on the P5 canvas
            push(); // create a matrix layer for the sprite
            translate(this.x, this.y); // position the matrix origin point
            triangle(-40, -60, -45, -20, -20, -45); // left ear
            triangle(40, -60, 45, -20, 20, -45); // right ear
            ellipse(0, 0, 100); // head
            pop(); // dispose of matrix layer

        }

        this.nameMyCat = function(){
            // instance method is a function assigned to a property
            this.name = prompt("name my cat", this.name); // set the value of .name with a user prompt
        }

        function setSex() {
            // this function is NOT an object instance method!
            let sex;
            if (random(1) > 0.5) { 
                sex = "female";
            } else {
                sex = "male";
            }
            return sex;
        }
    }
```
