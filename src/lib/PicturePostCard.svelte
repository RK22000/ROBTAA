<!-- Format of the blog title TitleCard -->
<!-- Background image -->
<!-- Overlayed with post -->
<!-- on:Hover the background blurs and the title replaced by abstract -->

<script>
	import {sphinx_phrase} from '$lib/index'
	import {letChain} from '$lib/myutils';
	// import '../app.css'
	/** @type { null | { 
	 * title: string, 
	 * abstract?: string,
	 * date?: string,
	 * picture_relative_source: string,
	 * }}
	 * @description date string is formatted yyyy-mm-dd
	 * */
	export let post_card = null;
	/** @type {number}*/
	export let tabindex = 0;
	$: _title = post_card?.title ?? 'Origami paper dragons are cool';
	$: _abstract = post_card?.abstract ??
		"Sphinx of black quartz judge my vow. Papers dragons are a cool piece of origami to make. They'r more complex than paper frogs but they look cool. Unfortunately they do not have a dynamic movement like the frog has jump.";
	$: _pic_src = post_card?.picture_relative_source ?? 'PaperDragons.jpg';
	const days = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' ');
	$: _date = letChain(post_card?.date, (it)=> new Date(it).toUTCString().slice(0, -12));
</script>

<div
	role="button"
	{tabindex}
	class="
    h-60 rounded-xl aspect-[3/2] overflow-hidden
    relative
    highlight
    "
>
	<div class="absolute inset-0 bg-cover bg-center" style="background-image: url({_pic_src});" />
    <div class="absolute inset-0 bg-davys_gray-100/80"/>
	<p
		class="
        highlight-on-hover
        absolute inset-0 px-10 backdrop-blur-sm
        cardcenter text-ellipsis
        "
	>
		{_abstract}
	</p>
	<h1
		class="
		text-2xl
        highlight-on-not-hover
        absolute inset-0 px-7 text-center
        cardcenter
        "
	>
		{_title}
	</h1>
	<p
		class="
		highlight-on-not-hover
		absolute bottom-0 end-0 m-5">{_date ?? ''}</p>

</div>
<!-- Work the transition. Make the title disappear instantly without transition -->
<!-- And make it appear with a transition. -->
<style>
	.highlight .highlight-on-hover {
		@apply transition duration-1000;
		opacity: 0;
	}
	.highlight .highlight-on-not-hover {
		@apply transition duration-1000;
		opacity: 1;
	}
	.highlight:hover .highlight-on-hover {
		opacity: 1;
	}
	.highlight:hover .highlight-on-not-hover {
		opacity: 0;
	}
    .cardcenter {
        @apply flex items-center justify-center;
    }
</style>
