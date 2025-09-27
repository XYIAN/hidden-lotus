# Development Guide

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (or yarn/pnpm)
- **Git**: For version control

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd hidden-lotus

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```json
{
  "dev": "next dev",           // Start development server
  "build": "next build",       // Build for production
  "start": "next start",       // Start production server
  "lint": "next lint"          // Run ESLint
}
```

## 🏗️ Development Environment

### IDE Setup
**Recommended**: Visual Studio Code with extensions:
- **ES7+ React/Redux/React-Native snippets**
- **TypeScript Importer**
- **Tailwind CSS IntelliSense**
- **Prettier - Code formatter**
- **ESLint**

### VS Code Settings
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

## 📁 Project Structure

```
hidden-lotus/
├── docs/                     # Documentation
├── public/                   # Static assets
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── (routes)/        # Route groups
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── common/         # Shared components
│   │   ├── layout/         # Layout components
│   │   └── [feature]/      # Feature components
│   ├── constants/          # Static data
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utilities & providers
│   ├── styles/             # CSS files
│   └── types/              # TypeScript types
├── .eslintrc.json          # ESLint config
├── next.config.js          # Next.js config
├── tailwind.config.js      # Tailwind config
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
```

## 🎯 Coding Standards

### TypeScript Guidelines
```typescript
// ✅ Good: Explicit types
interface UserProps {
  name: string
  email: string
  age?: number
}

// ✅ Good: Generic components
function FormField<T extends FieldValues>(props: FormFieldProps<T>) {
  // Implementation
}

// ❌ Avoid: Any types
function processData(data: any) {
  // Implementation
}
```

### Component Guidelines
```typescript
// ✅ Good: Functional components with TypeScript
interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export function Button({ children, onClick, variant = 'primary', disabled = false }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  )
}

// ✅ Good: Memoization for performance
export const ExpensiveComponent = memo(function ExpensiveComponent({ data }: Props) {
  const processedData = useMemo(() => {
    return data.map(item => processItem(item))
  }, [data])
  
  return <div>{/* Render processed data */}</div>
})
```

### Styling Guidelines
```css
/* ✅ Good: Use CSS custom properties */
.yoga-card {
  background: var(--light-tan);
  border: 1px solid var(--sage-green-200);
  border-radius: 20px;
}

/* ✅ Good: Responsive design */
.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

/* ❌ Avoid: Inline styles */
<div style={{ backgroundColor: '#f6d6a2' }}>Content</div>
```

### File Naming Conventions
```
components/
├── common/
│   ├── display-card.tsx      # PascalCase for components
│   ├── form-field.tsx
│   └── index.ts              # Barrel exports
├── layout/
│   ├── header.tsx
│   └── footer.tsx
└── [feature]/
    ├── classes-grid.tsx
    └── team-card.tsx

hooks/
├── use-intersection-observer.ts  # kebab-case for files
└── use-media-query.ts

types/
├── core.ts
├── components.ts
└── data.ts
```

## 🔧 Development Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/new-component

# Make changes
# - Create component files
# - Add types
# - Update documentation
# - Add tests

# Commit changes
git add .
git commit -m "feat: add new component with TypeScript support"

# Push and create PR
git push origin feature/new-component
```

### 2. Component Development Process
1. **Plan**: Define component interface and props
2. **Type**: Create TypeScript interfaces
3. **Implement**: Build component with proper styling
4. **Test**: Add unit tests
5. **Document**: Update component documentation
6. **Review**: Code review and feedback

### 3. Code Review Checklist
- [ ] TypeScript types are properly defined
- [ ] Component follows naming conventions
- [ ] Props are properly typed and documented
- [ ] Styling follows design system
- [ ] Component is accessible
- [ ] Performance optimizations are applied
- [ ] Tests are included
- [ ] Documentation is updated

## 🧪 Testing Strategy

### Unit Testing
```typescript
// Component testing example
import { render, screen, fireEvent } from '@testing-library/react'
import { DisplayCard } from '@/components/common/cards/display-card'

describe('DisplayCard', () => {
  it('renders card with correct data', () => {
    const mockData = {
      name: 'Test Class',
      description: 'Test Description',
      price: '$25'
    }
    
    render(<DisplayCard data={mockData} showPrice={true} />)
    
    expect(screen.getByText('Test Class')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.getByText('$25')).toBeInTheDocument()
  })
  
  it('handles click events', () => {
    const mockOnClick = jest.fn()
    const mockData = { name: 'Test Class' }
    
    render(<DisplayCard data={mockData} onClick={mockOnClick} />)
    
    fireEvent.click(screen.getByText('Test Class'))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
```

### Integration Testing
```typescript
// Page integration testing
import { render, screen } from '@testing-library/react'
import ClassesPage from '@/app/classes/page'

describe('ClassesPage', () => {
  it('filters classes based on search input', () => {
    render(<ClassesPage />)
    
    const searchInput = screen.getByPlaceholderText('Search classes...')
    fireEvent.change(searchInput, { target: { value: 'yoga' } })
    
    expect(screen.getByText('Morning Vinyasa Flow')).toBeInTheDocument()
    expect(screen.queryByText('Reiki Healing')).not.toBeInTheDocument()
  })
})
```

## 🚀 Performance Guidelines

### 1. Component Optimization
```typescript
// ✅ Good: Memoize expensive components
export const ExpensiveComponent = memo(function ExpensiveComponent({ data }: Props) {
  const processedData = useMemo(() => {
    return data.map(item => expensiveOperation(item))
  }, [data])
  
  return <div>{/* Render */}</div>
})

// ✅ Good: Memoize callbacks
const handleClick = useCallback((id: string) => {
  onItemClick(id)
}, [onItemClick])
```

### 2. Bundle Optimization
```typescript
// ✅ Good: Dynamic imports for code splitting
const LazyComponent = lazy(() => import('./LazyComponent'))

// ✅ Good: Tree shaking friendly imports
import { specificFunction } from 'library'
// ❌ Avoid: Import entire library
import * as library from 'library'
```

### 3. Image Optimization
```typescript
// ✅ Good: Next.js Image component
import Image from 'next/image'

<Image
  src="/yoga-class.jpg"
  alt="Yoga class"
  width={300}
  height={200}
  priority={false}
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

## ♿ Accessibility Guidelines

### 1. Semantic HTML
```typescript
// ✅ Good: Semantic structure
<main>
  <section aria-labelledby="classes-heading">
    <h2 id="classes-heading">Our Classes</h2>
    <div role="grid" aria-label="Classes grid">
      {/* Class cards */}
    </div>
  </section>
</main>

// ❌ Avoid: Non-semantic structure
<div>
  <div>
    <div>Our Classes</div>
    <div>
      {/* Class cards */}
    </div>
  </div>
</div>
```

### 2. ARIA Attributes
```typescript
// ✅ Good: Proper ARIA usage
<button
  aria-expanded={isOpen}
  aria-controls="menu"
  aria-label="Toggle navigation menu"
>
  Menu
</button>

<div
  id="menu"
  role="menu"
  aria-hidden={!isOpen}
>
  {/* Menu items */}
</div>
```

### 3. Keyboard Navigation
```typescript
// ✅ Good: Keyboard event handling
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    onClick()
  }
}

<button
  onClick={onClick}
  onKeyDown={handleKeyDown}
  tabIndex={0}
>
  Click me
</button>
```

## 🔍 Debugging

### 1. Development Tools
```typescript
// React Developer Tools
// - Component tree inspection
// - Props and state debugging
// - Performance profiling

// Browser DevTools
// - Network tab for API calls
// - Performance tab for rendering
// - Accessibility tab for a11y issues
```

### 2. Console Debugging
```typescript
// ✅ Good: Structured logging
console.group('Component Debug')
console.log('Props:', props)
console.log('State:', state)
console.log('Computed:', computed)
console.groupEnd()

// ❌ Avoid: Excessive logging in production
console.log('Debug info') // Remove before commit
```

### 3. Error Boundaries
```typescript
// Error boundary for graceful error handling
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    
    return this.props.children
  }
}
```

## 📦 Build and Deployment

### 1. Build Process
```bash
# Development build
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

### 2. Environment Variables
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://hidden-lotus.netlify.app
NEXT_PUBLIC_GA_ID=G-YH7KD83RSD
```

### 3. Deployment
```bash
# Netlify deployment
# - Automatic deployment on push to main
# - Preview deployments for PRs
# - Environment variable configuration
```

## 🔧 Troubleshooting

### Common Issues

#### 1. TypeScript Errors
```bash
# Clear TypeScript cache
rm -rf .next
rm -rf node_modules/.cache
npm run build
```

#### 2. Styling Issues
```bash
# Clear Tailwind cache
rm -rf .next
npm run build
```

#### 3. Build Failures
```bash
# Check for TypeScript errors
npm run lint

# Check build output
npm run build
```

### Performance Issues
1. **Bundle Size**: Use `npm run build` and check bundle analyzer
2. **Runtime Performance**: Use React DevTools Profiler
3. **Memory Leaks**: Check for uncleaned event listeners and timers

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [PrimeReact Documentation](https://primereact.org)

### Tools
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Tailwind Playground](https://play.tailwindcss.com)
- [Can I Use](https://caniuse.com) - Browser compatibility

---

*This development guide provides comprehensive instructions for contributing to the Hidden Lotus project while maintaining high code quality and consistency.*
