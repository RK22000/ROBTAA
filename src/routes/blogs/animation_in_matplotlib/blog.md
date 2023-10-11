![Animation Prepared Using Matplotlib](animation_in_matplotlib/simple_RRT.gif)

I made this animation in matplotlib. Over the past few months I've managed to explore (to varying degrees) a few different tools to create animations through code.

[Skip to the meat and potatoes of how to animate stuff in matplotlib](#the-meat-and-potatoes-of-funcanimation)

### [P5.js](https://p5js.org/)

This was I think the very first animation library that I used.

I heard about it from a friend and jumped at the chance to try it out when a school project called for creating a visualization. Recently while reading the 3 Body Problem books I was inspired to create these 2 simulations.

- [In this one I added damping and corrective forces to ensure that the 3 bodies continue to perform a dynamic dance](../3BodySimulation/3body1.html)
- [In this one I avoided adding any damping and corrective forces to see what the Trisolaran system might actually look like](../3BodySimulation/3body2.html)

### [Manim Community](https://www.manim.community/)

I came across Manim because of [3Blue1Brown](https://www.youtube.com/c/3blue1brown). For a long time I've admired how well he breaks down and builds up any topic that he covers, but his video animation is just 

<a href='https://tenor.com/view/pacha-perfect-emperors-new-groove-very-good-gif-5346522'>

![](https://media.tenor.com/gdjvRr2WymYAAAAC/pacha-perfect.gif)

</a>

So I tried to create some animations like him. Earlier this summer I created an animation to show a kind of error that can happen at the Data Link Layer of a network connection if the acknowledgement window size for packets is larger than half the acknowledgement packet ids being used.

<video src='../DataLinkLayerErrors/Selective_Repeat_Large_Window.mp4' controls></video>

Do note 3Blue1Brown uses a different fork of the Manim Library. I used the Community fork and it was pretty good.

### [Matplotlib](https://matplotlib.org/)

I've been using matplotlib to visualize data as charts and graphs for a good while now. But it was only recently that I was prompted to try and animate the visualized data. My first approach was based on how I saw Manim created its animation. Manim looked like it created frames and partial animations then stitched them together using ffmpeg. So my first approach to animating matplotlib was to save a plot for every frame that I wanted to animate then stitch them together. This works and I'd recommend it if you have already written the code that can plot the frames your interested in plotting and animating. However, if your about to write that code, I'd recommend reading the rest of this blog so you can use [matplotlib.animation.FuncAnimation](https://matplotlib.org/stable/api/_as_gen/matplotlib.animation.FuncAnimation.html#matplotlib.animation.FuncAnimation)

<div id='the-meat-and-potatoes-of-funcanimation'>

## The Meat And Potatoes of FuncAnimation

</div>

Its late I'm sleepy I'll write this late. I'm sorry if you needed this right now 😴🙇
