# TypeScript Guide

## 🎯 TypeScript Overview

Hidden Lotus uses TypeScript 5 with strict mode enabled, providing comprehensive type safety and excellent developer experience. The type system is well-structured with clear separation of concerns.

## 📁 Type Organization

### Core Types (`src/types/core.ts`)

Foundation types used throughout the application:

```typescript
// Base entity pattern
export interface BaseEntity {
	id: string
	name: string
	description?: string
	image?: string
}

// Contact information
export interface BaseContact {
	email: string
	phone: string
	website?: string
}

// Credentials structure
export interface BaseCredentials {
	title: string
	issuer: string
	year?: number
	expiryDate?: string
}
```

### Component Types (`src/types/components.ts`)

Comprehensive component prop definitions:

```typescript
// Generic card data
export interface CardData {
	id?: string
	name?: string
	title?: string
	description?: string
	bio?: string
	image?: string
	// ... additional properties
}

// Display card props with extensive configuration
export interface DisplayCardProps
	extends Omit<CardProps, 'title' | 'subtitle' | 'content'> {
	data: CardData
	showImage?: boolean
	showType?: boolean
	showSpecialties?: boolean
	// ... many more configuration options
}
```

### Data Types (`src/types/data.ts`)

Domain-specific data structures:

```typescript
// Class categories with union types
export type ClassCategory =
	| 'yoga'
	| 'reiki'
	| 'seminar'
	| 'cupping'
	| 'podcast'
	| 'meditation'
	| 'fitness'
	| 'healing'

// Class interface extending base entity
export interface Class extends BaseEntity {
	instructor: string
	dates: string[]
	time: string
	duration: string
	price: string
	categories: ClassCategory[]
	level: ClassLevel
	maxParticipants: number
	equipment?: string[]
	longDescription: string
}
```

## 🏗️ Type Patterns

### 1. Generic Components

```typescript
// Form field with generic type support
export function FormField<T extends FieldValues = FieldValues>(
	props: FormFieldProps<T>
) {
	// Implementation
}

// Usage with specific form type
interface ContactForm {
	name: string
	email: string
	message: string
}

;<FormField<ContactForm> type="input" name="name" control={control} />
```

### 2. Union Types for Enums

```typescript
// Instead of enums, use union types for better tree-shaking
export type ClassLevel = 'beginner' | 'intermediate' | 'advanced'
export type TeamMemberType = 'instructor' | 'admin' | 'board'
export type SeverityLevel =
	| 'success'
	| 'info'
	| 'warning'
	| 'danger'
	| 'secondary'
```

### 3. Discriminated Unions

```typescript
// Form field types with discriminated union
export type FormFieldProps<T extends FieldValues = FieldValues> =
	| InputFormFieldProps<T>
	| DropdownFormFieldProps<T>
	| TextareaFormFieldProps<T>

// Each variant has a 'type' discriminator
interface InputFormFieldProps<T extends FieldValues = FieldValues>
	extends BaseFormFieldProps<T> {
	type: 'input'
	inputProps?: Omit<InputTextProps, 'id' | 'className'>
}
```

### 4. Utility Types

```typescript
// Extending PrimeReact types
export interface DisplayCardProps
	extends Omit<CardProps, 'title' | 'subtitle' | 'content'> {
	// Custom properties
}

// Partial updates
export interface FilterState {
	[key: string]: string | number | string[] | number[]
}
```

## 🔧 Advanced Type Patterns

### 1. Conditional Types

```typescript
// Conditional rendering based on props
type ConditionalProps<T> = T extends { showImage: true }
	? { image: string }
	: { image?: never }

// Usage in component
interface DisplayCardProps<T = {}> {
	showImage?: boolean
	image?: T extends { showImage: true } ? string : never
}
```

### 2. Template Literal Types

```typescript
// CSS class generation
type SizeClass = `size-${'small' | 'medium' | 'large'}`
type ColorClass = `text-${'primary' | 'secondary' | 'accent'}`

// Animation classes
type AnimationClass = `stagger-${1 | 2 | 3 | 4 | 5 | 6}`
```

### 3. Mapped Types

```typescript
// Grid configuration
export interface GridConfig {
	sm?: number
	md?: number
	lg?: number
	xl?: number
	'2xl'?: number
}

// Responsive breakpoints
export type Breakpoint = keyof GridConfig
```

## 🎨 Component Type Patterns

### 1. Polymorphic Components

```typescript
// Generic card component that can display different data types
interface DisplayCardProps<T extends CardData = CardData> {
	data: T
	// ... other props
}

// Type-safe usage
;<DisplayCard<ClassCardData>
	data={classData}
	showPrice={true}
	showDuration={true}
/>
```

### 2. Event Handler Types

```typescript
// Consistent event handler patterns
export interface EventHandlers {
	onClick?: () => void
	onChange?: (value: unknown) => void
	onSubmit?: (data: unknown) => void
	onError?: (error: Error) => void
}
```

### 3. Configuration Objects

```typescript
// Animation configuration
export interface AnimationConfig {
	duration: number
	easing: string
	delay?: number
}

// Grid configuration
export interface GridConfig {
	sm?: number
	md?: number
	lg?: number
	xl?: number
	'2xl'?: number
}
```

## 🔍 Type Safety Features

### 1. Strict Null Checks

```typescript
// All properties are properly nullable
interface BaseEntity {
	id: string
	name: string
	description?: string // Optional property
	image?: string // Optional property
}
```

### 2. No Implicit Any

```typescript
// All variables must have explicit types
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
	// Implementation
}
```

### 3. Strict Function Types

```typescript
// Function parameters are strictly typed
const filterClasses = (
	classes: Class[],
	filters: ClassFilterState
): Class[] => {
	return classes.filter((classItem) => {
		// Type-safe filtering logic
	})
}
```

## 🚀 Performance Considerations

### 1. Type-Only Imports

```typescript
// Import only types when possible
import type { Class, TeamMember } from '@/types/data'
import type { DisplayCardProps } from '@/types/components'
```

### 2. Const Assertions

```typescript
// Use const assertions for immutable data
const navigationItems = [
	{ label: 'Home', href: '/' },
	{ label: 'Classes', href: '/classes' },
] as const

// Type is inferred as readonly tuple
type NavigationItem = (typeof navigationItems)[number]
```

### 3. Generic Constraints

```typescript
// Constrain generics for better performance
interface FormFieldProps<T extends FieldValues = FieldValues> {
	// T must extend FieldValues
}
```

## 🧪 Testing Types

### 1. Mock Types

```typescript
// Mock data with proper typing
const mockClass: Class = {
	id: '1',
	name: 'Test Class',
	description: 'Test Description',
	// ... all required properties
}
```

### 2. Test Utilities

```typescript
// Type-safe test utilities
interface TestProps<T> {
	component: React.ComponentType<T>
	props: T
	expectedText: string
}
```

## 🔧 Type Utilities

### 1. Custom Utility Types

```typescript
// Extract specific properties
type CardDisplayProps = Pick<
	DisplayCardProps,
	'showImage' | 'showPrice' | 'showDuration'
>

// Make all properties optional
type PartialCardData = Partial<CardData>

// Extract function return type
type FilterResult = ReturnType<typeof filterClasses>
```

### 2. Branded Types

```typescript
// Branded types for better type safety
type UserId = string & { readonly __brand: 'UserId' }
type ClassId = string & { readonly __brand: 'ClassId' }

// Prevents mixing up different ID types
const userId: UserId = 'user-123' as UserId
const classId: ClassId = 'class-456' as ClassId
```

## 📋 Type Checklist

### ✅ Best Practices Implemented

- [x] Strict mode enabled
- [x] No implicit any
- [x] Strict null checks
- [x] Generic components
- [x] Union types over enums
- [x] Discriminated unions
- [x] Utility types
- [x] Type-only imports
- [x] Const assertions
- [x] Generic constraints

### 🔄 Areas for Improvement

- [ ] Branded types for IDs
- [ ] More specific error types
- [ ] API response types
- [ ] State machine types
- [ ] Event emitter types

## 🎯 Type Coverage

### Current Coverage

- **Components**: 100% typed
- **Hooks**: 100% typed
- **Utils**: 100% typed
- **Data**: 100% typed
- **Forms**: 100% typed

### Future Enhancements

- **API Types**: When backend integration is added
- **State Types**: For complex state management
- **Error Types**: For comprehensive error handling
- **Validation Types**: For runtime type checking

---

_This TypeScript implementation provides excellent type safety while maintaining developer productivity and code maintainability._
