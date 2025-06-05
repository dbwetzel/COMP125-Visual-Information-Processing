<link href="../../markdown.css" rel="stylesheet"></link> 

## Text and Images

*Display images and text in your P5 sketch*

Showing text on screen can be extremely helpful in an animation sketch. I use the `text()` function all the time to display variables and their values in a sketch. Displaying text on screen will be useful later in the course when you are designing a video game and need to show a score board or a message to the player. Additionally, P5 has some features for loading and displaying .gif, .jpeg, .png, and .svg images in your P5 sketch.

The following example puts a phrase on screen and asks for input from the user (press the mouse). When the mouse is pressed, the second line is replaced with the name of the person being quoted. Also, an image of the person being quoted appears. P5 gives you control over fonts (you can import more fonts if you like), style, and size. The positioning arguments to the `text()` function give you control over text placement on the canvas.

This example sketch not only places text on the canvas, it also handles external media (in this case a JPEG image). The P5 Editor allows you to upload additional files ("dependencies") into your sketch folder. In this sketch, the image file is retrieved from the host server (the editor.p5js.org project) first by using the `preload()` function. This ensures that the image fully loads before the sketch tries to display it with the `image()` function inside `draw()`. There might be a slight delay when loading this sketch. The image is displayed when you click the mouse, using the P5 `image()` function.

<iframe src="https://editor.p5js.org/dbwetzel/full/XZ_5udFj6" width=640 height=300></iframe>

Open in the editor: <a href="https://editor.p5js.org/dbwetzel/sketches/XZ_5udFj6" target="_blank">https://editor.p5js.org/dbwetzel/sketches/XZ_5udFj6</a>