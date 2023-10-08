<script>
	import '@fontsource/roboto/700.css';
	import '@fontsource/open-sans/400.css';
	import AaronInSpace from '$lib/images/Aaron_in_Space.jpg?as=run';
	import Aaron from '$lib/images/Aaron.jpg?as=run&width=388&height=388&fit=cover';
	import Img from '@zerodevx/svelte-img';
</script>

<div class="index-hero">
	<h2>
		<span>Hello World!</span>
		<span>I'm Aaron!</span>
	</h2>
	<div class="hero-image-container">
		<Img class="hero-image" src={Aaron} alt="A Photo of Aaron Endsley" />
	</div>
</div>
<div class="index-content">
	<section class="post-decorator">
		<p>
			&emsp; I am from Lawton, Oklahoma. I am a Christian, husband and a dad to four, I love playing
			video games, reading, and watching Star Trek with my kids!
		</p>
		<p>
			&emsp; I love to write code in HTML, CSS and JavaScript. I have been writing code for web
			pages since I was twelve years old, when my Dad taught me how to write HTML. I went to college
			and earned a bachelors degree in Multimedia Design, shortly after, I discovered CSS, and then
			JavaScript shortly after that. I am self taught and have been a front end web developer
			professionally for the last six years. I love to learn new web technologies and experiment
			with them. I like to solve problems that help others or make their work simpler, I have done
			this in my own professional work, and those opportunity's are a joy to me when they come.
		</p>
		<div class="image-decorator">
			<Img
				class="content-image"
				src={AaronInSpace}
				alt="A Photo of Aaron Endsley in a SpaceShip made for his children"
			/>
		</div>
		<p>
			&emsp; Soon, you will find on this site my portfolio. I plan to try to write about things that
			I have learned, and show off projects I have been working on. If you like what you see here
			please feel free to send me an e- mail or contact me on any of the links below!
		</p>
		<p>Soli Deo Gloria <span> - Aaron Endsley</span></p>
	</section>
</div>

<style lang="postcss">
	.index-hero {
		width: 80%;
		margin: 35px auto;
		display: flex;
		flex-direction: column;
	}

	.index-hero h2 span {
		font-family: 'Roboto';
		font-size: 3.5rem;
		display: flex;
		flex: 1;
		justify-content: center;
	}

	.index-hero h2 span:nth-child(2) {
		color: var(--green);
		margin-left: 10px;
	}

	.hero-image-container {
		width: 100%;
	}

	:global(.hero-image {
		border: solid 3px var(--green);
		border-radius: 100%;
		height: 200px;
		width: 200px;
		margin: 0 auto;
		display: flex;
	}
	.content-image{
		width:100%;
		height: fit-content;
	}
	)


	.index-content {
		width: 80%;
		margin: 0 auto;
	}

	.index-content p {
		padding: 10px;
		font-size: 1.2rem;
		font-family: 'Open Sans';
	}

	@media (min-width: 800px) {
		.index-hero {
			width: 600px;
			flex-direction: row;
		}

		.index-hero h2 span {
			margin: 0;
			white-space: nowrap;
		}

		.hero-image {
			height: 200px;
			width: 200px;
			margin-left: 20px;
		}

		.index-content {
			width: 750px;
		}
	}
</style>
