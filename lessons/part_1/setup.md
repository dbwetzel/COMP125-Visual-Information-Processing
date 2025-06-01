<link href="../../markdown.css" rel="stylesheet"></link> 

# Setup - Before You Begin
*Getting Started with Coding in Javascript and P5*

Chapter 2 in *Getting Started with P5.js* doesn't quite match up with our method for working in editor.p5js.org in the browser. The info is still helpful, so this page is a modified version of chapter 2. As stated in the book, you need to experiment and do things with code to understand it. You can't learn programming just by reading about programming. Fortunately, the way we will do it in this class is even easier than the method outlined in the book!

### Environment

The book says you will need a **code editor** (a word processor that doesn't add hidden formatting, but works with "plain text", i.e., NOT MS Word). Normally, that would be the place to start, and you could do this course the old fashioned way, with a text editor (such as Sublime, Atom, etc.) and a web browser. However, that would require some additional setup and some careful organizing on your part, and a virtual web server running on your computer. 

Frankly, I'd like to avoid all that and get you up and running, writing your own programs, right away. So instead, we will use the editing tool provided online by **P5js.org**. The P5js editor is an **Integrated Development Environment (IDE)** that runs in the browser. It is designed for quick sketching and experimentation for web design and programming. Code that you type in the editor is rendered as a web page in a split window. You can see the results of your work instantly, with a minimum of confusion and trouble. Also included is a **console** window at the bottom where you can see messages from your program as you work (including error messages for de-bugging purposes!). You can see an example of a P5.js sketch that I have embedded below (Example 2-1 and Example 2-2).

### Setup

For this class, you will need an account on <a href="https://editor.p5js.org" target="_blank">editor.p5js.org</a>.

* Sign up for a free account to get started

Your first Lab assignment (lab 0) has detailed instructions for creating your first P5.js sketch from a template I have made for you. But first, let's take a quick tour of the two examples from Chapter 2 and maybe experiment with them a little. For these exercises, you can follow along and even experiment by editing it in the P5js.org editor. This should give you a chance to get comfortable with the idea of drawing with P5.js before you have to set up your own programs.

### A Basic P5.js Sketch

A modern web page usually has three components that work together. Each is a separate type of file: **HTML**, **CSS**, and **JS**. "HTML" stands for "HyperText Markup Language." HTML is the format for basic web pages and it defines the elements that you see in your browser window. Web designers have been working with HTML since the early 1990s. "CSS" stands for "Cascading Style Sheets" and is used in web design for setting uniform styles and formatting across entire web sites. We won't be using CSS in this class, so you can ignore the "CSS" file in your projects if you see one. "JS" stands for "JavaScript" which is the programming language most common to modern web design (though lots of other programming languages are used on the web also). JavaScript is what we are using when we program in P5.js. In reality, P5 is a *library* of JavaScript functions that we can access and also an application that runs in the background. The P5.js library gives us a really useful set of tools for quickly creating graphics and interaction, all within the context of JavaScript code attached to a web page.

Most of our sketches will consist of JS code only. You won't need to add anything to the HTML file most of the time (except a little bit at the end of the semester). You definitely won't need to touch the CSS part (in most COMP 125 templates, I've already removed the .css files). Concentrate your energy on the JS section and on writing some simple but functional code. The templates I provide (or any new sketch you begin on editor.p5js.org) have one important feature that's kind of hidden from view. In the HTML file there is a `<script>` link to an external file that contains all the code for P5.js. If that file isn't linked to your sketch, your P5.js sketch won't work properly. If you start a web page (HTML, CSS, JS) on your own and you want to include P5.js functionality, be sure to add the following to the file "index.html" between the `<head> </head>` tags:

```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.1/p5.js"></script>
```

Once you have linked your sketch to the P5.js library, you are ready to code! In the JS section of my templates (look at the "files" menu on the left and look for "script.js"), you should notice two empty blocks of code:
```javascript
    function setup(){
        // put setup code here
    }

    function draw(){
        // put drawing code here
    }
```

These are two special blocks of code that most P5.js sketches will depend on. "`setup()`" is a function that runs one time, when the page loads. On the other hand, "`draw()`" is a special P5 function that loops (repeats) endlessly at a rate of 60 times per second as long as the page is loaded in your browser window. The repeating nature of the `draw()` function is what lets us easily create animations in P5.js. In general, code that initializes the program (size of the canvas, various settings, initializing variables, etc) goes in the `setup()` `{code block}`. Code that draws images to the screen typically goes in the `draw()` block. Your code will go between the "curly brackets:" `{ and }`. Those curly brackets are really important. They define the beginning and ending of a block of code.

So let's look at a basic example. This is a sketch I made that is essentially a copy of **example 2-1** in the book. However, it is in a format that you can edit. On the left corner, click the "file" icon to see the files associated with this sketch. Select **"script.js"** to see the P5 code. If you make changes to the JS code (and hit the "play" button), you will see your changes reflected in the output. How cool is that?

Don't worry. None of your changes will affect the original. You can reload this page if you need to reset it to the original version.

<iframe src="https://editor.p5js.org/dbwetzel/full/6Uir5WMtJ"></iframe>

Edit and experiment (source code): <a href="https://editor.p5js.org/dbwetzel/sketches/6Uir5WMtJ" target="_blank">https://editor.p5js.org/dbwetzel/sketches/6Uir5WMtJ</a>

This example just makes a boring little circle. It doesn't move or do anything. It's a "static" image. However, you can experiment with this example by changing some values. The line: ellipse(50, 50, 80, 80); means "draw an ellipse with its center 50 pixels from the left and 50 pixels from the top that is 80 pixels wide and 80 pixels tall." Go ahead and change the code so that the ellipse is 40 pixels wide: ellipse(50, 50, 40, 80);

Feel free to experiment with some of the other values. When you make a change, you should see it update in the "results" window within a second or two. If you hopelessly mess it up, don't worry. Just reload the page here in Sakai and it will reset to the original version.

Once you feel like you have at least a vague understanding of what's going on (don't worry if you don't understand everything yet!), let's move on to some basic animation. Yeah, that's right. You're ready to create animations.

<iframe src="https://editor.p5js.org/dbwetzel/full/eQCREmxXd" height="285"></iframe>

Edit and Experiment (source code): <a href="https://editor.p5js.org/dbwetzel/sketches/eQCREmxXd" target="_blank">https://editor.p5js.org/dbwetzel/sketches/eQCREmxXd</a>

This code is only slightly more complex. Notice the line added to the `setup()` function: `createCanvas(480, 120);` This creates a drawing area (a "canvas") attached to the web page. Doing this in regular JavaScript would be much more complicated, but doing it in P5.js is really simple. However, you only need to call `createCanvas()` once, when the page loads, so it belongs in the `setup()` block. If you put it in the `draw()` function, your browser would try to create a new canvas 60 times per second! Forever. Not a good idea!

Anyway, `createCanvas()` is a **function**. A function is a routine that you can call like a basic tool. It does something specific, and may take parameters (also known as "arguments") that affect the results. Inside the parentheses are two numerical values separated by a comma. These arguments are passed to the function telling it specifically how to do its job. In this case we are creating a canvas that is 480 pixels wide and 240 pixels high. `CreateCanvas()` expects two arguments. The first is interpreted as width. The second is interpreted as height. If you change one of those values, you should see a difference in the size of the drawing area. Go ahead -- do it!

Otherwise, this program draws circles on the screen wherever the mouse is on the canvas. Go ahead and move the mouse around. If you click the mouse, the circle will turn black. There are a few tricky things going on in this program that we will explore in more detail later (for instance, the "`if()`" statement that looks for a particular condition to be `true` before executing a `{block of code}`). Notice also that the coordinates of the ellipse (the first two arguments to the `ellipse()` function) are the variables "`mouseX`" and "`mouseY`." Every time the `draw()` loop executes (60 times per second), it looks at the location of the mouse.  `mouseX` represents the horizontal position (x axis) of the mouse and `mouseY` represents its vertical position (y axis). These values are then passed to the `ellipse()` function as coordinates for the circle. A new circle is therefore drawn at the location of the mouse every frame (each iteration of the draw loop).

Again, if this is not all perfectly clear yet, that's OK. This is just a starter example to give you an idea of what this class is about. We will go step by step and build up skills and programming techniques one element at a time.

If you like, you can re-create this example yourself in the P5 editor, or simply "duplicate" it to your own account right now.

### Examples and Reference

This section in the book is really good, and there is no need for me to re-create it here. Go back to the book and read the Examples and Reference section at the end of Chapter 2 in "Getting Started with P5.js"