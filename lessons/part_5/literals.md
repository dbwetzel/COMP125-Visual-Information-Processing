<link href="../../markdown.css" rel="stylesheet"></link> 

# Object Literals
*Grouping related data*

In its simplest form, an object in Javascript is a handy way to organize related data in a single structure. A Javascript object representing a cat (ok, my cat) might look like this:

```javascript
    const stitch = {
        name : "Stitch",
        color : "Calico",
        toy_preference : "yarn",
        sex : "female",
        age : 4.5,
        weight : 10,
        strength : 7,
        dexterity : 12,
        constitution : 19,
        intelligence : 14,
        wisdom : 17,
        charisma : 20
    }
```

Objects in a computer program are analogous to objects in the real world. If you think of a cat as an "object," you can describe it in terms of its "properties" and "functions." A cat has properties such as its name, color, weight, and other characteristics. Of course a cat also has abilities, or functions, such as "jump," "hunt," "stare," "sleep," "play," "meow," etc. An object in a computer program is a model that can reflect the properties and functions of things that you can imagine, but of course they must be expressed in code.

The example above is an "object literal." The items (name/value pairs) included in the object are spelled out (literally) and are enclosed together within `{ "curly brackets" }`. Property names are followed by a colon (`:`), followed by a *value* for that property.

In Javascript, we can add functions (or "methods") to an object, combining data and functionality into a single bundle assigned to a variable. In the case of our cat Stitch, we could add the following:

```javascript
    stitch.jump = function(){ ... }; // assign a function to a property 
```

and then we could invoke that method like so:

```javascript
    stitch.jump(); // call stitch's .jump() method 
```

This is fine if you only have one cat object to deal with. However, Stitch (the real-world cat) lives with her four adult kittens. Each has its own personality, strengths, and weaknesses. They all have the same general list of properties (characteristics) and methods (abilities), but the values of those properties are individual to each cat.
