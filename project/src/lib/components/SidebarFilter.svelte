<script>
    // Reactive State สำหรับการ Expand/Collapse
    let showCategory = true;
    let showSize = true;
    let showColor = true;

    // State สำหรับตัวกรอง
    let selectedCategory = [];
    let selectedSize = [];
    let selectedColor = [];

    // ตัวเลือก Filter
    const categories = [
        {
            name: "ชาย",
            subcategories: ["เสื้อ", "เสื้อแขนยาว", "กางเกงขายาว", "กางเกงขาสั้น"]
        },
        { name: "หญิง", subcategories: [] },
        { name: "เด็ก", subcategories: [] },
        { name: "ผู้สูงอายุ", subcategories: [] }
    ];

    const sizes = ["S", "L", "XL", "2XL"];

    const colors = [
        { name: "ขาว", code: "#FFFFFF" },
        { name: "แดง", code: "#FF0000" },
        { name: "เขียว", code: "#00FF00" },
        { name: "ชมพู", code: "#FF1493" },
        { name: "ม่วง", code: "#800080" },
        { name: "น้ำเงิน", code: "#0000FF" },
    ];
</script>

<div class="w-72 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
    <!-- หมวดหมู่ -->
    <div class="mb-8">
        <div class="flex justify-between items-center cursor-pointer" on:click={() => showCategory = !showCategory}>
            <h2 class="text-lg font-bold text-gray-800">หมวดหมู่</h2>
            <span class="text-gray-600">{showCategory ? "−" : "+"}</span>
        </div>
        {#if showCategory}
            <ul class="mt-4 space-y-4 text-base">
                {#each categories as category}
                    <li>
                        <label class="flex items-center space-x-3">
                            <input type="checkbox" bind:group={selectedCategory} value={category.name} class="checkbox checkbox-primary" />
                            <span class="text-gray-700">{category.name}</span>
                        </label>
                        {#if category.subcategories.length > 0}
                            <ul class="ml-6 mt-1 space-y-2 text-gray-600 text-sm">
                                {#each category.subcategories as sub}
                                    <li>
                                        <label class="flex items-center space-x-3">
                                            <input type="checkbox" value={sub} class="checkbox checkbox-primary" />
                                            <span>{sub}</span>
                                        </label>
                                    </li>
                                {/each}
                            </ul>
                        {/if}
                    </li>
                {/each}
            </ul>
        {/if}
    </div>

    <!-- ขนาด (Size) -->
    <div class="mb-8">
        <div class="flex justify-between items-center cursor-pointer" on:click={() => showSize = !showSize}>
            <h2 class="text-lg font-bold text-gray-800">ไซส์</h2>
            <span class="text-gray-600">{showSize ? "−" : "+"}</span>
        </div>
        {#if showSize}
            <ul class="mt-4 grid grid-cols-2 gap-4 text-base">
                {#each sizes as size}
                    <li>
                        <label class="flex items-center space-x-3">
                            <input type="checkbox" bind:group={selectedSize} value={size} class="checkbox checkbox-secondary" />
                            <span class="text-gray-700">{size}</span>
                        </label>
                    </li>
                {/each}
            </ul>
        {/if}
    </div>

    <!-- สี (Color) -->
    <div class="mb-4">
        <div class="flex justify-between items-center cursor-pointer" on:click={() => showColor = !showColor}>
            <h2 class="text-lg font-bold text-gray-800">สี</h2>
            <span class="text-gray-600">{showColor ? "−" : "+"}</span>
        </div>
        {#if showColor}
            <div class="mt-4 grid grid-cols-4 gap-4">
                {#each colors as color}
                    <span 
                        class="w-9 h-9 rounded-full border border-gray-300 cursor-pointer transition-transform duration-300 hover:scale-110" 
                        style="background: {color.code};"
                        title={color.name}
                    ></span>
                {/each}
            </div>
        {/if}
    </div>
</div>
