<script>
	import '@fontsource/roboto/700.css';
	function Copyright() {
		const copyrightYear = new Date().getFullYear();

		return copyrightYear;
	}
</script>

<footer class="footer-container">
	<p>{`Copyright Aaron Endsley`.toUpperCase()} <span>&copy; {Copyright()}</span></p>
</footer>

<style>
	.footer-container {
		width: 100%;
		background-color: var(--green);
		position: absolute;
		bottom: 0;
		height: 2.5rem;
		display: flex;
		justify-content: center;
		align-content: center;
	}

	.footer-container p {
		margin: auto;
		color: var(--DarkBlue);
		font-family: 'Roboto', 'sans-serif';
		letter-spacing: 4px;
		font-size: 0.8rem;
	}
</style>
