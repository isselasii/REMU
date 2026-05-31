// Dashboard functionality

const mockServices = [
    {
        id: 1,
        name: 'Professional Electrical Repair',
        category: 'Electrical Work',
        provider: 'John Smith',
        price: 150,
        rating: 4.8,
        reviews: 24,
        image: '⚡',
        experience: '5 years'
    },
    {
        id: 2,
        name: 'Expert Plumbing Services',
        category: 'Plumbing',
        provider: 'Mary Johnson',
        price: 120,
        rating: 4.6,
        reviews: 18,
        image: '🔧',
        experience: '8 years'
    },
    {
        id: 3,
        name: 'Carpentry & Furniture Repair',
        category: 'Carpentry',
        provider: 'David Brown',
        price: 200,
        rating: 4.9,
        reviews: 32,
        image: '🪵',
        experience: '10 years'
    },
    {
        id: 4,
        name: 'House Painting Services',
        category: 'Painting',
        provider: 'Sandra Lee',
        price: 180,
        rating: 4.7,
        reviews: 22,
        image: '🎨',
        experience: '6 years'
    }
];

const mockRequests = [
    {
        id: 1,
        title: 'Electrical Wiring Installation',
        description: 'Need help with kitchen outlet installation',
        budget: 300,
        status: 'new',
        image: '⚡'
    },
    {
        id: 2,
        title: 'Pipe Repair Needed',
        description: 'Leaking bathroom tap',
        budget: 150,
        status: 'new',
        image: '🔧'
    },
    {
        id: 3,
        title: 'Cabinet Installation',
        description: 'Install kitchen cabinets',
        budget: 500,
        status: 'quoted',
        image: '🪵'
    }
];

function initializeDashboard() {
    const currentUser = authManager.getCurrentUser();
    
    if (!currentUser) {
        window.location.href = 'index.html';
        return;
    }

    // Update welcome message
    document.getElementById('userName').textContent = currentUser.name.split(' ')[0];
    
    if (currentUser.role === 'provider') {
        document.getElementById('userRole').textContent = 'Service Provider Dashboard';
        document.getElementById('customerDash').classList.add('hidden');
        document.getElementById('providerDash').classList.remove('hidden');
        renderPendingRequests();
    } else {
        document.getElementById('userRole').textContent = 'Customer Dashboard';
        document.getElementById('customerDash').classList.remove('hidden');
        document.getElementById('providerDash').classList.add('hidden');
        renderRecommendedServices();
    }
}

function renderRecommendedServices() {
    const container = document.getElementById('recommendedServices');
    const services = mockServices.slice(0, 4);
    
    container.innerHTML = services.map(service => `
        <div class="service-card">
            <div class="service-image">${service.image}</div>
            <div class="service-content">
                <span class="service-category">${service.category}</span>
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
                <div class="service-footer">
                    <button class="btn-book" onclick="bookService(${service.id})">Book Now</button>
                    <button class="btn-info" onclick="viewServiceDetail(${service.id})">View</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderPendingRequests() {
    const container = document.getElementById('pendingRequests');
    const requests = mockRequests.filter(r => r.status === 'new' || r.status === 'quoted');
    
    container.innerHTML = requests.map(request => `
        <div class="service-card">
            <div class="service-image">${request.image}</div>
            <div class="service-content">
                <span class="service-category" style="background-color: #fef3c7; color: #d97706;">${request.status.toUpperCase()}</span>
                <h3>${request.title}</h3>
                <p style="margin-bottom: 1rem; color: var(--text-light);">Budget: GH₵ ${request.budget}</p>
                <p style="margin-bottom: 1rem; color: var(--text-light); font-size: 0.9rem;">${request.description}</p>
                <div class="service-footer">
                    <button class="btn-book" onclick="viewRequest(${request.id})">View Details</button>
                </div>
            </div>
        </div>
    `).join('');
}

function bookService(serviceId) {
    const service = mockServices.find(s => s.id === serviceId);
    alert(`Booking ${service.name} with ${service.provider}. Redirecting to checkout...`);
    // In a real app, this would redirect to a booking page
}

function viewServiceDetail(serviceId) {
    const service = mockServices.find(s => s.id === serviceId);
    alert(`Viewing details for ${service.name}`);
    // Could open a modal with more details
}

function viewRequest(requestId) {
    const request = mockRequests.find(r => r.id === requestId);
    alert(`Viewing request: ${request.title}`);
}

// Initialize on page load
window.addEventListener('load', initializeDashboard);
