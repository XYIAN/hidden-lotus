import * as nodemailer from 'nodemailer'
import { MondayClass } from './monday-api'

interface EmailOptions {
	to: string | string[]
	subject: string
	html: string
	text?: string
}

class GmailService {
	private transporter: nodemailer.Transporter | null = null
	private isConfigured = false

	constructor() {
		this.initializeTransporter()
	}

	private initializeTransporter() {
		try {
			const gmailUser = process.env.GMAIL_USER
			const gmailPassword = process.env.GMAIL_APP_PASSWORD

			if (gmailUser && gmailPassword) {
				this.transporter = nodemailer.createTransporter({
					service: 'gmail',
					auth: {
						user: gmailUser,
						pass: gmailPassword,
					},
				})

				this.isConfigured = true
				console.log('Gmail service initialized successfully')
			} else {
				console.warn(
					'Gmail credentials not found. Email notifications will be disabled.'
				)
				this.isConfigured = false
			}
		} catch (error) {
			console.error('Failed to initialize Gmail service:', error)
			this.isConfigured = false
		}
	}

	/**
	 * Send a generic email
	 */
	async sendEmail(
		options: EmailOptions
	): Promise<{ success: boolean; error?: string }> {
		if (!this.isConfigured || !this.transporter) {
			return { success: false, error: 'Gmail service not configured' }
		}

		try {
			await this.transporter.sendMail({
				from: process.env.GMAIL_USER,
				to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
				subject: options.subject,
				html: options.html,
				text: options.text || this.stripHtml(options.html),
			})

			return { success: true }
		} catch (error) {
			return { success: false, error: `Failed to send email: ${error}` }
		}
	}

	/**
	 * Send class booking confirmation email
	 */
	async sendClassBookingConfirmation(
		classItem: MondayClass,
		participantEmail: string,
		participantName: string
	): Promise<{ success: boolean; error?: string }> {
		const subject = `Class Booking Confirmation - ${classItem.name}`

		const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #4a7c59, #6b8e6b); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">🧘‍♀️ Hidden Lotus</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Wellness Center</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #4a7c59; margin-top: 0;">Booking Confirmed! 🎉</h2>
          
          <p>Dear ${participantName},</p>
          
          <p>Your class booking has been successfully confirmed! We're excited to have you join us for this wonderful experience.</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4a7c59;">
            <h3 style="color: #4a7c59; margin-top: 0;">${classItem.name}</h3>
            <p><strong>Category:</strong> ${classItem.category}</p>
            <p><strong>Instructor:</strong> ${classItem.instructor}</p>
            <p><strong>Date:</strong> ${new Date(
							classItem.classDate
						).toLocaleDateString('en-US', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}</p>
            <p><strong>Time:</strong> ${classItem.time}</p>
            <p><strong>Duration:</strong> ${classItem.duration}</p>
            <p><strong>Level:</strong> ${classItem.level}</p>
            <p><strong>Price:</strong> ${classItem.price}</p>
            ${
							classItem.equipment
								? `<p><strong>Equipment Needed:</strong> ${classItem.equipment}</p>`
								: ''
						}
          </div>
          
          <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #2d5a2d;"><strong>📝 Important Notes:</strong></p>
            <ul style="margin: 10px 0 0 0; color: #2d5a2d;">
              <li>Please arrive 10 minutes before class starts</li>
              <li>Bring a water bottle and any required equipment</li>
              <li>Wear comfortable clothing suitable for movement</li>
              <li>If you need to cancel, please give us 24 hours notice</li>
            </ul>
          </div>
          
          <p>We look forward to seeing you soon!</p>
          
          <p>Namaste,<br>
          <strong>The Hidden Lotus Team</strong></p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              Hidden Lotus Wellness Center<br>
              Email: hiddenlotusjvn@gmail.com
            </p>
          </div>
        </div>
      </div>
    `

		return this.sendEmail({
			to: participantEmail,
			subject,
			html,
		})
	}

	/**
	 * Send class reminder email
	 */
	async sendClassReminder(
		classItem: MondayClass,
		participantEmail: string,
		participantName: string,
		reminderType: 'day_before' | 'hour_before' = 'day_before'
	): Promise<{ success: boolean; error?: string }> {
		const timeText = reminderType === 'day_before' ? 'tomorrow' : 'in one hour'
		const subject = `Class Reminder - ${classItem.name} ${timeText}`

		const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #4a7c59, #6b8e6b); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">🧘‍♀️ Hidden Lotus</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Wellness Center</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #4a7c59; margin-top: 0;">Class Reminder ⏰</h2>
          
          <p>Dear ${participantName},</p>
          
          <p>Just a friendly reminder that your class is coming up ${timeText}!</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4a7c59;">
            <h3 style="color: #4a7c59; margin-top: 0;">${classItem.name}</h3>
            <p><strong>Date:</strong> ${new Date(
							classItem.classDate
						).toLocaleDateString('en-US', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}</p>
            <p><strong>Time:</strong> ${classItem.time}</p>
            <p><strong>Instructor:</strong> ${classItem.instructor}</p>
          </div>
          
          <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #856404;"><strong>💡 Preparation Tips:</strong></p>
            <ul style="margin: 10px 0 0 0; color: #856404;">
              <li>Get a good night's rest</li>
              <li>Hydrate well throughout the day</li>
              <li>Eat a light meal 2-3 hours before class</li>
              <li>Bring a water bottle and any required equipment</li>
            </ul>
          </div>
          
          <p>We can't wait to see you there!</p>
          
          <p>Namaste,<br>
          <strong>The Hidden Lotus Team</strong></p>
        </div>
      </div>
    `

		return this.sendEmail({
			to: participantEmail,
			subject,
			html,
		})
	}

	/**
	 * Send class cancellation email
	 */
	async sendClassCancellation(
		classItem: MondayClass,
		participantEmail: string,
		participantName: string,
		reason?: string
	): Promise<{ success: boolean; error?: string }> {
		const subject = `Class Cancelled - ${classItem.name}`

		const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #dc3545, #c82333); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">🧘‍♀️ Hidden Lotus</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Wellness Center</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #dc3545; margin-top: 0;">Class Cancelled 😔</h2>
          
          <p>Dear ${participantName},</p>
          
          <p>We regret to inform you that the following class has been cancelled:</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc3545;">
            <h3 style="color: #dc3545; margin-top: 0;">${classItem.name}</h3>
            <p><strong>Date:</strong> ${new Date(
							classItem.classDate
						).toLocaleDateString('en-US', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}</p>
            <p><strong>Time:</strong> ${classItem.time}</p>
            <p><strong>Instructor:</strong> ${classItem.instructor}</p>
            ${reason ? `<p><strong>Reason:</strong> ${reason}</p>` : ''}
          </div>
          
          <div style="background: #f8d7da; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #721c24;"><strong>🔄 What's Next:</strong></p>
            <ul style="margin: 10px 0 0 0; color: #721c24;">
              <li>You will receive a full refund within 3-5 business days</li>
              <li>Check our schedule for alternative class times</li>
              <li>Contact us if you have any questions</li>
            </ul>
          </div>
          
          <p>We sincerely apologize for any inconvenience this may cause.</p>
          
          <p>Namaste,<br>
          <strong>The Hidden Lotus Team</strong></p>
        </div>
      </div>
    `

		return this.sendEmail({
			to: participantEmail,
			subject,
			html,
		})
	}

	/**
	 * Strip HTML tags from text
	 */
	private stripHtml(html: string): string {
		return html
			.replace(/<[^>]*>/g, '')
			.replace(/\s+/g, ' ')
			.trim()
	}

	/**
	 * Check if Gmail service is properly configured
	 */
	isConfigured(): boolean {
		return this.isConfigured
	}
}

export const gmailService = new GmailService()
export { GmailService }
