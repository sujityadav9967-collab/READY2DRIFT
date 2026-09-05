// Ready2Thrift Complete Application Logic (app.js)

let state = {
    currentView: 'home',
    cart: [],
    wishlist: [],
    searchQuery: '',
    products: [
        { id: 1, name: 'Vintage Oversized Graphic Tee', category: 'T-Shirts', size: 'L', price: 799, condition: 'Like New', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop', sold: false },
        { id: 2, name: 'Retro Boxy Fit Cotton Tee', category: 'T-Shirts', size: 'M', price: 699, condition: 'Good', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop', sold: false },
        { id: 3, name: 'Distressed Y2K Cargo Jeans', category: 'Jeans', size: '32', price: 1499, condition: 'Good', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&auto=format&fit=crop', sold: false },
        { id: 4, name: 'Classic Blue Denim Regular Jeans', category: 'Jeans', size: '30', price: 1299, condition: 'Like New', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&auto=format&fit=crop', sold: false },
        { id: 5, name: 'Waffle Knit Thermal Tee', category: 'Waffle T-Shirts', size: 'M', price: 999, condition: 'Like New', image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=600&auto=format&fit=crop', sold: false },
        { id: 6, name: 'Heavyweight Textured Waffle Shirt', category: 'Waffle T-Shirts', size: 'L', price: 1099, condition: 'Good', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=600&auto=format&fit=crop', sold: false },
        { id: 7, name: 'Classic Flannel Check Shirt', category: 'Shirts', size: 'XL', price: 1199, condition: 'Good', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop', sold: false },
        { id: 8, name: 'Striped Vintage Casual Shirt', category: 'Shirts', size: 'M', price: 899, condition: 'Like New', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop', sold: false },
        { id: 9, name: 'Stainless Steel Cuban Link Chain', category: 'Accessories', size: 'Free', price: 499, condition: 'Like New', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop', sold: false },
        { id: 10, name: 'Minimalist Titanium Ring', category: 'Accessories', size: '8', price: 399, condition: 'Like New', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=600&auto=format&fit=crop', sold: false },
        { id: 11, name: 'Collectible Retro Action Figure', category: 'Toys', size: 'Standard', price: 799, condition: 'Like New', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop', sold: false },
        { id: 12, name: 'Vintage Die-Cast Metal Toy Car', category: 'Toys', size: 'Standard', price: 599, condition: 'Good', image: 'https://images.unsplash.com/photo-1581557991964-125469da3b8a?q=80&w=600&auto=format&fit=crop', sold: false }
    ],
    orders: [
        { id: 'R2T-8921', customer: 'Rahul Sharma', total: 799, status: 'Shipped', date: '2026-09-02' }
    ]
};

// Toggle Hamburger Slide-Out Menu Drawer
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    menu.classList.toggle('hidden');
}

// Mock Google Authentication handler
function googleAuthLogin() {
    alert('Google Sign-Up popup triggered! (Integrated via Firebase Auth SDK)');
    toggleMenu();
}

// Functional Search Handler
function handleSearchInput(e) {
    state.searchQuery = e.target.value.toLowerCase();
    router('shop');
}

function toggleSearch() {
    let query = prompt("Search Ready2Thrift catalog (e.g., Jeans, Tee, Toy, Chain):");
    if(query !== null) {
        state.searchQuery = query.toLowerCase();
        router('shop');
    }
}

// Router Function to Switch Views Dynamically without Page Reload
function router(viewName, param = null) {
    state.currentView = viewName;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderView(param);
}

// Master Render Function
function renderView(param) {
    const container = document.getElementById('app-container');
    container.innerHTML = '';

    switch(state.currentView) {
        case 'home':
            container.innerHTML = renderHomeView();
            break;
        case 'shop':
            container.innerHTML = renderShopView();
            break;
        case 'product-detail':
            container.innerHTML = renderProductDetailView(param);
            break;
        case 'cart':
            container.innerHTML = renderCartView();
            break;
        case 'wishlist':
            container.innerHTML = renderWishlistView();
            break;
        case 'tracking':
            container.innerHTML = renderTrackingView();
            break;
        case 'blog':
            container.innerHTML = renderBlogView();
            break;
        case 'admin-login':
            container.innerHTML = renderAdminLoginView();
            break;
        case 'admin-dashboard':
            container.innerHTML = renderAdminDashboardView();
            break;
        default:
            container.innerHTML = renderHomeView();
    }
}

// --- VIEW TEMPLATES ---

function renderHomeView() {
    return `
        <div class="animate-fade-in">
            <!-- Hero Banner -->
            <section class="relative h-[85vh] flex items-center justify-center bg-black overflow-hidden border-b border-zinc-900">
                <div class="absolute inset-0 z-0 opacity-30">
                    <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1600&auto=format&fit=crop" class="w-full h-full object-cover">
                </div>
                <div class="relative z-10 text-center px-4 max-w-3xl">
                    <span class="text-[10px] uppercase tracking-widest bg-white text-black font-bold px-3 py-1 mb-6 inline-block">New Drop Vol. 04</span>
                    <h1 class="text-4xl sm:text-7xl font-black tracking-tighter uppercase mb-6">Sustainable Streetwear & Vintage</h1>
                    <p class="text-zinc-400 text-sm sm:text-base mb-8 max-w-lg mx-auto leading-relaxed">Handpicked pre-loved pieces, rare toys, and retro accessories. Once it's gone, it's gone.</p>
                    <button onclick="router('shop')" class="bg-white text-black font-bold uppercase tracking-widest text-xs px-8 py-4 hover:bg-zinc-200 transition-all">Shop The Drop</button>
                </div>
            </section>

            <!-- Categories Section (Balanced minimalist grid: Toys, Accessories, T-Shirts, Jeans) -->
            <section class="max-w-5xl mx-auto px-4 py-20">
                <div class="text-center mb-12">
                    <span class="text-[10px] uppercase tracking-widest text-zinc-500">Curated Collections</span>
                    <h2 class="text-xl sm:text-2xl font-bold uppercase tracking-widest mt-1">Shop By Category</h2>
                </div>
                
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div onclick="state.searchQuery='toy'; router('shop');" class="bg-zinc-950 border border-zinc-900 p-6 cursor-pointer hover:border-white transition-all group">
                        <i class="fa-solid fa-gamepad text-2xl mb-3 text-zinc-400 group-hover:text-white"></i>
                        <h3 class="font-bold uppercase tracking-wider text-xs">Toys</h3>
                    </div>
                    <div onclick="state.searchQuery='accessories'; router('shop');" class="bg-zinc-950 border border-zinc-900 p-6 cursor-pointer hover:border-white transition-all group">
                        <i class="fa-solid fa-gem text-2xl mb-3 text-zinc-400 group-hover:text-white"></i>
                        <h3 class="font-bold uppercase tracking-wider text-xs">Accessories</h3>
                    </div>
                    <div onclick="state.searchQuery='t-shirts'; router('shop');" class="bg-zinc-950 border border-zinc-900 p-6 cursor-pointer hover:border-white transition-all group">
                        <i class="fa-solid fa-shirt text-2xl mb-3 text-zinc-400 group-hover:text-white"></i>
                        <h3 class="font-bold uppercase tracking-wider text-xs">T-Shirts & Waffles</h3>
                    </div>
                    <div onclick="state.searchQuery='jeans'; router('shop');" class="bg-zinc-950 border border-zinc-900 p-6 cursor-pointer hover:border-white transition-all group">
                        <i class="fa-solid fa-vest text-2xl mb-3 text-zinc-400 group-hover:text-white"></i>
                        <h3 class="font-bold uppercase tracking-wider text-xs">Jeans & Shirts</h3>
                    </div>
                </div>
            </section>

            <!-- Featured Collection -->
            <section class="max-w-7xl mx-auto px-4 py-12">
                <div class="flex justify-between items-end mb-10 border-b border-zinc-900 pb-4">
                    <div>
                        <span class="text-[10px] uppercase tracking-widest text-zinc-500">Handpicked</span>
                        <h2 class="text-xl sm:text-2xl font-bold uppercase tracking-tight">Featured Drops</h2>
                    </div>
                    <button onclick="router('shop')" class="text-xs uppercase tracking-widest text-zinc-400 hover:text-white underline">View Catalog</button>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${state.products.slice(0, 4).map(p => `
                        <div onclick="router('product-detail', ${p.id})" class="product-card group cursor-pointer">
                            <div class="relative bg-zinc-950 aspect-[3/4] overflow-hidden mb-4 border border-zinc-900">
                                <img src="${p.image}" class="w-full h-full object-cover">
                                ${p.sold ? '<span class="absolute top-3 left-3 bg-red-600 text-white text-[9px] uppercase font-bold px-2.5 py-1">Sold Out</span>' : `<span class="absolute top-3 left-3 bg-black/80 backdrop-blur text-white text-[9px] uppercase font-bold px-2.5 py-1">${p.condition}</span>`}
                            </div>
                            <div class="flex justify-between items-start">
                                <div>
                                    <h3 class="font-medium text-xs text-zinc-200 group-hover:text-white">${p.name}</h3>
                                    <p class="text-[11px] text-zinc-500 mt-1">Size: ${p.size} • ${p.category}</p>
                                </div>
                                <span class="font-bold text-xs">₹${p.price}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        </div>
    `;
}

function renderShopView() {
    let filteredProducts = state.products;
    if (state.searchQuery) {
        filteredProducts = state.products.filter(p => 
            p.name.toLowerCase().includes(state.searchQuery) || 
            p.category.toLowerCase().includes(state.searchQuery)
        );
    }

    return `
        <div class="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
            <div class="flex justify-between items-center mb-8 border-b border-zinc-900 pb-4">
                <h1 class="text-2xl font-black uppercase tracking-tight">Catalog / All Drops</h1>
                ${state.searchQuery ? `<button onclick="state.searchQuery=''; router('shop');" class="text-xs underline text-zinc-400 hover:text-white">Clear Filter ("${state.searchQuery}")</button>` : ''}
            </div>
            
            <!-- Filters Bar -->
            <div class="bg-zinc-950 p-4 border border-zinc-900 mb-8 flex flex-wrap gap-4 items-center justify-between text-xs">
                <input type="text" placeholder="Search catalog..." value="${state.searchQuery}" oninput="handleSearchInput(event)" class="bg-black border border-zinc-800 px-3 py-2 text-white text-xs focus:outline-none focus:border-white w-full sm:w-64">
                <span class="text-zinc-500">Showing ${filteredProducts.length} sustainable items</span>
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                ${filteredProducts.length === 0 ? `<p class="text-zinc-500 col-span-4 text-center py-20">No items found matching your search.</p>` : 
                  filteredProducts.map(p => `
                    <div onclick="router('product-detail', ${p.id})" class="product-card group cursor-pointer">
                        <div class="relative bg-zinc-950 aspect-[3/4] overflow-hidden mb-4 border border-zinc-900">
                            <img src="${p.image}" class="w-full h-full object-cover">
                            ${p.sold ? '<span class="absolute top-3 left-3 bg-red-600 text-white text-[9px] uppercase font-bold px-2.5 py-1">Sold Out</span>' : `<span class="absolute top-3 left-3 bg-black/80 backdrop-blur text-white text-[9px] uppercase font-bold px-2.5 py-1">${p.condition}</span>`}
                        </div>
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-medium text-xs text-zinc-200 group-hover:text-white">${p.name}</h3>
                                <p class="text-[11px] text-zinc-500 mt-1">Size: ${p.size} • ${p.category}</p>
                            </div>
                            <span class="font-bold text-xs">₹${p.price}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderProductDetailView(id) {
    const product = state.products.find(p => p.id === id) || state.products[0];
    const isWishlisted = state.wishlist.some(item => item.id === product.id);
    return `
        <div class="max-w-6xl mx-auto px-4 py-12 animate-fade-in">
            <button onclick="router('shop')" class="text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white mb-8 flex items-center gap-2">
                <i class="fa-solid fa-arrow-left"></i> Back to Shop
            </button>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <!-- Product Image with Wishlist Heart -->
                <div class="relative bg-zinc-950 aspect-[3/4] overflow-hidden border border-zinc-900">
                    <img src="${product.image}" class="w-full h-full object-cover">
                    <button onclick="toggleWishlist(${product.id}); renderView(${product.id});" class="absolute top-4 right-4 text-white bg-black/80 p-3 rounded-full hover:bg-black transition-colors shadow-lg">
                        <i class="${isWishlisted ? 'fa-solid fa-heart text-red-500 text-lg' : 'fa-regular fa-heart text-lg'}"></i>
                    </button>
                </div>
                <div>
                    <span class="text-[10px] uppercase tracking-widest bg-zinc-900 px-2.5 py-1 text-zinc-300 mb-4 inline-block">${product.condition}</span>
                    <h1 class="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">${product.name}</h1>
                    <p class="text-xl font-bold mb-6">₹${product.price}</p>
                    
                    <div class="border-t border-b border-zinc-900 py-6 my-6 space-y-4 text-xs">
                        <div class="flex justify-between items-center">
                            <span class="text-zinc-500 uppercase tracking-wider">Select Size</span>
                            <span class="font-bold uppercase text-black bg-white px-3 py-1">${product.size}</span>
                        </div>
                        <div class="flex justify-between"><span class="text-zinc-500 uppercase tracking-wider">Category</span><span>${product.category}</span></div>
                        <div class="flex justify-between"><span class="text-zinc-500 uppercase tracking-wider">Authenticity</span><span>100% Verified Sustainable</span></div>
                    </div>

                    <div class="space-y-4">
                        ${product.sold ? 
                            `<button disabled class="w-full bg-zinc-900 text-zinc-600 uppercase tracking-widest font-bold py-4 text-xs cursor-not-allowed">Sold Out</button>` :
                            `<button onclick="addToCart(${product.id})" class="w-full bg-white text-black uppercase tracking-widest font-bold py-4 text-xs hover:bg-zinc-200 transition-all">Add To Bag</button>`
                        }
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderWishlistView() {
    return `
        <div class="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
            <h1 class="text-2xl font-black uppercase tracking-tight mb-8">My Wishlist (${state.wishlist.length})</h1>
            ${state.wishlist.length === 0 ? 
                `<div class="text-center py-20 bg-zinc-950 border border-zinc-900"><p class="text-zinc-500 mb-6 text-xs">Your wishlist is currently empty.</p><button onclick="router('shop')" class="bg-white text-black px-6 py-3 font-bold text-xs uppercase">Explore Drops</button></div>` :
                `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${state.wishlist.map(p => `
                        <div class="product-card group relative">
                            <div onclick="router('product-detail', ${p.id})" class="relative bg-zinc-950 aspect-[3/4] overflow-hidden mb-4 border border-zinc-900 cursor-pointer">
                                <img src="${p.image}" class="w-full h-full object-cover">
                            </div>
                            <button onclick="toggleWishlist(${p.id}); router('wishlist');" class="absolute top-4 right-4 text-red-500 bg-black/80 p-2 rounded-full hover:bg-black transition-colors">
                                <i class="fa-solid fa-heart"></i>
                            </button>
                            <div class="flex justify-between items-start cursor-pointer" onclick="router('product-detail', ${p.id})">
                                <div>
                                    <h3 class="font-medium text-xs text-zinc-200 group-hover:text-white">${p.name}</h3>
                                    <p class="text-[11px] text-zinc-500 mt-1">Size: ${p.size} • ${p.category}</p>
                                </div>
                                <span class="font-bold text-xs">₹${p.price}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>`
            }
        </div>
    `;
}

function renderCartView() {
    const total = state.cart.reduce((sum, item) => sum + item.price, 0);
    return `
        <div class="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
            <h1 class="text-2xl font-black uppercase tracking-tight mb-8">Your Shopping Bag</h1>
            ${state.cart.length === 0 ? 
                `<div class="text-center py-20 bg-zinc-950 border border-zinc-900"><p class="text-zinc-500 mb-6 text-xs">Your bag is currently empty.</p><button onclick="router('shop')" class="bg-white text-black px-6 py-3 font-bold text-xs uppercase">Explore Drops</button></div>` :
                `<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="space-y-4">
                        ${state.cart.map((item, idx) => `
                            <div class="flex items-center justify-between bg-zinc-950 p-4 border border-zinc-900 text-xs">
                                <div class="flex items-center space-x-4">
                                    <img src="${item.image}" class="w-14 h-16 object-cover border border-zinc-800">
                                    <div>
                                        <h3 class="font-medium">${item.name}</h3>
                                        <p class="text-zinc-500 mt-0.5">Size: ${item.size} • ₹${item.price}</p>
                                    </div>
                                </div>
                                <button onclick="removeFromCart(${idx})" class="text-zinc-500 hover:text-red-500"><i class="fa-solid fa-trash"></i></button>
                            </div>
                        `).join('')}
                    </div>
                    <div class="bg-zinc-950 p-6 border border-zinc-900 h-fit space-y-6 text-xs">
                        <h3 class="font-bold uppercase tracking-widest border-b border-zinc-900 pb-3">Order Summary</h3>
                        <div class="flex justify-between"><span class="text-zinc-500">Subtotal</span><span class="font-bold">₹${total}</span></div>
                        <div class="flex justify-between"><span class="text-zinc-500">Shipping</span><span class="font-bold text-emerald-500">FREE</span></div>
                        <div class="flex justify-between text-sm border-t border-zinc-900 pt-4"><span class="font-bold">Total</span><span class="font-black text-base">₹${total}</span></div>
                        
                        <!-- UPI QR Box -->
                        <div class="bg-black p-4 border border-zinc-900 text-center space-y-3">
                            <p class="text-[10px] text-zinc-400 uppercase tracking-widest">Scan & Pay via any UPI App</p>
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=ready2thrift@oksbi&pn=Ready2Thrift&am=${total}" class="mx-auto w-32 h-32 bg-white p-2">
                            <p class="text-[10px] text-zinc-500">UPI ID: ready2thrift@oksbi</p>
                        </div>

                        <a href="https://wa.me/919876543210?text=Hey%20Ready2Thrift,%20I%20have%20placed%20an%20order%20worth%20₹${total}.%20Attached%20is%20the%20payment%20screenshot." target="_blank" class="block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white uppercase tracking-widest font-bold py-4 transition-all">
                            <i class="fa-brands fa-whatsapp mr-2"></i> Confirm on WhatsApp
                        </a>
                    </div>
                </div>`
            }
        </div>
    `;
}

function renderTrackingView() {
    return `
        <div class="max-w-xl mx-auto px-4 py-20 text-center animate-fade-in">
            <h1 class="text-2xl font-black uppercase tracking-tight mb-4">Track Your Order</h1>
            <p class="text-zinc-500 text-xs mb-8">Enter your order ID below to check live shipping status.</p>
            <div class="flex mb-8">
                <input type="text" id="track-id" placeholder="e.g. R2T-8921" class="bg-zinc-950 border border-zinc-900 px-4 py-3 text-xs w-full focus:outline-none focus:border-white text-white uppercase">
                <button onclick="checkOrderStatus()" class="bg-white text-black font-bold px-6 text-xs uppercase tracking-wider">Track</button>
            </div>
            <div id="tracking-result" class="hidden bg-zinc-950 p-6 border border-zinc-900 text-left space-y-4 text-xs">
                <div class="flex justify-between items-center text-zinc-500 border-b border-zinc-900 pb-3">
                    <span>Order ID: <strong class="text-white">R2T-8921</strong></span>
                    <span>Est. Delivery: <strong class="text-white">Sept 9, 2026</strong></span>
                </div>
                <div class="space-y-3 pt-2">
                    <div class="flex items-center gap-3 text-emerald-500"><i class="fa-solid fa-circle-check"></i> Placed</div>
                    <div class="flex items-center gap-3 text-emerald-500"><i class="fa-solid fa-circle-check"></i> Packed</div>
                    <div class="flex items-center gap-3 text-emerald-500"><i class="fa-solid fa-circle-check"></i> Shipped</div>
                    <div class="flex items-center gap-3 text-zinc-600"><i class="fa-solid fa-circle"></i> Out for Delivery</div>
                    <div class="flex items-center gap-3 text-zinc-600"><i class="fa-solid fa-circle"></i> Delivered</div>
                </div>
            </div>
        </div>
    `;
}

function renderBlogView() {
    return `
        <div class="max-w-5xl mx-auto px-4 py-12 animate-fade-in">
            <h1 class="text-2xl font-black uppercase tracking-tight mb-8">Thrift Journal & Guides</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
                <div class="bg-zinc-950 border border-zinc-900 p-6 space-y-4">
                    <span class="text-zinc-500 uppercase tracking-widest text-[10px]">September 4, 2026 • Styling Guide</span>
                    <h3 class="text-base font-bold uppercase tracking-tight">How to Style Oversized Vintage Tees for Streetwear Fits</h3>
                    <p class="text-zinc-400 leading-relaxed">Discover how to layer boxy tees with cargo pants and chunky sneakers for an effortless Y2K look...</p>
                    <button class="uppercase tracking-widest text-white border-b border-white pb-1 font-bold">Read Article</button>
                </div>
                <div class="bg-zinc-950 border border-zinc-900 p-6 space-y-4">
                    <span class="text-zinc-500 uppercase tracking-widest text-[10px]">August 28, 2026 • Sustainability</span>
                    <h3 class="text-base font-bold uppercase tracking-tight">The Environmental Impact of Fast Fashion vs. Thrifting</h3>
                    <p class="text-zinc-400 leading-relaxed">Why buying pre-loved clothing is the single most powerful shift you can make for your carbon footprint...</p>
                    <button class="uppercase tracking-widest text-white border-b border-white pb-1 font-bold">Read Article</button>
                </div>
            </div>
        </div>
    `;
}

function renderAdminLoginView() {
    return `
        <div class="max-w-md mx-auto px-4 py-24 animate-fade-in">
            <h1 class="text-xl font-black uppercase tracking-tight text-center mb-6">Admin Authentication</h1>
            <div class="bg-zinc-950 p-8 border border-zinc-900 space-y-6 text-xs">
                <div>
                    <label class="block uppercase tracking-wider text-zinc-500 mb-2">Password</label>
                    <input type="password" id="admin-pass" class="w-full bg-black border border-zinc-900 p-3 text-white focus:outline-none focus:border-white" placeholder="Enter admin password">
                </div>
                <button onclick="verifyAdmin()" class="w-full bg-white text-black font-bold uppercase tracking-widest py-3 hover:bg-zinc-200 transition-all">Access Dashboard</button>
            </div>
        </div>
    `;
}

function renderAdminDashboardView() {
    return `
        <div class="max-w-7xl mx-auto px-4 py-12 animate-fade-in text-xs">
            <div class="flex justify-between items-center mb-8 border-b border-zinc-900 pb-6">
                <div>
                    <span class="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">Authorized Session</span>
                    <h1 class="text-2xl font-black uppercase tracking-tight mt-1">Admin Control Panel</h1>
                </div>
                <button onclick="router('home')" class="uppercase tracking-widest bg-zinc-900 px-4 py-2 text-zinc-300 hover:text-white">Logout</button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div class="bg-zinc-950 p-6 border border-zinc-900"><p class="text-zinc-500 uppercase tracking-widest text-[10px]">Total Products</p><p class="text-2xl font-black mt-2">${state.products.length}</p></div>
                <div class="bg-zinc-950 p-6 border border-zinc-900"><p class="text-zinc-500 uppercase tracking-widest text-[10px]">Active Orders</p><p class="text-2xl font-black mt-2">${state.orders.length}</p></div>
                <div class="bg-zinc-950 p-6 border border-zinc-900"><p class="text-zinc-500 uppercase tracking-widest text-[10px]">Pending Submissions</p><p class="text-2xl font-black mt-2">0</p></div>
            </div>

            <div class="bg-zinc-950 border border-zinc-900 p-6">
                <h3 class="font-bold uppercase tracking-widest text-xs mb-4">Inventory Management</h3>
                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <thead class="border-b border-zinc-900 text-zinc-500 uppercase text-[10px] tracking-wider">
                            <tr><th class="pb-3">Item</th><th class="pb-3">Category</th><th class="pb-3">Size</th><th class="pb-3">Price</th><th class="pb-3">Status</th></tr>
                        </thead>
                        <tbody class="divide-y divide-zinc-900">
                            ${state.products.map(p => `
                                <tr>
                                    <td class="py-3 flex items-center gap-3"><img src="${p.image}" class="w-8 h-8 object-cover border border-zinc-800">${p.name}</td>
                                    <td class="py-3">${p.category}</td>
                                    <td class="py-3">${p.size}</td>
                                    <td class="py-3">₹${p.price}</td>
                                    <td class="py-3"><span class="text-[10px] px-2 py-0.5 ${p.sold ? 'bg-red-950 text-red-400' : 'bg-emerald-950 text-emerald-400'}">${p.sold ? 'Sold' : 'Available'}</span></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// --- INTERACTION HANDLERS ---

function addToCart(id) {
    const product = state.products.find(p => p.id === id);
    if(product && !product.sold) {
        state.cart.push(product);
        document.getElementById('cart-badge').innerText = state.cart.length;
        alert('Item successfully added to your shopping bag!');
    }
}

function removeFromCart(index) {
    state.cart.splice(index, 1);
    document.getElementById('cart-badge').innerText = state.cart.length;
    router('cart');
}

function toggleWishlist(id) {
    const product = state.products.find(p => p.id === id);
    const index = state.wishlist.findIndex(item => item.id === id);
    
    if(index > -1) {
        state.wishlist.splice(index, 1);
        alert('Removed from your wishlist.');
    } else if(product) {
        state.wishlist.push(product);
        alert('Added to your wishlist!');
    }
    document.getElementById('wishlist-badge').innerText = state.wishlist.length;
}

function checkOrderStatus() {
    const val = document.getElementById('track-id').value.trim();
    if(val) {
        document.getElementById('tracking-result').classList.remove('hidden');
    }
}

function verifyAdmin() {
    const pass = document.getElementById('admin-pass').value;
    if(pass === 'admin123') {
        router('admin-dashboard');
    } else {
        alert('Incorrect password! Try "admin123"');
    }
}

// Initial Load on Page Startup
window.onload = () => {
    renderView();
};