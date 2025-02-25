<script>
    export let product;
</script>

<div class="border rounded-lg p-4 shadow-lg transition duration-300 hover:shadow-xl bg-white">
    <img src={product.image} alt={product.name} class="w-full h-48 object-cover rounded-md" />
    <h3 class="mt-3 text-lg font-semibold text-gray-800">{product.name}</h3>
    <p class="text-gray-500 font-bold">THB {product.price}</p>
    <div class="mt-2 flex space-x-2">
        {#each product.colors as color}
            <span class="w-6 h-6 rounded-full border" style="background-color: {color};"></span>
        {/each}
    </div>
</div>
