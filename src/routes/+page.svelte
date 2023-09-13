<script>
	// import { base } from '$app/paths';
	import TitleCard from '$lib/TitleCard.svelte';
	import {blogsJSON} from '$lib/blogs.js';
	import PicturePostCard from '$lib/PicturePostCard.svelte';
	import {sphinx_phrase, site_root} from '$lib/index.js'


</script>

<TitleCard title_pic="{site_root}/PaperDragons.jpg">
	<h1 class="text-5xl">ROBTAA</h1>
	<h2>
		Welcome to Rahul's Online Blog That's (hopefully) Accssible Anywhere with a reasonable internet
		connection.
	</h2>
</TitleCard>

<br>
<article class="prose prose-invert">
	<p>
		Every once in a while I’ll have the urge to write something that I want to share with someone
		else or my future self. Normally I’d just pester my room mate with such random thoughts, or I’d
		ignore them by convincing myself that I haven’t got a good place or audience to write such
		thoughts for.
	</p>
	<p>Not any more!</p>
	<p>
		Earlier this year(2023) I spent 2 days figuring out <a
			href="https://jekyllrb.com/docs/step-by-step/01-setup/">Jekyll</a
		>
		and made <a href="https://rk22000.github.io/">this blog site</a>. I was actually procastinating
		on my urge to write about something while procastinating on 3 homework assignments. But due to
		that procastination I finally dipped my toes into web development.
	</p>
	<p>
		Overall I liked having a site where I could make blog posts. However I always felt restricted in
		what I could do, likely due to my limited compentence with html, css, and js. I was never really
		intersted in webdevelopment. However feeling that restriction lit a few embers in me to figure
		out at least enough web dev that I sould be able to concive and hypothesize a way to make any
		website my mind might dream up of.
	</p>
	<p>
		Those embers finally caught fire and I'm now figuring out and using <a
			href="https://svelte.dev/">Svelte</a
		>
		and <a href="https://tailwindcss.com/">Tailwind</a> to make the blog site that you are on right now.
	</p>
</article>
<br>

<h1>Posts</h1>
<div class='grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
{#each blogsJSON.post_cards as card}
<a href="{site_root}/{card.relative_path}">
	<PicturePostCard 
		title={card?.title ?? sphinx_phrase}
		abstract={card?.abstract}
		pic_src={(card?.picture_relative_source) ? `${site_root}/${card.picture_relative_source}` : null}
	/>
</a>
{/each}
</div>

<div class="bg-black">Hello THere</div>