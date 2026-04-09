// Application Data and State Management
const AppData = {
  brand: {
    name: "Elegance Steps",
    tagline: "Step into Sophistication",
    location: "Mulund, Mumbai",
    description: "Premium women's footwear crafted for the modern, confident woman"
  },
  categories: [
    { id: 1, name: "Heels", slug: "heels", count: 45 },
    { id: 2, name: "Flats", slug: "flats", count: 32 },
    { id: 3, name: "Boots", slug: "boots", count: 28 },
    { id: 4, name: "Sandals", slug: "sandals", count: 38 },
    { id: 5, name: "Sneakers", slug: "sneakers", count: 22 }
  ],
  products: [
    {
      id: 1, name: "Midnight Elegance Heels", price: 8500, comparePrice: 9500, category: "Heels",
      colors: ["Black", "Navy", "Burgundy"], sizes: ["5", "6", "7", "8", "9", "10"], rating: 4.8, reviews: 124,
      description: "Sophisticated 3-inch block heels crafted from premium Italian leather. Perfect for boardroom presentations and evening soirées.",
      features: ["Italian Leather", "Cushioned Sole", "3-inch Heel", "Anti-slip Base"], stock: 15, isNew: false, isFeatured: true
    },
    {
      id: 2, name: "Mumbai Sunrise Flats", price: 5500, comparePrice: 6000, category: "Flats",
      colors: ["Nude", "Beige", "Gold"], sizes: ["5", "6", "7", "8", "9"], rating: 4.6, reviews: 89,
      description: "Comfortable ballet flats inspired by Mumbai's golden hour. Handcrafted with attention to every detail.",
      features: ["Handcrafted", "Memory Foam", "Breathable Lining", "Flexible Sole"], stock: 22, isNew: true, isFeatured: true
    },
    {
      id: 3, name: "Corporate Confidence Boots", price: 12500, comparePrice: 14000, category: "Boots",
      colors: ["Black", "Dark Brown", "Cognac"], sizes: ["6", "7", "8", "9", "10"], rating: 4.9, reviews: 67,
      description: "Power dressing redefined. These ankle boots command respect in every boardroom and street corner.",
      features: ["Genuine Leather", "Water Resistant", "2-inch Heel", "Side Zip"], stock: 8, isNew: false, isFeatured: true
    },
    {
      id: 4, name: "Monsoon Grace Sandals", price: 4500, comparePrice: 5200, category: "Sandals",
      colors: ["Tan", "Black", "White"], sizes: ["5", "6", "7", "8", "9", "10"], rating: 4.4, reviews: 156,
      description: "Weather-ready sandals that don't compromise on style. Perfect for Mumbai's unpredictable weather.",
      features: ["Water Resistant", "Non-slip Sole", "Adjustable Straps", "Quick Dry"], stock: 31, isNew: true, isFeatured: false
    },
    {
      id: 5, name: "Weekend Warrior Sneakers", price: 7500, comparePrice: 8200, category: "Sneakers",
      colors: ["White", "Black", "Rose Gold"], sizes: ["5", "6", "7", "8", "9", "10"], rating: 4.7, reviews: 203,
      description: "Luxury meets comfort. These sneakers are perfect for the woman who values both style and substance.",
      features: ["Premium Canvas", "Cushioned Insole", "Breathable Design", "Durable Sole"], stock: 18, isNew: false, isFeatured: true
    },
    {
      id: 6, name: "Evening Glamour Heels", price: 11500, comparePrice: 12800, category: "Heels",
      colors: ["Silver", "Gold", "Rose Gold"], sizes: ["6", "7", "8", "9"], rating: 4.9, reviews: 78,
      description: "Make every evening unforgettable. These statement heels are crafted for special occasions.",
      features: ["Metallic Finish", "4-inch Heel", "Padded Footbed", "Ankle Strap"], stock: 6, isNew: true, isFeatured: true
    },
    {
      id: 7, name: "Comfort Classic Flats", price: 4800, comparePrice: 5300, category: "Flats",
      colors: ["Black", "Brown", "Navy"], sizes: ["5", "6", "7", "8", "9", "10"], rating: 4.5, reviews: 142,
      description: "Timeless design meets modern comfort. Your go-to flats for any occasion.",
      features: ["Leather Upper", "Arch Support", "Flexible Sole", "Classic Design"], stock: 25, isNew: false, isFeatured: false
    },
    {
      id: 8, name: "Winter Warmth Boots", price: 15000, comparePrice: 16500, category: "Boots",
      colors: ["Black", "Chocolate", "Camel"], sizes: ["6", "7", "8", "9", "10"], rating: 4.8, reviews: 34,
      description: "Cozy meets chic. These winter boots keep you warm without compromising on elegance.",
      features: ["Insulated Lining", "Waterproof", "Knee-High", "Zip Closure"], stock: 12, isNew: true, isFeatured: false
    },
    {
      id: 9, name: "Beach Bliss Sandals", price: 3500, comparePrice: 4000, category: "Sandals",
      colors: ["Coral", "Turquoise", "White"], sizes: ["5", "6", "7", "8", "9"], rating: 4.3, reviews: 89,
      description: "Vacation-ready sandals that bring the beach vibes to the city streets.",
      features: ["Lightweight", "Cushioned Sole", "Adjustable Fit", "Quick Release"], stock: 28, isNew: false, isFeatured: false
    },
    {
      id: 10, name: "Street Smart Sneakers", price: 6200, comparePrice: 7000, category: "Sneakers",
      colors: ["Black", "White", "Grey"], sizes: ["5", "6", "7", "8", "9", "10"], rating: 4.6, reviews: 167,
      description: "Urban chic redefined. These sneakers are perfect for the city explorer.",
      features: ["Mesh Upper", "Shock Absorption", "Lightweight", "Slip Resistant"], stock: 35, isNew: false, isFeatured: false
    },
    {
      id: 11, name: "Boardroom Boss Heels", price: 9800, comparePrice: 10500, category: "Heels",
      colors: ["Black", "Navy", "Burgundy"], sizes: ["6", "7", "8", "9", "10"], rating: 4.7, reviews: 95,
      description: "Command attention and respect. These professional heels are built for leaders.",
      features: ["Professional Design", "2.5-inch Heel", "Leather Sole", "Comfort Padding"], stock: 14, isNew: false, isFeatured: true
    },
    {
      id: 12, name: "Casual Friday Flats", price: 5200, comparePrice: 5800, category: "Flats",
      colors: ["Taupe", "Olive", "Burgundy"], sizes: ["5", "6", "7", "8", "9"], rating: 4.4, reviews: 113,
      description: "Relaxed elegance for the modern workplace. Perfect for casual Fridays and weekend meetings.",
      features: ["Suede Finish", "Memory Foam", "Flexible Design", "Easy Slip-On"], stock: 19, isNew: true, isFeatured: false
    },
    {
      id: 13, name: "Adventure Ready Boots", price: 13200, comparePrice: 14000, category: "Boots",
      colors: ["Tan", "Olive", "Black"], sizes: ["6", "7", "8", "9", "10"], rating: 4.8, reviews: 56,
      description: "Rugged meets refined. These boots are ready for any adventure the city throws your way.",
      features: ["Durable Construction", "Waterproof", "Hiking Sole", "Ankle Support"], stock: 11, isNew: true, isFeatured: false
    },
    {
      id: 14, name: "Sunset Stroll Sandals", price: 4200, comparePrice: 4700, category: "Sandals",
      colors: ["Rose Gold", "Bronze", "Silver"], sizes: ["5", "6", "7", "8", "9", "10"], rating: 4.5, reviews: 178,
      description: "Romantic evenings call for romantic footwear. These sandals are perfect for special moments.",
      features: ["Metallic Straps", "Cushioned Footbed", "Elegant Design", "Adjustable Buckle"], stock: 24, isNew: false, isFeatured: false
    },
    {
      id: 15, name: "Fitness Fashion Sneakers", price: 8200, comparePrice: 9000, category: "Sneakers",
      colors: ["Pink", "Purple", "Black"], sizes: ["5", "6", "7", "8", "9"], rating: 4.6, reviews: 134,
      description: "Workout in style. These performance sneakers don't compromise on fashion.",
      features: ["Athletic Performance", "Breathable Mesh", "Energy Return", "Stylish Colors"], stock: 27, isNew: true, isFeatured: true
    },
    {
      id: 16, name: "Cocktail Hour Heels", price: 10200, comparePrice: 11200, category: "Heels",
      colors: ["Black", "Red", "Navy"], sizes: ["6", "7", "8", "9"], rating: 4.9, reviews: 67,
      description: "Make every cocktail hour memorable. These sophisticated heels are conversation starters.",
      features: ["Suede Upper", "3.5-inch Heel", "Ankle Strap", "Cushioned Insole"], stock: 9, isNew: false, isFeatured: true
    },
    {
      id: 17, name: "Daily Essential Flats", price: 4600, comparePrice: 5100, category: "Flats",
      colors: ["Black", "Nude", "White"], sizes: ["5", "6", "7", "8", "9", "10"], rating: 4.7, reviews: 256,
      description: "Your everyday essentials just got an upgrade. Comfort and style for daily wear.",
      features: ["All-Day Comfort", "Versatile Colors", "Durable Sole", "Easy Care"], stock: 42, isNew: false, isFeatured: false
    },
    {
      id: 18, name: "Festival Fun Boots", price: 7800, comparePrice: 8500, category: "Boots",
      colors: ["Brown", "Tan", "Black"], sizes: ["6", "7", "8", "9", "10"], rating: 4.4, reviews: 78,
      description: "Festival season calls for special footwear. These bohemian-inspired boots are perfect.",
      features: ["Bohemian Style", "Comfortable Fit", "Decorative Details", "Easy Walk"], stock: 16, isNew: true, isFeatured: false
    },
    {
      id: 19, name: "Pool Party Sandals", price: 3800, comparePrice: 4300, category: "Sandals",
      colors: ["Blue", "Pink", "Green"], sizes: ["5", "6", "7", "8", "9"], rating: 4.2, reviews: 92,
      description: "Make a splash at your next pool party. These fun sandals are perfect for summer gatherings.",
      features: ["Water Friendly", "Bright Colors", "Comfortable Straps", "Non-Slip Sole"], stock: 33, isNew: true, isFeatured: false
    },
    {
      id: 20, name: "Marathon Ready Sneakers", price: 9500, comparePrice: 10200, category: "Sneakers",
      colors: ["Black", "Blue", "Pink"], sizes: ["5", "6", "7", "8", "9", "10"], rating: 4.8, reviews: 145,
      description: "Professional performance meets everyday style. These sneakers are built for distance.",
      features: ["Marathon Grade", "Superior Cushioning", "Moisture Wicking", "Lightweight"], stock: 21, isNew: false, isFeatured: true
    }
  ],
  colors: [
    { name: "Black", hex: "#000000" }, { name: "Brown", hex: "#8B4513" }, { name: "Navy", hex: "#000080" },
    { name: "Nude", hex: "#F5DEB3" }, { name: "White", hex: "#FFFFFF" }, { name: "Red", hex: "#DC143C" },
    { name: "Gold", hex: "#FFD700" }, { name: "Silver", hex: "#C0C0C0" }, { name: "Rose Gold", hex: "#E8B4B8" },
    { name: "Burgundy", hex: "#800020" }
  ],
  sizes: ["5", "6", "7", "8", "9", "10"],
  priceRanges: [
    { min: 0, max: 5000, label: "Under ₹5,000" },
    { min: 5000, max: 10000, label: "₹5,000 - ₹10,000" },
    { min: 10000, max: 15000, label: "₹10,000 - ₹15,000" },
    { min: 15000, max: null, label: "Above ₹15,000" }
  ]
};

// Application State
const AppState = {
  currentPage: 'home',
  currentProduct: null,
  cart: [],
  user: null,
  isAuthenticated: false,
  wishlist: [],
  recentlyViewed: [],
  filters: {
    category: [],
    priceRange: null,
    colors: [],
    sizes: [],
    sortBy: 'featured'
  },
  searchQuery: '',
  showMobileMenu: false,
  showFilters: false
};

// Utility Functions
const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

const generateStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '★'.repeat(fullStars);
  if (hasHalfStar) stars += '☆';
  return stars;
};

const calculateDiscount = (original, current) => {
  return Math.round(((original - current) / original) * 100);
};

const showToast = (message, type = 'success') => {
  const toastContainer = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
};

const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Navigation Functions
window.navigateTo = function(page, productId = null) {
  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  const activeLink = document.querySelector(`[data-page="${page}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
  
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });
  
  // Show target page
  const targetPage = document.getElementById(`${page}Page`);
  if (targetPage) {
    targetPage.classList.add('active');
    AppState.currentPage = page;
    
    // Load page-specific content
    switch(page) {
      case 'shop':
        renderShopPage();
        break;
      case 'product':
        if (productId) {
          AppState.currentProduct = AppData.products.find(p => p.id === productId);
          renderProductPage();
        }
        break;
      case 'cart':
        renderCartPage();
        break;
      case 'checkout':
        renderCheckoutPage();
        break;
      case 'auth':
        renderAuthPage();
        break;
      case 'profile':
        renderProfilePage();
        break;
    }
  }
  
  // Close mobile menu if open
  closeMobileMenu();
};

function closeMobileMenu() {
  const nav = document.getElementById('mainNav');
  if (nav) {
    nav.classList.remove('active');
    AppState.showMobileMenu = false;
  }
}

// Product Functions
function getFilteredProducts() {
  let products = [...AppData.products];
  
  // Apply search filter
  if (AppState.searchQuery) {
    products = products.filter(product => 
      product.name.toLowerCase().includes(AppState.searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(AppState.searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(AppState.searchQuery.toLowerCase())
    );
  }
  
  // Apply category filter
  if (AppState.filters.category.length > 0) {
    products = products.filter(product => 
      AppState.filters.category.includes(product.category)
    );
  }
  
  // Apply price filter
  if (AppState.filters.priceRange) {
    const range = AppState.filters.priceRange;
    products = products.filter(product => {
      if (range.max === null) {
        return product.price >= range.min;
      }
      return product.price >= range.min && product.price <= range.max;
    });
  }
  
  // Apply color filter
  if (AppState.filters.colors.length > 0) {
    products = products.filter(product => 
      product.colors.some(color => AppState.filters.colors.includes(color))
    );
  }
  
  // Apply size filter
  if (AppState.filters.sizes.length > 0) {
    products = products.filter(product => 
      product.sizes.some(size => AppState.filters.sizes.includes(size))
    );
  }
  
  // Apply sorting
  switch(AppState.filters.sortBy) {
    case 'price-low':
      products.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      products.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      products.sort((a, b) => b.isNew - a.isNew);
      break;
    case 'rating':
      products.sort((a, b) => b.rating - a.rating);
      break;
    default: // featured
      products.sort((a, b) => b.isFeatured - a.isFeatured);
  }
  
  return products;
}

function renderProductCard(product, showQuickView = true) {
  const discount = product.comparePrice ? calculateDiscount(product.comparePrice, product.price) : 0;
  
  return `
    <div class="product-card" onclick="navigateTo('product', ${product.id})">
      <div class="product-image">
        ${product.isNew ? '<div class="product-badge new">New</div>' : ''}
        ${discount > 0 ? `<div class="product-badge">${discount}% Off</div>` : ''}
        <div class="product-actions">
          <button class="product-action-btn" onclick="event.stopPropagation(); toggleWishlist(${product.id})" 
                  title="Add to Wishlist" aria-label="Add to Wishlist">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          ${showQuickView ? `
          <button class="product-action-btn" onclick="event.stopPropagation(); openQuickView(${product.id})" 
                  title="Quick View" aria-label="Quick View">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
          ` : ''}
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h4 class="product-title">${product.name}</h4>
        <div class="product-rating">
          <span class="stars">${generateStars(product.rating)}</span>
          <span class="rating-text">(${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="current-price">${formatPrice(product.price)}</span>
          ${product.comparePrice ? `<span class="original-price">${formatPrice(product.comparePrice)}</span>` : ''}
          ${discount > 0 ? `<span class="discount-badge">${discount}% OFF</span>` : ''}
        </div>
        <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})" 
                aria-label="Add ${product.name} to cart">
          Add to Cart
        </button>
      </div>
    </div>
  `;
}

// Cart Functions
window.addToCart = function(productId, selectedColor = null, selectedSize = null, quantity = 1) {
  const product = AppData.products.find(p => p.id === productId);
  if (!product) return;
  
  const cartItem = {
    id: Date.now(),
    productId: product.id,
    name: product.name,
    price: product.price,
    color: selectedColor || product.colors[0],
    size: selectedSize || product.sizes[0],
    quantity: quantity,
    image: product.name
  };
  
  AppState.cart.push(cartItem);
  updateCartCount();
  showToast(`${product.name} added to cart!`, 'success');
  
  // Add to recently viewed
  addToRecentlyViewed(product);
};

function removeFromCart(cartItemId) {
  AppState.cart = AppState.cart.filter(item => item.id !== cartItemId);
  updateCartCount();
  renderCartPage();
  showToast('Item removed from cart', 'success');
}

function updateCartQuantity(cartItemId, newQuantity) {
  const item = AppState.cart.find(item => item.id === cartItemId);
  if (item && newQuantity > 0) {
    item.quantity = newQuantity;
    updateCartCount();
    renderCartPage();
  }
}

function updateCartCount() {
  const cartCount = AppState.cart.reduce((total, item) => total + item.quantity, 0);
  const cartCountElement = document.getElementById('cartCount');
  if (cartCountElement) {
    cartCountElement.textContent = cartCount;
  }
}

function getCartTotal() {
  return AppState.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Wishlist Functions
window.toggleWishlist = function(productId) {
  const product = AppData.products.find(p => p.id === productId);
  if (!product) return;
  
  const index = AppState.wishlist.findIndex(id => id === productId);
  if (index === -1) {
    AppState.wishlist.push(productId);
    showToast(`${product.name} added to wishlist!`, 'success');
  } else {
    AppState.wishlist.splice(index, 1);
    showToast(`${product.name} removed from wishlist`, 'success');
  }
};

function addToRecentlyViewed(product) {
  const index = AppState.recentlyViewed.findIndex(p => p.id === product.id);
  if (index !== -1) {
    AppState.recentlyViewed.splice(index, 1);
  }
  AppState.recentlyViewed.unshift(product);
  if (AppState.recentlyViewed.length > 6) {
    AppState.recentlyViewed.pop();
  }
}

// Filter Functions
function applyFilter(type, value) {
  switch(type) {
    case 'category':
      const categoryIndex = AppState.filters.category.indexOf(value);
      if (categoryIndex === -1) {
        AppState.filters.category.push(value);
      } else {
        AppState.filters.category.splice(categoryIndex, 1);
      }
      break;
    case 'priceRange':
      AppState.filters.priceRange = AppState.filters.priceRange?.min === value.min && 
                                   AppState.filters.priceRange?.max === value.max ? null : value;
      break;
    case 'color':
      const colorIndex = AppState.filters.colors.indexOf(value);
      if (colorIndex === -1) {
        AppState.filters.colors.push(value);
      } else {
        AppState.filters.colors.splice(colorIndex, 1);
      }
      break;
    case 'size':
      const sizeIndex = AppState.filters.sizes.indexOf(value);
      if (sizeIndex === -1) {
        AppState.filters.sizes.push(value);
      } else {
        AppState.filters.sizes.splice(sizeIndex, 1);
      }
      break;
    case 'sort':
      AppState.filters.sortBy = value;
      break;
  }
  
  renderShopPage();
}

function clearAllFilters() {
  AppState.filters = {
    category: [],
    priceRange: null,
    colors: [],
    sizes: [],
    sortBy: 'featured'
  };
  renderShopPage();
  renderFilters();
}

window.filterByCategory = function(categorySlug) {
  const category = AppData.categories.find(c => c.slug === categorySlug);
  if (category) {
    AppState.filters.category = [category.name];
    navigateTo('shop');
  }
};

// Render Functions
function renderHomePage() {
  // Render categories
  const categoriesGrid = document.getElementById('categoriesGrid');
  if (categoriesGrid) {
    categoriesGrid.innerHTML = AppData.categories.map(category => `
      <div class="category-card" onclick="filterByCategory('${category.slug}')">
        <div class="category-icon">${getCategoryIcon(category.slug)}</div>
        <h4>${category.name}</h4>
        <p class="category-count">${category.count} products</p>
      </div>
    `).join('');
  }
  
  // Render featured products
  const featuredProducts = document.getElementById('featuredProducts');
  if (featuredProducts) {
    const featured = AppData.products.filter(p => p.isFeatured).slice(0, 8);
    featuredProducts.innerHTML = featured.map(product => renderProductCard(product)).join('');
  }
}

function renderShopPage() {
  const products = getFilteredProducts();
  
  // Update results count
  const resultsCount = document.getElementById('resultsCount');
  if (resultsCount) {
    resultsCount.textContent = `${products.length} product${products.length !== 1 ? 's' : ''}`;
  }
  
  // Render products
  const productsGrid = document.getElementById('productsGrid');
  if (productsGrid) {
    if (products.length === 0) {
      productsGrid.innerHTML = `
        <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
          <h3>No products found</h3>
          <p>Try adjusting your filters or search terms.</p>
          <button class="btn btn--secondary" onclick="clearAllFilters()">Clear Filters</button>
        </div>
      `;
    } else {
      productsGrid.innerHTML = products.map(product => renderProductCard(product)).join('');
    }
  }
  
  renderFilters();
}

function renderFilters() {
  // Category filters
  const categoryFilters = document.getElementById('categoryFilters');
  if (categoryFilters) {
    categoryFilters.innerHTML = AppData.categories.map(category => `
      <div class="filter-option">
        <input type="checkbox" id="cat-${category.slug}" 
               ${AppState.filters.category.includes(category.name) ? 'checked' : ''}
               onchange="applyFilter('category', '${category.name}')">
        <label for="cat-${category.slug}">${category.name} (${category.count})</label>
      </div>
    `).join('');
  }
  
  // Price filters
  const priceFilters = document.getElementById('priceFilters');
  if (priceFilters) {
    priceFilters.innerHTML = AppData.priceRanges.map((range, index) => `
      <div class="filter-option">
        <input type="radio" name="priceRange" id="price-${index}" 
               ${AppState.filters.priceRange?.min === range.min && 
                 AppState.filters.priceRange?.max === range.max ? 'checked' : ''}
               onchange="applyFilter('priceRange', ${JSON.stringify(range).replace(/"/g, '&quot;')})">
        <label for="price-${index}">${range.label}</label>
      </div>
    `).join('');
  }
  
  // Color filters
  const colorFilters = document.getElementById('colorFilters');
  if (colorFilters) {
    colorFilters.innerHTML = AppData.colors.map(color => `
      <div class="color-option ${AppState.filters.colors.includes(color.name) ? 'selected' : ''}" 
           style="background-color: ${color.hex}" 
           title="${color.name}"
           onclick="applyFilter('color', '${color.name}')">
      </div>
    `).join('');
  }
  
  // Size filters
  const sizeFilters = document.getElementById('sizeFilters');
  if (sizeFilters) {
    sizeFilters.innerHTML = AppData.sizes.map(size => `
      <div class="size-option ${AppState.filters.sizes.includes(size) ? 'selected' : ''}" 
           onclick="applyFilter('size', '${size}')">
        ${size}
      </div>
    `).join('');
  }
}

function renderProductPage() {
  const product = AppState.currentProduct;
  if (!product) return;
  
  const productDetail = document.getElementById('productDetail');
  if (!productDetail) return;
  
  const discount = product.comparePrice ? calculateDiscount(product.comparePrice, product.price) : 0;
  
  productDetail.innerHTML = `
    <div class="product-gallery">
      <div class="main-image">${getCategoryIcon(product.category.toLowerCase())}</div>
      <div class="thumbnail-images">
        ${product.colors.map((color, index) => `
          <div class="thumbnail ${index === 0 ? 'active' : ''}">${getCategoryIcon(product.category.toLowerCase())}</div>
        `).join('')}
      </div>
    </div>
    
    <div class="product-details">
      <h1>${product.name}</h1>
      <div class="product-meta">
        <div class="product-rating">
          <span class="stars">${generateStars(product.rating)}</span>
          <span class="rating-text">(${product.reviews} reviews)</span>
        </div>
        <div class="product-category">${product.category}</div>
      </div>
      
      <div class="price-section">
        <span class="current-price">${formatPrice(product.price)}</span>
        ${product.comparePrice ? `<span class="original-price">${formatPrice(product.comparePrice)}</span>` : ''}
        ${discount > 0 ? `<span class="discount-badge">${discount}% OFF</span>` : ''}
      </div>
      
      <div class="product-options">
        <div class="option-group">
          <label>Color:</label>
          <div class="color-options" id="colorOptions">
            ${product.colors.map((color, index) => {
              const colorData = AppData.colors.find(c => c.name === color);
              return `
                <div class="color-swatch ${index === 0 ? 'selected' : ''}" 
                     style="background-color: ${colorData?.hex || '#ccc'}" 
                     title="${color}"
                     onclick="selectColor('${color}')">
                </div>
              `;
            }).join('')}
          </div>
        </div>
        
        <div class="option-group">
          <label>Size: <a href="#" onclick="openSizeGuide()" style="font-size: 0.8em; color: var(--color-primary);">Size Guide</a></label>
          <div class="size-options" id="sizeOptions">
            ${product.sizes.map((size, index) => `
              <div class="size-button ${index === 0 ? 'selected' : ''}" onclick="selectSize('${size}')">
                ${size}
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="option-group">
          <label>Quantity:</label>
          <div class="quantity-selector">
            <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
            <input type="number" class="quantity-input" id="quantityInput" value="1" min="1" max="10">
            <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
          </div>
        </div>
      </div>
      
      <div class="product-actions">
        <button class="btn btn--primary btn--lg" onclick="addProductToCart()" style="flex: 2;">
          Add to Cart - ${formatPrice(product.price)}
        </button>
        <button class="btn btn--secondary btn--lg" onclick="toggleWishlist(${product.id})" style="flex: 1;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          Wishlist
        </button>
      </div>
      
      <div class="product-description">
        <h4>Description</h4>
        <p>${product.description}</p>
      </div>
      
      <div class="product-features">
        <h4>Key Features</h4>
        <ul>
          ${product.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
      
      <div class="stock-info">
        <p><strong>Stock:</strong> ${product.stock} units available</p>
        <p><strong>SKU:</strong> ES-${product.id.toString().padStart(4, '0')}</p>
      </div>
    </div>
  `;
  
  addToRecentlyViewed(product);
}

function renderCartPage() {
  const cartItems = document.getElementById('cartItems');
  const cartSummary = document.getElementById('cartSummary');
  
  if (AppState.cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart" style="text-align: center; padding: 2rem;">
        <h3>Your cart is empty</h3>
        <p>Start shopping to add items to your cart.</p>
        <button class="btn btn--primary" onclick="navigateTo('shop')">Shop Now</button>
      </div>
    `;
    cartSummary.innerHTML = '';
    return;
  }
  
  cartItems.innerHTML = AppState.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">${getCategoryIcon('heels')}</div>
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-meta">Color: ${item.color} | Size: ${item.size}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
      </div>
      <div class="cart-item-actions">
        <div class="quantity-selector">
          <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
          <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                 onchange="updateCartQuantity(${item.id}, parseInt(this.value))">
          <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
        </div>
        <button class="btn btn--outline btn--sm" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    </div>
  `).join('');
  
  const subtotal = getCartTotal();
  const shipping = subtotal > 5000 ? 0 : 200;
  const total = subtotal + shipping;
  
  cartSummary.innerHTML = `
    <h3>Order Summary</h3>
    <div class="summary-row">
      <span>Subtotal (${AppState.cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
      <span>${formatPrice(subtotal)}</span>
    </div>
    <div class="summary-row">
      <span>Shipping</span>
      <span>${shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
    </div>
    ${shipping === 0 ? '' : '<p style="font-size: 0.8em; color: var(--color-text-secondary); margin: 0.5rem 0;">Free shipping on orders above ₹5,000</p>'}
    <div class="summary-row total">
      <span>Total</span>
      <span>${formatPrice(total)}</span>
    </div>
    <button class="btn btn--primary btn--full-width btn--lg" onclick="navigateTo('checkout')" style="margin-top: 1rem;">
      Proceed to Checkout
    </button>
    <button class="btn btn--outline btn--full-width" onclick="navigateTo('shop')" style="margin-top: 0.5rem;">
      Continue Shopping
    </button>
  `;
}

function renderCheckoutPage() {
  const checkoutForm = document.getElementById('checkoutForm');
  if (!checkoutForm) return;
  
  const subtotal = getCartTotal();
  const shipping = subtotal > 5000 ? 0 : 200;
  const total = subtotal + shipping;
  
  checkoutForm.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 400px; gap: 2rem;">
      <div class="checkout-details">
        <div class="checkout-section">
          <h3>Shipping Information</h3>
          <form id="shippingForm">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label" for="firstName">First Name *</label>
                <input type="text" id="firstName" class="form-control" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="lastName">Last Name *</label>
                <input type="text" id="lastName" class="form-control" required>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="email">Email *</label>
              <input type="email" id="email" class="form-control" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="phone">Phone Number *</label>
              <input type="tel" id="phone" class="form-control" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="address">Address *</label>
              <input type="text" id="address" class="form-control" required>
            </div>
            <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label" for="city">City *</label>
                <input type="text" id="city" class="form-control" value="Mumbai" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="state">State *</label>
                <input type="text" id="state" class="form-control" value="Maharashtra" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="pincode">PIN Code *</label>
                <input type="text" id="pincode" class="form-control" required>
              </div>
            </div>
            <div class="form-group">
              <label>
                <input type="checkbox" id="localPickup" onchange="togglePickupOption()">
                Local Pickup from Mulund Store (Free)
              </label>
            </div>
          </form>
        </div>
        
        <div class="checkout-section">
          <h3>Payment Method</h3>
          <div class="payment-options">
            <label class="payment-option">
              <input type="radio" name="payment" value="card" checked>
              <span>Credit/Debit Card</span>
            </label>
            <label class="payment-option">
              <input type="radio" name="payment" value="upi">
              <span>UPI</span>
            </label>
            <label class="payment-option">
              <input type="radio" name="payment" value="cod">
              <span>Cash on Delivery</span>
            </label>
          </div>
        </div>
      </div>
      
      <div class="order-summary">
        <h3>Order Summary</h3>
        <div class="order-items">
          ${AppState.cart.map(item => `
            <div class="order-item">
              <div class="item-details">
                <h5>${item.name}</h5>
                <p>Color: ${item.color}, Size: ${item.size}</p>
                <p>Qty: ${item.quantity}</p>
              </div>
              <div class="item-price">${formatPrice(item.price * item.quantity)}</div>
            </div>
          `).join('')}
        </div>
        
        <div class="order-total">
          <div class="summary-row">
            <span>Subtotal</span>
            <span>${formatPrice(subtotal)}</span>
          </div>
          <div class="summary-row">
            <span>Shipping</span>
            <span id="shippingCost">${shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
          </div>
          <div class="summary-row total">
            <span>Total</span>
            <span id="totalCost">${formatPrice(total)}</span>
          </div>
        </div>
        
        <button class="btn btn--primary btn--full-width btn--lg" onclick="processOrder()">
          Place Order
        </button>
      </div>
    </div>
  `;
}

function renderAuthPage() {
  const authForms = document.getElementById('authForms');
  if (!authForms) return;
  
  authForms.innerHTML = `
    <div class="auth-form" id="loginForm">
      <h3>Sign In</h3>
      <form onsubmit="handleLogin(event)">
        <div class="form-group">
          <label class="form-label" for="loginEmail">Email</label>
          <input type="email" id="loginEmail" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="loginPassword">Password</label>
          <input type="password" id="loginPassword" class="form-control" required>
        </div>
        <button type="submit" class="btn btn--primary btn--full-width">Sign In</button>
      </form>
      <div class="auth-toggle">
        <p>Don't have an account? <a onclick="showRegisterForm()">Sign up</a></p>
        <p><a onclick="showForgotPassword()">Forgot Password?</a></p>
      </div>
    </div>
    
    <div class="auth-form hidden" id="registerForm">
      <h3>Create Account</h3>
      <form onsubmit="handleRegister(event)">
        <div class="form-group">
          <label class="form-label" for="registerName">Full Name</label>
          <input type="text" id="registerName" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="registerEmail">Email</label>
          <input type="email" id="registerEmail" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="registerPassword">Password</label>
          <input type="password" id="registerPassword" class="form-control" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" class="form-control" required>
        </div>
        <button type="submit" class="btn btn--primary btn--full-width">Create Account</button>
      </form>
      <div class="auth-toggle">
        <p>Already have an account? <a onclick="showLoginForm()">Sign in</a></p>
      </div>
    </div>
  `;
}

function renderProfilePage() {
  if (!AppState.isAuthenticated) {
    navigateTo('auth');
    return;
  }
  
  const profileContent = document.getElementById('profileContent');
  if (!profileContent) return;
  
  profileContent.innerHTML = `
    <div class="profile-nav">
      <button class="profile-nav-item active" onclick="showProfileSection('account')">Account</button>
      <button class="profile-nav-item" onclick="showProfileSection('orders')">Orders</button>
      <button class="profile-nav-item" onclick="showProfileSection('addresses')">Addresses</button>
      <button class="profile-nav-item" onclick="showProfileSection('wishlist')">Wishlist</button>
    </div>
    
    <div class="profile-section active" id="accountSection">
      <h3>Account Information</h3>
      <form>
        <div class="form-group">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" value="${AppState.user?.name || ''}" readonly>
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" value="${AppState.user?.email || ''}" readonly>
        </div>
        <button type="button" class="btn btn--secondary">Edit Profile</button>
        <button type="button" class="btn btn--outline" onclick="handleLogout()">Sign Out</button>
      </form>
    </div>
    
    <div class="profile-section" id="ordersSection">
      <h3>Order History</h3>
      <p>No orders yet. <a href="#shop" onclick="navigateTo('shop')">Start shopping</a></p>
    </div>
    
    <div class="profile-section" id="addressesSection">
      <h3>Saved Addresses</h3>
      <p>No addresses saved yet.</p>
      <button class="btn btn--primary">Add Address</button>
    </div>
    
    <div class="profile-section" id="wishlistSection">
      <h3>Wishlist</h3>
      <div class="products-grid">
        ${AppState.wishlist.length === 0 ? 
          '<p>No items in wishlist yet. <a href="#shop" onclick="navigateTo(\'shop\')">Start shopping</a></p>' :
          AppState.wishlist.map(productId => {
            const product = AppData.products.find(p => p.id === productId);
            return product ? renderProductCard(product, false) : '';
          }).join('')
        }
      </div>
    </div>
  `;
}

// Helper Functions
function getCategoryIcon(category) {
  const icons = {
    heels: '👠',
    flats: '🥿',
    boots: '🥾',
    sandals: '👡',
    sneakers: '👟'
  };
  return icons[category] || '👠';
}

// Event Handlers
window.selectColor = function(color) {
  document.querySelectorAll('#colorOptions .color-swatch').forEach(el => el.classList.remove('selected'));
  event.target.classList.add('selected');
};

window.selectSize = function(size) {
  document.querySelectorAll('#sizeOptions .size-button').forEach(el => el.classList.remove('selected'));
  event.target.classList.add('selected');
};

window.changeQuantity = function(delta) {
  const input = document.getElementById('quantityInput');
  if (input) {
    const newValue = parseInt(input.value) + delta;
    if (newValue >= 1 && newValue <= 10) {
      input.value = newValue;
    }
  }
};

window.addProductToCart = function() {
  if (!AppState.currentProduct) return;
  
  const selectedColor = document.querySelector('#colorOptions .color-swatch.selected')?.title || AppState.currentProduct.colors[0];
  const selectedSize = document.querySelector('#sizeOptions .size-button.selected')?.textContent || AppState.currentProduct.sizes[0];
  const quantity = parseInt(document.getElementById('quantityInput')?.value || 1);
  
  addToCart(AppState.currentProduct.id, selectedColor, selectedSize, quantity);
};

window.openQuickView = function(productId) {
  const product = AppData.products.find(p => p.id === productId);
  if (!product) return;
  
  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');
  
  content.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
      <div class="product-image" style="height: 300px;">${getCategoryIcon(product.category.toLowerCase())}</div>
      <div>
        <h3>${product.name}</h3>
        <div class="product-rating">
          <span class="stars">${generateStars(product.rating)}</span>
          <span class="rating-text">(${product.reviews})</span>
        </div>
        <div class="price-section" style="margin: 1rem 0;">
          <span class="current-price">${formatPrice(product.price)}</span>
          ${product.comparePrice ? `<span class="original-price">${formatPrice(product.comparePrice)}</span>` : ''}
        </div>
        <p>${product.description}</p>
        <div style="margin: 1rem 0;">
          <strong>Available Colors:</strong> ${product.colors.join(', ')}<br>
          <strong>Available Sizes:</strong> ${product.sizes.join(', ')}
        </div>
        <div style="display: flex; gap: 1rem;">
          <button class="btn btn--primary" onclick="addToCart(${product.id}); closeQuickView();">Add to Cart</button>
          <button class="btn btn--outline" onclick="navigateTo('product', ${product.id}); closeQuickView();">View Details</button>
        </div>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
};

window.closeQuickView = function() {
  document.getElementById('quickViewModal').classList.add('hidden');
};

window.openSizeGuide = function() {
  document.getElementById('sizeGuideModal').classList.remove('hidden');
};

window.closeSizeGuide = function() {
  document.getElementById('sizeGuideModal').classList.add('hidden');
};

window.togglePickupOption = function() {
  const pickup = document.getElementById('localPickup').checked;
  const shippingCost = document.getElementById('shippingCost');
  const totalCost = document.getElementById('totalCost');
  
  if (pickup) {
    shippingCost.textContent = 'FREE';
    totalCost.textContent = formatPrice(getCartTotal());
  } else {
    const subtotal = getCartTotal();
    const shipping = subtotal > 5000 ? 0 : 200;
    shippingCost.textContent = shipping === 0 ? 'FREE' : formatPrice(shipping);
    totalCost.textContent = formatPrice(subtotal + shipping);
  }
};

window.processOrder = function() {
  showToast('Order placed successfully! You will receive a confirmation email shortly.', 'success');
  AppState.cart = [];
  updateCartCount();
  navigateTo('home');
};

window.showLoginForm = function() {
  document.getElementById('registerForm').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
};

window.showRegisterForm = function() {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('registerForm').classList.remove('hidden');
};

window.showForgotPassword = function() {
  showToast('Password reset link sent to your email!', 'success');
};

window.handleLogin = function(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  
  AppState.user = { name: 'Demo User', email: email };
  AppState.isAuthenticated = true;
  
  showToast('Successfully signed in!', 'success');
  navigateTo('home');
};

window.handleRegister = function(event) {
  event.preventDefault();
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  
  if (password !== confirmPassword) {
    showToast('Passwords do not match!', 'error');
    return;
  }
  
  AppState.user = { name: name, email: email };
  AppState.isAuthenticated = true;
  
  showToast('Account created successfully!', 'success');
  navigateTo('home');
};

window.handleLogout = function() {
  AppState.user = null;
  AppState.isAuthenticated = false;
  showToast('Successfully signed out!', 'success');
  navigateTo('home');
};

window.showProfileSection = function(section) {
  document.querySelectorAll('.profile-nav-item').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.profile-section').forEach(sec => sec.classList.remove('active'));
  
  event.target.classList.add('active');
  document.getElementById(`${section}Section`).classList.add('active');
};

// Search functionality
const debouncedSearch = debounce((query) => {
  AppState.searchQuery = query;
  if (AppState.currentPage === 'shop') {
    renderShopPage();
  }
}, 300);

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  // Set up event listeners
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      const nav = document.getElementById('mainNav');
      if (nav) {
        nav.classList.toggle('active');
        AppState.showMobileMenu = !AppState.showMobileMenu;
      }
    });
  }
  
  const searchToggle = document.getElementById('searchToggle');
  if (searchToggle) {
    searchToggle.addEventListener('click', function() {
      const searchBar = document.getElementById('searchBar');
      if (searchBar) {
        searchBar.classList.toggle('hidden');
        if (!searchBar.classList.contains('hidden')) {
          const searchInput = document.getElementById('searchInput');
          if (searchInput) searchInput.focus();
        }
      }
    });
  }
  
  const searchClose = document.getElementById('searchClose');
  if (searchClose) {
    searchClose.addEventListener('click', function() {
      const searchBar = document.getElementById('searchBar');
      const searchInput = document.getElementById('searchInput');
      if (searchBar) searchBar.classList.add('hidden');
      if (searchInput) {
        searchInput.value = '';
        AppState.searchQuery = '';
        if (AppState.currentPage === 'shop') {
          renderShopPage();
        }
      }
    });
  }
  
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      debouncedSearch(e.target.value);
    });
  }
  
  const cartBtn = document.getElementById('cartBtn');
  if (cartBtn) {
    cartBtn.addEventListener('click', function() {
      navigateTo('cart');
    });
  }
  
  const accountBtn = document.getElementById('accountBtn');
  if (accountBtn) {
    accountBtn.addEventListener('click', function() {
      if (AppState.isAuthenticated) {
        navigateTo('profile');
      } else {
        navigateTo('auth');
      }
    });
  }
  
  const filtersToggle = document.getElementById('filtersToggle');
  if (filtersToggle) {
    filtersToggle.addEventListener('click', function() {
      const sidebar = document.getElementById('filtersSidebar');
      if (sidebar) sidebar.classList.toggle('active');
    });
  }
  
  const filtersClose = document.getElementById('filtersClose');
  if (filtersClose) {
    filtersClose.addEventListener('click', function() {
      const sidebar = document.getElementById('filtersSidebar');
      if (sidebar) sidebar.classList.remove('active');
    });
  }
  
  const clearFiltersBtn = document.getElementById('clearFilters');
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', clearAllFilters);
  }
  
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', function(e) {
      applyFilter('sort', e.target.value);
    });
  }
  
  // Contact form handler
  const contactForm = document.getElementById('contactFormElement');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      showToast('Thank you for your message! We will get back to you soon.', 'success');
      this.reset();
    });
  }
  
  // Close modals on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeQuickView();
      closeSizeGuide();
    }
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    const nav = document.getElementById('mainNav');
    const toggle = document.getElementById('mobileMenuToggle');
    
    if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('active');
      AppState.showMobileMenu = false;
    }
  });
  
  // Initialize homepage
  renderHomePage();
  updateCartCount();
});