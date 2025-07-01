# Development Guidelines

## Version Management

**IMPORTANT**: Always update version and changelog with every significant change!

### Version Update Checklist:

1. ✅ Update `package.json` version number
2. ✅ Add new entry to `CHANGELOG.md` with:
   - Version number and date
   - Added/Changed/Fixed/Technical sections
   - Detailed description of changes
3. ✅ Run `npm run build` to ensure no errors
4. ✅ Test the changes work as expected

### Version Numbering:

- **Patch (0.0.X)**: Bug fixes, minor improvements
- **Minor (0.X.0)**: New features, significant improvements
- **Major (X.0.0)**: Breaking changes, major releases

### Current Version: 0.9.3

## Code Standards

### Before Committing:

- Remove unused imports and code
- Run `npm run build` to check for errors
- Ensure all components follow the established patterns
- Update version and changelog if changes were made

### File Organization:

- Components in `src/components/`
- Constants in `src/constants/`
- Hooks in `src/hooks/`
- Pages in `src/app/`

### Naming Conventions:

- PascalCase for components
- camelCase for functions and variables
- kebab-case for file names
- UPPERCASE for constants

## Theme Guidelines

### Colors:

- Primary Green: `#4a7c59`
- Sage Green: `#6b8e5a`
- Soft Sage: `#8baa7a`
- Pastel Pink: `#fbb6ce`
- Earth Brown: `#8b4513`
- Light Tan: `#ede8e0`

### CSS Classes:

- Use `yoga-card` for card styling
- Use `sage-border` for borders
- Use theme color variables for consistency

## Build Process

1. Make changes
2. Update version in `package.json`
3. Update `CHANGELOG.md`
4. Run `npm run build`
5. Fix any build errors
6. Test functionality
7. Commit changes

## Common Commands

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint

# Start production
npm run start
```
