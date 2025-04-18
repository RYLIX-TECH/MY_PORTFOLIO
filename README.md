
# Portfolio Website

![Dependencies](https://img.shields.io/david/yourusername/portfolio)
![License](MIT-blue.svg)
![Vite](https://img.shields.io/badge/vite-6.0.5-brightgreen)

A modern portfolio website built with React and Vite, featuring smooth animations and responsive design. Implements best practices for performance and maintainability.

## ✨ Key Features
- Responsive layout with mobile-first approach
- Smooth page transitions using Framer Motion
- Interactive project showcase with Swiper.js
- Contact form integration with EmailJS
- Optimized build process with Vite
- Custom ESLint configuration for code quality

## 🛠 Technologies
- **Frontend**: React 18 + Vite 6
- **Animation**: Framer Motion 11
- **Styling**: Styled Components 6
- **Sliders**: Swiper 11
- **Linting**: ESLint with React-specific rules
- **Backend**: Express.js (see `/backend`)

## 🚀 Installation
```bash
npm install
npm run dev
```

## ⚙ Configuration
Create `.env` file with:
```env
VITE_PORT=5173
VITE_ALLOWED_ORIGIN=http://localhost:5173
```

## 📂 Project Structure
```
portfolio/
├── src/              # Main application source
│   ├── assets/       # Static assets
│   ├── components/   # Reusable components
│   └── styles/       # Global styles
├── backend/          # Express server
├── public/             # Static files
└── vite.config.js    # Build configuration
```

## 🌐 Deployment
1. Build production assets:
```bash
npm run build
```
2. Deploy `dist` folder to your preferred hosting platform (Vercel, Netlify, etc.)

## 🤝 Contributing
Follow the ESLint rules and component structure patterns established in the codebase. Create feature branches and submit PRs for review.

---

*Based on original React + Vite template - now customized for portfolio use case*
