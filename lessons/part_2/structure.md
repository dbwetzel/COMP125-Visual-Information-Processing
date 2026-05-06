<link href="../../markdown.css" rel="stylesheet"></link> 

# JavaScript Syntax and Program Structure
*Some important points about how JavaScript works*

When learning a programming language, it's very important to understand its conventions and "syntax". Programming languages like JavaScript begin as text that you type (and is readable by humans) but has to be converted into "machine-language" instructions understandable by your computer's binary logic systems. Computers are very literal - they only do what you explicitly tell them to do, so your instructions must be exact, logical, and formatted in a way that your computer can interpret without error. What that means is that everything you type in your JavaScript program has to conform to the code conventions of JavaScript and any libraries you are using.

### Order of execution.

JavaScript is a "procedural" programming language, meaning that program statements (a line of code or a statement ending with a semicolon (';')) are executed one at a time in the order they are given. Most code editors for languages like JavaScript (also C, C++, Java, Python) will helpfully number each line of code. This is extremely helpful in identifying specific parts of your code as well as narrowing down possible sources of errors. One statement follows another, so it's very important to keep track of the logical sequence of your program and the implications of doing one thing before the next.

### Case sensitivity

In JavaScript, everything is case sensitive and spelling counts. At some point you will encounter an error in your program in which you either spelled the name of a variable inconsistently or accidentally capitalized or forgot to capitalize a keyword or variable name. If you declared a variable at the top of your program as `potato` and later tried to assign a value to it as `Potato` you would get an error message. It's the same word to you and me, but not to the JavaScript compiler.

### Punctuation

In Javascript, each punctuation mark has a very specific function. The wrong punctuation symbol in the wrong place will cause an error. Keep in mind that commas, semicolons, periods, parentheses, brackets, colons, quotation marks, etc. have special meanings in JavaScript and are used to organize data elements in your program.

### Storing and Retrieving Data

One of the most useful things about a text-based programming language is the ability to tag a piece of data with a **name** that makes sense to the programmer in the context in which it is used. Instead of having to keep track of specific addresses in the computer's working memory system (yikes!), we can simply declare a "name space." Your computer then sets aside a bit of memory and creates an "alias" to it that you can refer to in your code. In JavaScript, this can be a **variable** or a **constant**, depending on how you want to use it.

A **constant** in JavaScript is a named piece of data that will not change throughout the execution of the program. The value stored in a constant is determined one time, when the constant is declared. To set this up, we use the keyword `const`, make up a name for our constant, use the *assignment operator* `=`, and a value to be stored in a location referenced by the constant's name. For example:

```javascript
    1. const timeLimit = 10000;
```

In this example, a constant called `timeLimit` is declared with a value of 10000. How this is used in the program depends on some decisions to be made later, but let's imagine that this is a value in milliseconds (i.e., 10 seconds) that could be used as a time limit for something in a web game. The constant `timeLimit` is "read only." It can't be changed by anything else in the code, so if you want a different timeLimit later you have to change it at the line where it was *declared* and *initialized*.

A **variable** in JavaScript is also a named pice of data. However, the value stored in a variable can change dynamically within a program at any time. Variables in JavaScript can be any type of data (numbers, text strings, individual characters, complex object, arrays, etc.). Unlike laguages such as Java or C, JavaScript does not require that you declare the type of data to be stored in a variable. The value and type of data stored in a variable in JavaScript depends on what was last *assigned* to that variable with the assignment operator (`=`). The *traditional* way to assign a variable is like the `const` example above, but with the keyword `var`.

```javascript
    1. var score = 0;
```

The keyword `var` is only necessary at the line of code where it is first declared. After that point, you can reference the variable by name to access the stored value or to assign a new value. For example:

```javascript
    1. var firstName = "Bill"; // declare and initialize a variable
    2. console.log(firstName); // print the value of firstName
    3. firstName = "Ted"; // assign a new value to the previously declared variable
    4. console.log(firstName); // print the new value of firstName
```

In *modern* JavaScript (ES6+), there is a prefered alternate keyword for declaring variables: `let`. The keyword `let` works the same as `var` in most respects, but is more strictly "scoped" to the code block in which it appears. More on **variable scope** in a moment. The usage is pretty much the same, but there are some subtle differences in how the value of the variable is accessible in different parts of a program.

```javascript
    1. let firstName = "Bill"; // declare and initialize a variable
    2. console.log(firstName); // print the value of firstName
    3. firstName = "Ted"; // assign a new value to the previously declared variable
    4. console.log(firstName); // print the new value of firstName
```

### Code blocks

One of the most important structural elements of a JavaScript program to understand is the "code block." Many of the tools we will use (conditional statements, loops, function definitions) may have a series of statements attached to them. These statements are grouped as a block enclosed inside "curly brackets" (`{ }`). It's extremely important to understand this convention of JavaScript programming. In the introductory examples (labs 0 and 1), you begin with a simple P5 template similar to this:
```javascript
    1.     function setup(){
    2.         createCanvas(400, 300);
    3.     }
    4. 
    5.    function draw(){
    6.        background(200);
    7.        ellipse(50, 100, 40);
    8.    }
```
The code at line 2, `createCanvas(400, 300);` is inside the **curly brackets** (lines 1 and 3) that define the `setup()` function. This means that when `setup()` runs (once, when you load the page) the P5 function `createCanvas()` is called because it is part of the `setup()` function's `{code block}.` Likewise the `draw()` function contains the code `background(200);` at line 6, which fills the canvas with a solid medium gray background. Then at line 7, the ellipse function is called to make a 40 pixel circle 50 pixels from the left edge and 100 pixels from the top. Because `draw()` is called repeatedly by P5 (60 times per second as an animation frame) , anything inside that block (from `{` at the end of line 5 to `}` at line 8) will execute repeatedly, in order, until the page is closed.

Code blocks in JavaScript are an essential tool for organizing complex programs. In many cases you will encounter nested code blocks (blocks within blocks) that create a heirarchy of functionality. It's important to keep track of the opening and closing curly brackets for each block. If one is missing or misplaced, you may encounter errors or odd behavior in your program. Here's a simple, but powerful, example of nested code blocks in P5:
```javascript
    1.     function setup(){
    2.         createCanvas(400, 300);
    3.     }
    4. 
    5.    function draw(){
    6.        background(200);
    7.        if (mouseIsPressed){
    8.          fill("red"); 
    9.        } else {
    10.         fill("blue");
    11.       }
    12.       ellipse(50, 100, 40);
    13.   }
```

In this example, there is a "conditional statement" (`if()`) checking the value of a P5 variable called `mouseIsPressed` (tracking the state of the mouse button). Its value is either `true` or `false`. If the value of `mouseIsPressed` is true (the user is holding down the mouse button), then the code inside the block immediately after the parentheses, enclosed by curly brackets, will execute, setting the P5 fill color to `"red"`. If it's false (the user is *not* pressing the mouse button), then the alterate block, after the keyword `else`, will execute, setting the P5 fill color to `"blue"`. All this is enclosed within the code block of the `draw()` function definition.

We will explore conditional statement in more detail later. For now just keep in mind that those curly brackets are really important, and that a `{` has to match with a `}` somewhere. Anything between them is a `{ // code block }`.

### Variable scope and code blocks 

Variables in JavaScript have what we call a **"scope."** That is, a level within the program's heirarchy of code blocks in which a variable is active and accessible. A variable or constant declared outside any other code blocks (outside function definitions) is considered **"global"** in scope. It is accessible from inside any code block lower in the program's heirarchy, such as function definitions and their nested sub-blocks. A variable or constant declared within a code block is generally confined to the block in which it is declared ("local") scope. Bothe `let` and `const` are strictly confined to the block in which they are declared. Constants may not be accessed on a line abouve where they are declared (the value of a `const` declared in line 2 cannot be accessed in line 1). On the other hand, a variable declared with the keyword `var` is scoped to the function in which it is declared, and not just the sub-block in which it is declared. In other words, a `var` declared inside the block of an `if()` statement "leakes" out to the function block surrounding it. It's a subtle difference, but can lead to errors if not treated very carefully. In general:
* use `const` when naming data that won't change during program execution. This can apply to items that mutate, such as object instances and arrays.
* use `let` when declaring variables within code blocks
* use `var` sparingly, and mainly when declaring global variables, and then only when `const` or `let` won't work (rare instances)

### Arguments

We're not arguing about anything. It's just a term used to describe **parameters** (or data values) passed to a function or other tool. It's a method for telling a function how to do it's job. In the example above, the statement `createCanvas(400, 300);` calls a function (`createCanvas()`) and passes it two numerical arguments, separated by commas. We will discuss functions in more detail below, but  simply put, the P5 function `createCanvas()` sets up your drawing canvas, and expects two *arguments.* The first is treated as the *width* of the new canvas in pixels ('400'). The second argument specifies the *height* of the canvas ('300'). In that same example we see (inside the `draw() `function definition's code block) the statment `background(200);` Here we are "calling" the function `background()` with the number '200' as a numerical argument. If you give one numerical argument to `background()`, it is treated as a grayscale value (between 0 and 255). Each function has a "help page" in the P5 online reference to give you more detail about how to use it and what the options are. For instance `background()` can take between one and four numerical arguments, but will interpret them differently based on the number of arguments given. It can also take a color argument as a string (e.g., "green"). Multiple arguments to a function are **always** separated by commas (`,`). For example, we could call `background()` multiple times with different arguments. The last one in the sequence is the one that you will see.
```javascript
    1.  function draw(){
    2.      background(220); // draw a light gray background
    3.      background(200, 100); // gray background with medium transparency
    4.      background(250, 150, 0); // orange background (RGB color)
    5.      background(250, 150, 0, 100); // RGB, semi-transparent
    6.      background("purple"); // purple background
    7.  }
```
The background color of the canvas in this last example will be purple. 

### Functions

In the previous two examples, we see JavaScript **functions** being used in two ways. There is a difference between a "function call" and a "function definition." A function call is seen in line 7 (example above) `ellipse(50, 100, 40);`. A function call is a **command** to execute the given function. The P5 library has a function (a pre-defined piece of executable code) called **`ellipse()`** that takes care of drawing a circle or oval on the canvas according to the parameters you give it (in the parentheses). Somewhere in the P5 library source code is a **definition** for `ellipse()`. You don't ever need to see it as long as you can consult the P5 reference on how to use it properly. It has one job, and you give it information when you call it so it can do that job.

In our example above, we also see a **function definition**. There are a few special functions that you can define yourself in P5, such as `setup()`, `draw()`, `mousePressed()` and more. A function definition has a different syntax and it specifies how a function will operate when it is called from elsewhere in your program. You can also design your own custom functions using the same syntax as the definition for `setup()`. A function definition doesn't execute on its own, but rather specifies what will happen when the function is called.

A function definition begins with the keyword **`function`** followed by the **name** of the function. After that is a set of parentheses. If the function takes parameters to do its job, these parameters are named as temporary variables inside the parentheses and separated by commas. After the parentheses is a set of curly brackets encapsulating the code block that will execute when the function is called. Here's an example of a custom function that adds two numbers and returns a result:
```javascript
    1.  function addTwo(a, b){ // custom function named "addTwo"
    2.      // arguments passed as temp variables 'a' and 'b'
    3.      let c = a + b; // add them together and store as 'c'
    4.      return c; 
    5.      // return the value of 'c' to the place in the program that called addTwo()
    6.  }
```

and then you could call that custom function like so:
```javascript
    1. let num = addTwo(2, 2); // expected value of 'num' is now 4
```

***Note:*** If there is a definition for `setup()` in your sketch, the P5 app running in your browser will call it for you. There should be only one definition for `setup()` and only one definition for `draw()` or else weird things might happen.

### Comments

In most programming languages there is some way to leave explanatory comments in your code. These are little messages you can leave for yourself or others that explain what's going on in your code. Comments are completely ignored by the JavaScript compiler (the component of your browser that turns your code into machine instructions), so anything inside a comment block is immune to the rules of JavaScript syntax. They are only there to help humans understand what's goin on. 

There are two ways to add a comment to your code. The first is a single line comment that begins with `//`. Anything following that double forward-slash on a line is ignored and treated as a comment. Here are some examples:
```javascript
    // here's a comment that might sit on a line by itself to explain something
    var potato = 0; // this is a comment on a line after a statement
    // potato = 1; // this is a line of code disabled by a double slash comment
```

The second type of comment is th "block" comment. This type is good for adding a longer block of explanatory code (like at the top of a program or function definition). It can also be used to "comment out" larger blocks of code that you might want to temporarily disable. A block comment begins with the symbol `/*` and ends with the symbol `*/`. Anything between those symbols (slash-star to star-slash)will be treated as a comment and not executable code. Examples:
```javascript
    /*
    * Here is a comment that you might include at the top of your code
    * it can have multiple lines
    * puctuation and formatting don't really mater in this block, 
    * except for legibility
    */

    /* this block is now disabled and won't run
    function draw(){
        background(200);
        fill(0);
        ellipse(width/2, height/2, 50, 50);
    }
    */
```

