# Happy Code - Premium MERN Stack Developer Portfolio

A modern, premium dark theme portfolio website built with React, Tailwind CSS, and smooth animations. Showcasing freelance MERN stack development expertise.

## 🎨 Features

- **Modern Dark Theme**: Premium dark aesthetic with green accents
- **Smooth Animations**: Custom Tailwind animations with fade-in, slide, and scale effects
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Minimal & Clean**: Clutter-free design with focus on content
- **Interactive Elements**: Smooth scrolling, hover effects, and dynamic navigation
- **Performance Optimized**: Fast loading with Vite build tool
- **Accessibility**: Semantic HTML and accessible components

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3
- **Styling Method**: PostCSS + Autoprefixer
- **Animations**: Custom Tailwind keyframes
- **Email Service**: EmailJS (client-side email sending)

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails directly from the frontend without requiring a backend server.



## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Navigation bar with smooth scrolling
│   ├── Hero.tsx          # Hero section with CTA buttons
│   ├── About.tsx         # About me section
│   ├── Projects.tsx      # Featured projects showcase
│   ├── Skills.tsx        # Technical skills by category
│   ├── Contact.tsx       # Contact form and details
│   ├── Footer.tsx        # Footer with links
│   └── index.ts          # Component exports
├── App.tsx               # Main app component
├── main.tsx              # React entry point
└── index.css             # Global styles and animations
```

## 🎯 Sections

### 1. **Navbar**
- Fixed navigation with brand name
- Smooth scroll links to sections
- Mobile-responsive hamburger menu

### 2. **Hero**
- Eye-catching headline with gradient text
- Call-to-action buttons
- Animated stats cards
- Scroll indicator

### 3. **About**
- Professional bio
- Experience overview
- Stats showcase with intersection observer animations

### 4. **Projects**
- 6 featured projects with descriptions
- Technology tags for each project
- Responsive grid layout
- Hover effects and interactions

### 5. **Skills**
- Skills organized by category (Frontend, Backend, Database, Tools)
- Animated skill list with indicators
- Additional expertise section

### 6. **Contact**
- Functional contact form with EmailJS integration
- Real email sending to your inbox
- Contact information display
- Social media links
- Newsletter subscription input

### 7. **Footer**
- Brand information
- Quick navigation links
- Newsletter signup
- Legal links

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
- Primary color: Green (#10b981)
- Background: Gray-900
- Text: Gray-100

### Animations
All animations are defined in `tailwind.config.ts`. Available animations:
- `fadeIn` - Fade in animation
- `slideUp` - Slide up animation
- `slideInLeft` - Slide from left
- `slideInRight` - Slide from right
- `scaleIn` - Scale with fade
- `shimmer` - Shimmer effect
- `pulse` - Pulsing animation

### Content
Each component is self-contained and easy to modify:
- Update project data in `Projects.tsx`
- Modify skills in `Skills.tsx`
- Customize social links in `Contact.tsx` and `Footer.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- Built with Vite for instant HMR (Hot Module Replacement)
- Optimized bundle size with tree-shaking
- Lazy component loading with React
- CSS-based animations for smooth 60fps performance

## 🚀 Deployment

Build the project and deploy the `dist` folder to any static hosting:

```bash
npm run build
```

Suitable for:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting provider

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own portfolio!

## 📧 Contact

For inquiries about the template, reach out through the contact form on the website.

---

**Happy Code** - Building beautiful web experiences with modern technologies 💚
