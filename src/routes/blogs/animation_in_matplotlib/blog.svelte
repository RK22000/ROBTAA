<h1 class="blog-title">Animation In Matplotlib</h1>
<h2 class="blog-subtitle">Tue, 10 Oct 2023 </h2>
<p><img src="animation_in_matplotlib/simple_RRT.gif" alt="Animation Prepared Using Matplotlib"></p>
<p>I made this animation in matplotlib. Over the past few months I&#39;ve managed to explore (to varying degrees) a few different tools to create animations through code.</p>
<p><a href="#the-meat-and-potatoes-of-funcanimation">Skip to the meat and potatoes of how to animate stuff in matplotlib</a></p>
<h3><a href="https://p5js.org/">P5.js</a></h3>
<p>This was I think the very first animation library that I used.</p>
<p>I heard about it from a friend and jumped at the chance to try it out when a school project called for creating a visualization. Recently while reading the 3 Body Problem books I was inspired to create these 2 simulations.</p>
<ul>
<li><a href="../3BodySimulation/3body1.html">In this one I added damping and corrective forces to ensure that the 3 bodies continue to perform a dynamic dance</a></li>
<li><a href="../3BodySimulation/3body2.html">In this one I avoided adding any damping and corrective forces to see what the Trisolaran system might actually look like</a></li>
</ul>
<h3><a href="https://www.manim.community/">Manim Community</a></h3>
<p>I came across Manim because of <a href="https://www.youtube.com/c/3blue1brown">3Blue1Brown</a>. For a long time I&#39;ve admired how well he breaks down and builds up any topic that he covers, but his video animation is just </p>
<a href='https://tenor.com/view/pacha-perfect-emperors-new-groove-very-good-gif-5346522'>

<p><img src="https://media.tenor.com/gdjvRr2WymYAAAAC/pacha-perfect.gif" alt=""></p>
</a>

<p>So I tried to create some animations like him. Earlier this summer I created an animation to show a kind of error that can happen at the Data Link Layer of a network connection if the acknowledgement window size for packets is larger than half the acknowledgement packet ids being used.</p>
<p><video src='../DataLinkLayerErrors/Selective_Repeat_Large_Window.mp4' controls></video></p>
<p>Do note 3Blue1Brown uses a different fork of the Manim Library. I used the Community fork and it was pretty good.</p>
<h3><a href="https://matplotlib.org/">Matplotlib</a></h3>
<p>I&#39;ve been using matplotlib to visualize data as charts and graphs for a good while now. But it was only recently that I was prompted to try and animate the visualized data. My first approach was based on how I saw Manim created its animation. Manim looked like it created frames and partial animations then stitched them together using ffmpeg. So my first approach to animating matplotlib was to save a plot for every frame that I wanted to animate then stitch them together. This works and I&#39;d recommend it if you have already written the code that can plot the frames your interested in plotting and animating. However, if your about to write that code, I&#39;d recommend reading the rest of this blog so you can use <a href="https://matplotlib.org/stable/api/_as_gen/matplotlib.animation.FuncAnimation.html#matplotlib.animation.FuncAnimation">matplotlib.animation.FuncAnimation</a></p>
<div id='the-meat-and-potatoes-of-funcanimation'>

<h2>The Meat And Potatoes of FuncAnimation</h2>
</div>

<p>Its late I&#39;m sleepy I&#39;ll write this late. I&#39;m sorry if you needed this right now 😴🙇</p>
