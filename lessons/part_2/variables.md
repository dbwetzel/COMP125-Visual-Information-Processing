<link href="../../markdown.css" rel="stylesheet"></link> 

# Variables
*Storing data in a named location*

A variable is a named placeholder for a thing or quantity. An everyday variable might be something like your "age." Its numerical value increases over time, but you still know it by the same name. Another might be today's lunch menu. The variable name is "lunch" but the value of that variable might be "ham sandwich" or "salad" or "pizza." Its contents can be anything you feel like, but it's filed under the same location in your working memory.

This exercises in this unit will focus on one of the most useful features of any programming language: the ability to store and manipulate numerical values, or other data, in named memory locations, known as "variables." Mathematically, you probably already know this concept from Algebra.

Remember the linear graphing function, `y = mx + b`?

Those letters are all *variables*, meaning they can represent different number values at different times. If we assigned values to 'm' and 'b' (e.g. m = 2 and b = 6), then we could easily draw a graph by plugging in different values of 'x' to generate corresponding values for 'y' (e.g. if x is 5, then y = 2 * 5 + 6). In a computer program, variables make it possible to temporarily store and change values over time, making the program dynamic and responsive.

In P5, we could use that same linear function to draw a line or move a shape across the canvas. Each new "x" coordinate could generate a new "y" coordinate for each frame of an animation. Those "x" and "y" values could be used to determine the location of an object on the canvas. If the values of x and y change in each drawing frame (P5's `draw()` function runs 60 times per second!), the object will appear to move. Magic!