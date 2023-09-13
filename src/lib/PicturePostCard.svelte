<!-- Format of the blog title TitleCard -->
<!-- Background image -->
<!-- Overlayed with post -->
<!-- on:Hover the background blurs and the title replaced by abstract -->

<script>
	import {sphinx_phrase} from '$lib/index'
	/** @type {string|null}*/
	export let title = null;
	/** @type {string|null}*/
	export let abstract = null;
	/** @type {string|null}*/
	export let pic_src = null;
	/** @type {number}*/
	export let tabindex = 0;
	$: _title = title ?? 'Origami paper dragons are cool';
	$: _abstract = abstract ??
		"Sphinx of black quartz judge my vow. Papers dragons are a cool piece of origami to make. They'r more complex than paper frogs but they look cool. Unfortunately they do not have a dynamic movement like the frog has jump.";
	$: _pic_src = pic_src ?? 'PaperDragons.jpg';
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
        cardcenter
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

</div>

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
