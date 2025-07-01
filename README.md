# Hidden Lotus - Wellness & Healing

**Version: 0.8.1**

A modern, mobile-first wellness website for Hidden Lotus, featuring yoga, reiki, and holistic healing services.

---

**Update 0.8.1:** Home page hero now uses `icon-hl-1.png` from public as the logo, styled responsively (max-width 160px, rounded, centered).

---

## 🧘‍♀️ Features

- **Mobile-first responsive design** with Tailwind CSS
- **Modern UI components** using PrimeReact with Lara Green theme
- **Interactive forms** with React Hook Form and Zod validation
- **Dynamic content** with reusable components
- **SEO optimized** with sitemap and proper metadata
- **Accessible design** following best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + PrimeFlex
- **UI Components**: PrimeReact
- **Icons**: PrimeIcons
- **Forms**: React Hook Form + Zod validation
- **Theme**: Custom earthy theme (sage green, brown/gold, pastel pink)

## 📱 Pages

- **Home** (`/`) - Hero section with action cards
- **Classes** (`/classes`) - Class listings with carousel and filters
- **Team** (`/team`) - Team member profiles with filtering
- **About** (`/about`) - Company information with carousel
- **Story** (`/story`) - Company stories with interactive dialogs
- **Contact** (`/contact`) - Multi-step contact form
- **MOR** (`/mor`) - Mission, Open Heart, Revival philosophy
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms of service

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

## 🌐 Deploying to Netlify

1. Push your code to your Git repository (GitHub, GitLab, etc).
2. Go to [Netlify](https://app.netlify.com/) and create a new site from Git.
3. Set the build command to `npm run build` and the publish directory to `.next`.
4. Set the environment variable `NEXT_PUBLIC_BASE_URL` if needed.
5. Click "Deploy Site".

Netlify will automatically detect Next.js and handle SSR/ISR routes. For best results, use the [Netlify Next.js Runtime](https://docs.netlify.com/integrations/frameworks/next-js/overview/).

## 🎨 Design System

### Colors

- **Primary Green**: `#48bb78` - Main brand color
- **Secondary Brown**: `#a0522d` - Accent color
- **Sage Green**: `#9ca3af` - Subtle accents
- **Brown Gold**: `#d69e2e` - Warm highlights
- **Pastel Pink**: `#fed7d7` - Soft accents
- **Light Tan**: `#f7fafc` - Background variations

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with primary green color
- **Body**: Regular weight with gray tones

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles and theme
│   ├── layout.tsx      # Root layout with providers
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   ├── layout/         # Layout components
│   └── ui/            # UI components
└── lib/               # Utilities and data
    ├── data.ts        # Mock data
    └── providers.tsx  # PrimeReact providers
```

## 🔧 Configuration

### Prettier

The project uses Prettier for code formatting with the following settings:

- Semi-colons: enabled
- Single quotes: enabled
- Tab width: 2 spaces
- Print width: 100 characters

### ESLint

Configured with Next.js recommended rules and TypeScript support.

## 📝 Development Guidelines

- Use functional components with TypeScript
- Follow mobile-first responsive design
- Implement proper error handling
- Use semantic HTML and accessibility best practices
- Keep components modular and reusable
- Use PrimeReact components where possible

## 🚀 Deployment

The project is ready for deployment on Vercel, Netlify, or any other Next.js-compatible platform.

## 📄 License

This project is proprietary to Hidden Lotus.

## 🤝 Contributing

Please follow the established coding standards and ensure all tests pass before submitting changes.

---

**Hidden Lotus** - Discover authentic wellness experiences in a peaceful environment.
