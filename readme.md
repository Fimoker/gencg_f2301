# Day 1
## Introduction 



## Morning 

In the Morning we talked about different artists and how generative art became to be. The first assigment was to draw generative Art based on rules. In my case we played "Sprouts", where every point can only touch 3 points. The goal is, that the opposing player can't connect to any points.

The second game we played was called "the beach". We placed dots in the middle of other dots or empty spaces. The goals was to fill the subjective empty spots with a dot. Over time a repetetive image with dots appear. 


## Afternoon

### Draw and Code

Getting back into the flow with p5.js. The Idea was to draw the shapes before we actually code them. In our case we drew step by step and implemented it the same way. 

{% raw %}
<iframe src="https://editor.p5js.org/Fimo/full/qbh8Zaeg5"></iframe>
{% endraw %}

In my case, I created a triangle filled with bricks. The Idea is pretty simple, because I didnt use any beziershapes or arcs. To use this opportunity to get back my burried knowledge of p5, I created a loop, which rotates the object in a everchanging radius. For the radius I used noise. 

#### Interaction
The X-position of the mouse influences the strokeWidth. The Y-position influences the color of the shape. To make this possible I used the function "map()", which translates the input values to a given range. In my case from 0 - canvas-width to 150 - 255. My range needed to be in the RGB spectrum, but couldn't be too dark.

```js
  let colorM = map (mouseY, 0, windowHeight, 150, 255)
  stroke(colorM, colorM, colorM)
```


{% raw %}
<iframe src="https://editor.p5js.org/Fimo/full/yVdr18R8t"></iframe>
{% endraw %}  