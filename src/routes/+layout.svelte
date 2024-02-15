<script>
	import '../app.css';
	import bgImage from '$lib/assets/images/hero-bg.png';
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

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://matella-wedding.vercel.app/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Matt & Ella's Wedding" />
	<meta property="og:description" content="Matt and Ella's wedding website" />
	<meta property="og:image" content={bgImage} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="matella-wedding.vercel.app" />
	<meta property="twitter:url" content="https://matella-wedding.vercel.app/" />
	<meta name="twitter:title" content="Matt & Ella's Wedding" />
	<meta name="twitter:description" content="Matt and Ella's wedding website" />
	<meta name="twitter:image" content={bgImage} />
</svelte:head>

<slot />
