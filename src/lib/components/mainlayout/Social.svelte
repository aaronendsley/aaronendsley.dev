<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IoMailSharp from 'svelte-icons-pack/io/IoMailSharp';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';
	import AiFillLinkedin from 'svelte-icons-pack/ai/AiFillLinkedin';
	import AiFillTwitterCircle from 'svelte-icons-pack/ai/AiFillTwitterCircle';

	const buttonColor = '#31efb8';
</script>

<div class="Social">
	<a
		href="https://twitter.com/aaronendsleydev"
		target="_blank"
		rel="noreferrer"
		alt="twitter"
		aria-label="Twitter"
	>
		<Icon src={AiFillTwitterCircle} color={buttonColor} size={42} />
	</a>
	<a
		href="https://github.com/aaronendsley"
		target="_blank"
		rel="noreferrer"
		alt="github"
		aria-label="Github"
	>
		<Icon src={AiFillGithub} color={buttonColor} size={42} /></a
	>
	<a
		href="https://www.linkedin.com/in/aaron-endsley-6786aa8a/"
		target="_blank"
		rel="noreferrer"
		alt="linkedin"
		aria-label="LinkedIn"
	>
		<Icon src={AiFillLinkedin} color={buttonColor} size={42} />
	</a>
	<a
		href="mailto:aaronendsley@gmail.com"
		target="_blank"
		rel="noreferrer"
		alt="email"
		aria-label="Email"
	>
		<Icon src={IoMailSharp} color={buttonColor} size={42} />
	</a>
</div>

<style lang="postcss">
	.Social {
		display: flex;
		width: 80%;
		justify-content: space-around;
		align-items: center;
		margin: 20px auto;
	}

	@media (min-width: 800px) {
		.Social {
			width: 750px;
		}
	}
</style>
