// Complete Product Database - ANK ESSENTIALS
const products = [
    // Category 1: GENERAL STATIONERY & ADMINISTRATIVE SUPPLIES
    { id: 1, code: 'STN-PP-01', name: 'A4 Copier Paper (80gsm, 500 sheets/ream)', price: 105.00, category: 1, categoryName: 'General Stationery' },
    { id: 2, code: 'STN-BP-02', name: 'Blue Ballpoint Pens (Box of 50)', price: 60.00, category: 1, categoryName: 'General Stationery' },
    { id: 3, code: 'STN-BK-03', name: 'Black Ballpoint Pens (Box of 50)', price: 60.00, category: 1, categoryName: 'General Stationery' },
    { id: 4, code: 'STN-WM-04', name: 'Dry-Erase Whiteboard Markers (Pack of 12, Assorted)', price: 75.00, category: 1, categoryName: 'General Stationery' },
    { id: 5, code: 'STN-WE-05', name: 'Magnetic Whiteboard Eraser / Duster', price: 35.00, category: 1, categoryName: 'General Stationery' },
    { id: 6, code: 'STN-SN-06', name: 'Adhesive Sticky Notes (3x3 inches, Pack of 12 pads)', price: 55.00, category: 1, categoryName: 'General Stationery' },
    { id: 7, code: 'STN-SP-07', name: 'Heavy-Duty Staple Pins (Size 26/6, Box of 5000)', price: 30.00, category: 1, categoryName: 'General Stationery' },
    { id: 8, code: 'STN-BE-08', name: 'Khaki Pocket Envelopes (Size A4, Pack of 50)', price: 50.00, category: 1, categoryName: 'General Stationery' },
    { id: 9, code: 'STN-BF-09', name: 'Hardboard Box Files (Classic A4 size)', price: 45.00, category: 1, categoryName: 'General Stationery' },

    // Category 2: DOCUMENT MANAGEMENT & FASTENERS
    { id: 10, code: 'DOC-FF-01', name: 'Manila Filing Folders (A4 Size, Pack of 50)', price: 55.00, category: 2, categoryName: 'Document Management' },
    { id: 11, code: 'DOC-PF-02', name: 'Clear Plastic Presentation Folders (Pack of 12)', price: 45.00, category: 2, categoryName: 'Document Management' },
    { id: 12, code: 'DOC-PC-03', name: 'Standard Metal Paper Clips (33mm, Box of 100)', price: 28.00, category: 2, categoryName: 'Document Management' },
    { id: 13, code: 'DOC-PC-04', name: 'Jumbo Metal Paper Clips (50mm, Box of 100)', price: 28.00, category: 2, categoryName: 'Document Management' },
    { id: 14, code: 'DOC-BC-05', name: 'Medium Binder Clips (25mm, Box of 12)', price: 35.00, category: 2, categoryName: 'Document Management' },
    { id: 15, code: 'DOC-BF-06', name: 'Plastic Treasury Tags / Fasteners (Pack of 100)', price: 38.00, category: 2, categoryName: 'Document Management' },

    // Category 3: FINANCIAL & MICRO-CREDIT RECORD KEEPING
    { id: 16, code: 'FIN-LB-01', name: 'A4 Analysis Ledger Books (3-Quire / 288 Pages)', price: 55.00, category: 3, categoryName: 'Financial Records' },
    { id: 17, code: 'FIN-LB-02', name: 'A4 Analysis Ledger Books (4-Quire / 384 Pages)', price: 70.00, category: 3, categoryName: 'Financial Records' },
    { id: 18, code: 'FIN-DR-03', name: 'Duplicate Carbonless Receipt Books (Pack of 5)', price: 65.00, category: 3, categoryName: 'Financial Records' },
    { id: 19, code: 'FIN-CC-04', name: 'Desktop Electronic Calculator (12-Digit display)', price: 75.00, category: 3, categoryName: 'Financial Records' },
    { id: 20, code: 'FIN-RB-05', name: 'High-Elasticity Rubber Bands (500g cash bundling pack)', price: 45.00, category: 3, categoryName: 'Financial Records' },

    // Category 4: SUSU & MICRO-SAVINGS RECORD BOOKS
    { id: 21, code: 'SUS-CB-01', name: 'Micro-Savings Daily Contribution Cards (Pack of 50)', price: 50.00, category: 4, categoryName: 'Susu & Savings' },
    { id: 22, code: 'SUS-LB-02', name: 'Susu Collector\'s Master Ledger Book (3-Quire)', price: 58.00, category: 4, categoryName: 'Susu & Savings' },
    { id: 23, code: 'SUS-DR-03', name: 'Triplicate Carbonless Susu Payout Receipt Books (Pack of 5)', price: 65.00, category: 4, categoryName: 'Susu & Savings' },

    // Category 5: RELIGIOUS, SANCTUARY & CHURCH FINANCIAL RECORDS
    { id: 24, code: 'CHR-CC-01', name: 'Disposable Communion Cups (Pack of 100)', price: 48.00, category: 5, categoryName: 'Church Supplies' },
    { id: 25, code: 'CHR-EE-02', name: 'Plain Offering & Tithing Envelopes (Pack of 100)', price: 45.00, category: 5, categoryName: 'Church Supplies' },
    { id: 26, code: 'CHR-AN-03', name: 'Sanctuary Air Freshener Aerosol Spray (300ml)', price: 45.00, category: 5, categoryName: 'Church Supplies' },
    { id: 27, code: 'CHR-HW-04', name: 'Antibacterial Liquid Hand Wash (5-Litre Gallon)', price: 70.00, category: 5, categoryName: 'Church Supplies' },
    { id: 28, code: 'CHR-PT-05', name: 'Pulpit / Altar Facial Tissues (Pack of 10 mini-packs)', price: 35.00, category: 5, categoryName: 'Church Supplies' },
    { id: 29, code: 'CHR-TB-06', name: 'Duplicate Carbonless Tithing Record Books (Pack of 5)', price: 65.00, category: 5, categoryName: 'Church Supplies' },
    { id: 30, code: 'CHR-CR-07', name: 'Church Ministry Cash Receipt Books (Pack of 5)', price: 65.00, category: 5, categoryName: 'Church Supplies' },
    { id: 31, code: 'CHR-GB-08', name: 'A4 General Ledger/Treasury Book (4-Quire)', price: 70.00, category: 5, categoryName: 'Church Supplies' },

    // Category 6: CORPORATE BREAKROOM & KITCHEN SUPPLIES
    { id: 32, code: 'BRK-MK-01', name: 'Premium Powdered Milk (400g pack)', price: 62.00, category: 6, categoryName: 'Breakroom Supplies' },
    { id: 33, code: 'BRK-CH-02', name: 'Premium Chocolate Malt Drink (400g pack)', price: 58.00, category: 6, categoryName: 'Breakroom Supplies' },
    { id: 34, code: 'BRK-CF-03', name: 'Instant Coffee Granules (200g jar)', price: 80.00, category: 6, categoryName: 'Breakroom Supplies' },
    { id: 35, code: 'BRK-SG-04', name: 'Refined White Sugar Packets (Box of 100 sachets)', price: 48.00, category: 6, categoryName: 'Breakroom Supplies' },
    { id: 36, code: 'BRK-TB-05', name: 'Premium Black Tea Bags (Box of 100 bags)', price: 45.00, category: 6, categoryName: 'Breakroom Supplies' },
    { id: 37, code: 'BRK-DC-06', name: 'Disposable Paper Coffee Cups (Pack of 50)', price: 42.00, category: 6, categoryName: 'Breakroom Supplies' },
    { id: 38, code: 'BRK-ST-07', name: 'Wooden Beverage Stirrers (Pack of 100)', price: 30.00, category: 6, categoryName: 'Breakroom Supplies' },
    { id: 39, code: 'BRK-BW-08', name: 'Premium Bottled Water (Box of 24, 500ml bottles)', price: 45.00, category: 6, categoryName: 'Breakroom Supplies' },

    // Category 7: JANITORIAL & RESTROOM HYGIENE CONSUMABLES
    { id: 40, code: 'JAN-TR-01', name: 'Premium 2-Ply Toilet Rolls (Pack of 10 rolls)', price: 55.00, category: 7, categoryName: 'Janitorial Supplies' },
    { id: 41, code: 'JAN-PT-02', name: 'Interfold Paper Hand Towels (Pack of 250 sheets)', price: 48.00, category: 7, categoryName: 'Janitorial Supplies' },
    { id: 42, code: 'JAN-PT-03', name: 'Pocket Facial Tissues (Pack of 10 mini-packs)', price: 32.00, category: 7, categoryName: 'Janitorial Supplies' },
    { id: 43, code: 'JAN-LH-04', name: 'Antibacterial Liquid Hand Wash (500ml pump bottle)', price: 38.00, category: 7, categoryName: 'Janitorial Supplies' },
    { id: 44, code: 'JAN-HS-05', name: 'Instant Hand Sanitizer Gel (70% Alcohol, 500ml)', price: 42.00, category: 7, categoryName: 'Janitorial Supplies' },
    { id: 45, code: 'JAN-AD-06', name: 'Automatic Aerosol Air Freshener Refill (300ml can)', price: 45.00, category: 7, categoryName: 'Janitorial Supplies' },

    // Category 8: BRANDED & CUSTOMIZED CORPORATE ITEMS
    { id: 46, code: 'CUST-EP-01', name: 'Customized Church Offering/Tithing Envelopes (Pack of 500)', price: 195.00, category: 8, categoryName: 'Customized Items', isCustomized: true },
    { id: 47, code: 'CUST-SB-02', name: 'Customized Branded Susu/Savings Cards (Pack of 50)', price: 110.00, category: 8, categoryName: 'Customized Items', isCustomized: true },
    { id: 48, code: 'CUST-RB-03', name: 'Customized Duplicate/Triplicate Receipt Books (Min. 10 Books)', price: 165.00, category: 8, categoryName: 'Customized Items', isCustomized: true },
    { id: 49, code: 'CUST-ID-04', name: 'Branded Staff Lanyards & Plastic ID Cards (Per Unit)', price: 45.00, category: 8, categoryName: 'Customized Items', isCustomized: true },
    { id: 50, code: 'CUST-ST-05', name: 'Custom Rubber Self-Inking Business Stamps (Each)', price: 80.00, category: 8, categoryName: 'Customized Items', isCustomized: true },
];

// Category List
const categories = [
    { id: 1, name: 'General Stationery', icon: '📝' },
    { id: 2, name: 'Document Management', icon: '📁' },
    { id: 3, name: 'Financial Records', icon: '💼' },
    { id: 4, name: 'Susu & Savings', icon: '💰' },
    { id: 5, name: 'Church Supplies', icon: '⛪' },
    { id: 6, name: 'Breakroom Supplies', icon: '☕' },
    { id: 7, name: 'Janitorial Supplies', icon: '🧹' },
    { id: 8, name: 'Customized Items', icon: '✨' },
];

// Shopping Cart State
let cart = [];
let currentCategory = null;
let currentSearchQuery = '';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    renderCategories();
    renderProducts(products);
    setupEventListeners();
    loadCartFromStorage();
}

// Setup Event Listeners
function setupEventListeners() {
    // Search
    document.getElementById('searchInput').addEventListener('input', handleSearch);

    // Cart Controls
    document.getElementById('floatingCartBtn').addEventListener('click', openCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);
    document.getElementById('closeCartBtn').addEventListener('click', closeCart);
    document.getElementById('clearCartBtn').addEventListener('click', clearCart);

    // Checkout
    document.getElementById('whatsappCheckoutBtn').addEventListener('click', handleWhatsAppCheckout);
    document.getElementById('smsCheckoutBtn').addEventListener('click', handleSmsCheckout);
}

// Render Categories
function renderCategories() {
    const categoryList = document.getElementById('categoryList');
    categoryList.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.className = 'w-full text-left px-4 py-2 rounded transition category-btn active';
    allBtn.innerHTML = '📋 All Products';
    allBtn.addEventListener('click', () => filterByCategory(null));
    categoryList.appendChild(allBtn);

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'w-full text-left px-4 py-2 rounded transition category-btn';
        btn.innerHTML = `${cat.icon} ${cat.name}`;
        btn.addEventListener('click', () => filterByCategory(cat.id));
        categoryList.appendChild(btn);
    });
}

// Filter by Category
function filterByCategory(categoryId) {
    currentCategory = categoryId;
    currentSearchQuery = '';
    document.getElementById('searchInput').value = '';

    // Update active button
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach((btn, idx) => {
        if ((categoryId === null && idx === 0) || (categoryId !== null && btn.textContent.includes(categories.find(c => c.id === categoryId)?.name))) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Filter and render products
    let filtered = products;
    if (categoryId !== null) {
        filtered = products.filter(p => p.category === categoryId);
    }
    
    renderProducts(filtered);

    // Update title
    if (categoryId === null) {
        document.getElementById('currentCategoryTitle').textContent = 'All Products';
    } else {
        const catName = categories.find(c => c.id === categoryId)?.name;
        document.getElementById('currentCategoryTitle').textContent = catName;
    }
}

// Search Handler
function handleSearch(e) {
    currentSearchQuery = e.target.value.toLowerCase();
    currentCategory = null;

    // Reset active category button
    document.querySelectorAll('.category-btn').forEach((btn, idx) => {
        if (idx === 0) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    let filtered = products;
    if (currentSearchQuery) {
        filtered = products.filter(p => 
            p.name.toLowerCase().includes(currentSearchQuery) || 
            p.code.toLowerCase().includes(currentSearchQuery)
        );
    }

    renderProducts(filtered);
}

// Render Products Grid
function renderProducts(productsToShow) {
    const productGrid = document.getElementById('productGrid');
    const noProductsMessage = document.getElementById('noProductsMessage');
    const productCount = document.getElementById('productCount');

    if (productsToShow.length === 0) {
        productGrid.innerHTML = '';
        noProductsMessage.classList.remove('hidden');
        productCount.textContent = '0 products';
        return;
    }

    noProductsMessage.classList.add('hidden');
    productCount.textContent = `${productsToShow.length} products`;

    productGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card bg-white fade-in relative">
            ${product.isCustomized ? '<div class="customized-badge">💎 Customized</div>' : ''}
            
            <div class="p-4 border-b">
                <p class="text-xs text-gray-500 font-semibold">${product.code}</p>
                <h3 class="text-sm font-semibold text-gray-800 line-clamp-2 mt-1">${product.name}</h3>
            </div>

            <div class="p-4">
                <div class="price-highlight">GHS ${product.price.toFixed(2)}</div>
                ${product.isCustomized ? '<p class="text-xs text-red-600 font-bold mt-2">⚠️ 60% Advance Deposit Required</p>' : ''}
                
                <button 
                    class="w-full mt-4 bg-navy text-white py-2 rounded hover:bg-opacity-90 transition font-semibold text-sm"
                    onclick="addToCart(${product.id})"
                >
                    <i class="fas fa-cart-plus mr-2"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCartToStorage();
    updateCartBadge();
    showCartNotification();
}

// Show Cart Notification
function showCartNotification() {
    const badge = document.getElementById('cartBadge');
    badge.style.animation = 'none';
    setTimeout(() => {
        badge.style.animation = 'fadeIn 0.3s ease';
    }, 10);
}

// Update Cart Badge
function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartBadge').textContent = totalItems;
}

// Open Cart
function openCart() {
    document.getElementById('slideoutCart').classList.add('open');
    document.getElementById('cartOverlay').classList.add('open');
    renderCartItems();
    updateDeliveryFee();
}

// Close Cart
function closeCart() {
    document.getElementById('slideoutCart').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('open');
}

// Render Cart Items
function renderCartItems() {
    const cartItems = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">
                    <i class="fas fa-inbox"></i>
                </div>
                <p class="text-center">Your cart is empty</p>
                <p class="text-sm text-gray-400 text-center mt-2">Add items to get started</p>
            </div>
        `;
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="bg-white p-4 rounded border border-gray-200 mb-3 fade-in">
            <div class="flex justify-between items-start mb-2">
                <div>
                    <p class="text-xs text-gray-500 font-bold">${item.code}</p>
                    <p class="text-sm font-semibold text-gray-800">${item.name}</p>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>

            <div class="flex justify-between items-center mb-2">
                <span class="font-bold text-gold">GHS ${(item.price * item.quantity).toFixed(2)}</span>
            </div>

            <div class="flex items-center gap-2">
                <span class="text-xs text-gray-600">Qty:</span>
                <div class="quantity-controls">
                    <button onclick="decreaseQuantity(${item.id})">−</button>
                    <span class="px-3 py-1 text-sm font-semibold">${item.quantity}</span>
                    <button onclick="increaseQuantity(${item.id})">+</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Update Quantity
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += 1;
        saveCartToStorage();
        renderCartItems();
        updateDeliveryFee();
    }
}

function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        saveCartToStorage();
        renderCartItems();
        updateDeliveryFee();
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartBadge();
    renderCartItems();
    updateDeliveryFee();
}

// Update Delivery Fee
function updateDeliveryFee() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const deliveryDisplay = document.getElementById('deliveryDisplay');
    
    if (totalQuantity >= 3) {
        deliveryDisplay.innerHTML = '<span class="free-delivery-badge">FREE (Lashibi Delivery)</span>';
    } else {
        deliveryDisplay.innerHTML = '<span class="paid-delivery-badge">GHS 25.00</span>';
    }

    updateCartTotals();
}

// Update Cart Totals
function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const deliveryFee = totalQuantity >= 3 ? 0 : 25;
    const total = subtotal + deliveryFee;

    document.getElementById('subtotalDisplay').textContent = `GHS ${subtotal.toFixed(2)}`;
    document.getElementById('totalDisplay').textContent = `GHS ${total.toFixed(2)}`;
}

// Clear Cart
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        saveCartToStorage();
        updateCartBadge();
        renderCartItems();
        updateDeliveryFee();
    }
}

// Format Cart for WhatsApp/SMS
function formatCartMessage() {
    const customerName = document.getElementById('customerName').value || 'Customer';
    const customerPhone = document.getElementById('customerPhone').value || 'Not provided';
    const customerLocation = document.getElementById('customerLocation').value || 'Not provided';
    const customerEmail = document.getElementById('customerEmail').value || 'Not provided';

    let message = `*ANK ESSENTIALS - ORDER SUMMARY*\n\n`;
    message += `📋 *Customer Details:*\n`;
    message += `Name: ${customerName}\n`;
    message += `Phone: ${customerPhone}\n`;
    message += `Email: ${customerEmail}\n`;
    message += `Location: ${customerLocation}\n\n`;

    message += `🛒 *Order Items:*\n`;
    message += `${'─'.repeat(50)}\n`;

    let subtotal = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        message += `${item.code} | ${item.name}\n`;
        message += `QTY: ${item.quantity} × GHS ${item.price.toFixed(2)} = GHS ${itemTotal.toFixed(2)}\n\n`;
    });

    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const deliveryFee = totalQuantity >= 3 ? 0 : 25;
    const total = subtotal + deliveryFee;

    message += `${'─'.repeat(50)}\n`;
    message += `Subtotal: GHS ${subtotal.toFixed(2)}\n`;
    message += `Delivery Fee: ${deliveryFee === 0 ? 'FREE (Lashibi Delivery)' : `GHS ${deliveryFee.toFixed(2)}`}\n`;
    message += `*TOTAL: GHS ${total.toFixed(2)}*\n\n`;

    message += `✓ 24-hour turnaround\n`;
    message += `✓ Payment: MoMo / Cash on Delivery\n`;
    message += `✓ Location: Lashibi, Accra – Ghana`;

    return message;
}

// WhatsApp Checkout
function handleWhatsAppCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items before checking out.');
        return;
    }

    if (!document.getElementById('customerName').value || !document.getElementById('customerPhone').value || !document.getElementById('customerLocation').value) {
        alert('Please fill in all required customer details (Name, Phone, Location).');
        document.getElementById('customerDetailsForm').scrollIntoView({ behavior: 'smooth' });
        return;
    }

    const message = formatCartMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/233257946799?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// SMS Checkout
function handleSmsCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items before checking out.');
        return;
    }

    if (!document.getElementById('customerName').value || !document.getElementById('customerPhone').value || !document.getElementById('customerLocation').value) {
        alert('Please fill in all required customer details (Name, Phone, Location).');
        document.getElementById('customerDetailsForm').scrollIntoView({ behavior: 'smooth' });
        return;
    }

    const message = formatCartMessage();
    const encodedMessage = encodeURIComponent(message);
    const smsUrl = `sms:0257946799?body=${encodedMessage}`;
    
    window.location.href = smsUrl;
}

// Local Storage
function saveCartToStorage() {
    localStorage.setItem('ankEssentialsCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('ankEssentialsCart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartBadge();
    }
}

// Scroll Helper
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
