
# Day 07
## Introduction 
Topic of the fourth day is "Splitscanning". I felt very inspired by Francois Vogel. But I wasn't sure how to reach something like this

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">jellyfish cat <a href="https://t.co/TLk78J6jwr">pic.twitter.com/TLk78J6jwr</a></p>&mdash; françois vogel (@francois__vogel) <a href="https://twitter.com/francois__vogel/status/1625861236742328320?ref_src=twsrc%5Etfw">February 15, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Concept
At first I wanted to learn how it's done and find inspiration on the my journey. So the first trial was the most basic iteration of splitscanning. Like with everything in p5, Daniel Shiffman probably did a [video](https://www.youtube.com/watch?v=YqVbuMPIRwY&ab_channel=TheCodingTrain) about it.


![0](content/day07/slitscan.png)
![1](content/day07/splitscanning_.gif)
![2](content/day07/splitscanning_2.gif)


### Mixing techniques
After the last iteration, I found that little distances create an interesting pattern. Somewhat chaotic. I wanted to break up the left to right movement and get somewhat more of a overall "movement". I remembered the technique from day 6, which [Generative Gestaltung](https://editor.p5js.org/generative-design/sketches/P_4_1_2_01) did. It takes random parts of the image and offset them a bit. It done with a combination of set() and get(). 

```js
// coordinates where its going to be placed
var x1 = floor(random(width));
var y1 = 0;

//  which pixels are going to be copied
var x2 = round(x1 + random(-7, 7));
var y2 = round(y1 + random(-5, 5));

//  which pixels are going to be copied
var w = floor(random(100, 400));
var h = height ;

set(x2, y2, get(x1, y1, w, h));
```

![3](content/day07/splitscanning_3.gif)



![4](content/day07/splitscanning_4.gif)
![5](content/day07/splitscanning_5.gif)
![6](content/day07/splitscanning_6.gif)


#### Ressources
[Image Processing](https://idmnyu.github.io/p5.js-image/index.html) \
[Generative Gestaltung](http://www.generative-gestaltung.de/2/) \

https://p5js.org/reference/#/p5/get