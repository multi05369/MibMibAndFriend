<script>
    export let categories = ["เสื้อ", "เสื้อแขนยาว", "กางเกงขายาว", "กางเกงขาสั้น"];
    export let activeCategory = "";
    export let onSelectCategory = (category) => {};

    const handleClick = (category) => {
        onSelectCategory(category);
    };
</script>

<div class="flex space-x-4 p-4 bg-white shadow-sm rounded-md">
    {#each categories as category}
        <button
            class="px-4 py-2 rounded-full text-gray-600 hover:text-white hover:bg-purple-500
                   transition duration-300
                   {category === activeCategory ? 'bg-purple-500 text-white' : 'bg-gray-100'}"
            on:click={() => handleClick(category)}>
            {category}
        </button>
    {/each}
</div>
