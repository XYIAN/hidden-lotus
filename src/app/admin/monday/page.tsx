/**
 * Hidden Monday.com Management Page
 * Password protected and not indexed by search engines
 */

'use client'

import React, { useState, useEffect } from 'react'
import { ClassManager } from '@/components/monday/class-manager'
import { CalendarView } from '@/components/monday/calendar-view'
import { IntegrationManager } from '@/components/monday/integration-manager'
import { useMondayClasses } from '@/hooks/useMondayClasses'
import { MondayClass } from '@/lib/monday-api'

const ADMIN_PASSWORD = 'hiddenlotus2024' // Change this to a secure password

export default function MondayAdminPage() {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [activeTab, setActiveTab] = useState<
		'calendar' | 'manage' | 'sync' | 'integrations'
	>('calendar')
	const { classes, loading, refetch } = useMondayClasses()

	// Check if user is already authenticated
	useEffect(() => {
		const authStatus = sessionStorage.getItem('monday-admin-auth')
		if (authStatus === 'true') {
			setIsAuthenticated(true)
		}
	}, [])

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault()
		if (password === ADMIN_PASSWORD) {
			setIsAuthenticated(true)
			sessionStorage.setItem('monday-admin-auth', 'true')
			setError('')
		} else {
			setError('Incorrect password')
		}
	}

	const handleLogout = () => {
		setIsAuthenticated(false)
		sessionStorage.removeItem('monday-admin-auth')
		setPassword('')
	}

	const handleClassSaved = (classItem: MondayClass) => {
		console.log('Class saved:', classItem)
		refetch() // Refresh the data
	}

	const handleClassDeleted = (classId: string) => {
		console.log('Class deleted:', classId)
		refetch() // Refresh the data
	}

	// If not authenticated, show login form
	if (!isAuthenticated) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gray-50">
				<div className="max-w-md w-full space-y-8">
					<div>
						<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
							Monday.com Admin
						</h2>
						<p className="mt-2 text-center text-sm text-gray-600">
							Enter password to access management features
						</p>
					</div>
					<form className="mt-8 space-y-6" onSubmit={handleLogin}>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sage-green-500 focus:border-sage-green-500 focus:z-10 sm:text-sm"
								placeholder="Enter password"
							/>
						</div>

						{error && (
							<div className="text-red-600 text-sm text-center">{error}</div>
						)}

						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sage-green-600 hover:bg-sage-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-green-500"
							>
								Sign in
							</button>
						</div>
					</form>
				</div>
			</div>
		)
	}

	// Authenticated view
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<div className="bg-white shadow">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-6">
						<div>
							<h1 className="text-2xl font-bold text-gray-900">
								Monday.com Management
							</h1>
							<p className="text-sm text-gray-600">
								Hidden Lotus Class Management
							</p>
						</div>
						<button
							onClick={handleLogout}
							className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
						>
							Logout
						</button>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{/* Tab Navigation */}
				<div className="mb-6">
					<div className="border-b border-gray-200">
						<nav className="-mb-px flex space-x-8">
							<button
								onClick={() => setActiveTab('calendar')}
								className={`py-2 px-1 border-b-2 font-medium text-sm ${
									activeTab === 'calendar'
										? 'border-sage-green-500 text-sage-green-600'
										: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
								}`}
							>
								Calendar View
							</button>
							<button
								onClick={() => setActiveTab('manage')}
								className={`py-2 px-1 border-b-2 font-medium text-sm ${
									activeTab === 'manage'
										? 'border-sage-green-500 text-sage-green-600'
										: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
								}`}
							>
								Manage Classes
							</button>
							<button
								onClick={() => setActiveTab('sync')}
								className={`py-2 px-1 border-b-2 font-medium text-sm ${
									activeTab === 'sync'
										? 'border-sage-green-500 text-sage-green-600'
										: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
								}`}
							>
								Sync Status
							</button>
							<button
								onClick={() => setActiveTab('integrations')}
								className={`py-2 px-1 border-b-2 font-medium text-sm ${
									activeTab === 'integrations'
										? 'border-sage-green-500 text-sage-green-600'
										: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
								}`}
							>
								Integrations
							</button>
						</nav>
					</div>
				</div>

				{/* Tab Content */}
				{activeTab === 'calendar' && (
					<div>
						<CalendarView showFilters={true} className="mb-6" />
					</div>
				)}

				{activeTab === 'manage' && (
					<ClassManager
						onClassSaved={handleClassSaved}
						onClassDeleted={handleClassDeleted}
					/>
				)}

				{activeTab === 'sync' && (
					<div className="bg-white rounded-lg shadow p-6">
						<h3 className="text-lg font-semibold text-gray-900 mb-4">
							Sync Status
						</h3>
						<div className="space-y-4">
							<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
								<div>
									<h4 className="font-medium text-gray-900">
										Monday.com Connection
									</h4>
									<p className="text-sm text-gray-600">API connection status</p>
								</div>
								<div className="flex items-center">
									{loading ? (
										<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-sage-green-600"></div>
									) : (
										<span className="text-green-600 font-medium">
											Connected
										</span>
									)}
								</div>
							</div>

							<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
								<div>
									<h4 className="font-medium text-gray-900">Classes Synced</h4>
									<p className="text-sm text-gray-600">
										Total classes in Monday.com
									</p>
								</div>
								<span className="text-sage-green-600 font-medium">
									{classes.length}
								</span>
							</div>

							<div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
								<div>
									<h4 className="font-medium text-gray-900">Last Sync</h4>
									<p className="text-sm text-gray-600">
										Last time data was refreshed
									</p>
								</div>
								<span className="text-gray-600">
									{new Date().toLocaleString()}
								</span>
							</div>

							<button
								onClick={() => refetch()}
								className="w-full px-4 py-2 bg-sage-green-600 text-white rounded-md hover:bg-sage-green-700 transition-colors"
							>
								Refresh Data
							</button>
						</div>
					</div>
				)}

				{activeTab === 'integrations' && <IntegrationManager />}
			</div>
		</div>
	)
}
