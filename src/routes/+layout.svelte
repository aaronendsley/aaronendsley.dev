<script>
	import Header from '$lib/components/mainlayout/Header.svelte';
	import Footer from '$lib/components/mainlayout/Footer.svelte';
	import Social from '$lib/components/mainlayout/Social.svelte';
	import './global.css';
</script>

<div class="layout">
	<div class="content-wrap">
		<Header />
		<main>
			<slot />
		</main>
		<Social />
		<Footer />
	</div>
</div>
