<link href="../../markdown.css" rel="stylesheet"></link> 

# Object Instances
*An individual instance of an object type with its own data values*

Following up on this cat example, we have seen how vital statistics for an individual cat might be stored together in an object structure. What if we have more than one cat? We do!

To represent the cat colony Stitch brought with her (a box of kittens in an old box of abandoned knitting projects in my garage), we could define multiple object literals in the same manner as we did previously. If we spell out the properties the same way each time, and then attach the same functions to each object, we could have a group of "cat" objects that share a bunch of traits. This is pretty cumbersome and prone to errors. But there is a better way!

In Javascript we can define templates for objects ("class definitions" or "constructor functions"). We will get into the details of how to build the template later. For now, lets concentrate on the idea of multiple *instances* of an object created from the same template, therefore sharing a set of properties as well as built-in methods. Each instance can have its own individual stats, but the categories are standardized for all objects of the same type, or *class.*

For example, with a *class definition* or *constructor function*, we could initialize a set of cats like so:

```javascript
    const stitch = new Cat("Stitch", "Calico", "female", 4.5);
    const smokey = new Cat("Smokey", "Gray", "female", 2.0);
    const bruno = new Cat("Bruno", "Brown Tabby", "male", 2.0);
    const cinder = new Cat("Cinder", "Dilute Calico", "female", 2.0);
    const clem = new Cat("Clementine", "Orange", "male", 2.0);
```

Each `const` contains an *instance* of a Cat, created from the  `Cat()` template using the `new` keyword. The arguments passed to `Cat()` are handed to a constructor function that attaches the given values to the correct properties. In this hypothetical example, our object instances are initialized with values for name, color, sex, and age.

Once *instantiated*, each object has the same set of properties and methods, accessible using "dot" (`.`) notation. For example, an individual Cat instance can exercise one of its methods or access/update a property:

```javascript
    smokey.pounce(); // call smokey's ".pounce()" method
    console.log(clem.color); //access clem's ".color" property
    stitch.age = 5; // update stitch's ".age" property
```