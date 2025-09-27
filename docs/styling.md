# Styling System Documentation

## 🎨 Styling Architecture

Hidden Lotus uses a multi-layered styling approach combining Tailwind CSS, PrimeReact theming, custom CSS, and CSS modules for a cohesive, maintainable design system.

## 📁 Style Organization

```
src/styles/
├── animations.css          # Keyframe animations
├── back-to-top.css        # Back-to-top component styles
├── filter-panel.css       # Filter panel specific styles
├── header.css             # Header component styles
├── home-buttons.css       # Home page button styles
├── layouts/               # Layout-specific styles
├── pages/                 # Page-specific styles
├── scrollbar.css          # Custom scrollbar styling
├── stepper.css            # Stepper component styles
├── themes/                # Theme variations
└── utilities/             # Utility classes
```

## 🎯 Design System

### Color Palette

The application uses a carefully crafted earthy, wellness-focused color scheme:

```css
:root {
	/* Primary Colors */
	--background: #f6d6a2; /* Light tan background */
	--foreground: #2d3748; /* Dark text */
	--sage-green: #6b8e5a; /* Primary sage green */
	--brown-gold: #d69e2e; /* Accent brown-gold */
	--pastel-pink: #fbb6ce; /* Soft pink accent */
	--light-tan: #f1e2bb; /* Light tan */

	/* Extended Palette */
	--primary-green: #4a7c59; /* Darker green */
	--secondary-brown: #a95a35; /* Secondary brown */
	--earth-brown: #8b7355; /* Earth brown */
	--soft-sage: #8baa7a; /* Soft sage */
	--olive-green: #9caa7a; /* Olive green */

	/* Sage Green Variations */
	--sage-green-200: #c8d5b9; /* Light sage */
	--sage-green-300: #a8c095; /* Medium sage */
	--sage-green-400: #8baa7a; /* Sage */
	--sage-green-600: #6b8e5a; /* Dark sage */
}
```

### Typography

```css
/* Font Families */
--font-inter: 'Inter', Arial, Helvetica, sans-serif;
--font-roboto-mono: 'Roboto Mono', monospace;

/* Font Weights */
font-weight: 400; /* Regular */
font-weight: 500; /* Medium */
font-weight: 600; /* Semibold */
font-weight: 700; /* Bold */
font-weight: 800; /* Extrabold */
```

### Spacing Scale

```css
/* Tailwind spacing scale with custom additions */
gap-1    /* 0.25rem */
gap-2    /* 0.5rem */
gap-3    /* 0.75rem */
gap-4    /* 1rem */
gap-6    /* 1.5rem */
gap-8    /* 2rem */
gap-12   /* 3rem */
gap-16   /* 4rem */
```

## 🏗️ Styling Layers

### 1. Tailwind CSS (Base Layer)

```css
/* Utility-first approach */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Configuration** (`tailwind.config.js`):

```javascript
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				tablet: '975px', // Custom breakpoint
			},
			colors: {
				// Custom color variables
				'sage-green': 'var(--sage-green)',
				'brown-gold': 'var(--brown-gold)',
				// ... more custom colors
			},
			fontFamily: {
				sans: [
					'var(--font-inter)',
					'Inter',
					'Arial',
					'Helvetica',
					'sans-serif',
				],
				mono: ['var(--font-roboto-mono)', 'Roboto Mono', 'monospace'],
			},
		},
	},
	plugins: [],
}
```

### 2. PrimeReact Theming

```css
/* PrimeReact theme integration */
@import 'primereact/resources/themes/lara-light-green/theme.css';
@import 'primereact/resources/primereact.min.css';
@import 'primeicons/primeicons.css';
@import 'primeflex/primeflex.css';
```

**Custom PrimeReact Configuration**:

```typescript
// src/lib/providers.tsx
<PrimeReactProvider
  value={{
    pt: {
      card: {
        root: {
          className: 'yoga-card',
        },
      },
      button: {
        root: {
          className: 'transition-all duration-300',
        },
      },
    },
    ripple: true,
    inputStyle: 'filled',
  }}
>
```

### 3. Custom CSS Classes

```css
/* Component-specific classes */
.yoga-card {
	background: linear-gradient(135deg, var(--light-tan) 0%, #f0ede4 100%);
	border: 1px solid var(--soft-sage);
	border-radius: 20px;
	transition: all 0.3s ease;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	text-align: center;
}

.yoga-card:hover {
	transform: translateY(-2px);
	box-shadow: 0 8px 25px rgba(107, 142, 90, 0.15);
}
```

## 🎭 Animation System

### Keyframe Animations

```css
/* Fade in up animation */
@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

/* Slide animations */
@keyframes slideInFromLeft {
	from {
		opacity: 0;
		transform: translateX(-30px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}

@keyframes slideInFromRight {
	from {
		opacity: 0;
		transform: translateX(30px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
```

### Animation Classes

```css
/* Utility animation classes */
.fadeInUp {
	animation: fadeInUp 0.8s ease-out;
}

.slideInLeft {
	animation: slideInFromLeft 0.6s ease-out;
}

.slideInRight {
	animation: slideInFromRight 0.6s ease-out;
}

/* Staggered animations */
.stagger-1 {
	animation-delay: 0.1s;
}
.stagger-2 {
	animation-delay: 0.2s;
}
.stagger-3 {
	animation-delay: 0.3s;
}
.stagger-4 {
	animation-delay: 0.4s;
}
.stagger-5 {
	animation-delay: 0.5s;
}
.stagger-6 {
	animation-delay: 0.6s;
}
```

### Hover Effects

```css
/* Hover lift effect */
.hover-lift:hover {
	transform: translateY(-2px);
	box-shadow: 0 8px 25px rgba(107, 142, 90, 0.15);
}

/* Button hover effects */
.p-button:hover {
	opacity: 1;
	transform: translateY(-1px);
}

.p-button:active {
	transform: translateY(0);
}
```

## 📱 Responsive Design

### Breakpoint System

```css
/* Mobile First Approach */
/* Base styles for mobile */

/* Tablet breakpoint */
@media (min-width: 975px) {
	.tablet\:block {
		display: block;
	}
	.tablet\:hidden {
		display: none;
	}
}

/* Desktop breakpoints */
@media (min-width: 1200px) {
	/* Desktop styles */
}

@media (min-width: 1600px) {
	/* Large desktop styles */
}
```

### Responsive Grid System

```css
/* Card grid responsiveness */
.card-grid {
	display: grid;
	gap: 1.5rem;
	grid-template-columns: 1fr; /* Mobile: single column */
}

@media (min-width: 768px) {
	.card-grid {
		grid-template-columns: repeat(2, 1fr); /* Tablet: two columns */
	}
}

@media (min-width: 1200px) {
	.card-grid {
		grid-template-columns: repeat(3, 1fr); /* Desktop: three columns */
	}
}
```

## 🎨 Component-Specific Styles

### Header Styles

```css
/* src/styles/header.css */
.header-blur {
	backdrop-filter: blur(10px);
	background: rgba(255, 255, 255, 0.8);
	border-bottom: 1px solid var(--sage-green-200);
}

.lotus-title-fancy {
	background: linear-gradient(
		135deg,
		var(--primary-green),
		var(--sage-green-600)
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
}
```

### Filter Panel Styles

```css
/* src/styles/filter-panel.css */
.filter-panel {
	border-radius: 16px;
	border: 2px solid var(--primary-green);
	background: rgba(255, 255, 255, 0.6);
	backdrop-filter: blur(10px);
}

.filter-panel .p-panel-header {
	background: transparent;
	border: none;
	padding: 1rem;
}
```

### Membership Page Styles

```css
/* Extensive membership page styling in globals.css */
.membership-tabs .p-tabview-nav {
	border-bottom: 2px solid #c8d5b9;
	margin-bottom: 2rem;
	background: rgba(255, 255, 255, 0.8);
	border-radius: 12px 12px 0 0;
	padding: 0.5rem;
	transition: all 0.3s ease;
}

.program-card {
	background: rgba(255, 255, 255, 0.9);
	backdrop-filter: blur(10px);
	border: 1px solid #c8d5b9;
	border-radius: 16px;
	transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	padding: 1.5rem;
	box-shadow: 0 4px 16px rgba(107, 142, 90, 0.1);
	animation: fadeInUp 0.8s ease-out;
}
```

## 🔧 Utility Classes

### Color Utilities

```css
/* Background colors */
.bg-sage {
	background-color: var(--sage-green);
}
.bg-soft-sage {
	background-color: var(--soft-sage);
}
.bg-brown-gold {
	background-color: var(--brown-gold);
}
.bg-pastel-pink {
	background-color: var(--pastel-pink);
}
.bg-light-tan {
	background-color: var(--light-tan);
}
.bg-earth-brown {
	background-color: var(--earth-brown);
}

/* Text colors */
.text-sage {
	color: var(--sage-green);
}
.text-soft-sage {
	color: var(--soft-sage);
}
.text-brown-gold {
	color: var(--brown-gold);
}
.text-primary-green {
	color: var(--primary-green);
}
.text-secondary-brown {
	color: var(--secondary-brown);
}
.text-earth-brown {
	color: var(--earth-brown);
}
```

### Border Utilities

```css
.sage-border {
	border-color: var(--sage-green-200);
}
.border-sage-green-200 {
	border-color: var(--sage-green-200);
}
.border-sage-green-400 {
	border-color: var(--sage-green-400);
}
.border-sage-green-600 {
	border-color: var(--sage-green-600);
}
.border-pastel-pink {
	border-color: var(--pastel-pink);
}
.border-primary-green {
	border-color: var(--primary-green);
}
```

### Border Radius Utilities

```css
.soft-rounded {
	border-radius: 12px;
}
.soft-rounded-sm {
	border-radius: 8px;
}
.soft-rounded-lg {
	border-radius: 16px;
}
```

## 🎯 PrimeReact Customization

### Button Styling

```css
.p-button {
	border-radius: 12px !important;
	padding: 0.75rem 1.5rem !important;
	font-weight: 600 !important;
	opacity: 0.9 !important;
	transition: opacity 0.2s ease, transform 0.2s ease !important;
}

.p-button:hover {
	opacity: 1 !important;
	transform: translateY(-1px) !important;
}

.p-button:active {
	transform: translateY(0) !important;
}
```

### Input Styling

```css
.p-inputtext {
	border-radius: 12px !important;
	padding: 0.75rem 1rem !important;
	border-color: var(--earth-brown) !important;
	background-color: var(--light-tan) !important;
	color: var(--earth-brown) !important;
	width: 100% !important;
}

.p-inputtext:focus {
	border-color: var(--sage-green-600) !important;
	box-shadow: 0 0 0 0.2rem rgba(107, 142, 90, 0.2) !important;
}
```

### Card Styling

```css
.p-card {
	border-radius: 20px !important;
	overflow: hidden;
}

.p-card .p-card-body {
	padding: 1.5rem !important;
}

.p-card .p-card-content {
	padding: 1.5rem !important;
}

.p-card .p-card-footer {
	padding: 1rem 1.5rem !important;
	border-radius: 0 0 20px 20px !important;
}
```

## 🎨 Theme System

### CSS Custom Properties

The theme system uses CSS custom properties for easy theming and consistency:

```css
:root {
	/* Light theme (default) */
	--background: #f6d6a2;
	--foreground: #2d3748;
	--sage-green: #6b8e5a;
	/* ... other colors */
}

/* Dark theme (future implementation) */
[data-theme='dark'] {
	--background: #1a1a1a;
	--foreground: #ffffff;
	--sage-green: #8baa7a;
	/* ... dark theme colors */
}
```

### Component Theming

```css
/* Yoga-themed component styling */
.yoga-card {
	background: linear-gradient(135deg, var(--light-tan) 0%, #f0ede4 100%);
	border: 1px solid var(--soft-sage);
	border-radius: 20px;
	transition: all 0.3s ease;
}

/* Icon container styling */
.icon-container {
	width: 64px;
	height: 64px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--sage-green-200);
	transition: all 0.3s ease;
}

.icon-container:hover {
	background: var(--sage-green-300);
	transform: scale(1.05);
}
```

## 🚀 Performance Optimizations

### CSS Optimization

```css
/* Efficient selectors */
.yoga-card {
	/* Single class selector */
}
.yoga-card:hover {
	/* Pseudo-class */
}
.yoga-card .p-card-body {
	/* Descendant selector */
}

/* Avoid expensive selectors */
/* ❌ Avoid: .yoga-card * { } */
/* ✅ Use: .yoga-card .specific-child { } */
```

### Critical CSS

```css
/* Above-the-fold styles inlined */
/* Critical animations */
@keyframes fadeInUp {
	/* Only essential keyframes */
}
```

### CSS Custom Properties

```css
/* Use CSS custom properties for dynamic theming */
.yoga-card {
	background: var(--card-background, var(--light-tan));
	border-color: var(--card-border, var(--soft-sage));
}
```

## 📱 Mobile-First Approach

### Base Styles (Mobile)

```css
/* Mobile-first base styles */
.yoga-card {
	padding: 1rem;
	margin-bottom: 1rem;
}

.membership-tabs .p-tabview-nav {
	flex-direction: column;
	gap: 0.5rem;
}
```

### Progressive Enhancement

```css
/* Tablet enhancements */
@media (min-width: 975px) {
	.yoga-card {
		padding: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.membership-tabs .p-tabview-nav {
		flex-direction: row;
		gap: 1rem;
	}
}
```

## 🎯 Accessibility Considerations

### Focus States

```css
/* High contrast focus indicators */
.p-button:focus {
	box-shadow: 0 0 0 0.2rem rgba(107, 142, 90, 0.2);
}

.p-inputtext:focus {
	border-color: var(--sage-green-600);
	box-shadow: 0 0 0 0.2rem rgba(107, 142, 90, 0.2);
}
```

### Color Contrast

```css
/* WCAG compliant color combinations */
.text-primary-green {
	/* High contrast on light backgrounds */
}
.text-earth-brown {
	/* Readable secondary text */
}
.bg-sage-green-600 {
	/* Sufficient contrast for text */
}
```

## 🧪 Testing Considerations

### Visual Regression Testing

- Screenshot comparisons for component styles
- Responsive layout testing
- Cross-browser compatibility
- Animation state testing

### Performance Testing

- CSS bundle size analysis
- Critical CSS extraction
- Animation performance
- Layout shift measurement

---

_This styling system provides a comprehensive, maintainable, and performant approach to styling the Hidden Lotus wellness platform while maintaining consistency and accessibility._
