<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Matt & Ella's Wedding</title>
	<meta name="description" content="Matt and Ella's wedding website" />
	<!-- Generate og tags -->
	<meta property="og:title" content="Matt & Ella's Wedding" />
	<meta property="og:description" content="Matt and Ella's wedding website" />
	<meta property="og:image" content="$lib/assets/hero-bg.png" />
	<meta property="og:url" content="https://mattella-wedding.vercel.app" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Matt & Ella's Wedding" />
	<meta property="og:locale" content="en_US" />
</svelte:head>

<slot />
