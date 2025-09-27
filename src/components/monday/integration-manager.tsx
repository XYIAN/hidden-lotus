'use client'

import React, { useState } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Dropdown } from 'primereact/dropdown'
import { Message } from 'primereact/message'
import { ProgressBar } from 'primereact/progressbar'
import { Divider } from 'primereact/divider'
import { useMondayClasses } from '@/hooks/useMondayClasses'

interface SyncResult {
	success: boolean
	message: string
	stats?: {
		totalClasses: number
		created: number
		updated: number
		errors: number
	}
	errors?: string[]
}

export function IntegrationManager() {
	const { classes, refetch } = useMondayClasses()
	const [syncLoading, setSyncLoading] = useState(false)
	const [emailLoading, setEmailLoading] = useState(false)
	const [syncResult, setSyncResult] = useState<SyncResult | null>(null)
	const [emailResult, setEmailResult] = useState<string | null>(null)

	// Email form state
	const [emailForm, setEmailForm] = useState({
		type: 'booking_confirmation',
		classId: '',
		participantEmail: '',
		participantName: '',
		reminderType: 'day_before',
		cancellationReason: '',
	})

	const emailTypes = [
		{ label: 'Booking Confirmation', value: 'booking_confirmation' },
		{ label: 'Reminder', value: 'reminder' },
		{ label: 'Cancellation', value: 'cancellation' },
	]

	const reminderTypes = [
		{ label: 'Day Before', value: 'day_before' },
		{ label: 'Hour Before', value: 'hour_before' },
	]

	const classOptions = classes.map((cls) => ({
		label: `${cls.name} - ${new Date(cls.classDate).toLocaleDateString()}`,
		value: cls.id,
	}))

	const handleSyncCalendar = async () => {
		setSyncLoading(true)
		setSyncResult(null)

		try {
			const response = await fetch('/api/sync-calendar', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			})

			const result = await response.json()
			setSyncResult(result)

			if (result.success) {
				// Refresh classes after successful sync
				await refetch()
			}
		} catch (error) {
			setSyncResult({
				success: false,
				message: 'Failed to sync calendar',
				errors: [error instanceof Error ? error.message : 'Unknown error'],
			})
		} finally {
			setSyncLoading(false)
		}
	}

	const handleSendEmail = async () => {
		setEmailLoading(true)
		setEmailResult(null)

		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(emailForm),
			})

			const result = await response.json()
			setEmailResult(result.message)
		} catch (error) {
			setEmailResult(
				`Failed to send email: ${
					error instanceof Error ? error.message : 'Unknown error'
				}`
			)
		} finally {
			setEmailLoading(false)
		}
	}

	const checkCalendarStatus = async () => {
		try {
			const response = await fetch('/api/sync-calendar')
			const result = await response.json()
			setSyncResult(result)
		} catch (error) {
			setSyncResult({
				success: false,
				message: 'Failed to check calendar status',
				errors: [error instanceof Error ? error.message : 'Unknown error'],
			})
		}
	}

	const checkEmailStatus = async () => {
		try {
			const response = await fetch('/api/send-email')
			const result = await response.json()
			setEmailResult(result.message)
		} catch (error) {
			setEmailResult(
				`Failed to check email status: ${
					error instanceof Error ? error.message : 'Unknown error'
				}`
			)
		}
	}

	return (
		<div className="space-y-6">
			{/* Google Calendar Integration */}
			<Card title="Google Calendar Integration" className="w-full">
				<div className="space-y-4">
					<p className="text-gray-600">
						Sync your Monday.com classes with Google Calendar for seamless
						scheduling.
					</p>

					<div className="flex gap-3">
						<Button
							label="Sync to Google Calendar"
							icon="pi pi-calendar"
							onClick={handleSyncCalendar}
							loading={syncLoading}
							className="p-button-success"
						/>
						<Button
							label="Check Status"
							icon="pi pi-info-circle"
							onClick={checkCalendarStatus}
							className="p-button-outlined"
						/>
					</div>

					{syncLoading && (
						<div className="space-y-2">
							<p className="text-sm text-gray-600">
								Syncing classes to Google Calendar...
							</p>
							<ProgressBar mode="indeterminate" style={{ height: '6px' }} />
						</div>
					)}

					{syncResult && (
						<div className="mt-4">
							<Message
								severity={syncResult.success ? 'success' : 'error'}
								text={syncResult.message}
								className="w-full"
							/>

							{syncResult.stats && (
								<div className="mt-3 p-3 bg-gray-50 rounded-lg">
									<h4 className="font-semibold mb-2">Sync Statistics:</h4>
									<ul className="text-sm space-y-1">
										<li>Total Classes: {syncResult.stats.totalClasses}</li>
										<li>Created: {syncResult.stats.created}</li>
										<li>Updated: {syncResult.stats.updated}</li>
										<li>Errors: {syncResult.stats.errors}</li>
									</ul>
								</div>
							)}

							{syncResult.errors && syncResult.errors.length > 0 && (
								<div className="mt-3">
									<h4 className="font-semibold text-red-600 mb-2">Errors:</h4>
									<ul className="text-sm text-red-600 space-y-1">
										{syncResult.errors.map((error, index) => (
											<li key={index}>• {error}</li>
										))}
									</ul>
								</div>
							)}
						</div>
					)}
				</div>
			</Card>

			<Divider />

			{/* Email Integration */}
			<Card title="Email Notifications" className="w-full">
				<div className="space-y-4">
					<p className="text-gray-600">
						Test email notifications for class bookings, reminders, and
						cancellations.
					</p>

					<div className="flex gap-3 mb-4">
						<Button
							label="Check Email Status"
							icon="pi pi-envelope"
							onClick={checkEmailStatus}
							className="p-button-outlined"
						/>
					</div>

					{emailResult && (
						<Message
							severity={
								emailResult.includes('successfully') ? 'success' : 'error'
							}
							text={emailResult}
							className="w-full"
						/>
					)}

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Email Type
							</label>
							<Dropdown
								value={emailForm.type}
								onChange={(e) => setEmailForm({ ...emailForm, type: e.value })}
								options={emailTypes}
								className="w-full"
								placeholder="Select email type"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Class
							</label>
							<Dropdown
								value={emailForm.classId}
								onChange={(e) =>
									setEmailForm({ ...emailForm, classId: e.value })
								}
								options={classOptions}
								className="w-full"
								placeholder="Select a class"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Participant Email
							</label>
							<InputText
								value={emailForm.participantEmail}
								onChange={(e) =>
									setEmailForm({
										...emailForm,
										participantEmail: e.target.value,
									})
								}
								placeholder="participant@example.com"
								className="w-full"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Participant Name
							</label>
							<InputText
								value={emailForm.participantName}
								onChange={(e) =>
									setEmailForm({
										...emailForm,
										participantName: e.target.value,
									})
								}
								placeholder="John Doe"
								className="w-full"
							/>
						</div>

						{emailForm.type === 'reminder' && (
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Reminder Type
								</label>
								<Dropdown
									value={emailForm.reminderType}
									onChange={(e) =>
										setEmailForm({ ...emailForm, reminderType: e.value })
									}
									options={reminderTypes}
									className="w-full"
								/>
							</div>
						)}

						{emailForm.type === 'cancellation' && (
							<div className="md:col-span-2">
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Cancellation Reason (Optional)
								</label>
								<InputTextarea
									value={emailForm.cancellationReason}
									onChange={(e) =>
										setEmailForm({
											...emailForm,
											cancellationReason: e.target.value,
										})
									}
									placeholder="Enter reason for cancellation..."
									rows={3}
									className="w-full"
								/>
							</div>
						)}
					</div>

					<Button
						label="Send Test Email"
						icon="pi pi-send"
						onClick={handleSendEmail}
						loading={emailLoading}
						className="p-button-success"
						disabled={
							!emailForm.classId ||
							!emailForm.participantEmail ||
							!emailForm.participantName
						}
					/>
				</div>
			</Card>
		</div>
	)
}
