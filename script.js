// ===== Sakura Petals Animation =====
function createSakuraPetals() {
    const container = document.getElementById('sakuraContainer');
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'sakura-petal';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDuration = (Math.random() * 5 + 8) + 's';
            petal.style.animationDelay = Math.random() * 5 + 's';
            petal.style.opacity = Math.random() * 0.5 + 0.3;
            petal.style.width = (Math.random() * 10 + 10) + 'px';
            petal.style.height = petal.style.width;
            container.appendChild(petal);
            
            setTimeout(() => petal.remove(), 15000);
        }, i * 500);
    }
}

setInterval(createSakuraPetals, 10000);
createSakuraPetals();

// ===== Header Scroll Effect =====
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Products Data =====
const products = [
    { id: 1, title: "Косплей костюм Наруто", category: "cosplay", price: 4500, image: "pictures/косплей_костюм_наруто.jpg", description: "Полный костюм Наруто Узумаки с оранжевым жилетом и штанами.", badge: "Хит" },
    { id: 2, title: "Косплей костюм Сакуры", category: "cosplay", price: 3800, image: "pictures/косплей_костюм_сакуры.jpg", description: "Косплей костюм Сакуры Харуно из Наруто с аксессуарами.", badge: "Популярно" },
    { id: 3, title: "Косплей костюм Аниме Девочки", category: "cosplay", price: 4200, image: "pictures/Косплей_костюм_аниме_девочки.jpg", description: "Красивый костюм аниме персонажа с париком.", badge: "Новинка" },
    { id: 4, title: "Плюшевый покемон Пикачу", category: "toys", price: 1200, image: "pictures/плюшевый_покемон_пикачу.jpg", description: "Мягкая игрушка Пикачу высотой 25 см.", badge: "Хит" },
    { id: 5, title: "Плюшевый Тоторо", category: "toys", price: 1800, image: "pictures/плюшевый_тоторо.jpg", description: "Большой плюшевый Тоторо. Высота 35 см.", badge: "Популярно" },
    { id: 6, title: "Плюшевый медведь", category: "toys", price: 950, image: "pictures/плюшевый_медведь.jpg", description: "Мягкий плюшевый медведь с бантиком.", badge: "Скидка" },
    { id: 7, title: "Дакимакура Аска Лэнгли", category: "dakimakura", price: 3200, image: "pictures/дакимакура_аска_лэнгли.jpg", description: "Подушка-дакимакура с Аской из Евангелиона. 150x50 см.", badge: "Хит" },
    { id: 8, title: "Дакимакура Рем", category: "dakimakura", price: 3500, image: "pictures/дакимакура_рем.jpg", description: "Подушка-дакимакура с Рем из Re:Zero. 150x50 см.", badge: "Популярно" },
    { id: 9, title: "Дакимакура Аниме Девочка", category: "dakimakura", price: 2800, image: "pictures/дакимакура_аниме_девочка.jpg", description: "Подушка-дакимакура с аниме персонажем. 150x50 см.", badge: "Новинка" },
    { id: 10, title: "Манга Атака Титанов", category: "manga", price: 800, image: "pictures/манга_атака_титанов.jpg", description: "Первый том манги на русском языке.", badge: "Хит" },
    { id: 11, title: "Манга Токийский Гуль", category: "manga", price: 900, image: "pictures/манга_токийский_гуль.jpg", description: "Первый том манги на русском языке.", badge: "Популярно" },
    { id: 12, title: "Манга Наруто", category: "manga", price: 750, image: "pictures/манга_наруто.jpg", description: "Первый том манги на русском языке.", badge: "Скидка" },
    { id: 13, title: "Набор стикеров Аниме", category: "accessories", price: 300, image: "pictures/набор_стикеров_аниме.jpg", description: "Набор стикеров с аниме персонажами. 20 штук.", badge: "Новинка" },
    { id: 14, title: "Стикеры Покемоны", category: "accessories", price: 250, image: "pictures/стикеры_покемоны.jpg", description: "Стикеры с покемонами для телефона и ноутбука.", badge: "Популярно" },
    { id: 15, title: "Стикеры Кавай", category: "accessories", price: 200, image: "pictures/стикеры_кавай.jpg", description: "Милые стикеры в стиле кавай.", badge: "Скидка" },
    { id: 16, title: "Рамен быстрого приготовления", category: "food", price: 150, image: "pictures/рамен_быстрого_приготовления.jpg", description: "Японский рамен со вкусом говядины.", badge: "Популярно" },
    { id: 17, title: "Японские конфеты", category: "food", price: 400, image: "pictures/японские_конфеты.jpg", description: "Набор японских конфет. 15 штук.", badge: "Хит" },
    { id: 18, title: "Корейские закуски", category: "food", price: 350, image: "pictures/корейские_закуски.jpg", description: "Набор корейских закусок и чипсов.", badge: "Новинка" },
    { id: 19, title: "Цветные линзы Голубые", category: "accessories", price: 1200, image: "pictures/цветные_линзы_голубые.jpg", description: "Цветные контактные линзы голубого цвета.", badge: "Популярно" },
    { id: 20, title: "Цветные линзы Зеленые", category: "accessories", price: 1200, image: "pictures/цветные_линзы_зеленые.jpg", description: "Цветные контактные линзы зеленого цвета.", badge: "Новинка" },
    { id: 21, title: "Цветные линзы Фиолетовые", category: "accessories", price: 1200, image: "pictures/цветные_линзы_фиолетовые.jpg", description: "Цветные контактные линзы фиолетового цвета.", badge: "Хит" }
];

// ===== Category Names =====
function getCategoryName(category) {
    const names = {
        'cosplay': 'Косплей',
        'toys': 'Игрушки',
        'dakimakura': 'Дакимакуры',
        'manga': 'Манга',
        'accessories': 'Аксессуары',
        'food': 'Вкусности'
    };
    return names[category] || category;
}


// ===== Cart Class =====
class Cart {
    constructor() {
        this.items = [];
        this.init();
    }

    init() {
        this.loadCart();
        this.updateDisplay();
    }

    addItem(product) {
        const existing = this.items.find(item => item.id === product.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }
        this.saveCart();
        this.updateDisplay();
        this.showAddAnimation(product);
        showNotification(product.title + ' добавлен в корзину!', 'success');
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateDisplay();
        this.renderCart();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.updateDisplay();
                this.renderCart();
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    saveCart() {
        localStorage.setItem('animego_cart', JSON.stringify(this.items));
    }

    loadCart() {
        const saved = localStorage.getItem('animego_cart');
        if (saved) {
            this.items = JSON.parse(saved);
        }
    }

    updateDisplay() {
        const cartCount = document.getElementById('cartCount');
        const cartTotal = document.getElementById('cartTotal');
        const count = this.getItemCount();
        
        if (cartCount) {
            cartCount.textContent = count;
            cartCount.style.display = count > 0 ? 'flex' : 'none';
        }
        if (cartTotal) {
            cartTotal.textContent = this.getTotal().toLocaleString();
        }
    }

    showAddAnimation(product) {
        const button = document.querySelector('[data-product-id="' + product.id + '"]');
        if (button) {
            button.classList.add('added');
            button.innerHTML = '<i class="fas fa-check"></i> Добавлено';
            setTimeout(() => {
                button.classList.remove('added');
                button.innerHTML = '<i class="fas fa-shopping-cart"></i> В корзину';
            }, 2000);
        }
    }

    renderCart() {
        const cartContent = document.getElementById('cartContent');
        const cartFooter = document.getElementById('cartFooter');
        
        if (this.items.length === 0) {
            cartContent.innerHTML = '<div class="empty-cart"><div class="empty-cart-icon">🛒</div><p>Ваша корзина пуста</p><span>Добавьте товары из каталога</span></div>';
            cartFooter.style.display = 'none';
        } else {
            let html = '';
            this.items.forEach(item => {
                html += '<div class="cart-item">' +
                    '<div class="cart-item-image"><img src="' + item.image + '" alt="' + item.title + '"></div>' +
                    '<div class="cart-item-info"><div class="cart-item-title">' + item.title + '</div>' +
                    '<div class="cart-item-price">' + item.price.toLocaleString() + ' ₽</div></div>' +
                    '<div class="cart-item-controls">' +
                    '<button class="quantity-btn" onclick="cart.updateQuantity(' + item.id + ', ' + (item.quantity - 1) + ')">-</button>' +
                    '<span class="quantity">' + item.quantity + '</span>' +
                    '<button class="quantity-btn" onclick="cart.updateQuantity(' + item.id + ', ' + (item.quantity + 1) + ')">+</button>' +
                    '<button class="remove-item" onclick="cart.removeItem(' + item.id + ')"><i class="fas fa-trash"></i></button>' +
                    '</div></div>';
            });
            cartContent.innerHTML = html;
            cartFooter.style.display = 'block';
            document.getElementById('cartTotal').textContent = this.getTotal().toLocaleString();
        }
    }
}

const cart = new Cart();

// ===== Products Catalog =====
class ProductsCatalog {
    constructor() {
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.renderProducts();
        this.setupFilters();
        this.setupCategoryCards();
    }

    renderProducts() {
        const grid = document.getElementById('productsGrid');
        if (!grid) return;
        
        const filtered = this.currentFilter === 'all' 
            ? products 
            : products.filter(p => p.category === this.currentFilter);

        let html = '';
        filtered.forEach(product => {
            const badgeClass = product.badge === 'Новинка' ? 'new' : (product.badge === 'Скидка' ? 'sale' : '');
            html += '<div class="product-card" data-category="' + product.category + '">' +
                '<div class="product-image">' +
                '<img src="' + product.image + '" alt="' + product.title + '" loading="lazy">' +
                '<div class="product-badge ' + badgeClass + '">' + product.badge + '</div>' +
                '<div class="product-favorite" onclick="toggleFavorite(' + product.id + ')"><i class="far fa-heart"></i></div>' +
                '</div>' +
                '<div class="product-info">' +
                '<div class="product-category">' + getCategoryName(product.category) + '</div>' +
                '<div class="product-title">' + product.title + '</div>' +
                '<div class="product-description">' + product.description + '</div>' +
                '<div class="product-footer">' +
                '<div class="product-price">' + product.price.toLocaleString() + ' ₽</div>' +
                '<button class="add-to-cart" data-product-id="' + product.id + '" onclick="addToCart(' + product.id + ')">' +
                '<i class="fas fa-shopping-cart"></i> В корзину</button>' +
                '</div></div></div>';
        });
        grid.innerHTML = html;
    }

    setupFilters() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.dataset.filter;
                this.renderProducts();
            });
        });
    }

    setupCategoryCards() {
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                this.currentFilter = category;
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.filter === category);
                });
                this.renderProducts();
                document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
            });
        });
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.addItem(product);
    }
}

const catalog = new ProductsCatalog();


// ===== Reviews Slider =====
class ReviewsSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = [];
        this.dots = [];
        this.autoSlideInterval = null;
    }

    init() {
        this.slides = document.querySelectorAll('.review-card');
        this.dots = document.querySelectorAll('.dot');
        
        if (!this.slides.length) return;
        
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prev());
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.next());
        }
        
        this.dots.forEach((dot, i) => {
            dot.addEventListener('click', () => this.goTo(i));
        });
        
        this.show(0);
        this.startAutoSlide();
    }

    show(index) {
        this.slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    next() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.show(this.currentSlide);
    }

    prev() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.show(this.currentSlide);
    }

    goTo(index) {
        this.currentSlide = index;
        this.show(index);
    }

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => this.next(), 5000);
    }
}

const reviewsSlider = new ReviewsSlider();

// ===== Cart Modal =====
class CartModal {
    constructor() {
        this.modal = null;
        this.cartButton = null;
        this.closeBtn = null;
    }

    init() {
        this.modal = document.getElementById('cartModal');
        this.cartButton = document.getElementById('cartButton');
        this.closeBtn = this.modal ? this.modal.querySelector('.close-btn') : null;
        
        if (!this.modal) return;
        
        if (this.cartButton) {
            this.cartButton.addEventListener('click', () => this.open());
        }
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.close());
        }
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.close();
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.close();
            }
        });
    }

    open() {
        cart.renderCart();
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

const cartModal = new CartModal();

// ===== Contact Modal =====
class ContactModal {
    constructor() {
        this.modal = null;
        this.closeBtn = null;
    }

    init() {
        this.modal = document.getElementById('modal');
        this.closeBtn = this.modal ? this.modal.querySelector('.close-btn') : null;
        
        if (!this.modal) return;
        
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.close());
        }
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.close();
        });
        
        const form = document.querySelector('.contact-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('name').value;
                showNotification('Спасибо, ' + name + '! Мы свяжемся с вами!', 'success');
                this.close();
                e.target.reset();
            });
        }
    }

    open() {
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

const contactModal = new ContactModal();

// ===== Search Functionality =====
let isSearchOpen = false;
let searchTimeout;

function toggleSearch() {
    const dropdown = document.getElementById('searchDropdown');
    const input = document.getElementById('searchInput');
    
    if (isSearchOpen) {
        closeSearch();
    } else {
        dropdown.classList.add('active');
        input.focus();
        isSearchOpen = true;
        setTimeout(() => {
            document.addEventListener('click', handleOutsideClick);
        }, 10);
    }
}

function closeSearch() {
    const dropdown = document.getElementById('searchDropdown');
    const input = document.getElementById('searchInput');
    
    dropdown.classList.remove('active');
    input.value = '';
    document.getElementById('searchResults').innerHTML = '';
    document.getElementById('searchSuggestions').style.display = 'block';
    isSearchOpen = false;
    document.removeEventListener('click', handleOutsideClick);
}

function handleOutsideClick(e) {
    const container = document.querySelector('.search-container');
    if (!container.contains(e.target)) {
        closeSearch();
    }
}

function clearSearch() {
    const input = document.getElementById('searchInput');
    input.value = '';
    document.getElementById('searchClear').classList.remove('visible');
    document.getElementById('searchResults').innerHTML = '';
    document.getElementById('searchSuggestions').style.display = 'block';
}

function performSearch(query) {
    if (!query || query.length < 1) {
        document.getElementById('searchSuggestions').style.display = 'block';
        document.getElementById('searchResults').innerHTML = '';
        return;
    }
    
    document.getElementById('searchSuggestions').style.display = 'none';
    
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const results = products.filter(p => 
            p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase()) ||
            getCategoryName(p.category).toLowerCase().includes(query.toLowerCase())
        );
        displaySearchResults(results, query);
    }, 300);
}

function displaySearchResults(results, query) {
    const container = document.getElementById('searchResults');
    
    if (results.length === 0) {
        container.innerHTML = '<div class="search-no-results"><i class="fas fa-search"></i><p>По запросу "' + query + '" ничего не найдено</p></div>';
    } else {
        let html = '';
        results.slice(0, 5).forEach(p => {
            html += '<div class="search-result-item" onclick="selectSearchResult(' + p.id + ')">' +
                '<div class="search-result-image"><img src="' + p.image + '" alt="' + p.title + '"></div>' +
                '<div class="search-result-info">' +
                '<div class="search-result-title">' + p.title + '</div>' +
                '<div class="search-result-category">' + getCategoryName(p.category) + '</div>' +
                '<div class="search-result-price">' + p.price.toLocaleString() + ' ₽</div>' +
                '</div></div>';
        });
        container.innerHTML = html;
    }
}

function selectSearchResult(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        catalog.currentFilter = 'all';
        catalog.renderProducts();
        closeSearch();
        setTimeout(() => {
            const card = document.querySelector('[data-product-id="' + productId + '"]');
            if (card) {
                card.closest('.product-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
        showNotification('Найден: ' + product.title, 'success');
    }
}

function searchByCategory(category) {
    document.getElementById('searchInput').value = getCategoryName(category);
    performSearch(getCategoryName(category));
}


// ===== Utility Functions =====
function showComingSoon(section) {
    showNotification('Раздел "' + section + '" скоро будет доступен!', 'info');
}

function showLogin() {
    showNotification('Вход будет доступен в следующих версиях!', 'info');
}

function showFavorites() {
    showNotification('Избранное будет доступно в следующих версиях!', 'info');
}

function toggleMobileMenu() {
    showNotification('Мобильное меню скоро будет доступно!', 'info');
}

function toggleFavorite(productId) {
    showNotification('Добавлено в избранное!', 'success');
}

function filterByCategory(category) {
    catalog.currentFilter = category;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });
    catalog.renderProducts();
    document.querySelector('.products-section').scrollIntoView({ behavior: 'smooth' });
}

function openTelegram() {
    window.open('https://t.me/Dima101229', '_blank');
    showNotification('Переход в Telegram...', 'success');
}

// ===== Notification System =====
function showNotification(message, type) {
    type = type || 'info';
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    const icons = {
        'info': 'info-circle',
        'success': 'check-circle',
        'warning': 'exclamation-triangle',
        'error': 'times-circle'
    };
    
    const notification = document.createElement('div');
    notification.className = 'notification notification-' + type;
    notification.innerHTML = '<div class="notification-content">' +
        '<i class="fas fa-' + icons[type] + '"></i>' +
        '<span>' + message + '</span>' +
        '<button class="notification-close" onclick="this.parentElement.parentElement.remove()">' +
        '<i class="fas fa-times"></i></button></div>';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) notification.remove();
    }, 3000);
}

// ===== Initialize Everything on DOM Load =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize search
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            if (searchClear) {
                searchClear.classList.toggle('visible', query.length > 0);
            }
            performSearch(query);
        });
        
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeSearch();
        });
    }
    
    // Initialize modals
    cartModal.init();
    contactModal.init();
    
    // Initialize reviews slider
    reviewsSlider.init();
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.category-card, .product-card, .about-feature').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

console.log('AnimeGO loaded!');
