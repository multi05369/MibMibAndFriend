
<script>
  import Shop from "$lib/components/Shop.svelte";

  let filters = {
    category: "เสื้อแขนยาว",
    size: ["S", "L"],
    gender: "ชาย",
    colors: ["black", "navy"],
  };

  function updateFilter(category) {
    filters.category = category;
  }
</script>

<Shop {filters} />

<div class="filter-tabs">
  <div class="filter-tab" on:click={() => updateFilter("เสื้อ")}>เสื้อ</div>
  <div class="filter-tab active" on:click={() => updateFilter("เสื้อแขนยาว")}>เสื้อแขนยาว</div>
  <div class="filter-tab" on:click={() => updateFilter("กางเกงขายาว")}>กางเกงขายาว</div>
  <div class="filter-tab" on:click={() => updateFilter("กางเกงขาสั้น")}>กางเกงขาสั้น</div>
  <div class="filter-tab" on:click={() => updateFilter("แนะนำ")}>แนะนำ</div>
</div>




<div class="container">
  <div class="filters">
    <div class="filter-section">
      <h3>ตัวกรอง</h3>
      <div class="filter-option">
        <input type="checkbox" id="men" checked>
        <label for="men">ชาย</label>
      </div>
    </div>

    <div class="filter-section">
      <h3>หมวดหมู่</h3>
      <div class="filter-option">
        <input type="checkbox" id="shirt">
        <label for="shirt">เสื้อ</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="long-sleeve" checked>
        <label for="long-sleeve">เสื้อแขนยาว</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="pants">
        <label for="pants">กางเกงขายาว</label>
      </div>
    </div>

    <div class="filter-section">
      <h3>ไซส์</h3>
      <div class="filter-option">
        <input type="checkbox" id="size-s">
        <label for="size-s">S</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="size-l">
        <label for="size-l">L</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="size-xl">
        <label for="size-xl">XL</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="size-2xl">
        <label for="size-2xl">2XL</label>
      </div>
    </div>

    <div class="filter-section">
      <h3>สี</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;">
        <span class="color-option" style="background: white"></span>
        <span class="color-option" style="background: #ff4444"></span>
        <span class="color-option" style="background: #4CAF50"></span>
        <span class="color-option" style="background: #ff69b4"></span>
        <span class="color-option" style="background: #9c27b0"></span>
        <span class="color-option" style="background: #2196F3"></span>
      </div>
    </div>
  </div>

  <div class="products-grid">
    <div class="product-card">
      <img src="/api/placeholder/250/300" alt="Black Jacket" class="product-image">
      <div class="product-info">
        <div class="product-title">เสื้อซิปหน้า U คอกลม</div>
        <div class="product-price">THB 520.00</div>
        <div class="color-dots">
          <span class="color-dot" style="background: black"></span>
          <span class="color-dot" style="background: navy"></span>
          <span class="color-dot" style="background: #ffcccb"></span>
          <span class="color-dot" style="background: beige"></span>
          <span class="color-dot" style="background: gray"></span>
          <span class="color-dot" style="background: lightblue"></span>
        </div>
      </div>
    </div>

    <div class="product-card">
      <img src="/api/placeholder/250/300" alt="Beige Jacket" class="product-image">
      <div class="product-info">
        <div class="product-title">เสื้อซิปหน้า U คอกลม</div>
        <div class="product-price">THB 290.00</div>
        <div class="color-dots">
          <span class="color-dot" style="background: black"></span>
          <span class="color-dot" style="background: navy"></span>
          <span class="color-dot" style="background: #ffcccb"></span>
          <span class="color-dot" style="background: beige"></span>
          <span class="color-dot" style="background: gray"></span>
          <span class="color-dot" style="background: lightblue"></span>
        </div>
      </div>
    </div>

    <div class="product-card">
      <img src="/api/placeholder/250/300" alt="Gradient Jacket" class="product-image">
      <div class="product-info">
        <div class="product-title">Manfinity Hypermode เสื้อลูกฟูก</div>
        <div class="product-price">THB 240.00</div>
        <div class="color-dots">
          <span class="color-dot" style="background: black"></span>
          <span class="color-dot" style="background: navy"></span>
          <span class="color-dot" style="background: #ffcccb"></span>
          <span class="color-dot" style="background: beige"></span>
          <span class="color-dot" style="background: lightblue"></span>
        </div>
      </div>
    </div>

    <div class="product-card">
      <img src="/api/placeholder/250/300" alt="Green Sweater" class="product-image">
      <div class="product-info">
        <div class="product-title">Manfinity Hypermode เสื้อลูกฟูก</div>
        <div class="product-price">THB 310.00</div>
        <div class="color-dots">
          <span class="color-dot" style="background: black"></span>
          <span class="color-dot" style="background: navy"></span>
          <span class="color-dot" style="background: #ffcccb"></span>
          <span class="color-dot" style="background: beige"></span>
          <span class="color-dot" style="background: lightblue"></span>
        </div>
      </div>
    </div>
    <div class="product-card">
      <img src="/api/placeholder/250/300" alt="Beige Jacket" class="product-image">
      <div class="product-info">
        <div class="product-title">เสื้อซิปหน้า U คอกลม</div>
        <div class="product-price">THB 290.00</div>
        <div class="color-dots">
          <span class="color-dot" style="background: black"></span>
          <span class="color-dot" style="background: navy"></span>
          <span class="color-dot" style="background: #ffcccb"></span>
          <span class="color-dot" style="background: beige"></span>
          <span class="color-dot" style="background: gray"></span>
          <span class="color-dot" style="background: lightblue"></span>
        </div>
      </div>
    </div>
    <div class="product-card">
      <img src="/api/placeholder/250/300" alt="Beige Jacket" class="product-image">
      <div class="product-info">
        <div class="product-title">เสื้อซิปหน้า U คอกลม</div>
        <div class="product-price">THB 290.00</div>
        <div class="color-dots">
          <span class="color-dot" style="background: black"></span>
          <span class="color-dot" style="background: navy"></span>
          <span class="color-dot" style="background: #ffcccb"></span>
          <span class="color-dot" style="background: beige"></span>
          <span class="color-dot" style="background: gray"></span>
          <span class="color-dot" style="background: lightblue"></span>
        </div>
      </div>
    </div>
    <div class="product-card">
      <img src="/api/placeholder/250/300" alt="Beige Jacket" class="product-image">
      <div class="product-info">
        <div class="product-title">เสื้อซิปหน้า U คอกลม</div>
        <div class="product-price">THB 290.00</div>
        <div class="color-dots">
          <span class="color-dot" style="background: black"></span>
          <span class="color-dot" style="background: navy"></span>
          <span class="color-dot" style="background: #ffcccb"></span>
          <span class="color-dot" style="background: beige"></span>
          <span class="color-dot" style="background: gray"></span>
          <span class="color-dot" style="background: lightblue"></span>
        </div>
      </div>
    </div>

    <div class="product-card">
      <img src="/api/placeholder/250/300" alt="Beige Jacket" class="product-image">
      <div class="product-info">
        <div class="product-title">เสื้อซิปหน้า U คอกลม</div>
        <div class="product-price">THB 290.00</div>
        <div class="color-dots">
          <span class="color-dot" style="background: black"></span>
          <span class="color-dot" style="background: navy"></span>
          <span class="color-dot" style="background: #ffcccb"></span>
          <span class="color-dot" style="background: beige"></span>
          <span class="color-dot" style="background: gray"></span>
          <span class="color-dot" style="background: lightblue"></span>
        </div>
      </div>
    </div>
    <div class="product-card">
      <img src="/api/placeholder/250/300" alt="Beige Jacket" class="product-image">
      <div class="product-info">
        <div class="product-title">เสื้อซิปหน้า U คอกลม</div>
        <div class="product-price">THB 290.00</div>
        <div class="color-dots">
          <span class="color-dot" style="background: black"></span>
          <span class="color-dot" style="background: navy"></span>
          <span class="color-dot" style="background: #ffcccb"></span>
          <span class="color-dot" style="background: beige"></span>
          <span class="color-dot" style="background: gray"></span>
          <span class="color-dot" style="background: lightblue"></span>
        </div>
      </div>
    </div>
    <div class="product-card">
      <img src="/api/placeholder/250/300" alt="Beige Jacket" class="product-image">
      <div class="product-info">
        <div class="product-title">เสื้อซิปหน้า U คอกลม</div>
        <div class="product-price">THB 290.00</div>
        <div class="color-dots">
          <span class="color-dot" style="background: black"></span>
          <span class="color-dot" style="background: navy"></span>
          <span class="color-dot" style="background: #ffcccb"></span>
          <span class="color-dot" style="background: beige"></span>
          <span class="color-dot" style="background: gray"></span>
          <span class="color-dot" style="background: lightblue"></span>
        </div>
      </div>
    </div>

   
  

  </div>
</div>


<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .container {
    display: flex;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .filters {
    width: 250px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  .filter-section {
    margin-bottom: 20px;
  }

  .filter-section h3 {
    margin-bottom: 10px;
    font-size: 16px;
  }

  .filter-option {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  .filter-option input[type="checkbox"] {
    margin-right: 8px;
  }

  .color-option {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
    cursor: pointer;
    border: 2px solid #ddd;
  }

  .products-grid {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }

  .product-card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.2s;
  }

  .product-card:hover {
    transform: translateY(-5px);
  }

  .product-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .product-info {
    padding: 15px;
  }

  .product-title {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .product-price {
    font-weight: bold;
    color: #333;
  }

  .color-dots {
    display: flex;
    gap: 5px;
    margin-top: 10px;
  }

  .color-dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #ddd;
  }

  .filter-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    overflow-x: auto;
    padding-bottom: 10px;
  }

  .filter-tab {
    padding: 8px 16px;
    background: #f5f5f5;
    border-radius: 20px;
    cursor: pointer;
    white-space: nowrap;
  }

  .filter-tab.active {
    background: #ffffff;
  }
</style>

<!-- // src/routes/+page.svelte
<script>
  let products = [
    { name: "เสื้อเชิ้ตดำ", price: "THB 520.00", image: "shirt1.png" },
    { name: "เสื้อเชิ้ตขาว", price: "THB 290.00", image: "shirt2.png" },
    { name: "เสื้อฮู้ดฟ้า", price: "THB 240.00", image: "hoodie1.png" },
    { name: "เสื้อกันหนาวเขียว", price: "THB 310.00", image: "sweater1.png" },
  ];
</script>

<div class="container mx-auto p-4">
  <div class="navbar bg-base-100 shadow-lg">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">ร้านค้าออนไลน์</a>
    </div>
    <div class="flex-none">
      <input type="text" placeholder="ค้นหา" class="input input-bordered" />
    </div>
  </div>

  <h2 class="text-2xl font-bold my-4">สินค้า</h2>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    {#each products as product}
      <div class="card w-60 bg-base-100 shadow-xl">
        <figure><img src={product.image} alt={product.name} /></figure>
        <div class="card-body">
          <h2 class="card-title">{product.name}</h2>
          <p>{product.price}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">ซื้อเลย</button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div> -->
