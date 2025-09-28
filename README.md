# FitVerse - Modern Gym Website

A comprehensive, modern gym website built with React.js featuring user authentication, diet plans, animated exercise guides, and email integration.

## 🚀 Features

### 🔐 Authentication System
- User login and signup
- Secure authentication context
- Protected dashboard for logged-in users

### 🏋️ Exercise Guide
- Day-wise workout plans (Monday to Saturday)
- Animated exercise demonstrations
- Step-by-step instructions
- Interactive exercise controls
- Different difficulty levels

### 🍎 Diet & Nutrition
- Multiple diet plans (Weight Loss, Muscle Gain, Maintenance)
- Detailed meal breakdowns with calories
- Nutrition tips and guidelines
- Interactive meal planning

### 📝 Membership Form
- Comprehensive joining form
- Email integration for form submissions
- Emergency contact information
- Medical condition tracking
- Membership type selection

### 🎨 Modern UI/UX
- Dark theme with gradient accents
- Smooth animations using Framer Motion
- Responsive design for all devices
- Glass morphism effects
- Interactive hover states

## 🛠️ Technology Stack

- **Frontend**: React.js 18
- **Styling**: CSS3 with custom animations
- **Animations**: Framer Motion
- **Icons**: Material-UI Icons
- **Email Service**: EmailJS
- **Build Tool**: Webpack
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd FitVerse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## ⚙️ Configuration

### Email Service Setup

To enable email functionality for the joining form:

1. **Create EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create an account and verify your email

2. **Set up Email Service**
   - Create a new service (Gmail, Outlook, etc.)
   - Note down your Service ID

3. **Create Email Templates**
   - Create templates for gym applications
   - Note down your Template IDs

4. **Update Configuration**
   - Open `src/utils/emailService.js`
   - Replace the placeholder values:
     ```javascript
     const EMAILJS_SERVICE_ID = 'your_service_id';
     const EMAILJS_TEMPLATE_ID = 'your_template_id';
     const EMAILJS_PUBLIC_KEY = 'your_public_key';
     ```

### Email Template Example

Create an email template with the following variables:
- `{{from_name}}` - Applicant's full name
- `{{from_email}}` - Applicant's email
- `{{phone}}` - Phone number
- `{{age}}` - Age
- `{{gender}}` - Gender
- `{{fitness_goal}}` - Fitness goal
- `{{experience}}` - Experience level
- `{{preferred_time}}` - Preferred workout time
- `{{medical_conditions}}` - Medical conditions
- `{{emergency_contact}}` - Emergency contact name
- `{{emergency_phone}}` - Emergency contact phone
- `{{membership_type}}` - Membership type
- `{{additional_info}}` - Additional information

## 🎯 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run dev` - Start development server with auto-open

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design Features

### Color Scheme
- Primary: #00d4ff (Cyan)
- Secondary: #ff6b35 (Orange)
- Background: Dark gradient (#0f0f23 to #16213e)
- Text: White with opacity variations

### Animations
- Smooth page transitions
- Hover effects on interactive elements
- Loading animations
- Exercise demonstration animations
- Gradient text effects

### Typography
- Font Family: Inter (Google Fonts)
- Multiple font weights (300-800)
- Responsive font sizes

## 🔧 Customization

### Adding New Exercises
1. Open `src/pages/ExerciseGuide.js`
2. Add new exercises to the `workoutPlans` object
3. Include animation class names for custom animations
4. Add corresponding CSS animations in `ExerciseGuide.css`

### Adding New Diet Plans
1. Open `src/pages/Diet.js`
2. Add new plans to the `dietPlans` object
3. Include detailed meal information
4. Add corresponding styling

### Modifying UI Components
- All components are modular and can be easily customized
- CSS variables are used for consistent theming
- Animation timings can be adjusted in component files

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Build the project
2. Upload the `dist` folder to your hosting service
3. Configure environment variables if needed

## 📄 File Structure

```
FitVerse/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Navbar.css
│   ├── context/
│   │   └── AuthContext.js
│   ├── pages/
│   │   ├── Home.js & Home.css
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── Auth.css
│   │   ├── Diet.js & Diet.css
│   │   ├── ExerciseGuide.js & ExerciseGuide.css
│   │   ├── JoinForm.js & JoinForm.css
│   │   └── Dashboard.js & Dashboard.css
│   ├── utils/
│   │   └── emailService.js
│   ├── App.js & App.css
│   ├── index.js & index.css
│   └── webpack.config.js
├── package.json
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions:
- Email: admin@fitverse.com
- Create an issue in the repository

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Material-UI for icons
- Framer Motion for animations
- EmailJS for email services
- Google Fonts for typography

---

**FitVerse** - Transform Your Body, Transform Your Life 💪

# FitVerse
