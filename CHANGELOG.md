# Changelog

All notable changes to the Hidden Lotus project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.8.1] - 2024-06-30

### Changed

- Home page hero now uses `icon-hl-1.png` from public as the logo, styled responsively (max-width 160px, rounded, centered).

## [0.8.0] - 2024-01-15

### Changed

- Moved all project files to the root directory for proper repo structure
- Updated README and CHANGELOG for version 0.8.0
- Added Netlify deployment instructions
- Ensured all image placeholders use new public images and are styled responsively
- Updated Prettier config and ensured it is present in the root
- Updated sitemap.xml for new structure

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

- **0.8.1** - Home hero uses icon-hl-1.png as logo
- **0.8.0** - Project root restructuring, Netlify prep, image updates
- **1.0.0** - Initial release with complete website functionality
