# Changelog

All notable changes to the Hidden Lotus project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.9.3] - 2024-12-19

### Changed

- **Contact Form Stepper**: Replaced Steps component with proper Stepper and StepperPanel components
- **Vertical Orientation**: Contact form now uses vertical stepper orientation for better mobile experience
- **Theme Integration**: Added custom CSS styling for stepper to match Hidden Lotus theme colors
- **Form Structure**: Improved form layout with proper panel-based navigation
- **Button Styling**: Updated stepper navigation buttons with theme-appropriate colors

### Technical

- Updated contact form to use PrimeReact Stepper component instead of Steps
- Added custom stepper CSS with sage green, pastel pink, and earth brown color scheme
- Improved mobile responsiveness for stepper component
- Enhanced form validation and user experience

## [0.9.2] - 2024-12-19

### Added

- Sticky/fixed header: header and hamburger menu are always visible at the top
- Custom 404/Not Found page with logo, helpful links, and navigation
- Story cards: single column, fixed larger size, always centered
- SEO: Improved global metadata, OpenGraph, Twitter, robots, and 404 page SEO

### Changed

- Team card image is now perfectly centered
- Learn More button is always at the bottom of the team card
- All team cards and story cards have consistent sizing and spacing
- Story data moved to `src/constants/stories.ts`

### Fixed

- No layout changes to Home page
- All navigation and sidebar remain accessible and sticky

## [0.9.1] - 2024-12-19

### Added

- Fixed team card sizing with consistent height and layout
- Extracted reusable HeroSection and ButtonGroup components
- Created constants folder with organized data files (team, classes, MOR)
- Added 10+ new team members with diverse backgrounds and specialties
- Added 8+ new classes including meditation, fitness, and healing sessions
- Improved component organization and reusability

### Changed

- Updated all pages to use new HeroSection component for cleaner code
- Replaced hardcoded data with imported constants
- Updated header logo to be larger with rounded corners (removed green background)
- Enhanced team card layout with flex-grow for consistent button positioning
- Improved component structure and maintainability

### Fixed

- Team cards now have fixed height (500px) for consistent appearance
- Header icon styling improved with larger size and rounded corners
- Component imports updated to use new constants structure
- Type safety improvements across all components

## [0.9.0] - 2024-12-19

### Added

- Dynamic routes for classes (`/classes/[id]`) with detailed booking system
- Dynamic routes for team members (`/team/[name]`) with comprehensive profiles
- Enhanced data structure with detailed class and team member information
- Booking system with calendar selection, form validation, and confirmation dialogs
- Class carousels on team member pages showing their taught classes
- Podcast category and session for Jaideep Pa
- Comprehensive contact information for all team members
- Responsive mobile stepper for contact form
- Custom useMediaQuery hook for responsive design

### Changed

- Updated Jaideep Singh to Jaideep Pa throughout the application
- Fixed tag colors for better contrast and visibility
- Replaced custom tag styling with PrimeReact Tag components
- Updated class cards to link directly to dynamic class pages
- Added "Learn More" buttons to team cards linking to member profiles
- Enhanced card styling with consistent heights and improved spacing
- Improved navigation with direct links to detailed pages
- Increased icon sizes for better visibility (88px for class/team icons)
- Fixed team card image centering issues
- Reduced padding and line height for better card layout
- Added mobile-responsive stepper styling for contact form
- Updated Next.js config to support images from both localhost and Netlify
- Enhanced active menu item styling with proper background contrast

## [0.8.3] - 2024-12-19

### Fixed

- **Netlify Deployment**: Fixed deployment issues by downgrading to stable Next.js 14.0.4 and compatible dependencies
- **Build Compatibility**: Resolved lightningcss module errors that were causing Netlify build failures
- **Image Optimization**: Replaced all `<img>` tags with Next.js `<Image>` components for better performance

### Enhanced

- **Color Scheme**: Made green text and buttons darker for better contrast and readability
- **Background**: Darkened the background to a more grounding tan tone (`#ede8e0`)
- **Icon Integration**: Added comprehensive icon usage throughout all card components using the new icon set
- **Loading States**: Implemented loading skeletons for all images with smooth transitions
- **Carousel Behavior**: Added auto-advance with circular navigation (wraps to beginning when reaching end)
- **Performance**: Improved image loading with proper error handling and fallback states

### Changed

- **Primary Green**: Updated to darker shade (`#4a7c59`) for better text contrast
- **Sage Green**: Refined to darker tone (`#6b8e5a`) for enhanced visibility
- **Soft Sage**: Adjusted to complementary darker shade (`#8baa7a`)
- **Background**: Updated to darker tan (`#ede8e0`) for more grounding feel
- **Dependencies**: Downgraded Next.js to 14.0.4 for Netlify compatibility
- **Image Loading**: All images now use Next.js Image component with loading states

### Technical

- **LoadingSkeleton Component**: Created reusable skeleton component for consistent loading states
- **Icon Mapping**: Implemented category-based icon mapping for classes, team members, and stories
- **Error Handling**: Added proper error states for image loading failures
- **Netlify Config**: Updated configuration for stable deployment environment
- **Build Optimization**: Resolved all ESLint warnings and improved build performance

## [0.8.2] - 2024-12-19

### Enhanced

- **Theme & Styling**: Completely updated the app with a more tan background and enhanced earthy yoga vibe
- **Color Palette**: Refined sage green, pastel pink, and earth brown color scheme throughout the app
- **Card Design**: All cards now feature the new `yoga-card` styling with soft gradients and sage green borders
- **Centered Layouts**: All card grids are now properly centered using PrimeFlex utilities
- **PrimeReact Providers**: Enhanced provider configuration with custom theme options and better component styling
- **Component Updates**: Updated all UI components (ClassCard, TeamCard, StoryCard) with new color schemes and styling
- **Header Enhancement**: Improved header with better navigation styling and active state indicators
- **Form Styling**: Enhanced contact form with new color scheme and better visual hierarchy

### Changed

- Background color updated to a warmer tan tone (`#f5f1e8`)
- Sage green color refined to a more natural tone (`#87a96b`)
- Pastel pink updated to a softer, more complementary shade (`#fbb6ce`)
- All text colors updated to use the new `earth-brown` color for better readability
- Button styling updated with new color combinations and hover effects

### Technical

- Added new CSS custom properties for enhanced theming
- Implemented `yoga-card` class with gradient backgrounds and hover effects
- Added `sage-border` utility class for consistent border styling
- Enhanced PrimeReact provider configuration with custom component styling

## [0.8.1] - 2024-12-19

### Added

- **Logo Integration**: Added the `icon-hl-1.png` image as the main logo placeholder
- **Responsive Logo**: Logo displays with max width 160px, rounded corners, and centered alignment
- **Logo Styling**: Applied proper responsive styling with object-contain for aspect ratio preservation

### Changed

- Updated hero section to prominently feature the Hidden Lotus logo
- Enhanced visual hierarchy with the logo as the primary brand element

## [0.8.0] - 2024-12-19

### Added

- **Initial Release**: Complete wellness web app with Next.js 15+ and TypeScript
- **PrimeReact Integration**: Full integration with PrimeReact components, PrimeFlex, and PrimeIcons
- **Earthy Theme**: Global theme with sage green, brown/gold, pastel pink, and light tan colors
- **Responsive Layout**: Mobile-first design with hamburger menu using PrimeReact Sidebar
- **Page Structure**: Complete page setup including Home, Classes, Team, About, Story, Contact, MOR, Privacy, and Terms
- **Component Library**: Reusable components (ClassCard, TeamCard, StoryCard) with consistent styling
- **Form Handling**: Multi-step contact form with React Hook Form and Zod validation
- **Data Management**: Centralized data structure for classes, team members, and stories
- **Navigation**: Header with responsive navigation and active state management
- **Build Configuration**: Optimized for Netlify deployment with proper configuration files

### Features

- **Home Page**: Hero section with logo, action cards, and call-to-action
- **Classes Page**: Carousel of featured classes, search/filter functionality, and grid layout
- **Team Page**: Filterable team member grid with role-based filtering
- **About Page**: Carousel content and location information
- **Story Page**: Interactive story cards with dialog functionality
- **Contact Page**: Multi-step form with validation and success feedback
- **MOR Page**: Philosophy explanation with Motion, Open Heart, Revival sections
- **Privacy & Terms**: Comprehensive legal pages with proper content structure

### Technical

- **Next.js 15.3.4**: Latest version with App Router
- **TypeScript**: Full type safety throughout the application
- **TailwindCSS**: Utility-first styling with custom theme integration
- **PrimeReact**: Component library with custom theming
- **React Hook Form**: Form handling with Zod validation
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **SEO Ready**: Proper meta tags, sitemap, and semantic HTML structure

## [0.9.5] - 2024-12-19

### Changed

- Header logo resized to 45x45px, rounded corners, less hardcoded styling
- Hamburger menu restored to previous size and style, only color/location/icon set
- Header and sidebar backgrounds now use earthy light brown with subtle blur, no white
- Top nav menu bar items use earthy theme colors, not white
- Sidebar moved to right, uses light brown/green/pink, no white
- Sidebar highlighted menu item is green/glowing, not white
- Sidebar text/links use earthy theme colors
- Sidebar title improved, logo (50x50px) added in header prop

### Fixed

- Removed invalid Sidebar contentClassName prop
- Fixed hamburger menu visibility and style
- Sidebar and header now visually consistent with theme

## [1.0.0] - 2024-01-15

### Added

- Initial release of Hidden Lotus wellness website
- Complete Next.js 15+ application with App Router
- Mobile-first responsive design with Tailwind CSS
- PrimeReact integration with Lara Green theme
- Comprehensive page structure:
  - Home page with hero section and action cards
  - Classes page with carousel and filtering
  - Team page with member profiles and filtering
  - About page with carousel and location info
  - Story page with interactive dialogs
  - Contact page with multi-step form
  - MOR philosophy page
  - Privacy policy and terms of service pages
- Reusable UI components:
  - ClassCard component
  - TeamCard component
  - StoryCard component
  - Header with navigation sidebar
- Form handling with React Hook Form and Zod validation
- SEO optimization with sitemap.xml
- Custom earthy theme with sage green, brown/gold, and pastel pink colors
- Mock data for classes, team members, and stories
- Prettier configuration for code formatting
- Comprehensive README with setup instructions

### Technical Features

- TypeScript for type safety
- PrimeFlex for layout utilities
- PrimeIcons for consistent iconography
- Responsive design for all screen sizes
- Accessibility best practices
- Modern React patterns and hooks
- Clean component architecture

### Design System

- Custom CSS variables for theme colors
- Consistent typography with Inter font
- Mobile-first responsive breakpoints
- Consistent spacing and layout patterns
- Accessible color contrast ratios

---

## Version History

- **0.8.3** - Netlify fixes, darker colors, new icons, carousel improvements
- **0.8.2** - Theme and styling updates
- **0.8.1** - Home hero uses icon-hl-1.png as logo
- **0.8.0** - Project root restructuring, Netlify prep, image updates
- **1.0.0** - Initial release with complete website functionality
