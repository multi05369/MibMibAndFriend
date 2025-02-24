
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, sans-serif;
      padding: 20px;
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
      background: #ffd700;
    }
  </style>

<body>
  <div class="filter-tabs">
    <div class="filter-tab">เสื้อ</div>
    <div class="filter-tab active">เสื้อแขนยาว</div>
    <div class="filter-tab">กางเกงขายาว</div>
    <div class="filter-tab">กางเกงขาสั้น</div>
    <div class="filter-tab">แนะนำ</div>
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
    </div>
  </div>

  <script>
    // Filter tabs functionality
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });

    // Color options functionality
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
      option.addEventListener('click', () => {
        option.style.border = option.style.border === '2px solid #000' 
          ? '2px solid #ddd' 
          : '2px solid #000';
      });
    });

    // Checkbox functionality
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        // Add your filtering logic here
        console.log(`${checkbox.id} is ${checkbox.checked ? 'checked' : 'unchecked'}`);
      });
    });
  </script>
</body>
