// Tailwind configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                heritageGreen: '#1A332C',
                heritageGreenLight: '#264B41',
                heritageGold: '#C5A059',
                heritageGoldHover: '#B08B47',
                paperBg: '#FAF6EF',
                paperCard: '#FFFFFF',
                warmSand: '#F2EADC',
                deepRed: '#8B2626',
                charcoal: '#2C2C2C'
            },
            fontFamily: {
                serif: ['"Noto Serif TC"', 'serif'],
                sans: ['"Plus Jakarta Sans"', '"Noto Sans TC"', 'sans-serif']
            }
        }
    }
};

// Toggle Mobile Menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.className = 'fa-solid fa-bars text-2xl';
        } else {
            menuIcon.className = 'fa-solid fa-xmark text-2xl';
        }
    }
}

// Filter Dishes
function filterDishes(category) {
    const cards = document.querySelectorAll('.dish-card');
    const buttons = document.querySelectorAll('.dish-tab-btn');

    // Update active button state
    buttons.forEach(btn => {
        btn.classList.remove('active', 'bg-heritageGreen', 'text-white', 'shadow');
        btn.classList.add('bg-white', 'text-gray-700');
    });

    const activeBtn = document.getElementById(`btn-dish-${category}`);
    if (activeBtn) {
        activeBtn.classList.add('active', 'bg-heritageGreen', 'text-white', 'shadow');
        activeBtn.classList.remove('bg-white', 'text-gray-700');
    }

    // Show/Hide Cards
    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Open Booking Modal Placeholder
function openBookingModal() {
    alert('線上訂座功能加載中...');
}

// Open Membership Modal Placeholder
function openMembershipModal() {
    alert('會員系統登記中...');
}

// Open Dish Detail Modal Placeholder
function openDishDetail(name, price, description, image) {
    alert(`${name} - ${price}\n\n${description}`);
}
