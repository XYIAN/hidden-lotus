#!/usr/bin/env node

/**
 * Google Calendar Setup Helper
 * This script helps you set up Google Calendar integration for Hidden Lotus
 */

const fs = require('fs')
const path = require('path')

console.log('🧘‍♀️ Hidden Lotus - Google Calendar Setup Helper\n')

console.log('📋 To set up Google Calendar integration, follow these steps:\n')

console.log('1. 🌐 Create a Google Cloud Project:')
console.log('   • Go to https://console.cloud.google.com/')
console.log('   • Create a new project or select an existing one')
console.log('   • Note your Project ID\n')

console.log('2. 🔌 Enable Google Calendar API:')
console.log('   • In Google Cloud Console, go to "APIs & Services" → "Library"')
console.log('   • Search for "Google Calendar API" and enable it\n')

console.log('3. 🔑 Create a Service Account:')
console.log('   • Go to "APIs & Services" → "Credentials"')
console.log('   • Click "Create Credentials" → "Service Account"')
console.log('   • Give it a name: "hidden-lotus-calendar"')
console.log('   • Create and download the JSON key file\n')

console.log('4. 📅 Share Calendar with Service Account:')
console.log('   • Open Google Calendar')
console.log('   • Go to calendar settings → "Share with specific people"')
console.log('   • Add the service account email (from the JSON file)')
console.log('   • Give it "Make changes to events" permission\n')

console.log('5. 📝 Extract Credentials:')
console.log('   • Open the downloaded JSON file')
console.log('   • Copy the following values:')
console.log('     - client_email')
console.log('     - private_key (keep the quotes and \\n characters)')
console.log('     - project_id\n')

console.log('6. 🔧 Add to Environment Variables:')
console.log('   • Add these to your .env.local file:')
console.log(
	'     GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com'
)
console.log(
	'     GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\nYour-Private-Key-Here\\n-----END PRIVATE KEY-----\\n"'
)
console.log('     GOOGLE_PROJECT_ID=your-google-cloud-project-id')
console.log('     GOOGLE_CALENDAR_ID=primary\n')

console.log('7. 🚀 Test the Integration:')
console.log('   • Restart your development server: npm run dev')
console.log('   • Go to /admin/monday and click the "Integrations" tab')
console.log('   • Test the Google Calendar sync\n')

console.log(
	'✨ Once set up, your classes will automatically sync to Google Calendar!'
)
console.log(
	'📧 Email notifications will be sent for bookings, reminders, and cancellations.\n'
)

// Check if .env.local exists
const envPath = path.join(process.cwd(), '.env.local')
if (fs.existsSync(envPath)) {
	console.log('✅ .env.local file found!')

	const envContent = fs.readFileSync(envPath, 'utf8')

	if (envContent.includes('GOOGLE_CLIENT_EMAIL')) {
		console.log('✅ Google Calendar credentials detected in .env.local')
	} else {
		console.log('⚠️  Google Calendar credentials not found in .env.local')
		console.log('   Please add them following the steps above\n')
	}
} else {
	console.log('⚠️  .env.local file not found')
	console.log('   Please create it with the environment variables\n')
}

console.log('🔗 Useful Links:')
console.log('   • Google Cloud Console: https://console.cloud.google.com/')
console.log(
	'   • Google Calendar API: https://developers.google.com/calendar/api'
)
console.log(
	'   • Service Account Guide: https://cloud.google.com/iam/docs/service-accounts'
)
