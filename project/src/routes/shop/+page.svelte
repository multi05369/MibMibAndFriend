<script>
  import CategoryMenu from '$lib/components/CategoryMenu.svelte';
  import ProductGrid from '$lib/components/ProductGrid.svelte';
  import SidebarFilter from '$lib/components/SidebarFilter.svelte';

  let categories = ["เสื้อ", "เสื้อแขนยาว", "กางเกงขายาว", "กางเกงขาสั้น"];
  let activeCategory = "";

  let products = [
    // เสื้อ (Shirts) - 10 รายการ
    {
        name: 'Basic White T-Shirt',
        category: 'เสื้อ',
        price: '150.00',
        image: '/public/picture/white-tshirt.png',
        colors: ['#FFFFFF', '#000000', '#888888']
    },
    {
        name: 'Graphic Tee',
        category: 'เสื้อ',
        price: '180.00',
        image: '/public/picture/graphic-tee.png',
        colors: ['#FF5733', '#C70039', '#900C3F']
    },
    {
        name: 'Striped Polo',
        category: 'เสื้อ',
        price: '250.00',
        image: '/public/picture/striped-polo.png',
        colors: ['#0055FF', '#FFDD00', '#008800']
    },
    {
        name: 'Casual V-Neck',
        category: 'เสื้อ',
        price: '200.00',
        image: '/public/picture/v-neck.png',
        colors: ['#FFFFFF', '#FF1493']
    },
    {
        name: 'Pocket T-Shirt',
        category: 'เสื้อ',
        price: '220.00',
        image: '/public/picture/pocket-tshirt.png',
        colors: ['#2E8B57', '#FF4500']
    },
    {
        name: 'Oversized Tee',
        category: 'เสื้อ',
        price: '270.00',
        image: '/public/picture/oversized-tee.png',
        colors: ['#1E90FF', '#FFD700']
    },
    {
        name: 'Hawaiian Shirt',
        category: 'เสื้อ',
        price: '320.00',
        image: '/public/picture/hawaiian-shirt.png',
        colors: ['#FF6347', '#32CD32']
    },
    {
        name: 'Denim Shirt',
        category: 'เสื้อ',
        price: '350.00',
        image: '/public/picture/denim-shirt.png',
        colors: ['#4682B4', '#708090']
    },
    {
        name: 'Muscle Fit T-Shirt',
        category: 'เสื้อ',
        price: '240.00',
        image: '/public/picture/muscle-fit.png',
        colors: ['#000000', '#FF6347']
    },
    {
        name: 'Henley Shirt',
        category: 'เสื้อ',
        price: '260.00',
        image: '/public/picture/henley-shirt.png',
        colors: ['#FFFFFF', '#696969']
    },

    // เสื้อแขนยาว (Long Sleeves) - 5 รายการ
    {
        name: 'Black Jacket',
        category: 'เสื้อแขนยาว',
        price: '520.00',
        image: '/public/picture/black-jacket.png',
        colors: ['#000000', '#FFFFFF', '#AAAAAA']
    },
    {
        name: 'Beige Jacket',
        category: 'เสื้อแขนยาว',
        price: '290.00',
        image: '/public/picture/beige-jacket.png',
        colors: ['#D3D3D3', '#F5F5F5']
    },
    {
        name: 'Gradient Jacket',
        category: 'เสื้อแขนยาว',
        price: '240.00',
        image: '/public/picture/gradient-jacket.png',
        colors: ['#000000', '#FF69B4', '#C0C0C0']
    },
    {
        name: 'Hoodie',
        category: 'เสื้อแขนยาว',
        price: '350.00',
        image: '/public/picture/hoodie.png',
        colors: ['#696969', '#8B0000']
    },
    {
        name: 'Sweatshirt',
        category: 'เสื้อแขนยาว',
        price: '300.00',
        image: '/public/picture/sweatshirt.png',
        colors: ['#B22222', '#FF8C00']
    },

    // กางเกงขายาว (Pants) - 5 รายการ
    {
        name: 'Slim Fit Jeans',
        category: 'กางเกงขายาว',
        price: '450.00',
        image: '/public/picture/slim-fit-jeans.png',
        colors: ['#000080', '#2F4F4F']
    },
    {
        name: 'Chino Pants',
        category: 'กางเกงขายาว',
        price: '400.00',
        image: '/public/picture/chino-pants.png',
        colors: ['#A52A2A', '#DAA520']
    },
    {
        name: 'Jogger Pants',
        category: 'กางเกงขายาว',
        price: '380.00',
        image: '/public/picture/jogger-pants.png',
        colors: ['#808080', '#000000']
    },
    {
        name: 'Cargo Pants',
        category: 'กางเกงขายาว',
        price: '430.00',
        image: '/public/picture/cargo-pants.png',
        colors: ['#556B2F', '#6B8E23']
    },
    {
        name: 'Formal Trousers',
        category: 'กางเกงขายาว',
        price: '600.00',
        image: '/public/picture/formal-trousers.png',
        colors: ['#000000', '#8B4513']
    },

    // กางเกงขาสั้น (Shorts) - 5 รายการ
    {
        name: 'Denim Shorts',
        category: 'กางเกงขาสั้น',
        price: '250.00',
        image: '/public/picture/denim-shorts.png',
        colors: ['#4682B4', '#708090']
    },
    {
        name: 'Cargo Shorts',
        category: 'กางเกงขาสั้น',
        price: '270.00',
        image: '/public/picture/cargo-shorts.png',
        colors: ['#2E8B57', '#8B4513']
    },
    {
        name: 'Sports Shorts',
        category: 'กางเกงขาสั้น',
        price: '220.00',
        image: '/public/picture/sports-shorts.png',
        colors: ['#000000', '#FF4500']
    },
    {
        name: 'Swim Shorts',
        category: 'กางเกงขาสั้น',
        price: '200.00',
        image: '/public/picture/swim-shorts.png',
        colors: ['#1E90FF', '#FFD700']
    },
    {
        name: 'Casual Shorts',
        category: 'กางเกงขาสั้น',
        price: '230.00',
        image: '/public/picture/casual-shorts.png',
        colors: ['#B22222', '#FF8C00']
    }
];

 // ฟังก์ชันเลือกหมวดหมู่
 const handleSelectCategory = (category) => {
      activeCategory = category;
  };

  // กรองสินค้าตามหมวดหมู่
  $: filteredProducts = activeCategory
      ? products.filter(p => p.category === activeCategory)
      : products;
</script>

<CategoryMenu 
  {categories} 
  {activeCategory} 
  onSelectCategory={handleSelectCategory} 
/>

<!-- จัด Layout ด้วย Flexbox -->
<div class="flex">
    <!-- Sidebar Filter -->
    <div class="hidden lg:block w-1/4 p-4">
        <SidebarFilter />
    </div>

    <!-- Product Grid -->
    <div class="w-full lg:w-3/4 p-4">
        <ProductGrid products={filteredProducts} />
    </div>
</div>
