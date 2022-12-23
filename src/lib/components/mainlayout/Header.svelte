<script>
	import '@fontsource/roboto/700.css';
</script>

<header class="header-nav">
	<h1><a href="/" alt="home">AARON ENDSLEY</a></h1>
	<!-- <nav>
		<ul>
			<li>PORTFOLIO</li>
			<li>BLOG</li>
		</ul>
	</nav> -->
</header>

<style>
	.header-nav {
		display: flex;
		width: 100%;
		height: 70px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		background-color: var(--DarkBlue);
		justify-content: flex-start;
		font-family: 'Roboto', 'sans-serif';
	}

	.header-nav:before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		height: 4px;
		width: 50%;
		border-bottom: 1px solid var(--green);
	}

	.header-nav a:link {
		color: inherit;
		text-decoration: none;
	}

	.header-nav a:visited {
		color: inherit;
		text-decoration: none;
	}

	.header-nav h1 {
		padding-left: 10px;
		margin: 0;
		flex: 2;
		align-self: center;
		font-size: 1.3rem;
	}

	.header-nav nav {
		align-content: space-evenly;
		flex: 0.5;
		display: flex;
		margin-right: 15px;
	}

	.header-nav nav ul {
		display: flex;
		justify-content: flex-start;
		width: 100%;
	}

	.header-nav nav ul li {
		list-style: none;
		align-self: center;
		font-size: 1rem;
		padding-right: 1rem;
		color: var(--green);
	}

	@media (min-width: 800px) {
		.header-nav:before {
			width: 40%;
		}

		.header-nav h1 {
			flex: 3;
			font-size: 1.5rem;
		}

		.header-nav nav {
			flex: 0.5;
		}

		.header-nav nav ul li {
			font-size: 1.5rem;
		}
	}

	@media (min-width: 1000px) {
		.header-nav:before {
			width: 400px;
		}
	}
</style>
