<h1>Thu Sep 14 14:42:18 PDT 2023</h1>
<p>Sweet I&#39;ve migrated 3 of my blogs so far and it looks like everything is behaving consistently. Time to improve the workflow even more. I want to see if I can automatically load in the title from the PostCard.json file. I also want to include the date in the PostCard.json file, then use that date to display the PostCards sorted by recency.</p>
<hr>
<blockquote>
<p>endlog - Thu Sep 14 14:45:23 PDT 2023</p>
</blockquote>
<h2>Wed Sep 13 15:22:40 PDT 2023</h2>
<p>Things are comming together!!!!</p>
<p>look at this</p>
<p><img src="pics/blog_layout.gif" alt="clean responsive blog layout"></p>
<p>Any markdown blog I create should now automatically get a layout like this in the site. The white layer on which the blog material sits is declared in +layout.svelte in blogs/</p>
<p>Next I&#39;ll automate how the blog post cards show up on the site and I&#39;ll be good to begin the migration.</p>
<hr>
<blockquote>
<p>endlog - Wed Sep 13 15:36:29 PDT 2023</p>
</blockquote>
<h2>Wed Sep 13 14:28:52 PDT 2023</h2>
<p>Ok so this is really cool. I created a plugin that does hmr with md files. So now I can modify my md file in my blog and the changes are reflected right away on the dev site.</p>
<p>Honestly it was quite simple and I should make a blog post on it as well. The key concept to understand was hooks. It may have been something so obvious that the docs site didn&#39;t bother to explain it properly or I just could not read.</p>
<p>The plugin is at blog_scripts/vite-plugin-md-to-html-svelte-hmr.js</p>
<hr>
<blockquote>
<p>endlog - Wed Sep 13 14:32:27 PDT 2023</p>
</blockquote>
<h2>Wed Sep 13 02:47:11 PDT 2023</h2>
<p>Well I finally imported (poorly) a blog from the older site. Every step after coping the markdown was codable so I should be able to automate all the steps the md blog to svelte page soon. 😴</p>
<hr>
<blockquote>
<p>endlog - Wed Sep 13 02:53:02 PDT 2023</p>
</blockquote>
<h2>Wed Sep 13 01:03:54 PDT 2023</h2>
<p>Cool I feel like everything is set up well enough that I should try migrating a blog post from my previous site. I&#39;m gonna do the one on cold diffusion models cuz its got pictures of Aang and I like him.</p>
<hr>
<blockquote>
<p>endlog - Wed Sep 13 01:07:32 PDT 2023</p>
</blockquote>
<h2>Wed Sep 13 00:26:24 PDT 2023</h2>
<p>Woohooo!! I&#39;ve got nice Post Cards to list my blogs. Time to include some of my actual blogs and wire things up. I&#39;m so close to migrating to this site. 🤞 this site is gonna be awesome.</p>
<hr>
<blockquote>
<p>endlog - Wed Sep 13 00:30:22 PDT 2023</p>
</blockquote>
<h2>Tue Sep 12 15:34:46 PDT 2023</h2>
<p>Did you know that git does not track empty dirictories??? I didn&#39;t It caused my latest build to fail. There&#39;s something called .gitkeep to prevent this from happening but its just easier to create an empty file for now.</p>
<hr>
<blockquote>
<p>endlog - Tue Sep 12 15:36:20 PDT 2023</p>
</blockquote>
<h2>Tue Sep 12 14:34:11 PDT 2023</h2>
<p>Here&#39;s how I&#39;m thinking I want the blogging workflow to be.</p>
<ul>
<li>I write a blog and its associated material</li>
<li>I run a blog script that will process my blog and prepare it for the site</li>
<li>The site was running on a dev server so the changes are immediately reflected</li>
<li>If alls well I deploy the site</li>
</ul>
<p>🤞 I&#39;ll be able to implement something that can give me a close enough experience.</p>
<hr>
<blockquote>
<p>endlog - Tue Sep 12 14:47:36 PDT 2023</p>
</blockquote>
<h2>Tue Sep 12 14:15:58 PDT 2023</h2>
<p>Ok so this is cool. <code>package.json</code> has a first level attribute called <code>&quot;scripts&quot;</code>. I can store custom scripts here and then easily use them later.</p>
<p>So for instance I have a script i <code>blog_scripts/script1.js</code> that would normally be run as</p>
<pre><code class="hljs language-sh">$&gt; node blog_scripts/script1.js
</code></pre><p>then I can put it in package.json like so</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;scripts&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;blog&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;node blog_scripts/script1.js&quot;</span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>
</code></pre><p>and run simply run</p>
<pre><code class="hljs language-sh">$&gt; npm run blog
</code></pre><p>I like this because the <code>npm run {something}</code> is the same alias that is being used to run everything else from starting the dev server, building the project, and much more that I don&#39;t fully understand yet.</p>
<p>Also I think this means that I can put my custom scripts in some absurd deeply nested location and not worry about perfectly remembering the location every single time to run them.</p>
<hr>
<blockquote>
<p>endlog - Tue Sep 12 14:29:18 PDT 2023</p>
</blockquote>
<h2>Tue Sep 12 04:12:46 PDT 2023</h2>
<p>I made the title card banner for the site.</p>
<p><img src="pics/robta_banner.gif" alt="Website title card"></p>
<hr>
<blockquote>
<p>endlog - Tue Sep 12 04:14:51 PDT 2023</p>
</blockquote>
<h2>Tue Sep 12 00:57:23 PDT 2023</h2>
<p>Few things about the project setup about tailwind. Following this <a href="https://tailwindcss.com/docs/guides/sveltekit">guide</a> gets me set up with tailwind. However there&#39;s this funny little thing in tailwind where it basically strips out a lot of the default stying information. For instance by default it will make all the headers the same. Now tailwind does make it super easy to individually customize every element with fair precission. So tailwind wan&#39;t you to do the customization yourself and it recommends not relying on defaults so that you are not blindsided by any nitpicky thing in the defaults. However defaults are usefull so tailwind gives you a plugin to get a good set of helpfull defaults that can easily be applied. That&#39;s <a href="https://tailwindcss.com/docs/typography-plugin">@tailwindcss/typography</a>. Apply the <code>prose</code> class on any vanila html element and the usefull default typography will carry over to all the children.</p>
<hr>
<blockquote>
<p>endlog - Tue Sep 12 01:04:42 PDT 2023</p>
</blockquote>
<h3>Tue Sep 12 00:29:34 PDT 2023</h3>
<p>You know those things that you never notice because they just work. Then you suddenly notic it because it no longer work. Ya it sucks to find out when they no longer work.</p>
<p>I reinstalled wsl on my machine to uninstall a program that for some reason I was unable to uninstal. Don&#39;t know what blood magic I used to bind that installation to my wsl instance that it was easier to uninstall, then reinstall wsl and everything else. But anywasy I did that and I forgot to save my ssh config files from the previous installation. So I had to reset up ssh with github. That was a pain. I&#39;m not gonn reliv it by typing it out. But just thought you should know.</p>
<p>Oh the template project uploads and deploys freely on pushing to main.</p>
<hr>
<blockquote>
<p>endlog - Tue Sep 12 00:34:01 PDT 2023</p>
</blockquote>
<h2>Mon Sep 11 23:04:01 PDT 2023</h2>
<p>I&#39;ve got a feel for how things to make a site using svelte and tailwind. I have a barely active blog site that I think could be made to look better. 2+2=Refactor the blog site into a svelte tailwind site that I understand and might use more often.</p>
<hr>
<blockquote>
<p>endlog - Mon Sep 11 23:06:20 PDT 2023</p>
</blockquote>
