<h1 class="blog-title">Animation In Matplotlib</h1>
<h2 class="blog-subtitle">Tue, 10 Oct 2023 </h2>
<p><img src="animation_in_matplotlib/simple_RRT.gif" alt="Animation Prepared Using Matplotlib"></p>
<p>I made this animation in matplotlib (inspired by <a href="http://lavalle.pl/rrt/gallery.html">these</a>). Over the past few months I&#39;ve managed to explore (to varying degrees) a few different tools to create animations through code.</p>
<p><a href="#the-meat-and-potatoes-of-funcanimation">Skip to the meat and potatoes of how to animate stuff in matplotlib</a></p>
<h3><a href="https://p5js.org/">P5.js</a></h3>
<p>This was I think the very first animation library that I used.</p>
<p>I heard about it from a friend and jumped at the chance to try it out when a school project called for creating a visualization. Recently while reading the 3 Body Problem books I was inspired to create these 2 simulations.</p>
<ul>
<li><a href="../3BodySimulation/3body1.html">In this one I added damping and corrective forces to ensure that the 3 bodies continue to perform a dynamic dance</a></li>
<li><a href="../3BodySimulation/3body2.html">In this one I avoided adding any damping and corrective forces to see what the Trisolaran system might actually look like</a></li>
</ul>
<h3><a href="https://www.manim.community/">Manim Community</a></h3>
<p>I came across Manim because of <a href="https://www.youtube.com/c/3blue1brown">3Blue1Brown</a>. For a long time I&#39;ve admired how well he breaks down and builds up any topic that he covers, but his video animation is just</p>
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

<blockquote>
<p>Its late I&#39;m sleepy I&#39;ll write this later. I&#39;m sorry if you needed this right now 😴🙇</p>
</blockquote>
<p>It&#39;s later, so I&#39;m writing it now.</p>
<p>There are 2 fair ways I&#39;ve seen to animate stuff in matplotlib.</p>
<ul>
<li>FuncAnimation: Use a function to modify plot on every frame</li>
<li>ArtistAnimation: I didn&#39;t get around to properly understanding this one</li>
</ul>
<p>But according to <a href="https://matplotlib.org/stable/users/explain/animations/animations.html">matplotlib</a> <code>FuncAnimation</code> is more efficient than the later. <code>ArtistAnimation</code> is supposed to be more flexible but <code>FuncAnimation</code> is flexible enough for the things I&#39;ve tried. So thats what I use.</p>
<p>I&#39;ll demo <code>FuncAnimation</code> by showing how it can be used to produce this animation</p>
<a href='https://github.com/RK22000/Matplotlib-Animation-Demo'>

<p><img src="animation_in_matplotlib/population.gif" alt="Animation of country populations"></p>
</a>

<h3>Quick tangent to cover the data</h3>
<p>This data is the <a href="https://www.kaggle.com/datasets/shivd24coder/worldwide-population-data">Worldwide Population Data</a> and I got it on <a href="https://www.kaggle.com/">Kaggle</a>. Its a tabular data set about historical population trends and I think even predictions based on those trends.</p>
<p>This dataset has population records not only by countries but also by geographic regions, development levels, and more.</p>
<p>For this demo I selected the total population of only those records which were of countries.</p>
<h3>Back to animation</h3>
<p>The code to create this animation is quite small. Also I&#39;m assuming that you have at least some experience with python.</p>
<pre><code class="hljs language-py"><span class="hljs-keyword">import</span> matplotlib.pyplot <span class="hljs-keyword">as</span> plt
<span class="hljs-keyword">import</span> seaborn <span class="hljs-keyword">as</span> sns
<span class="hljs-keyword">import</span> matplotlib.animation <span class="hljs-keyword">as</span> anime
<span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-keyword">def</span> <span class="hljs-title function_">main</span>():
    df = pd.read_csv(<span class="hljs-string">&#x27;data/WPP2022_Demographic_Indicators_Medium.csv&#x27;</span>)
    df2 = df.loc[df.LocTypeName==<span class="hljs-string">&#x27;Country/Area&#x27;</span>, [<span class="hljs-string">&#x27;TPopulation1Jan&#x27;</span>, <span class="hljs-string">&#x27;Location&#x27;</span>, <span class="hljs-string">&#x27;Time&#x27;</span>]]
    fig, ax = plt.subplots()
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">topPopulations</span>(<span class="hljs-params">year, present_year, n</span>):
        ax.clear()
        ax.set_title((<span class="hljs-string">&quot;Prediction: &quot;</span> <span class="hljs-keyword">if</span> present_year &lt; year <span class="hljs-keyword">else</span> <span class="hljs-string">&quot;&quot;</span>) + <span class="hljs-built_in">str</span>(year))
        sns.barplot(ax=ax, data=df2.loc[df2.Time==year, [<span class="hljs-string">&#x27;TPopulation1Jan&#x27;</span>,<span class="hljs-string">&#x27;Location&#x27;</span>]].sort_values(by=<span class="hljs-string">&#x27;TPopulation1Jan&#x27;</span>, ascending=<span class="hljs-literal">False</span>).iloc[:n], x=<span class="hljs-string">&#x27;TPopulation1Jan&#x27;</span>, y=<span class="hljs-string">&#x27;Location&#x27;</span>)
        fig.tight_layout()

    ani = anime.FuncAnimation(
        fig=fig,
        func=topPopulations,
        frames=df2.Time.unique(),
        fargs=(<span class="hljs-number">2023</span>, <span class="hljs-number">10</span>)
    )
    plt.show()

<span class="hljs-keyword">if</span> __name__==<span class="hljs-string">&#x27;__main__&#x27;</span>:
    main()
</code></pre><p>There are 2 significant sections in this code. The first is the <code>topPopulations()</code> functions, and the second is the <code>anime.FuncAnimation(...)</code> constructor call.</p>
<p>These 2 sections demonstrate the style in which <code>FuncAnimation</code> animates a plot. You start out with an initial figure, and you make a function that can modify the existing figure into the required figure for a frame. Over here that function is <code>topPopulations()</code>.</p>
<p>Given the year that is to be animated, the present year, and the number of countries to display in the graph, <code>topPopulations()</code> will create a bar graph of the top <code>n</code> most populous countries. If the population is a prediction of the future then it will set the title to reflect that.</p>
<pre><code class="hljs language-py"><span class="hljs-comment"># Look it over again</span>
fig, ax = plt.subplots()
<span class="hljs-keyword">def</span> <span class="hljs-title function_">topPopulations</span>(<span class="hljs-params">year, present_year, n</span>):
    ax.clear()
    ax.set_title((<span class="hljs-string">&quot;Prediction: &quot;</span> <span class="hljs-keyword">if</span> present_year &lt; year <span class="hljs-keyword">else</span> <span class="hljs-string">&quot;&quot;</span>) + <span class="hljs-built_in">str</span>(year))
    sns.barplot(ax=ax, data=df2.loc[df2.Time==year, [<span class="hljs-string">&#x27;TPopulation1Jan&#x27;</span>,<span class="hljs-string">&#x27;Location&#x27;</span>]].sort_values(by=<span class="hljs-string">&#x27;TPopulation1Jan&#x27;</span>, ascending=<span class="hljs-literal">False</span>).iloc[:n], x=<span class="hljs-string">&#x27;TPopulation1Jan&#x27;</span>, y=<span class="hljs-string">&#x27;Location&#x27;</span>)
    fig.tight_layout()
</code></pre><p><code>FuncAnimation(...)</code> then uses the <code>topPopulations()</code> function to animate the figure. <code>FuncAnimation(...)</code> takes 3 main arguments; The figure to animate, The function that will animate, and frames. The first 2 act as you might expect but frames actually has some flexibility to behave in a few different ways.</p>
<p><code>frames</code> could be the number of frames to animate, or it could be an iterable of identifiers for each frame. In this demo it&#39;s an iterable of years. It&#39;s a list of all the years that need to be animated. The <code>frames</code> will also be the first argument passed on to the function that will modify the figure. It can be used by the function the determine which frame needs to be drawn and therefore which modification should be made. If the modification function needs some more arguments they can be given to <code>FuncAnimation(...)</code> in the <code>fargs</code> parameter. <code>FuncAnimation(...)</code> will pass these same arguments to the modification function for every frame.</p>
<p>Now call <code>plt.show()</code> and matplotlib will work its magic. Ooohh once you have the <code>ani</code> object you can also call <code>ani.save(&#39;population.mp4&#39;)</code> instead of <code>plt.show()</code> to save the animation instead of displaying it. Just make sure to have ffmpeg on your environment if you want to save the file as mp4. If not you&#39;ll have to save it as a gif. And that&#39;s it. That covers everything about using <code>FuncAnimation(...)</code>.</p>
<p><img src="animation_in_matplotlib/blit_looking_up.png" alt="A pair of eyes with text &quot;blit=True&quot; looking up at the previous paragraph"></p>
<p>Oh ya, there&#39;s the good old <code>blit</code> that I almost forgot about. <code>blit</code> is a parameter in <code>FuncAnimation(...)</code>. Using and not using <code>blit</code> can make a difference like this</p>
<table>
<thead>
<tr>
<th>Without blit</th>
<th>With blit</th>
</tr>
</thead>
<tbody><tr>
<td><img src="animation_in_matplotlib/bounce_no_blit.gif" alt="Animation of a ball bouncing slowly"></td>
<td><img src="animation_in_matplotlib/bounce_blit.gif" alt="Animation of a ball bouncing fast"></td>
</tr>
</tbody></table>
<p><code>blit</code> is able to speed up the animation process by selectively rerendering only the parts of the graph that change. If a part of the graph does not change, then there is no need to spend time rerendering it. To use it however you do need to do a little extra work in how you write out the animation function. The animation function will normally just modify the matplotlib figure to match the current frame. To use <code>blit</code> the animation function must also return a list of changed artists. <code>FuncAnimation(...)</code> will use this to rerender only the parts of the graph that changed from frame to frame.</p>
<p>Lets look at the code that animated that bouncy ball</p>
<pre><code class="hljs language-py">fig, ax = plt.subplots()
ax: Axes = ax  <span class="hljs-comment"># I&#x27;m just doing this so my intellisense will realize that ax is a Axes object</span>
                        <span class="hljs-comment"># Thats really helpful as it it&#x27;ll now know how to autocomplete the objects functions</span>
xlim = (<span class="hljs-number">0</span>,<span class="hljs-number">100</span>)
ylim = (<span class="hljs-number">0</span>,<span class="hljs-number">100</span>)
ax.set_xlim(*xlim)
ax.set_ylim(*ylim)

pos = np.array([<span class="hljs-number">50.0</span>,<span class="hljs-number">50.0</span>])
vel = np.random.random_sample(<span class="hljs-number">2</span>)
acc = np.array([<span class="hljs-number">0.0</span>, -<span class="hljs-number">1.0</span>])

scatter_artist = ax.scatter(*pos)
time_text = ax.text(<span class="hljs-number">50</span>, <span class="hljs-number">90</span>, <span class="hljs-string">&quot;Some Text&quot;</span>, ha=<span class="hljs-string">&#x27;center&#x27;</span>)

<span class="hljs-keyword">def</span> <span class="hljs-title function_">time_step</span>(<span class="hljs-params">i</span>):
    <span class="hljs-keyword">global</span> pos, vel, acc
    pos += vel
    bounce=<span class="hljs-literal">False</span>
    <span class="hljs-keyword">if</span> pos[<span class="hljs-number">0</span>] &lt; xlim[<span class="hljs-number">0</span>] <span class="hljs-keyword">or</span> pos[<span class="hljs-number">0</span>] &gt; xlim[<span class="hljs-number">1</span>]:
        vel[<span class="hljs-number">0</span>]*=-<span class="hljs-number">1</span>
        bounce=<span class="hljs-literal">True</span>
    <span class="hljs-keyword">if</span> pos[<span class="hljs-number">1</span>] &lt; ylim[<span class="hljs-number">0</span>] <span class="hljs-keyword">or</span> pos[<span class="hljs-number">1</span>] &gt; ylim[<span class="hljs-number">1</span>]:
        vel[<span class="hljs-number">1</span>]*=-<span class="hljs-number">1</span>
        bounce=<span class="hljs-literal">True</span>
    <span class="hljs-keyword">if</span> <span class="hljs-keyword">not</span> bounce:
        vel += acc
    scatter_artist.set_offsets(pos)
    time_text.set_text(<span class="hljs-string">&#x27;Frame: &#x27;</span>+i)
    <span class="hljs-keyword">return</span> [scatter_artist, time_text]

ani = anime.FuncAnimation(
    fig=fig,
    func=time_step,
    frames=<span class="hljs-number">1000</span>,
    interval=<span class="hljs-number">1</span>,
    <span class="hljs-comment"># blit=True # Uncomment to enable blit</span>
)
plt.show()
</code></pre><p>Notice that in the <code>time_step()</code> function I&#39;m not calling <code>ax.clear()</code> or <code>ax.scatter()</code> or <code>ax.set_title()</code>. Instead <code>ax.scatter()</code> and <code>ax.text()</code> gets called only once outside of the <code>time_step()</code> function. I take what they return (<code>scatter_artist</code> and <code>time_text</code>) and modify those returned objects in the <code>time_step()</code> function. These objects are <a href="https://matplotlib.org/stable/api/artist_api.html">Artists</a>. Basically they are responsible for holding data and drawing  that data on the graph. For instance a <a href="https://matplotlib.org/stable/api/collections_api.html#matplotlib.collections.PathCollection">PathCollection</a> (returned by ax.scatter) is responsible for holding and drawing all the scatter points on the graph. A <a href="https://matplotlib.org/stable/api/text_api.html">Text</a> (returned by ax.text) is responsible for holding and drawing text on the graph. Here&#39;s a helpful <a href="https://matplotlib.org/stable/api/collections_api.html">list</a> of collections (sub class of artist) that you can use in your animations.</p>
<p>The other thing you will notice is that <code>time_step()</code> returns <code>scatter_artist</code> and <code>time_text</code> in a list. Doing so lets <code>FuncAnimation(..)</code> know which artists were changed and therefore which artists need to be rerendered. If you forget this step <code>FuncAnimation(...)</code> will not animate the changed made by <code>time_step()</code>. One caveat I&#39;ve encountered is that while bliting <code>FuncAnimation(...)</code> does not rerender title text. On reading a little I think its because only the artists inside the plot are rerendered if <code>blit</code> is enabled. Since the title is displayed outside the limits of the plot, it gets ignored while rerendering.</p>
<p>You can clone my <a href="https://github.com/RK22000/Matplotlib-Animation-Demo">repo</a> to run the demo as a script or inspect it as a notebook. The repo also has a demo of using blit with <code>FuncAnimation(...)</code>. Doing so speeds up the animation by a lot.</p>
