<script>
	// import { base } from '$app/paths';
	import TitleCard from '$lib/TitleCard.svelte';
	import {blogsJSON} from '$lib/blogs.js';
	import PicturePostCard from '$lib/PicturePostCard.svelte';
	import {sphinx_phrase, site_root_prefix} from '$lib/index.js'


</script>

<TitleCard title_pic="{site_root_prefix}PaperDragons.jpg">
	<h1 class="text-5xl">ROBTAA</h1>
	<h2>
		Welcome to Rahul's Online Blog That's (hopefully) Accssible Anywhere with a reasonable internet
		connection.
	</h2>
</TitleCard>

<br>
<nav>
	<a class="bg-aero-100 rounded-lg p-3 font-bold hover:bg-aero-200" href="playground">
		Simulation
	</a>
</nav>

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

<h1 class='text-5xl mb-4'>Posts</h1>
<div class='grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
{#each blogsJSON.post_cards.sort((a,b)=>{
	const dateA = new Date(a.date).getTime();
	const dateB = new Date(b.date).getTime();
	return dateB - dateA;

}) as card}
<a href="{site_root_prefix}{card.relative_path}">
	<PicturePostCard post_card={card}
	/>
</a>
{/each}
</div>
<br>
