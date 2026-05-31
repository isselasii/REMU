# REMU - Connect Businesses & Homeowners to Skilled Technicians & Artisans

REMU is a modern marketplace platform that connects customers (homeowners and businesses) with skilled service providers (electricians, plumbers, carpenters, painters, and more).

## 🚀 Features

### For Customers
- **Browse Services**: Search and filter services by category, price, location, and ratings
- **Post Requests**: Create service requests and receive quotes from professionals
- **Book Services**: Easy booking system with secure payment
- **Track Bookings**: Monitor ongoing and completed service bookings
- **Messaging**: Direct communication with service providers
- **Reviews & Ratings**: Leave feedback on completed services

### For Service Providers
- **Professional Profile**: Showcase skills, experience, and certifications
- **Service Management**: Manage service offerings and pricing
- **Receive Requests**: Get service requests and send quotes
- **Booking Management**: Accept/reject bookings and manage schedule
- **Build Reputation**: Earn ratings and reviews from satisfied customers
- **Messaging**: Communicate directly with clients

## 📁 Project Structure

```
remu-marketplace/
├── index.html                 # Login & Registration page
├── dashboard.html             # Main dashboard (customer/provider)
├── browse-services.html       # Browse available services
├── profile.html               # User profile page
├── my-bookings.html           # Bookings management
├── messages.html              # Messaging system
├── post-request.html          # Create service requests
├── style.css                  # Main styling
├── js/
│   ├── auth.js               # Authentication logic
│   ├── dashboard.js          # Dashboard functionality
│   ├── services.js           # Services browsing
│   └── utils.js              # Utility functions
└── README.md
```

## 🎨 Pages Included

### 1. **Login & Registration** (`index.html`)
- Dual role registration (Customer & Service Provider)
- Email & password authentication
- Role-specific signup forms

### 2. **Dashboard** (`dashboard.html`)
- Personalized welcome message
- Statistics cards (Active bookings, completed services, earnings, ratings)
- Recommended services (for customers)
- Pending requests (for providers)

### 3. **Browse Services** (`browse-services.html`)
- Advanced filtering (category, price, location, rating)
- Service cards with provider details
- Service detail modal
- Quick booking functionality

### 4. **User Profile** (`profile.html`)
- Personal information display
- Professional information (for providers)
- Ratings and reviews section
- Verification status
- Edit profile option

### 5. **My Bookings** (`my-bookings.html`)
- List all bookings with status
- Filter bookings by status
- View booking details
- Contact provider directly

### 6. **Messages** (`messages.html`)
- Conversations list
- Real-time chat interface
- Message history
- Typing indicator support (ready for backend)

### 7. **Post Service Request** (`post-request.html`)
- Service type selection
- Detailed job description
- Location and date inputs
- Budget specification
- Contact information

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive functionality
- **LocalStorage**: Client-side data persistence (demo)
- **Responsive Design**: Mobile-first approach

## 🎯 Demo Credentials

### Customer Account
- **Email**: `customer@example.com`
- **Password**: `password123`

### Service Provider Account
- **Email**: `john@example.com`
- **Password**: `password123`

## 🚀 Getting Started

1. Clone the repository
2. Open `index.html` in your web browser
3. Register a new account or use demo credentials
4. Explore the platform!

## 📱 Responsive Design

The platform is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔐 Security Notes

**Current Implementation**: This is a frontend demo using localStorage for data storage.

**For Production**, you need to:
1. Implement backend API (Node.js, Django, etc.)
2. Use secure password hashing (bcrypt, Argon2)
3. Implement JWT authentication
4. Use HTTPS for all communications
5. Add rate limiting and CAPTCHA
6. Implement user verification (email, phone)
7. Add payment gateway integration
8. Set up database (PostgreSQL, MongoDB)

## 🌐 Backend Integration Points

The frontend is ready for backend integration:
- `/api/auth/register` - User registration
- `/api/auth/login` - User login
- `/api/services` - Get all services
- `/api/services/:id` - Get service details
- `/api/bookings` - Create/manage bookings
- `/api/messages` - Messaging system
- `/api/profile` - User profile management

## 🎨 Color Scheme

- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#ec4899` (Pink)
- **Success**: `#10b981` (Green)
- **Warning**: `#f59e0b` (Amber)
- **Danger**: `#ef4444` (Red)

## 📝 Future Enhancements

- [ ] Real-time notifications
- [ ] Payment gateway integration
- [ ] Video call functionality
- [ ] Service analytics dashboard
- [ ] Advanced search with AI recommendations
- [ ] Mobile app (React Native)
- [ ] Escrow payment system
- [ ] Insurance integration
- [ ] Background verification for providers
- [ ] Multi-language support

## 📞 Support

For issues or questions, please open an issue on GitHub.

## 📄 License

MIT License - Feel free to use for personal or commercial projects.

---

**Built with ❤️ for Ghana's service industry**
