import { NextResponse } from 'next/server'
import { gmailService } from '@/lib/gmail-service'
import { mondayApi, MondayClass } from '@/lib/monday-api'

interface EmailRequest {
	type: 'booking_confirmation' | 'reminder' | 'cancellation'
	classId: string
	participantEmail: string
	participantName: string
	reminderType?: 'day_before' | 'hour_before'
	cancellationReason?: string
}

export async function POST(request: Request) {
	try {
		const body: EmailRequest = await request.json()
		const {
			type,
			classId,
			participantEmail,
			participantName,
			reminderType,
			cancellationReason,
		} = body

		// Validate required fields
		if (!type || !classId || !participantEmail || !participantName) {
			return NextResponse.json(
				{
					success: false,
					message:
						'Missing required fields: type, classId, participantEmail, participantName',
				},
				{ status: 400 }
			)
		}

		// Get class details from Monday.com
		const classes = await mondayApi.getClasses()
		const classItem = classes.find((c) => c.id === classId)

		if (!classItem) {
			return NextResponse.json(
				{
					success: false,
					message: 'Class not found',
				},
				{ status: 404 }
			)
		}

		let result

		switch (type) {
			case 'booking_confirmation':
				result = await gmailService.sendClassBookingConfirmation(
					classItem,
					participantEmail,
					participantName
				)
				break

			case 'reminder':
				result = await gmailService.sendClassReminder(
					classItem,
					participantEmail,
					participantName,
					reminderType || 'day_before'
				)
				break

			case 'cancellation':
				result = await gmailService.sendClassCancellation(
					classItem,
					participantEmail,
					participantName,
					cancellationReason
				)
				break

			default:
				return NextResponse.json(
					{
						success: false,
						message:
							'Invalid email type. Must be: booking_confirmation, reminder, or cancellation',
					},
					{ status: 400 }
				)
		}

		if (result.success) {
			return NextResponse.json({
				success: true,
				message: `Email sent successfully to ${participantEmail}`,
			})
		} else {
			return NextResponse.json(
				{
					success: false,
					message: 'Failed to send email',
					error: result.error,
				},
				{ status: 500 }
			)
		}
	} catch (error) {
		console.error('Email sending error:', error)

		return NextResponse.json(
			{
				success: false,
				message: 'Failed to send email',
				error: error instanceof Error ? error.message : 'Unknown error',
			},
			{ status: 500 }
		)
	}
}

export async function GET() {
	try {
		const isConfigured = gmailService.isConfigured()

		return NextResponse.json({
			success: true,
			configured: isConfigured,
			message: isConfigured
				? 'Gmail service is configured and ready'
				: 'Gmail service is not configured. Please set up Gmail credentials.',
		})
	} catch (error) {
		return NextResponse.json(
			{
				success: false,
				message: 'Failed to check email configuration',
				error: error instanceof Error ? error.message : 'Unknown error',
			},
			{ status: 500 }
		)
	}
}
