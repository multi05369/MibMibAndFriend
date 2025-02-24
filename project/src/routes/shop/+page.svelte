<script>
  let selectedCategory = 'all';
  let products = [
    { id: 1, title: 'Red Dress', price: '$29.99', image: 'red-dress.jpg', category: 'dresses', colors: ['#ff4444', '#000000'] },
    { id: 2, title: 'Blue Shirt', price: '$19.99', image: 'blue-shirt.jpg', category: 'shirts', colors: ['#0000ff', '#ffffff'] },
    { id: 3, title: 'Green Skirt', price: '$24.99', image: 'green-skirt.jpg', category: 'skirts', colors: ['#008000', '#ff00ff'] },
  ];

  function filterProducts(category) {
    selectedCategory = category;
  }
</script>

<div class="filter-tabs">
  <div class="filter-tab {selectedCategory === 'all' ? 'active' : ''}" on:click={() => filterProducts('all')}>All</div>
  <div class="filter-tab {selectedCategory === 'shirts' ? 'active' : ''}" on:click={() => filterProducts('shirts')}>Shirts</div>
  <div class="filter-tab {selectedCategory === 'dresses' ? 'active' : ''}" on:click={() => filterProducts('dresses')}>Dresses</div>
  <div class="filter-tab {selectedCategory === 'skirts' ? 'active' : ''}" on:click={() => filterProducts('skirts')}>Skirts</div>
</div>

<div class="product-grid">
  {#each products.filter(product => selectedCategory === 'all' || product.category === selectedCategory) as product}
    <div class="product-card">
      <img class="product-image" src={product.image} alt={product.title} />
      <div class="product-info">
        <div class="product-title">{product.title}</div>
        <div class="product-price">{product.price}</div>
        <div class="color-dots">
          {#each product.colors as color}
            <div class="color-dot" style="background-color: {color};"></div>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .product-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
  }

  .product-card:hover {
    transform: scale(1.05);
  }

  .product-image {
    width: 100%;
    height: auto;
  }

  .product-info {
    padding: 15px;
    text-align: center;
  }

  .product-title {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .product-price {
    font-size: 16px;
    color: #ff4444;
    font-weight: bold;
  }

  .color-dots {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 5px;
  }

  .color-dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #ddd;
  }

  .filter-tabs {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
  }

  .filter-tab {
    padding: 10px 15px;
    cursor: pointer;
    background: #f1f1f1;
    border-radius: 20px;
    font-size: 14px;
  }

  .filter-tab.active {
    background: #ff4444;
    color: white;
  }
</style>
