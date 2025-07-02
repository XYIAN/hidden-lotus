import { BaseEntity, BaseContact } from './core'

// Class categories
export type ClassCategory =
	| 'yoga'
	| 'reiki'
	| 'seminar'
	| 'cupping'
	| 'podcast'
	| 'meditation'
	| 'fitness'
	| 'healing'
	| 'weight-training'
	| 'pilates'
	| 'breathwork'
	| 'sound-healing'

// Class levels
export type ClassLevel = 'beginner' | 'intermediate' | 'advanced'

// Team member types
export type TeamMemberType = 'instructor' | 'admin' | 'board'

// Story categories
export type StoryCategory =
	| 'wellness'
	| 'mindfulness'
	| 'healing'
	| 'fitness'
	| 'nutrition'
	| 'lifestyle'

// Class interface
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

// Team member interface
export interface TeamMember extends BaseEntity {
	profession: string
	credentials: string
	bio: string
	longBio: string
	type: TeamMemberType
	classes: string[]
	specialties: string[]
	certifications?: string[]
	experience: string
	education: string
	contact: BaseContact
}

// Story interface
export interface Story extends BaseEntity {
	author: string
	date: string
	excerpt: string
	content: string
	category: StoryCategory
}

// MOR section interface
export interface MORSection extends BaseEntity {
	title: string
	subtitle: string
	icon: string
	features: string[]
	description: string
}

// Booking interface
export interface Booking {
	id: string
	classId: string
	className: string
	instructor: string
	date: string
	time: string
	participantName: string
	participantEmail: string
	participantPhone: string
	status: 'pending' | 'confirmed' | 'cancelled'
	createdAt: string
}

// Contact form interface
export interface ContactForm {
	name: string
	email: string
	phone: string
	subject: string
	message: string
	preferredContact: 'email' | 'phone'
	hearAboutUs?: string
}

// Newsletter subscription
export interface NewsletterSubscription {
	email: string
	preferences: {
		wellness: boolean
		classes: boolean
		events: boolean
		news: boolean
	}
	subscribedAt: string
}

// Testimonial interface
export interface Testimonial extends BaseEntity {
	author: string
	role?: string
	rating: number
	content: string
	date: string
	verified: boolean
}

// Event interface
export interface Event extends BaseEntity {
	date: string
	time: string
	duration: string
	location: string
	capacity: number
	registered: number
	price: string
	organizer: string
	category: string
	description: string
	longDescription: string
	image?: string
	status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
}

// Workshop interface
export interface Workshop extends BaseEntity {
	instructor: string
	date: string
	time: string
	duration: string
	price: string
	level: ClassLevel
	category: ClassCategory
	description: string
	longDescription: string
	materials?: string[]
	prerequisites?: string[]
	maxParticipants: number
	registered: number
	location: string
	status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
}
