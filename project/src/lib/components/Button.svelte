<script>
    export let href = ""; // Accept a href prop
</script>

{#if href}
    <a href={href} class="btn btn-primary">
        <slot>Click Me</slot>
    </a>
{:else}
    <button class="btn btn-primary">
        <slot>Click Me</slot>
    </button>
{/if}
