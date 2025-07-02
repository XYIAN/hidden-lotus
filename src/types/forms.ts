import { ContactForm, Booking } from './data'

// Form validation schemas
export interface FormValidationSchema<T> {
	validate: (data: T) => { isValid: boolean; errors: Record<string, string> }
}

// Form state
export interface FormState<T> {
	data: T
	isValid: boolean
	isDirty: boolean
	isSubmitting: boolean
	errors: Record<string, string>
}

// Form submission
export interface FormSubmission<T> {
	data: T
	onSuccess?: (response: unknown) => void
	onError?: (error: Error) => void
}

// Contact form validation
export interface ContactFormValidation
	extends FormValidationSchema<ContactForm> {}

// Booking form validation
export interface BookingFormValidation extends FormValidationSchema<Booking> {}

// Form field validation
export interface FieldValidation {
	required?: boolean
	minLength?: number
	maxLength?: number
	pattern?: RegExp
	custom?: (value: unknown) => boolean | string
}

// Form field error
export interface FieldError {
	message: string
	type: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'custom'
}

// Multi-step form
export interface FormStep {
	id: string
	title: string
	description?: string
	isValid: boolean
	isComplete: boolean
}

export interface MultiStepForm<T> {
	steps: FormStep[]
	currentStep: number
	data: T
	onStepChange: (step: number) => void
	onStepComplete: (step: number, data: Partial<T>) => void
}

// Form field configuration
export interface FormFieldConfig {
	name: string
	label: string
	type:
		| 'text'
		| 'email'
		| 'tel'
		| 'textarea'
		| 'select'
		| 'checkbox'
		| 'radio'
		| 'date'
	placeholder?: string
	required?: boolean
	validation?: FieldValidation
	options?: Array<{ label: string; value: string | number }>
	className?: string
}

// Form layout
export interface FormLayout {
	columns?: number
	gap?: number
	labelWidth?: string
	className?: string
}

// Form submission response
export interface FormSubmissionResponse {
	success: boolean
	message: string
	data?: unknown
	errors?: Record<string, string>
}

// Form reset
export interface FormReset {
	reset: () => void
	resetField: (fieldName: string) => void
}

// Form watch
export interface FormWatch<T> {
	watch: (fieldName?: keyof T) => unknown
	watchAll: () => T
}

// Form set value
export interface FormSetValue<T> {
	setValue: (fieldName: keyof T, value: unknown) => void
	setValues: (values: Partial<T>) => void
}

// Form trigger
export interface FormTrigger {
	trigger: (fieldName?: string) => Promise<boolean>
	triggerAll: () => Promise<boolean>
}

// Complete form controller
export interface FormController<T>
	extends FormState<T>,
		FormReset,
		FormWatch<T>,
		FormSetValue<T>,
		FormTrigger {
	handleSubmit: (
		onSubmit: (data: T) => void
	) => (event: React.FormEvent) => void
	register: (fieldName: keyof T) => object
	unregister: (fieldName: keyof T) => void
}
