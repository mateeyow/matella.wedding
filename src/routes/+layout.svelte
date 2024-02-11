<script>
	import '../app.css';
	import bgImage from '$lib/assets/hero-bg.png';
</script>

<svelte:head>
	<title>Matt & Ella's Wedding</title>
	<meta name="description" content="Matt and Ella's wedding website" />
	<meta property="og:title" content="Matt & Ella's Wedding" />
	<meta property="og:description" content="Matt and Ella's wedding website" />
	<meta property="og:image" content={bgImage} />
	<meta property="og:url" content="https://mattella-wedding.vercel.app" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Matt & Ella's Wedding" />
	<meta property="og:locale" content="en_US" />
</svelte:head>

<slot />
