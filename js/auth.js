// Authentication and localStorage management

class AuthManager {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('remu_users')) || [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    register(userData) {
        // Check if email already exists
        if (this.users.find(u => u.email === userData.email)) {
            return { success: false, message: 'Email already registered' };
        }

        const newUser = {
            id: Date.now(),
            ...userData,
            createdAt: new Date().toISOString(),
            rating: 5.0,
            reviews: [],
            bookings: []
        };

        this.users.push(newUser);
        localStorage.setItem('remu_users', JSON.stringify(this.users));
        
        return { success: true, message: 'Registration successful', user: newUser };
    }

    login(email, password) {
        const user = this.users.find(u => u.email === email && u.password === password);
        
        if (!user) {
            return { success: false, message: 'Invalid email or password' };
        }

        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUser = user;
        
        return { success: true, message: 'Login successful', user };
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUser = null;
        window.location.href = 'index.html';
    }

    isAuthenticated() {
        return this.currentUser !== null && this.currentUser !== undefined;
    }

    getCurrentUser() {
        return this.currentUser;
    }
}

const authManager = new AuthManager();

// Check authentication on page load
window.addEventListener('load', () => {
    // If user is not authenticated and not on login page, redirect to login
    if (!authManager.isAuthenticated() && !window.location.pathname.includes('index.html') && window.location.pathname !== '/') {
        // Only redirect if on protected pages
        const protectedPages = ['dashboard.html', 'browse-services.html', 'profile.html', 'messages.html', 'my-bookings.html', 'post-request.html'];
        const currentPage = window.location.pathname.split('/').pop();
        
        if (protectedPages.includes(currentPage)) {
            window.location.href = 'index.html';
        }
    }
});

function logout() {
    authManager.logout();
}

// Add demo users for testing
if (JSON.parse(localStorage.getItem('remu_users')).length === 0) {
    const demoUsers = [
        {
            id: 1,
            name: 'John Smith',
            email: 'john@example.com',
            password: 'password123',
            phone: '+233 50 123 4567',
            role: 'provider',
            skill: 'Electrical Work',
            experience: 5,
            rating: 4.8,
            reviews: 24,
            createdAt: '2024-01-15',
            location: 'Accra'
        },
        {
            id: 2,
            name: 'Test Customer',
            email: 'customer@example.com',
            password: 'password123',
            phone: '+233 50 987 6543',
            role: 'customer',
            createdAt: '2024-01-20',
            location: 'Accra'
        }
    ];
    
    localStorage.setItem('remu_users', JSON.stringify(demoUsers));
}
