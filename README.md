# cityLights

Copy the cityLights.js file and paste into the editor playground at https://editor.p5js.org or open the cityLights.html file for the experience in a web browser.

This p5.js code creates an animated, colorful pattern made up of small circles designed to simulate city lights on a 750x750 canvas. The visual effect is a combination of a somewhat grid-like layout with a subtle wave-like motion due to the use of Perlin noise. The circles' colors, positions, and sizes are controlled by the calculated values, creating a dynamic visual effect.

Here's a breakdown of the code:

1. Variables are initialized:

w: The width and height of the canvas, set to 750.
t: A time variable initialized to 0, used to create the animation effect.

2. The setup() function is called once when the program starts:

createCanvas(w, w): Creates a 750x750 canvas.
colorMode(HSB): Sets the color mode to HSB (hue, saturation, brightness) instead of the default RGB.

3. The draw() function is called continuously to create the animation:

t is incremented by 0.01, and an additional 1.5 is added but does not affect the code as it is not assigned to any variable.
blendMode(BLEND): Sets the blend mode to BLEND, which is the default mode where the colors are mixed based on their alpha values.
background(0, 0, 0, 0.3): Sets the background color to black with 30% opacity, which creates a fading trail effect as the circles move.
blendMode(ADD): Sets the blend mode to ADD, which adds the color values of overlapping shapes, resulting in brighter colors where they overlap.

4. Nested loops iterate through x and y coordinates on the canvas, creating circles at different positions:

N: A value based on Perlin noise, which creates smooth, random values for the angle calculation.
T: A value based on the tangent of Perlin noise, used to control the size and position of the circles.
R: A value calculated by multiplying N by 9, used as an angle for the circle positions.

5. The circles are drawn:

fill(color(random(0, 360), 50, 100, T)): Sets the fill color to a random hue, 50% saturation, 100% brightness, and alpha value based on T. This creates smoothly changing colors for the circles.
circle(x + cos(R) * 9 / T, y + sin(R) * 9 / T, 5 / T): Draws a circle with its position determined by the x and y values, the angle R, and the value of T. The circle's size is also controlled by the value of T.
