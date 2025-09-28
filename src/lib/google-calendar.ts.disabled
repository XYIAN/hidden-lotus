import { google } from 'googleapis'
import { MondayClass } from './monday-api'

// Google Calendar API configuration
const GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'primary'
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
const GOOGLE_PROJECT_ID = process.env.GOOGLE_PROJECT_ID

export interface GoogleCalendarEvent {
	id?: string
	summary: string
	description?: string
	start: {
		dateTime?: string
		date?: string
		timeZone?: string
	}
	end: {
		dateTime?: string
		date?: string
		timeZone?: string
	}
	location?: string
	attendees?: Array<{
		email: string
		displayName?: string
	}>
	reminders?: {
		useDefault: boolean
		overrides?: Array<{
			method: 'email' | 'popup'
			minutes: number
		}>
	}
}

class GoogleCalendarService {
	private calendar: any
	private isAuthenticated = false

	constructor() {
		this.initializeAuth()
	}

	private initializeAuth() {
		try {
			if (GOOGLE_CLIENT_EMAIL && GOOGLE_PRIVATE_KEY && GOOGLE_PROJECT_ID) {
				// Service account authentication
				const auth = new google.auth.GoogleAuth({
					credentials: {
						client_email: GOOGLE_CLIENT_EMAIL,
						private_key: GOOGLE_PRIVATE_KEY,
						project_id: GOOGLE_PROJECT_ID,
					},
					scopes: ['https://www.googleapis.com/auth/calendar'],
				})

				this.calendar = google.calendar({ version: 'v3', auth })
				this.isAuthenticated = true
				console.log('Google Calendar service initialized with service account')
			} else {
				console.warn(
					'Google Calendar credentials not found. Calendar sync will be disabled.'
				)
				this.isAuthenticated = false
			}
		} catch (error) {
			console.error('Failed to initialize Google Calendar service:', error)
			this.isAuthenticated = false
		}
	}

	/**
	 * Convert Monday.com class to Google Calendar event
	 */
	private mondayClassToGoogleEvent(
		mondayClass: MondayClass
	): GoogleCalendarEvent {
		// Parse the class date and time
		const classDate = new Date(mondayClass.classDate)
		const [hours, minutes] = mondayClass.time.split(':').map(Number)

		// Set start time
		const startDateTime = new Date(classDate)
		startDateTime.setHours(hours, minutes, 0, 0)

		// Calculate end time based on duration
		const durationMinutes = this.parseDuration(mondayClass.duration)
		const endDateTime = new Date(
			startDateTime.getTime() + durationMinutes * 60000
		)

		return {
			summary: `${mondayClass.name} - ${mondayClass.category}`,
			description: `${mondayClass.description}\n\nInstructor: ${mondayClass.instructor}\nLevel: ${mondayClass.level}\nPrice: ${mondayClass.price}\nMax Participants: ${mondayClass.maxParticipants}\nEquipment: ${mondayClass.equipment}`,
			start: {
				dateTime: startDateTime.toISOString(),
				timeZone: 'America/New_York', // Adjust timezone as needed
			},
			end: {
				dateTime: endDateTime.toISOString(),
				timeZone: 'America/New_York',
			},
			location: 'Hidden Lotus Wellness Center', // You can make this configurable
			reminders: {
				useDefault: false,
				overrides: [
					{ method: 'email', minutes: 24 * 60 }, // 1 day before
					{ method: 'popup', minutes: 30 }, // 30 minutes before
				],
			},
		}
	}

	/**
	 * Parse duration string to minutes
	 */
	private parseDuration(duration: string): number {
		const match = duration.match(/(\d+)\s*(hour|hr|min|minute)/i)
		if (match) {
			const value = parseInt(match[1])
			const unit = match[2].toLowerCase()
			return unit.startsWith('h') ? value * 60 : value
		}
		return 60 // Default to 60 minutes
	}

	/**
	 * Sync all Monday.com classes to Google Calendar
	 */
	async syncClassesToCalendar(classes: MondayClass[]): Promise<{
		success: boolean
		created: number
		updated: number
		errors: string[]
	}> {
		if (!this.isAuthenticated) {
			return {
				success: false,
				created: 0,
				updated: 0,
				errors: ['Google Calendar not authenticated'],
			}
		}

		const results = {
			success: true,
			created: 0,
			updated: 0,
			errors: [] as string[],
		}

		try {
			// Get existing events for the next 30 days
			const now = new Date()
			const thirtyDaysFromNow = new Date(
				now.getTime() + 30 * 24 * 60 * 60 * 1000
			)

			const existingEvents = await this.calendar.events.list({
				calendarId: GOOGLE_CALENDAR_ID,
				timeMin: now.toISOString(),
				timeMax: thirtyDaysFromNow.toISOString(),
				singleEvents: true,
				orderBy: 'startTime',
			})

			const existingEventsMap = new Map()
			existingEvents.data.items?.forEach((event: any) => {
				if (event.summary?.includes('Hidden Lotus')) {
					existingEventsMap.set(event.summary, event.id)
				}
			})

			// Process each class
			for (const mondayClass of classes) {
				try {
					const googleEvent = this.mondayClassToGoogleEvent(mondayClass)
					const eventTitle = googleEvent.summary

					if (existingEventsMap.has(eventTitle)) {
						// Update existing event
						await this.calendar.events.update({
							calendarId: GOOGLE_CALENDAR_ID,
							eventId: existingEventsMap.get(eventTitle),
							resource: googleEvent,
						})
						results.updated++
						console.log(`Updated Google Calendar event: ${eventTitle}`)
					} else {
						// Create new event
						await this.calendar.events.insert({
							calendarId: GOOGLE_CALENDAR_ID,
							resource: googleEvent,
						})
						results.created++
						console.log(`Created Google Calendar event: ${eventTitle}`)
					}
				} catch (error) {
					const errorMsg = `Failed to sync class "${mondayClass.name}": ${error}`
					results.errors.push(errorMsg)
					console.error(errorMsg)
				}
			}

			console.log(
				`Google Calendar sync completed: ${results.created} created, ${results.updated} updated, ${results.errors.length} errors`
			)
		} catch (error) {
			results.success = false
			results.errors.push(`Calendar sync failed: ${error}`)
			console.error('Google Calendar sync failed:', error)
		}

		return results
	}

	/**
	 * Create a single event in Google Calendar
	 */
	async createEvent(
		mondayClass: MondayClass
	): Promise<{ success: boolean; eventId?: string; error?: string }> {
		if (!this.isAuthenticated) {
			return { success: false, error: 'Google Calendar not authenticated' }
		}

		try {
			const googleEvent = this.mondayClassToGoogleEvent(mondayClass)
			const response = await this.calendar.events.insert({
				calendarId: GOOGLE_CALENDAR_ID,
				resource: googleEvent,
			})

			return { success: true, eventId: response.data.id }
		} catch (error) {
			return { success: false, error: `Failed to create event: ${error}` }
		}
	}

	/**
	 * Update an existing event in Google Calendar
	 */
	async updateEvent(
		eventId: string,
		mondayClass: MondayClass
	): Promise<{ success: boolean; error?: string }> {
		if (!this.isAuthenticated) {
			return { success: false, error: 'Google Calendar not authenticated' }
		}

		try {
			const googleEvent = this.mondayClassToGoogleEvent(mondayClass)
			await this.calendar.events.update({
				calendarId: GOOGLE_CALENDAR_ID,
				eventId,
				resource: googleEvent,
			})

			return { success: true }
		} catch (error) {
			return { success: false, error: `Failed to update event: ${error}` }
		}
	}

	/**
	 * Delete an event from Google Calendar
	 */
	async deleteEvent(
		eventId: string
	): Promise<{ success: boolean; error?: string }> {
		if (!this.isAuthenticated) {
			return { success: false, error: 'Google Calendar not authenticated' }
		}

		try {
			await this.calendar.events.delete({
				calendarId: GOOGLE_CALENDAR_ID,
				eventId,
			})

			return { success: true }
		} catch (error) {
			return { success: false, error: `Failed to delete event: ${error}` }
		}
	}

	/**
	 * Check if Google Calendar is properly configured
	 */
	isConfigured(): boolean {
		return (
			this.isAuthenticated &&
			!!(GOOGLE_CLIENT_EMAIL && GOOGLE_PRIVATE_KEY && GOOGLE_PROJECT_ID)
		)
	}
}

export const googleCalendarService = new GoogleCalendarService()
export { GoogleCalendarService }
