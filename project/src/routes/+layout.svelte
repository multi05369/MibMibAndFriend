
<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	let { children } = $props();
	import { afterNavigate } from '$app/navigation';
    
    let showContent = true;

    afterNavigate(() => {
        showContent = false;
        setTimeout(() => (showContent = true), 500);
    });
</script>

<Navbar />

{#if showContent}
    <div transition:fade={{ duration: 500 }}>
        {@render children()}
    </div>
{/if}


