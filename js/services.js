// Services browsing functionality

const allServices = [
    {
        id: 1,
        name: 'Professional Electrical Repair',
        category: 'electrical',
        provider: 'John Smith',
        price: 150,
        rating: 4.8,
        reviews: 24,
        image: '⚡',
        experience: '5 years',
        location: 'Accra',
        description: 'Expert electrical repairs for residential and commercial properties. Experienced in rewiring, outlet installation, and troubleshooting.',
        skills: ['Rewiring', 'Outlet Installation', 'Troubleshooting']
    },
    {
        id: 2,
        name: 'Expert Plumbing Services',
        category: 'plumbing',
        provider: 'Mary Johnson',
        price: 120,
        rating: 4.6,
        reviews: 18,
        image: '🔧',
        experience: '8 years',
        location: 'Tema',
        description: 'Professional plumbing services including leak repair, pipe replacement, and fixture installation.',
        skills: ['Leak Repair', 'Pipe Replacement', 'Fixture Installation']
    },
    {
        id: 3,
        name: 'Carpentry & Furniture Repair',
        category: 'carpentry',
        provider: 'David Brown',
        price: 200,
        rating: 4.9,
        reviews: 32,
        image: '🪵',
        experience: '10 years',
        location: 'Kumasi',
        description: 'Expert carpentry services for furniture repair, custom builds, and home renovations.',
        skills: ['Furniture Repair', 'Custom Builds', 'Home Renovation']
    },
    {
        id: 4,
        name: 'House Painting Services',
        category: 'painting',
        provider: 'Sandra Lee',
        price: 180,
        rating: 4.7,
        reviews: 22,
        image: '🎨',
        experience: '6 years',
        location: 'Accra',
        description: 'Professional interior and exterior painting with high-quality finishes.',
        skills: ['Interior Painting', 'Exterior Painting', 'Finishing']
    },
    {
        id: 5,
        name: 'HVAC & Cooling Solutions',
        category: 'hvac',
        provider: 'Michael Chen',
        price: 250,
        rating: 4.8,
        reviews: 28,
        image: '❄️',
        experience: '7 years',
        location: 'Accra',
        description: 'AC installation, maintenance, and repair services for homes and offices.',
        skills: ['AC Installation', 'Maintenance', 'Repair']
    },
    {
        id: 6,
        name: 'Professional Cleaning Services',
        category: 'cleaning',
        provider: 'Grace Mensah',
        price: 100,
        rating: 4.5,
        reviews: 15,
        image: '🧹',
        experience: '4 years',
        location: 'Tema',
        description: 'Thorough house and office cleaning with eco-friendly products.',
        skills: ['Deep Cleaning', 'Regular Cleaning', 'Office Cleaning']
    },
    {
        id: 7,
        name: 'IT Support & Tech Services',
        category: 'it',
        provider: 'Kwame Asante',
        price: 200,
        rating: 4.7,
        reviews: 20,
        image: '💻',
        experience: '6 years',
        location: 'Accra',
        description: 'Computer repair, network setup, and technical support services.',
        skills: ['Computer Repair', 'Network Setup', 'Tech Support']
    },
    {
        id: 8,
        name: 'Appliance Repair Expert',
        category: 'appliance',
        provider: 'Ama Osei',
        price: 130,
        rating: 4.6,
        reviews: 19,
        image: '🔌',
        experience: '5 years',
        location: 'Kumasi',
        description: 'Repair services for all major household appliances.',
        skills: ['Fridge Repair', 'Washer Repair', 'Oven Repair']
    }
];

function renderServices(services) {
    const grid = document.getElementById('servicesGrid');
    const noResults = document.getElementById('noResults');
    
    if (services.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }
    
    noResults.classList.add('hidden');
    grid.innerHTML = services.map(service => `
        <div class="service-card">
            <div class="service-image">${service.image}</div>
            <div class="service-content">
                <span class="service-category">${service.category.charAt(0).toUpperCase() + service.category.slice(1)}</span>
                <h3>${service.name}</h3>
                <div class="provider-info">
                    <div class="provider-avatar">${service.provider.split(' ').map(n => n[0]).join('')}</div>
                    <div class="provider-details">
                        <p class="name">${service.provider}</p>
                        <p class="experience">${service.experience}</p>
                    </div>
                </div>
                <div class="rating">
                    <span class="star">★★★★★</span>
                    <span style="font-size: 0.9rem; color: var(--text-light);">${service.rating} (${service.reviews})</span>
                </div>
                <div class="price">GH₵ ${service.price}</div>
                <div style="color: var(--text-light); font-size: 0.9rem; margin-bottom: 1rem;">📍 ${service.location}</div>
                <div class="service-footer">
                    <button class="btn-book" onclick="bookService(${service.id})">Book Now</button>
                    <button class="btn-info" onclick="showServiceDetail(${service.id})">View</button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterServices() {
    const category = document.getElementById('serviceCategory').value;
    const maxPrice = parseFloat(document.getElementById('priceRange').value) || Infinity;
    const location = document.getElementById('location').value.toLowerCase();
    const minRating = parseFloat(document.getElementById('minRating').value) || 0;
    
    let filtered = allServices.filter(service => {
        const categoryMatch = !category || service.category === category;
        const priceMatch = service.price <= maxPrice;
        const locationMatch = !location || service.location.toLowerCase().includes(location);
        const ratingMatch = service.rating >= minRating;
        
        return categoryMatch && priceMatch && locationMatch && ratingMatch;
    });
    
    renderServices(filtered);
}

function showServiceDetail(serviceId) {
    const service = allServices.find(s => s.id === serviceId);
    if (!service) return;
    
    const modal = document.getElementById('serviceModal');
    const content = document.getElementById('modalContent');
    
    content.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="
                font-size: 3rem;
                width: 80px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
            ">${service.image}</div>
            <div>
                <h2 style="margin: 0 0 0.5rem 0;">${service.name}</h2>
                <p style="margin: 0 0 0.5rem 0; color: var(--text-light);">By ${service.provider}</p>
                <div class="rating" style="margin: 0;">
                    <span class="star">★★★★★</span>
                    <span>${service.rating} (${service.reviews} reviews)</span>
                </div>
            </div>
        </div>
        
        <div style="background-color: var(--light-bg); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem;">
            <p><strong>Price:</strong> GH₵ ${service.price}</p>
            <p><strong>Location:</strong> ${service.location}</p>
            <p><strong>Experience:</strong> ${service.experience}</p>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h3 style="margin-bottom: 0.5rem;">About this service</h3>
            <p style="color: var(--text-light);">${service.description}</p>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h3 style="margin-bottom: 0.5rem;">Skills & Expertise</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${service.skills.map(skill => `
                    <span style="
                        background-color: var(--primary-color);
                        color: white;
                        padding: 0.5rem 1rem;
                        border-radius: 0.25rem;
                        font-size: 0.9rem;
                    ">${skill}</span>
                `).join('')}
            </div>
        </div>
        
        <div style="display: flex; gap: 1rem;">
            <button class="btn-primary" style="flex: 1; padding: 1rem;" onclick="bookService(${service.id})">Book Now</button>
            <button class="btn-secondary" style="flex: 1; padding: 1rem;" onclick="closeServiceModal()">Close</button>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

function closeServiceModal() {
    document.getElementById('serviceModal').classList.add('hidden');
}

function bookService(serviceId) {
    const service = allServices.find(s => s.id === serviceId);
    alert(`Booking confirmed with ${service.provider}! You will be redirected to payment.`);
    // In a real application, this would redirect to a booking/payment page
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('serviceModal');
    if (e.target === modal) {
        closeServiceModal();
    }
});

// Initialize on page load
window.addEventListener('load', () => {
    renderServices(allServices);
});
