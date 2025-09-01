# Changelog

All notable changes to the Hidden Lotus project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2024-12-19

### 🎉 Booking System Removal & Membership Page Addition

#### Added

- **New Membership Page**:

  - Created comprehensive membership page with PrimeReact TabView
  - Added three main sections: Membership Details, Features & Programs, and Pricing & Plans
  - Implemented responsive design with custom CSS styling
  - Added membership navigation to all menu components

- **Membership Page Features**:
  - Hero section with compelling membership description
  - TabView with detailed membership information
  - Program cards showcasing wellness offerings
  - Pricing section with transparent membership costs
  - Responsive design for all screen sizes

#### Changed

- **Booking System Removal**:

  - Commented out booking functionality from all pages
  - Updated robots.txt to disallow booking-related pages
  - Removed booking dialogs and forms from class detail pages
  - Changed "Book Now" buttons to "Details" buttons throughout the site

- **Navigation Updates**:

  - Added Membership page to all navigation menus
  - Updated menu icons to accommodate new membership link
  - Changed MOR icon from heart to star to avoid conflicts

- **Button Text Changes**:
  - Changed "Book Now" to "Details" on class cards and pages
  - Updated home page "Book Consultation" to "Get in Touch"
  - Removed booking buttons from class detail pages

#### Removed

- **Booking Functionality**:
  - Removed booking dialogs and forms from class detail pages
  - Removed booking-related state management
  - Removed booking form validation and submission logic
  - Removed success dialogs for booking confirmations

#### Technical

- **New Files Created**:

  - `src/app/membership/page.tsx`: Main membership page component
  - Added membership styles to global CSS for proper styling and CSS variable access

- **Updated Files**:
  - Updated robots.txt to disallow booking pages
  - Modified navigation components to include membership
  - Updated class cards and detail pages to remove booking functionality
  - Enhanced home page with updated contact section

---

## [2.0.0] - 2024-12-19

### 🎉 Major Release - Enhanced User Experience & Type Safety

#### Added

- **Enhanced Filter Panel UX**:

  - Entire header is now clickable to open/close filters
  - Added descriptive text ("Open Filters" / "Close Filters") next to toggle icon
  - Tooltips provide guidance on hover
  - Toast notifications for filter state changes
  - Improved accessibility and user feedback

- **Comprehensive Type Safety Overhaul**:

  - Removed all `any` and `unknown` types throughout the codebase
  - Created centralized type system in `src/types/` directory
  - Added proper TypeScript interfaces for all components and data structures
  - Enhanced type safety for forms, filters, and API responses

- **Additional Story Content**:

  - Added 3 new comprehensive wellness stories
  - Enhanced story content with detailed personal journeys
  - Improved story categorization and metadata

- **Enhanced 404 Page**:
  - Added animations and gradient background
  - Improved visual design with better typography
  - Enhanced user guidance with helpful links

#### Changed

- **Filter Panel Layout**:

  - Unified filter styling across Classes, Team, and Stories pages
  - Full-width filter panels with consistent padding
  - Improved filter panel responsiveness and accessibility

- **Card Image Sizing**:

  - Fixed oversized images in all card components
  - Standardized image dimensions for consistent appearance
  - Added proper loading skeletons for all images

- **Team Member Profiles**:

  - Fixed 404 errors when accessing team member profiles
  - Enhanced URL handling for both encoded and hyphenated names
  - Added proper image paths for all team members

- **Component Architecture**:
  - Reorganized component structure for better maintainability
  - Enhanced reusability of common components
  - Improved code organization and modularity

#### Fixed

- **Type Safety Issues**:

  - Resolved all TypeScript compilation errors
  - Fixed import/export issues with type definitions
  - Enhanced generic type support for form components

- **UI/UX Issues**:

  - Fixed filter panel styling inconsistencies
  - Resolved card layout and sizing problems
  - Corrected team member profile navigation
  - Fixed image loading and skeleton states

- **Build and Performance**:
  - Resolved all linting errors and warnings
  - Fixed client/server component mismatches
  - Enhanced build stability and performance

#### Technical

- **Type System**: Created comprehensive type definitions in `src/types/`

  - `core.ts`: Core application types
  - `data.ts`: Data structure types
  - `components.ts`: Component prop types
  - `forms.ts`: Form-related types
  - `utils.ts`: Utility type helpers

- **Component Enhancements**:

  - Enhanced FilterPanel with clickable headers and toast notifications
  - Improved DisplayCard with consistent image sizing
  - Fixed team member dynamic routing
  - Enhanced 404 page with animations

- **Code Quality**:
  - Removed unused imports and variables
  - Fixed unescaped characters in strings
  - Enhanced code consistency and maintainability
  - Improved error handling and edge cases

## [1.0.6] - 2024-12-19

### Added

- **Hidden Lotus Input Components**: Created reusable input components with built-in labels and error handling
- **InputTextHL**: Wrapper for PrimeReact InputText with customizable label width and error display
- **DropdownHL**: Wrapper for PrimeReact Dropdown with customizable label width and error display
- **InputTextareaHL**: Wrapper for PrimeReact InputTextarea with customizable label width and error display
- **Label Width Customization**: All input components support customizable label widths (in rem)

### Changed

- **Contact Page Refactoring**: Replaced all form inputs with new Hidden Lotus input components
- **PrimeReact Props Usage**: Updated buttons to use `outlined` prop instead of `className="p-button-outlined"`
- **Bundle Size Optimization**: Contact page reduced from 4.06 kB to 2.57 kB
- **Form Consistency**: All form inputs now have consistent styling and behavior

### Fixed

- **Form Accessibility**: Improved form accessibility with proper labels and error handling
- **Code Reusability**: Created modular input components for use across the entire application
- **Type Safety**: Enhanced TypeScript interfaces for all input components
- **Label Styling**: Fixed label width vs font size confusion - now supports label width customization

### Technical

- Created `src/components/common/inputs/` directory for all input components
- Implemented proper form ID connections for accessibility
- Added support for required field indicators with red asterisks
- Enhanced error display with consistent styling
- Improved component exports through index.ts files
- Labels use default font size (text-sm) with customizable width

## [1.0.5] - 2024-12-19

### Fixed

- **Class Card Layout**: Fixed specific div under p-card-content causing horizontal layout in class cards
- **CSS Specificity**: Added targeted CSS rule to force vertical layout for card content divs
- **PrimeReact Props**: Updated components to use PrimeReact props (e.g., `size="small"`) instead of className where possible

### Changed

- **Code Refactoring**: Broke down large classes page into smaller, reusable components
- **Component Organization**: Created `src/components/classes/` directory with feature-specific components
- **Reusable Form Fields**: Created `FormField` component with built-in label and controller wrapper
- **Bundle Size**: Reduced classes page bundle size from 14.3 kB to 5.28 kB through better code organization

### Added

- **ClassesFilter**: Reusable filter component with search, category, and level filters
- **ClassesGrid**: Dedicated grid component for displaying filtered classes
- **ResultsCount**: Component showing result count and active filter tags
- **FormField**: Reusable form field component supporting input and dropdown types

### Technical

- Added CSS rule `.yoga-card .p-card-content > div { flex-direction: column !important; }` to fix layout
- Created modular component architecture for better maintainability
- Implemented proper TypeScript interfaces for all new components
- Enhanced component reusability across the application
- Improved code organization with feature-based component structure

## [1.0.4] - 2024-12-19

### Fixed

- **Card Layout Orientation**: Fixed card content displaying horizontally instead of vertically
- **Content Flow**: Ensured proper vertical flow: image → title → tags → profession → credentials → description
- **CSS Conflicts**: Resolved conflicting flex styles between yoga-card and generic p-card CSS
- **Layout Consistency**: All cards now display content in proper vertical column layout

### Technical

- Enhanced yoga-card CSS specificity with `!important` declarations to override generic p-card styles
- Updated card content div to use `flex flex-col justify-center items-center` for proper vertical alignment
- Fixed CSS cascade issues that were causing horizontal layout instead of vertical
- Maintained all existing colors, sizing, and styling while fixing only the layout orientation

## [1.0.3] - 2024-12-19

### Fixed

- **Navigation Performance**: Replaced `window.location.href` with Next.js `router.push()` for faster client-side navigation
- **Active Item Logic**: Fixed active menu item detection to properly highlight current page
- **Sidebar Navigation**: Improved mobile sidebar navigation with proper active state styling
- **Menu Bar Navigation**: Enhanced desktop menu bar with working active item indicators

### Changed

- **Routing Best Practices**: Implemented proper Next.js routing patterns for better performance
- **Navigation UX**: Added visual feedback for active menu items across all navigation components
- **Dropdown Styling**: Enhanced Info dropdown menu styling with proper active states

### Technical

- Replaced all `window.location.href` calls with `router.push()` for client-side navigation
- Added `isActive()` function with proper path matching logic (exact match for home, startsWith for others)
- Enhanced CSS for active menu items in both desktop and mobile navigation
- Improved dropdown menu styling with backdrop blur and proper hover states
- Added `useRouter` hook to all navigation components for consistent routing

## [1.0.2] - 2024-12-19

### Fixed

- **Card Layout**: Fixed card content displaying in row instead of column layout
- **Flex Layout**: Resolved conflicting flex styles causing layout issues
- **Content Centering**: Improved card content centering and vertical alignment

### Changed

- **Card Sizing**: Replaced aspect ratio-based sizing with fixed dimensions for consistent card appearance
- **DisplayCard Component**: Updated to use fixed width and height instead of responsive aspect ratios
- **Card Dimensions**: Implemented three size options: small (256×320px), medium (288×352px), large (320×384px)
- **Grid Layout**: All cards now have consistent sizing across team, class, story, and MOR pages
- **CSS Updates**: Enhanced yoga-card styling with proper width/height constraints and flex behavior

### Technical

- Fixed card content div to use `h-full flex flex-col justify-center` instead of `flex-1 flex flex-col justify-center`
- Removed conflicting CSS styles from yoga-card body and content selectors
- Replaced `aspectRatio` prop with `cardSize` prop in DisplayCard component
- Added `getCardDimensions()` function for consistent sizing logic
- Updated card container to use fixed Tailwind classes instead of aspect ratios
- Enhanced card content layout with proper flex centering
- Improved CSS for consistent card behavior across all screen sizes

## [1.0.1] - 2024-12-19

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

## [0.9.7] - 2024-12-19

### Added

- **Back to Top Component**: Custom component using PrimeReact ScrollTop with theme styling
- **Global Navigation**: Back to Top button available on all pages when scrolling down
- **Theme Integration**: Styled with sage green gradient, pastel pink hover effects, and lotus flower icon

### Features

- Appears when scrolling down 100px from top
- Positioned bottom-right with smooth animations
- Uses lotus flower icon from lucide-react
- Hover effects with color transitions and elevation
- Fully responsive and accessible

## [0.9.6] - 2024-12-19

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

## [0.10.0] - 2024-12-19

### Added

- **Enhanced Class System**: Added support for multiple categories per class (e.g., yoga + fitness, meditation + healing)
- **New Classes**: Added 8 new classes including Power Yoga & Strength Training, Sound Healing & Meditation, Pilates & Core Strength, Breathwork & Energy Activation, Weight Training Fundamentals, Crystal Healing & Chakra Balancing, and Mindful Movement & Flow
- **New Team Members**: Added 3 new instructors (Alex Chen - Nutritionist, James Wilson - Fitness Coach, Maria Garcia - Pilates Instructor) and updated existing team members with multiple specialties
- **Animation System**: Created comprehensive animation system with fade-in effects, scroll-triggered animations, and smooth transitions
- **Custom Hook**: Added `useIntersectionObserver` hook for scroll-based animations
- **CSS Animations**: Added new `animations.css` file with keyframes, transitions, and animation classes
- **Button Pulsing Effect**: Added subtle pink pulsing effect to "Book Now" buttons on class cards
- **Staggered Animations**: Implemented staggered entrance animations for card grids

### Enhanced

- **Class Cards**: Updated to display multiple categories with proper color coding and improved layout
- **Dynamic Routes**: Fixed and enhanced all dynamic routes with proper error handling and centered content
- **Class Detail Pages**: Completely redesigned with better layout, reduced padding for date displays, and improved user experience
- **Classes Page**: Enhanced filtering system to support multiple categories and levels, improved search functionality
- **Team Member Profiles**: Updated Jaideep Pa to include both yoga and strength training specialties
- **Content Centering**: Ensured all card grids and content sections are properly centered
- **Responsive Design**: Improved mobile responsiveness across all pages

### Fixed

- **Overflow Issues**: Fixed horizontal overflow issues across the entire application
- **Dynamic Route Errors**: Resolved module not found errors in dynamic routes
- **Card Padding**: Reduced excessive padding in date and equipment card sections
- **Type Safety**: Fixed TypeScript errors in intersection observer implementation
- **Build Errors**: Resolved all build and linting errors

### Styling Improvements

- **Softer Rounded Edges**: Applied consistent soft rounded corners throughout the application
- **Icon Sizing**: Increased icon sizes and removed large borders for better visibility
- **Color Consistency**: Updated color scheme to include brown, tan, green, sage green, olive green, pastel pink, and yellow/gold
- **Hover Effects**: Added smooth hover transitions and lift effects for interactive elements
- **Background Blur**: Enhanced header blur effect with proper z-index layering

### Technical Improvements

- **Performance**: Optimized animations with reduced motion support for accessibility
- **Code Organization**: Separated animation styles into dedicated CSS files
- **Type Safety**: Enhanced TypeScript interfaces for classes and team members
- **Component Structure**: Improved component architecture with better separation of concerns

## [0.9.8] - 2024-12-19

### Added

- **Custom CSS Organization**: Moved all custom styling from globals.css into separate component-specific CSS files
- **Header Blur Effect**: Added backdrop blur effect to header with !important override
- **Logo Styling**: Updated menu icon/image to 50x50 with rounded edges on the image itself
- **Pulsing Effect**: Added infinite pulsing sage green glow effect to home page card buttons
- **Theme Colors**: Updated theme to include brown, tan, green, sage green, olive green, pastel pink, yellow/gold

### Fixed

- **Class Detail Page**: Fixed dynamic route to show friendly "class not found" message with themed buttons
- **Card Wrappers**: Reduced padding for date cards and other specific components
- **Overflow Issues**: Fixed horizontal overflow for the entire application

### Enhanced

- **CSS Structure**: Created separate CSS files for back-to-top, stepper, scrollbar, home buttons, and header styles
- **Component Imports**: Updated all components to import their specific CSS files
- **Error Handling**: Improved error handling in dynamic routes with better user experience

## [0.9.7] - 2024-12-19

### Fixed

- **Netlify Deployment**: Updated Netlify URL to hidden-lotus.netlify.app
- **Background Image**: Fixed background image to work for both localhost and Netlify
- **Background Sizing**: Improved background sizing to prevent stretching and zoom out more
- **Parallax Effect**: Added parallax background with better sizing
- **Hero Section**: Fixed hero section layout to flex column
- **Header Logo**: Replaced header logo with custom image
- **Hamburger Menu**: Created custom SVG lotus icon for hamburger menu

### Enhanced

- **Responsive Design**: Added responsive media queries for background sizing
- **URL Configuration**: Updated metadataBase and OpenGraph URLs to use environment variables
- **Icon Integration**: Installed and integrated lucide-react for better icon support

## [0.9.5] - 2024-12-19

### Fixed

- **Home Page Styles**: Restored home page styles by fixing Tailwind CSS configuration
- **PostCSS Config**: Fixed postcss.config.mjs configuration
- **Tailwind Config**: Created proper tailwind.config.js with theme extensions
- **Autoprefixer**: Added autoprefixer to devDependencies and installed it

### Enhanced

- **Build Process**: Ensured successful build after all fixes
- **CSS Organization**: Moved custom styling to separate files for better organization

## [0.9.2] - 2024-12-19

### Added

- **Component Styling**: All components and inputs now have softer rounded edges
- **Icon Improvements**: Removed large borders around icons to make them larger and more visible
- **Lotus Icon**: Used lucide-react Flower2 icon for hamburger menu
- **Icon Sizing**: Updated various cards and icons to use larger sizes and softer rounded corners

### Enhanced

- **Global CSS**: Updated global CSS for softer rounded corners and icon sizes
- **Build Process**: Confirmed successful build after all changes

## [0.9.0] - 2024-12-19

### Added

- **Parallax Background**: Added parallax background with better sizing
- **Hero Section Layout**: Fixed hero section to use flex column layout
- **Custom Logo**: Replaced header logo with custom image
- **Lotus Icon**: Created custom SVG lotus icon for hamburger menu
- **Responsive Text**: Added responsive text sizes for better mobile experience

### Enhanced

- **Background CSS**: Adjusted background CSS for parallax and sizing
- **Header Component**: Updated header component with custom logo and lotus icon
- **Mobile Sidebar**: Updated mobile sidebar logo similarly

## [0.8.8] - 2024-12-19

### Fixed

- **Netlify Deployment**: Updated Netlify URL to hidden-lotus.netlify.app
- **Background Image**: Fixed background image to work for both localhost and Netlify
- **Background Sizing**: Improved background sizing to prevent stretching and zoom out more

### Enhanced

- **URL Configuration**: Updated metadataBase and OpenGraph URLs to use environment variables
- **Responsive Design**: Added responsive media queries for background sizing

## [0.8.5] - 2024-12-19

### Fixed

- **Netlify Deployment**: Updated netlify.toml, metadataBase in layout.tsx, sitemap.xml, and robots.txt
- **URL Configuration**: Set Netlify URL to hidden-lotus.netlify.app

### Enhanced

- **Build Process**: Confirmed successful build after URL updates

## [0.8.2] - 2024-12-19

### Fixed

- **Background Image**: Fixed background image to work properly from public folder
- **Background Overrides**: Made header and section backgrounds semi-transparent with backdrop blur
- **CSS Layering**: Adjusted CSS for proper layering and z-index
- **Metadata Exports**: Fixed errors related to metadata exports in client components

### Enhanced

- **Background Visibility**: Background image now shows through semi-transparent elements
- **Multiple Pages**: Updated multiple pages to work with background image

## [0.8.1] - 2024-12-19

### Added

- **File Structure**: Moved nested folders to root level
- **Configuration Updates**: Updated configs for new file structure
- **Placeholder Images**: Used specific images as placeholders throughout the app
- **Logo Integration**: Updated Home page hero with logo image

### Enhanced

- **Project Organization**: Improved overall project structure
- **Version Management**: Updated version to 0.8.1

## [0.8.0] - 2024-12-19

### Added

- **PrimeReact Integration**: Ensured PrimeReact providers and PrimeFlex are correctly applied
- **Card Centering**: Centered all card grids throughout the application
- **Enhanced Theme**: Updated theme with more tan background and chill yoga earthy vibe
- **Color Palette**: Enhanced with sage green and pink accents

### Enhanced

- **Global CSS**: Updated CSS variables for better theming
- **Card Styles**: Improved card styling with new theme colors
- **Providers**: Updated providers for better PrimeReact integration
- **All Pages**: Updated all pages and components with new theme

## [0.7.0] - 2024-12-19

### Added

- **Darker Colors**: Made green colors darker for better contrast
- **Darker Background**: Updated background to be darker
- **New Icons**: Added new icons throughout cards
- **Loading Skeletons**: Added loading skeletons for images
- **Lazy Loading**: Implemented lazy loading cards with PrimeReact deferred components
- **Auto-advancing Carousels**: Ensured carousels auto-advance and wrap properly

### Fixed

- **Netlify Deployment**: Downgraded Next.js to 14.0.4 for Netlify compatibility
- **Next.js Config**: Fixed next.config.js by removing experimental flags and converting to JavaScript
- **Font Issues**: Replaced Geist fonts with Inter and Roboto Mono from next/font/google
- **Tailwind CSS**: Fixed Tailwind CSS imports in globals.css
- **Image Components**: Replaced img tags with Next.js Image components with loading skeletons

### Enhanced

- **SEO Metadata**: Added unique titles, descriptions, and Open Graph/Twitter tags for all pages
- **Robots.txt**: Created robots.txt disallowing privacy and terms pages
- **Open Graph Image**: Added Open Graph image for social sharing

## [0.6.0] - 2024-12-19

### Added

- **Background Image**: Added background image in globals.css
- **CSS Organization**: Moved custom styling from globals.css into styles folder with specific names
- **Component-specific CSS**: Created separate CSS files for components or features

### Fixed

- **CSS Issues**: Resolved "Unknown at rule @tailwind" and "Unknown at rule @theme" errors
- **Theme Colors**: Updated theme colors to include brown, tan, green, sage green, olive green, pastel pink, yellow/gold
- **Menu Icon**: Made menu icon/image 50x50 with rounded edges on the image itself
- **Pulsing Effect**: Added infinite pulsing sage green glow effect to home page card buttons
- **Header Blur**: Added blur effect on header background with !important to override

### Enhanced

- **CSS Structure**: Organized CSS into separate files for better maintainability
- **Build Process**: Confirmed successful build after all fixes

## [0.5.0] - 2024-12-19

### Added

- **Prettier Configuration**: Added Prettier for code formatting
- **README**: Created comprehensive README with project information
- **CHANGELOG**: Added changelog for version tracking
- **Sitemap**: Generated sitemap.xml for SEO

### Enhanced

- **Code Quality**: Improved code formatting and consistency
- **Documentation**: Added comprehensive project documentation
- **SEO**: Enhanced SEO with sitemap generation

## [0.4.0] - 2024-12-19

### Added

- **Legal Pages**: Added Privacy Policy and Terms of Service pages
- **SEO Optimization**: Enhanced SEO with proper metadata and Open Graph tags
- **Robots.txt**: Added robots.txt for search engine crawling
- **Open Graph Image**: Added Open Graph image for social sharing

### Enhanced

- **Page Structure**: Improved overall page structure and navigation
- **SEO**: Enhanced search engine optimization

## [0.3.0] - 2024-12-19

### Added

- **Contact Form**: Implemented multi-step contact form with validation
- **Form Components**: Added form components with proper styling
- **Validation**: Added form validation and error handling

### Enhanced

- **User Experience**: Improved form user experience
- **Styling**: Enhanced form styling and layout

## [0.2.0] - 2024-12-19

### Added

- **Team Page**: Added team member profiles with detailed information
- **Story Page**: Added wellness stories and testimonials
- **MOR Page**: Added Mindful Online Resources page
- **About Page**: Enhanced about page with more content

### Enhanced

- **Content**: Added rich content for all pages
- **Navigation**: Improved navigation between pages

## [0.1.0] - 2024-12-19

### Added

- **Initial Setup**: Created Next.js wellness web app with TypeScript
- **Theme**: Implemented earthy theme with sage green, brown/gold, pastel pink, and light tan
- **Components**: Created UI components including hero sections, cards, and navigation
- **Pages**: Added Home, Classes, Team, About, Story, Contact, MOR, Privacy, and Terms pages
- **Layout**: Implemented responsive layout with header and footer
- **Styling**: Applied TailwindCSS and PrimeReact styling throughout

### Features

- **Responsive Design**: Mobile-first responsive design
- **Component Library**: Used PrimeReact components with custom styling
- **TypeScript**: Full TypeScript implementation
- **Modern UI**: Beautiful and modern UI with earthy wellness theme

## [0.10.1] - 2024-12-15

### Added

- Reorganized component structure for better maintainability
- Moved UI components to appropriate folders (common, layout, home, etc.)
- Created separate CSS files for specific features (back-to-top, stepper, scrollbar, home buttons, header)
- Enhanced back-to-top component with proper z-index (9999) and PrimeReact up arrow icon
- Added pulsing animation effect to back-to-top button
- Improved component imports across all pages

### Changed

- Updated all import paths to use new component structure
- Fixed back-to-top component styling and positioning
- Replaced custom icon with PrimeReact chevron-up icon
- Updated component exports in index files
- Improved CSS organization with feature-specific files

### Fixed

- Back-to-top component visibility and functionality
- Component import errors after reorganization
- Story page category filtering logic
- Contact page Steps component prop usage
- Removed unused imports and cleaned up code

### Technical

- Reorganized src/components structure for better maintainability
- Created src/styles folder for feature-specific CSS files
- Updated package.json dependencies to latest compatible versions
- Improved code organization and maintainability

## [0.10.0] - 2024-12-15

### Added

- Custom CSS files for specific components and features
- Back-to-top component with high z-index and proper styling
- Header blur effect with backdrop filter
- Home page button pulsing effect
- Stepper component styling
- Scrollbar customization
- Enhanced theme colors including brown, tan, green, sage green, olive green, pastel pink, yellow/gold
- Class detail page with friendly "class not found" message
- Themed buttons for contact support and back navigation

### Changed

- Moved all custom styling from globals.css to separate feature-specific files
- Updated theme colors to include more earthy tones
- Enhanced header with 50x50 rounded logo image
- Improved menu icon with lucide-react Flower2 icon
- Made all components and inputs have softer rounded edges
- Removed large borders around icons for better visibility
- Updated component imports to use specific CSS files

### Fixed

- Class detail page dynamic route functionality
- Component styling and theme consistency
- Icon sizing and visibility issues
- Background image layering and z-index conflicts

## [0.9.7] - 2024-12-15

### Added

- Parallax background effect with better sizing
- Custom lotus icon for hamburger menu
- Fixed hero section layout to flex column
- Enhanced responsive text sizing
- Custom header logo image

### Changed

- Updated background CSS for parallax and responsive sizing
- Replaced hamburger menu icon with custom SVG lotus
- Improved hero section responsive design
- Enhanced mobile sidebar logo

### Fixed

- Background image sizing and positioning
- Hero section layout issues
- Mobile menu icon consistency

## [0.9.6] - 2024-12-15

### Added

- Dynamic URL handling for both localhost and Netlify
- Environment variable support for metadataBase
- Responsive background sizing with media queries
- Better background image zoom and positioning

### Changed

- Updated metadataBase to use environment variables
- Enhanced background CSS with responsive properties
- Improved OpenGraph URL handling

### Fixed

- Background image display on different environments
- URL consistency across local and production

## [0.9.5] - 2024-12-15

### Added

- Netlify URL configuration (hidden-lotus.netlify.app)
- Updated metadataBase in layout.tsx
- Updated sitemap.xml and robots.txt URLs
- Enhanced SEO metadata

### Changed

- Set Netlify deployment URL
- Updated all external references to use new URL

### Fixed

- Netlify deployment configuration
- URL consistency across the application

## [0.9.4] - 2024-12-15

### Added

- Background image support from public folder
- Semi-transparent backgrounds with backdrop blur
- Proper CSS layering and z-index management
- Enhanced visual hierarchy

### Changed

- Updated header and section backgrounds to be semi-transparent
- Improved background image visibility
- Enhanced component layering

### Fixed

- Background image display issues
- Component background conflicts
- Visual hierarchy and layering

## [0.9.3] - 2024-12-15

### Added

- SEO metadata with unique titles and descriptions
- Open Graph and Twitter meta tags for all pages
- Robots.txt with privacy and terms page restrictions
- Open Graph image for social sharing
- Next.js Image components with loading skeletons
- Lazy loading for better performance

### Changed

- Replaced img tags with Next.js Image components
- Added loading states for images
- Enhanced SEO optimization
- Improved performance with lazy loading

### Fixed

- Image loading and optimization
- SEO metadata implementation
- Social media sharing

## [0.9.2] - 2024-12-15

### Added

- Next.js 14.0.4 for Netlify compatibility
- Inter and Roboto Mono fonts from next/font/google
- Fixed next.config.js for production builds
- Enhanced font loading and optimization

### Changed

- Downgraded Next.js to 14.0.4
- Replaced Geist fonts with Google Fonts
- Updated font configuration
- Fixed build configuration

### Fixed

- Netlify deployment issues
- Font loading problems
- Build configuration errors

## [0.9.1] - 2024-12-15

### Added

- Darker green colors throughout the theme
- Darker background for better contrast
- New icons throughout all cards
- Loading skeletons for images
- Lazy loading cards with PrimeReact Deferred components
- Auto-advancing carousels with wrap functionality

### Changed

- Updated color scheme with darker greens
- Enhanced background contrast
- Improved icon visibility and sizing
- Added loading states for better UX
- Enhanced carousel functionality

### Fixed

- Color contrast and visibility
- Image loading performance
- Carousel behavior and functionality

## [0.9.0] - 2024-12-15

### Added

- Enhanced theme with tan background
- Chill yoga earthy vibe with sage green and pink accents
- Centered card grids throughout the application
- Updated PrimeReact providers and PrimeFlex integration
- Enhanced visual design and user experience

### Changed

- Updated global CSS variables for new theme
- Enhanced card styling and layout
- Improved theme consistency across components
- Updated all pages with new theme colors

### Fixed

- Theme consistency issues
- Card grid alignment
- Provider integration

## [0.8.2] - 2024-12-15

### Added

- Enhanced theme with more tan background
- Chill yoga earthy vibe with sage green and pink accents
- Centered card grids throughout the application
- Updated PrimeReact providers and PrimeFlex integration

### Changed

- Updated global CSS variables for new theme
- Enhanced card styling and layout
- Improved theme consistency across components
- Updated all pages with new theme colors

### Fixed

- Theme consistency issues
- Card grid alignment
- Provider integration

## [0.8.1] - 2024-12-15

### Added

- Moved nested folders to root level
- Updated configuration files
- Specific image placeholders throughout the application
- Enhanced file organization

### Changed

- Reorganized project structure
- Updated import paths
- Enhanced image usage

### Fixed

- File organization issues
- Import path problems
- Configuration consistency

## [0.8.0] - 2024-12-15

### Added

- Complete wellness web app with multiple pages
- Home, Classes, Team, About, Story, Contact, MOR, Privacy, Terms pages
- Detailed UI and functionality including hero sections, carousels, filterable grids
- Multi-step forms, dialogs, and legal content
- Earthy theme with sage green, brown/gold, pastel pink, and light tan backgrounds
- TypeScript, TailwindCSS, PrimeReact, PrimeFlex, and PrimeIcons integration
- Prettier configuration, README, CHANGELOG, and sitemap.xml

### Changed

- Initial project setup and configuration
- Theme implementation and component creation
- Layout and page structure

### Fixed

- Initial project setup
- Theme and component integration

## [1.0.1] - 2024-12-15

### Changed

- Updated versioning to 1.0.1 (reset minor/patch to 1 after 0.9.x as per versioning rules)
- Added/updated .prettierrc to ensure Prettier handles CSS, SCSS, and SASS files
- Prettier config now enforces formatting for all style files

### Upcoming

- Refactor story page and other feature pages to extract sections and grids into components for cleaner, more maintainable code structure
