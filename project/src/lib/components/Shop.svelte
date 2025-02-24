<script>
    export let filters;
  
    let products = [
      { name: "เสื้อซิปหน้า U คอกลม", category: "เสื้อแขนยาว", price: 520, colors: ["black", "navy"] },
      { name: "Manfinity Hypermode เสื้อลูกฟูก", category: "เสื้อแขนยาว", price: 310, colors: ["beige", "lightblue"] },
      { name: "กางเกงขายาว", category: "กางเกงขายาว", price: 400, colors: ["gray", "black"] },
    ];
  
    $: filteredProducts = products.filter(product => product.category === filters.category);
  </script>
  
  <div class="products-grid">
    {#each filteredProducts as product}
      <div class="product-card">
        <div class="product-info">
          <div class="product-title">{product.name}</div>
          <div class="product-price">THB {product.price}</div>
          <div class="color-dots">
            {#each product.colors as color}
              <span class="color-dot" style="background: {color}"></span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
  