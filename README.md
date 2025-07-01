# Hidden Lotus - Wellness & Healing Center

A modern, responsive wellness web application built with Next.js 14+, TypeScript, and PrimeReact. Features a calming earthy theme with sage green, pastel pink, and warm tan colors perfect for a yoga and wellness center.

## 🌿 Features

- **Earthy Yoga Theme**: Calming color palette with darker sage green, pastel pink, and grounding tan backgrounds
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Interactive Components**: Auto-advancing carousels, filters, multi-step forms, and dialogs
- **PrimeReact Integration**: Professional UI components with custom theming
- **Type Safety**: Full TypeScript implementation
- **Form Validation**: React Hook Form with Zod schema validation
- **SEO Optimized**: Proper meta tags, sitemap, and semantic HTML
- **Loading States**: Smooth skeleton loading animations for all images
- **Icon System**: Comprehensive icon integration throughout the app

## 🎨 Design Philosophy

The app embodies a **chill yoga earthy vibe** with:

- **Darker Sage Green** (`#6b8e5a`) for primary accents and borders
- **Pastel Pink** (`#fbb6ce`) for highlights and secondary elements
- **Grounding Tan** (`#ede8e0`) background for a peaceful feel
- **Earth Brown** (`#8b7355`) for text and subtle accents
- **Soft gradients** and **hover effects** for enhanced user experience
- **Loading skeletons** for smooth image transitions

## 📱 Pages

- **Home**: Hero section with logo, action cards, and call-to-action
- **Classes**: Featured carousel with auto-advance, search/filter, and class grid
- **Team**: Filterable team member showcase with role-based icons
- **About**: Mission carousel with circular navigation and location information
- **Story**: Interactive story cards with dialogs and custom icons
- **Contact**: Multi-step form with validation and success feedback
- **MOR**: Philosophy explanation (Motion, Open Heart, Revival)
- **Privacy & Terms**: Legal pages with proper structure

## 🛠 Tech Stack

- **Framework**: Next.js 14.0.4 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS + PrimeFlex
- **UI Components**: PrimeReact 10.5.1
- **Icons**: PrimeIcons + Custom icon set
- **Forms**: React Hook Form + Zod validation
- **Deployment**: Netlify ready with stable configuration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd hidden-lotus
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Components

### Theme System

- Custom CSS variables for consistent theming
- `yoga-card` class for enhanced card styling
- `sage-border` utility for consistent borders
- Responsive color palette with hover effects
- Loading skeleton animations

### PrimeReact Integration

- Enhanced provider configuration
- Custom component styling
- Ripple effects and smooth transitions
- Proper z-index management
- Auto-advancing carousels with circular navigation

### Form Handling

- Multi-step contact form
- Real-time validation
- Success feedback with confetti effect
- Accessible form controls

### Image System

- Next.js Image optimization
- Loading skeletons for smooth transitions
- Error handling with fallback states
- Category-based icon mapping
- Lazy loading for performance

## 📁 Project Structure

```
hidden-lotus/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable UI components
│   │   ├── layout/         # Header and navigation
│   │   └── ui/             # Card and form components
│   └── lib/                # Data and utilities
├── public/                 # Static assets and images
├── globals.css             # Global styles and theme
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Colors

The app uses a carefully curated color palette defined in `globals.css`:

```css
:root {
  --background: #ede8e0; /* Grounding tan background */
  --sage-green: #6b8e5a; /* Darker sage green */
  --pastel-pink: #fbb6ce; /* Soft pink accents */
  --earth-brown: #8b7355; /* Earthy brown text */
  --soft-sage: #8baa7a; /* Light sage for backgrounds */
  --primary-green: #4a7c59; /* Darker primary green */
}
```

### Components

All components use the `yoga-card` class for consistent styling:

- Soft gradient backgrounds
- Sage green borders
- Hover animations
- Rounded corners
- Loading skeleton support

### Icons

The app uses a comprehensive icon system:

- **icon-hl-1.png**: Yoga and instructor-related content
- **icon-hl-2.png**: Reiki and admin-related content
- **icon-hl-3.png**: Seminar and board-related content
- **icon-mor-1.png**: Cupping and special content

## 🌐 Deployment

The app is configured for Netlify deployment with:

- `netlify.toml` configuration optimized for stability
- Next.js 14.0.4 for compatibility
- Optimized build settings
- Static site generation
- Proper redirects

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact us at [contact@hiddenlotus.com](mailto:contact@hiddenlotus.com)

---

**Version**: 0.8.3  
**Last Updated**: December 19, 2024  
**Status**: Production Ready ✨
