<link href="../../markdown.css" rel="stylesheet"></link> 

# Object Oriented Programming (OOP)
*Grouping variables with related functions*

Let's take a leap into a new level of abstraction in programming: **object orientation.** If we do this right, you will end up with a firmer understanding of variables, functions, and ways of organizing components of a more complex program.

Objects in a computer program are analogous to objects in the real world. If you think of a car as an "object," you can describe it in terms of its "properties" and "functions." A car has properties such as its make, model, size, color, and other options. It also has functions, such as "start," "stop," "drive," "accelerate," "brake," "turn," etc. An object in a computer program can reflect the properties and functions of things that you can imagine, but of course they must be expressed in code.

The technique we will use for Object Oriented Programming in this course involves the use of a "constructor function" from which individual "object instances" will be created. The constructor function definition is a blueprint that defines how each object instance of that type is made.  Again, if we think of a car as an object, we have an example of something that is made from a standard blueprint or template, but each individual car that is made from that blueprint has properties (color, options, etc) that are unique to itself. It shares functions (drive, turn, etc) with all the other objects of its class, but it does them independently.

Likewise in your programs, you can use a standardized class definition to create multiple object instances of the same thing. They will share the same properties and functions, but they will have their own property values and they will operate their functions independently.

So in this unit, you will get some practice writing a constructor function and creating object instances from it (using the keyword "new"). This will set you up for our second creative project, which will use object oriented techniques to control multiple moving objects in a more complex interactive animation.