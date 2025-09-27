# Component Library Documentation

## 🧩 Component Overview

Hidden Lotus uses a comprehensive component library built on PrimeReact with custom styling and TypeScript integration. All components follow modern React patterns with functional components and hooks.

## 📋 Component Categories

### 1. Layout Components

#### Header
**Location**: `src/components/layout/header.tsx`

**Purpose**: Main navigation and branding component

**Features**:
- Responsive design (desktop/mobile)
- Active route highlighting
- Mobile sidebar integration
- Logo and branding display

**Props**: None (uses Next.js router hooks)

**Usage**:
```tsx
import { Header } from '@/components/layout/header'

export default function Layout() {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}
```

#### LotusMenuBar
**Location**: `src/components/layout/lotus-menu-bar.tsx`

**Purpose**: Desktop navigation menu with grouped items

**Features**:
- PrimeReact Menubar component
- Nested menu structure
- Active state management
- Custom styling with yoga theme

**Props**: None

**Usage**:
```tsx
import { LotusMenuBar } from '@/components/layout/lotus-menu-bar'

export default function DesktopNav() {
  return <LotusMenuBar />
}
```

### 2. Common Components

#### DisplayCard
**Location**: `src/components/common/cards/display-card.tsx`

**Purpose**: Generic, reusable card component for displaying various content types

**Features**:
- Highly configurable display options
- Image loading with fallbacks
- Multiple content types (team, classes, stories)
- Responsive design
- Loading states and error handling

**Props**:
```typescript
interface DisplayCardProps {
  data: CardData
  showImage?: boolean
  showType?: boolean
  showSpecialties?: boolean
  showCertifications?: boolean
  showPrice?: boolean
  showDuration?: boolean
  showLevel?: boolean
  showCategory?: boolean
  showCredentials?: boolean
  showProfession?: boolean
  showBio?: boolean
  showDescription?: boolean
  showLearnMore?: boolean
  learnMoreText?: string
  cardSize?: 'small' | 'medium' | 'large'
  className?: string
}
```

**Usage**:
```tsx
<DisplayCard
  data={{
    name: "Yoga Class",
    description: "Morning flow",
    image: "/yoga.jpg",
    price: "$25",
    duration: "60 min"
  }}
  showImage={true}
  showPrice={true}
  showDuration={true}
  showLearnMore={true}
/>
```

#### FormField
**Location**: `src/components/common/form-field.tsx`

**Purpose**: Generic form field component with React Hook Form integration

**Features**:
- TypeScript generic support
- Multiple input types (text, dropdown, textarea)
- Consistent styling
- Error handling
- Label management

**Props**:
```typescript
interface FormFieldProps<T extends FieldValues = FieldValues> {
  label: string
  name: string
  control: Control<T>
  type: 'input' | 'dropdown' | 'textarea'
  className?: string
  // ... additional props based on type
}
```

**Usage**:
```tsx
<FormField
  type="input"
  label="Search Classes"
  name="searchTerm"
  control={control}
  inputProps={{
    placeholder: 'Search by name...'
  }}
/>
```

#### FilterPanel
**Location**: `src/components/common/filter-panel.tsx`

**Purpose**: Collapsible filter interface with toast notifications

**Features**:
- Collapsible/expandable design
- Clear filters functionality
- Toast notifications
- Custom header and footer templates
- Consistent styling

**Props**:
```typescript
interface FilterPanelProps {
  title?: string
  children: ReactNode
  className?: string
  collapsed?: boolean
  onClear?: () => void
  clearDisabled?: boolean
  clearText?: string
}
```

**Usage**:
```tsx
<FilterPanel
  title="Filter Classes"
  collapsed={true}
  onClear={handleClearFilters}
  clearDisabled={!hasActiveFilters}
>
  <FormField ... />
  <FormField ... />
</FilterPanel>
```

#### HeroSection
**Location**: `src/components/common/hero-section.tsx`

**Purpose**: Page hero sections with consistent styling

**Features**:
- Centered content layout
- Optional action button
- Responsive typography
- Consistent spacing

**Props**:
```typescript
interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  showActionButton?: boolean
  actionButtonText?: string
  actionButtonHref?: string
}
```

**Usage**:
```tsx
<HeroSection
  title="Our Classes"
  description="Discover our diverse range of wellness classes"
  showActionButton={true}
  actionButtonText="Get Started"
  actionButtonHref="/contact"
/>
```

### 3. Feature-Specific Components

#### ClassesGrid
**Location**: `src/components/classes/classes-grid.tsx`

**Purpose**: Grid display for class listings with filtering

**Features**:
- Memoized rendering for performance
- Empty state handling
- Responsive grid layout
- Clear filters functionality

**Props**:
```typescript
interface ClassesGridProps {
  classes: Class[]
  onClearFilters: () => void
}
```

**Usage**:
```tsx
<ClassesGrid
  classes={filteredClasses}
  onClearFilters={handleClearFilters}
/>
```

#### CardGrid
**Location**: `src/components/common/card-grid.tsx`

**Purpose**: Responsive grid container for cards

**Features**:
- Responsive column configuration
- Consistent spacing
- Center alignment options
- Flexible gap control

**Props**:
```typescript
interface CardGridProps {
  children: ReactNode
  columns?: GridConfig
  gap?: number
  className?: string
  centerY?: boolean
}
```

**Usage**:
```tsx
<CardGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={6}>
  {cards.map(card => <DisplayCard key={card.id} {...card} />)}
</CardGrid>
```

## 🎨 Styling Patterns

### CSS Classes
- **yoga-card**: Base card styling with yoga theme
- **hover-lift**: Hover animation effects
- **sage-border**: Consistent border styling
- **text-primary-green**: Brand color text
- **text-earth-brown**: Secondary text color

### Responsive Design
- **Mobile-first**: Base styles for mobile
- **Tablet breakpoint**: 975px custom breakpoint
- **Desktop**: Full desktop layout
- **Flexible grids**: Responsive column layouts

### Animation Classes
- **fadeInUp**: Entrance animations
- **stagger-{n}**: Staggered animation delays
- **hover-lift**: Hover effects
- **page-transition**: Page transition effects

## 🔧 Component Patterns

### 1. Compound Components
```tsx
// Parent component manages state
<FilterPanel>
  <FormField type="input" ... />
  <FormField type="dropdown" ... />
</FilterPanel>
```

### 2. Render Props
```tsx
// Flexible component APIs
<DisplayCard
  data={cardData}
  showImage={true}
  showPrice={true}
  showLearnMore={true}
/>
```

### 3. Custom Hooks
```tsx
// Reusable logic
const { ref, isIntersecting } = useIntersectionObserver({
  threshold: 0.1,
  triggerOnce: true
})
```

### 4. Memoization
```tsx
// Performance optimization
export const ClassesGrid = memo(function ClassesGrid({ classes, onClearFilters }) {
  const cardElements = useMemo(() => {
    return classes.map((cls, index) => (
      <DisplayCard key={cls.id} ... />
    ))
  }, [classes])
  
  return <CardGrid>{cardElements}</CardGrid>
})
```

## 📱 Responsive Behavior

### Mobile (< 975px)
- Single column layouts
- Collapsible navigation
- Touch-friendly interactions
- Optimized typography

### Tablet (≥ 975px)
- Two-column layouts
- Desktop navigation
- Enhanced spacing
- Improved readability

### Desktop (≥ 1200px)
- Three-column layouts
- Full navigation
- Maximum content width
- Optimal spacing

## ♿ Accessibility Features

### Keyboard Navigation
- Tab order management
- Focus indicators
- Keyboard shortcuts
- Skip links

### Screen Reader Support
- Semantic HTML
- ARIA labels
- Alt text for images
- Descriptive text

### Color and Contrast
- WCAG compliant colors
- High contrast ratios
- Color-blind friendly palette
- Focus indicators

## 🚀 Performance Optimizations

### Memoization
- `React.memo` for expensive components
- `useMemo` for computed values
- `useCallback` for event handlers

### Lazy Loading
- Image lazy loading
- Component code splitting
- Route-based splitting

### Bundle Optimization
- Tree shaking
- Dead code elimination
- Optimized imports

## 🧪 Testing Considerations

### Component Testing
- Render testing
- Props validation
- Event handling
- State management

### Integration Testing
- User workflows
- Form submissions
- Navigation flows
- Error states

### Visual Testing
- Screenshot comparisons
- Responsive layouts
- Cross-browser compatibility
- Accessibility audits

---

*This component library provides a solid foundation for building consistent, accessible, and performant user interfaces while maintaining flexibility for future enhancements.*
