<script>
	/**@type {string} Path of picture to display in the title card */
	export let title_pic;
</script>

<div class="overflow-hidden">
	<div
		class="
    relative
    scale-110 hover:scale-100 transition duration-1000
    "
	>
		<div
			class="
        bg-davys_gray-100/70
        absolute inset-0
        flex flex-col justify-center text-center
        hover:bg-transparent hover:text-transparent transition duration-1000
        "
		>
        <div class='scale-90'>
			<slot><!-- optional fallback is only display picture--></slot>
        </div>
		</div>
		<img src={title_pic} alt="" />
	</div>
</div>
