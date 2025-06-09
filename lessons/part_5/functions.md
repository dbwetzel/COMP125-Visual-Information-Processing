<link href="../../markdown.css" rel="stylesheet"></link> 

# Functions
*Encapsulate code in a re-usable tool*

In JavaScript (and therefore in P5.js), functions are everything. We have been using functions in P5 all along this semester, even though we have not really focused too much on that fact. However, the idea keeps coming up, and it's time we delved into it in more detail.

If you remember 9th grade algebra, you might recall the idea of a function in the form of, say:
```
    ƒ(x) = 4x + 1
```

... where ƒ is the name of a function, 'x' is the input to that function (given in parentheses after the name of the function), and whatever appears to the right of the equal sign (in this example, "4x + 1") is the operation carried out on the input that produces a result. If you gave the value of 'x' as '5' as an input to this function, the resulting output would be '21.' In programming languages, functions can work the same way they do in Algebra. However, they can also do more complex tasks than simply performing mathematical operations, such as setting up a graphics environment or drawing images to the screen.

In P5, we have used many built in functions, such as `ellipse()`, `rect()`, `line()`, `fill()`, etc. You can usually tell that something in P5 is a function because it has those parentheses ("`( )`") after the name. A function is a block of code that does a specific task, based on information passed to it through those parentheses when it is called. The piece of information, or parameter, given to a function is called an "argument." Functions may require multiple arguments (as do `rect()` or `ellipse()`), a flexible number of arguments (such as `fill()`) or no arguments at all (such as `noStroke()`). The arguments required for a function depend on how the function itself is defined. For the built-in functions of JavaScript or P5, you will need to refer to the language reference to be sure you understand how to use the function and format its arguments properly.

In most programming languages, including P5, the programmer (that's you!) can also define custom functions that perform a specific task in the context of the program in which they are written. The most common reason for writing a new function is to turn a complex block of code into an easily re-usable tool. This is a technique known as "encapsulation," and it is very handy for making your code more flexible, readable, and easier to trouble shoot.

This week you will get a little more practice using functions in P5 and writing your own. In you lab assignment this week, you will define a function that draws an image. Then you will call that function multiple times to draw the same image multiple times with different parameters.