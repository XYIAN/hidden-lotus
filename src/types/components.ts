import { ReactNode } from 'react'
import { CardProps } from 'primereact/card'
import { InputTextProps } from 'primereact/inputtext'
import { DropdownProps } from 'primereact/dropdown'
import { InputTextareaProps } from 'primereact/inputtextarea'
import { Control, FieldValues } from 'react-hook-form'
import {
	CardSize,
	GridConfig,
	ClassFilterState,
	StoryFilterState,
} from './core'
import { TeamMember, Class, Story } from './data'

// DisplayCard types
export interface CardData {
	id?: string
	name?: string
	title?: string
	description?: string
	bio?: string
	image?: string
	fallbackIcon?: string
	type?: string | string[]
	profession?: string
	credentials?: string
	specialties?: string[]
	certifications?: string[]
	price?: string
	duration?: string
	level?: string
	category?: string
	href?: string
	onClick?: () => void
	experience?: string
	education?: string
	longBio?: string
	classes?: string[]
	contact?: {
		email?: string
		phone?: string
	}
}

export interface DisplayCardProps
	extends Omit<CardProps, 'title' | 'subtitle' | 'content'> {
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
	cardSize?: CardSize
	className?: string
}

// CardGrid types
export interface CardGridProps {
	children: ReactNode
	columns?: GridConfig
	gap?: number
	className?: string
}

// LoadingSkeleton types
export interface LoadingSkeletonProps {
	type: 'card' | 'image' | 'text'
	className?: string
}

// FilterPanel types
export interface FilterPanelProps {
	title?: string
	children: ReactNode
	className?: string
	collapsed?: boolean
	onClear?: () => void
	clearDisabled?: boolean
	clearText?: string
}

// Panel template options (PrimeReact specific)
export interface PanelTemplateOptions {
	className: string
	togglerElement?: ReactNode
}

// HeroSection types
export interface HeroSectionProps {
	title: string
	description?: string
	backgroundImage?: string
	className?: string
	children?: ReactNode
}

// ButtonGroup types
export interface ButtonGroupProps {
	buttons: ButtonConfig[]
	className?: string
	orientation?: 'horizontal' | 'vertical'
}

export interface ButtonConfig {
	label: string
	href?: string
	onClick?: () => void
	icon?: string
	iconPos?: 'left' | 'right'
	className?: string
	disabled?: boolean
}

// Form field types
export interface BaseFormFieldProps<T extends FieldValues = FieldValues> {
	label: string
	name: string
	control: Control<T>
	className?: string
	labelWidth?: string
	required?: boolean
	error?: string
}

export interface InputFormFieldProps<T extends FieldValues = FieldValues>
	extends BaseFormFieldProps<T> {
	type: 'input'
	inputProps?: Omit<InputTextProps, 'id' | 'className'>
}

export interface DropdownFormFieldProps<T extends FieldValues = FieldValues>
	extends BaseFormFieldProps<T> {
	type: 'dropdown'
	dropdownProps: Omit<DropdownProps, 'id' | 'className'>
}

export interface TextareaFormFieldProps<T extends FieldValues = FieldValues>
	extends BaseFormFieldProps<T> {
	type: 'textarea'
	textareaProps?: Omit<InputTextareaProps, 'id' | 'className'>
}

export type FormFieldProps<T extends FieldValues = FieldValues> =
	| InputFormFieldProps<T>
	| DropdownFormFieldProps<T>
	| TextareaFormFieldProps<T>

// Input component types
export interface InputTextHLProps extends Omit<InputTextProps, 'id'> {
	id: string
	label?: string
	labelWidth?: string
	error?: string
	required?: boolean
	className?: string
}

export interface DropdownHLProps extends Omit<DropdownProps, 'id'> {
	id: string
	label?: string
	labelWidth?: string
	error?: string
	required?: boolean
	className?: string
}

export interface InputTextareaHLProps extends Omit<InputTextareaProps, 'id'> {
	id: string
	label?: string
	labelWidth?: string
	error?: string
	required?: boolean
	className?: string
}

// Carousel types
export interface CarouselItem {
	title: string
	description: string
	icon: string
	features: string[]
}

export interface CarouselTemplateProps {
	item: CarouselItem
	index: number
}

// Navigation types
export interface HeaderProps {
	className?: string
}

export interface FooterProps {
	className?: string
}

export interface SidebarProps {
	isOpen: boolean
	onClose: () => void
	className?: string
}

// Back to top types
export interface BackToTopProps {
	threshold?: number
	className?: string
}

// Global loading overlay types
export interface GlobalLoadingOverlayProps {
	isVisible: boolean
	message?: string
	className?: string
}

// Results count types
export interface ResultsCountProps {
	count: number
	total?: number
	className?: string
}

// Classes filter types
export interface ClassesFilterProps {
	filters: ClassFilterState
	onFilterChange: (filters: ClassFilterState) => void
	className?: string
}

// Story filter types
export interface StoryFiltersProps {
	filters: StoryFilterState
	onFilterChange: (filters: StoryFilterState) => void
	className?: string
}

// Story grid types
export interface StoryGridProps {
	stories: Story[]
	className?: string
}

// Story section types
export interface StorySectionProps {
	title?: string
	description?: string
	className?: string
}

// Contact section types
export interface ContactSectionProps {
	title?: string
	description?: string
	className?: string
}

// Team card types
export interface TeamCardProps {
	member: TeamMember
	className?: string
}

// Class card types
export interface ClassCardProps {
	classData: Class
	className?: string
}

// Story card types
export interface StoryCardProps {
	story: Story
	className?: string
}

// Certifications component types
export interface CertificationsProps {
	certifications: string[]
	className?: string
}

// Specialties component types
export interface SpecialtiesProps {
	specialties: string[]
	className?: string
}
