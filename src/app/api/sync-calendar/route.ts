import { NextResponse } from 'next/server'
import { mondayApi } from '@/lib/monday-api'
import { googleCalendarService } from '@/lib/google-calendar'

export async function POST() {
	try {
		console.log('Starting Google Calendar sync...')

		// Fetch classes from Monday.com
		const classes = await mondayApi.getClasses()
		console.log(`Fetched ${classes.length} classes from Monday.com`)

		// Sync with Google Calendar
		const syncResult = await googleCalendarService.syncClassesToCalendar(
			classes
		)

		if (syncResult.success) {
			console.log(
				`Google Calendar sync completed: ${syncResult.created} created, ${syncResult.updated} updated`
			)

			return NextResponse.json({
				success: true,
				message: 'Calendar sync completed successfully',
				stats: {
					totalClasses: classes.length,
					created: syncResult.created,
					updated: syncResult.updated,
					errors: syncResult.errors.length,
				},
				errors: syncResult.errors,
			})
		} else {
			console.error('Google Calendar sync failed:', syncResult.errors)

			return NextResponse.json(
				{
					success: false,
					message: 'Calendar sync failed',
					errors: syncResult.errors,
				},
				{ status: 500 }
			)
		}
	} catch (error) {
		console.error('Calendar sync error:', error)

		return NextResponse.json(
			{
				success: false,
				message: 'Failed to sync calendar',
				error: error instanceof Error ? error.message : 'Unknown error',
			},
			{ status: 500 }
		)
	}
}

export async function GET() {
	try {
		const isConfigured = googleCalendarService.isConfigured()

		return NextResponse.json({
			success: true,
			configured: isConfigured,
			message: isConfigured
				? 'Google Calendar integration is configured and ready'
				: 'Google Calendar integration is not configured. Please set up Google service account credentials.',
		})
	} catch (error) {
		return NextResponse.json(
			{
				success: false,
				message: 'Failed to check calendar configuration',
				error: error instanceof Error ? error.message : 'Unknown error',
			},
			{ status: 500 }
		)
	}
}
