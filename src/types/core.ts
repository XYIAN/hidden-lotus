// Base types for common patterns
export interface BaseEntity {
	id: string
	name: string
	description?: string
	image?: string
}

export interface BaseContact {
	email: string
	phone: string
	website?: string
}

export interface BaseCredentials {
	title: string
	issuer: string
	year?: number
	expiryDate?: string
}

// Severity levels for UI components
export type SeverityLevel =
	| 'success'
	| 'info'
	| 'warning'
	| 'danger'
	| 'secondary'

// Card sizes for consistent sizing
export type CardSize = 'small' | 'medium' | 'large'

// Responsive breakpoints
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

// Grid configuration
export interface GridConfig {
	sm?: number
	md?: number
	lg?: number
	xl?: number
	'2xl'?: number
}

// Navigation types
export interface NavigationItem {
	label: string
	href: string
	icon?: string
	children?: NavigationItem[]
}

// Loading states
export interface LoadingState {
	isLoading: boolean
	error?: string
}

// Pagination
export interface PaginationState {
	currentPage: number
	pageSize: number
	totalItems: number
	totalPages: number
}

// Filter types
export interface FilterOption {
	label: string
	value: string | number
	disabled?: boolean
}

export interface FilterState {
	[key: string]: string | number | string[] | number[]
}

// Sort types
export interface SortOption {
	field: string
	order: 'asc' | 'desc'
}

// Theme types
export interface ThemeColors {
	primary: string
	secondary: string
	success: string
	warning: string
	danger: string
	info: string
}

// Animation types
export interface AnimationConfig {
	duration: number
	easing: string
	delay?: number
}

// Event handlers
export interface EventHandlers {
	onClick?: () => void
	onChange?: (value: unknown) => void
	onSubmit?: (data: unknown) => void
	onError?: (error: Error) => void
}
