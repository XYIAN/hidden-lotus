// Using built-in fetch (Node.js 18+)

const API_TOKEN =
	'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjU2NzMwNzQ5MCwiYWFpIjoxMSwidWlkIjozNTIyNDA5MSwiaWFkIjoiMjAyNS0wOS0yN1QyMjowNToyMy44MzRaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM2MjEyNzgsInJnbiI6InVzZTEifQ.c0jB4Zb97oc8gm6vcQGXzRMhpXgVoT9r9j74kKOOBRY'
const BOARD_ID = '18059023393'

async function makeRequest(query, variables = {}) {
	const response = await fetch('https://api.monday.com/v2', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: API_TOKEN,
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}

	const data = await response.json()

	if (data.errors) {
		console.error('GraphQL errors:', data.errors)
		throw new Error(data.errors[0].message)
	}

	return data.data
}

function getTodayAndTomorrow() {
	const today = new Date()
	const tomorrow = new Date(today)
	tomorrow.setDate(tomorrow.getDate() + 1)

	return {
		today: today.toISOString().split('T')[0],
		tomorrow: tomorrow.toISOString().split('T')[0],
	}
}

function mapClassToColumnValues(classData) {
	// Using actual column IDs from the Monday.com board
	return {
		text_mkw6pter: classData.instructor, // Instructor
		date4: classData.classDate, // Date
		text_mkw6gj52: classData.time, // Time
		text_mkw61ehe: classData.duration, // Duration
		text_mkw6gn54: classData.price, // Price
		text_mkw6ybjy: classData.category, // Category
		text_mkw6c4rm: classData.level, // Level
		text_mkw6p1q4: classData.maxParticipants.toString(), // Max Participants
		text_mkw6mjvm: Array.isArray(classData.equipment)
			? classData.equipment.join(', ')
			: classData.equipment, // Equipment
		text_mkw6dc8p: classData.description, // Description
		text_mkw66znw: classData.status || 'Scheduled', // Class Status
		status: { label: 'Working on it' }, // Status
	}
}

async function createClass(classData) {
	const query = `
    mutation CreateClass($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
      create_item(
        board_id: $boardId,
        item_name: $itemName,
        column_values: $columnValues
      ) {
        id
      }
    }
  `

	const variables = {
		boardId: BOARD_ID,
		itemName: classData.name,
		columnValues: JSON.stringify(mapClassToColumnValues(classData)),
	}

	const data = await makeRequest(query, variables)
	return data.create_item
}

async function addTodayTomorrowClasses() {
	console.log('Adding classes for today and tomorrow...')

	const { today, tomorrow } = getTodayAndTomorrow()
	console.log(`Today: ${today}, Tomorrow: ${tomorrow}`)

	const classesToAdd = [
		// Today's classes
		{
			name: 'Morning Yoga Flow',
			instructor: 'Jaideep',
			classDate: today,
			time: '07:00 AM',
			duration: '75 minutes',
			price: 'Donation Based',
			category: 'Yoga',
			level: 'Beginner',
			maxParticipants: 20,
			equipment: 'Yoga mat, Blocks, Strap',
			description:
				'Start your day with a gentle yoga flow to energize your body and mind.',
			status: 'Scheduled',
		},
		{
			name: 'Evening Sound Bath',
			instructor: 'Vuong',
			classDate: today,
			time: '06:30 PM',
			duration: '60 minutes',
			price: 'Donation Based',
			category: 'Sound Healing',
			level: 'Beginner',
			maxParticipants: 15,
			equipment: 'Yoga mat, Bolster, Blanket',
			description:
				'Relax and unwind with the healing vibrations of crystal bowls and gongs.',
			status: 'Scheduled',
		},
		// Tomorrow's classes
		{
			name: 'Power Yoga',
			instructor: 'Jaideep',
			classDate: tomorrow,
			time: '08:00 AM',
			duration: '90 minutes',
			price: 'Donation Based',
			category: 'Yoga',
			level: 'Intermediate',
			maxParticipants: 15,
			equipment: 'Yoga mat, Blocks, Strap',
			description:
				'Build strength and flexibility with this dynamic yoga practice.',
			status: 'Scheduled',
		},
		{
			name: 'Meditation & Mindfulness',
			instructor: 'Vuong',
			classDate: tomorrow,
			time: '07:00 PM',
			duration: '45 minutes',
			price: 'Donation Based',
			category: 'Meditation',
			level: 'Beginner',
			maxParticipants: 25,
			equipment: 'Cushion, Blanket',
			description:
				'Learn mindfulness techniques and deep meditation practices.',
			status: 'Scheduled',
		},
	]

	const results = {
		successful: 0,
		failed: 0,
		errors: [],
	}

	for (const classData of classesToAdd) {
		try {
			console.log(`Creating class: ${classData.name} (${classData.classDate})`)
			const createdClass = await createClass(classData)

			if (createdClass) {
				console.log(`✅ Successfully created: ${classData.name}`)
				results.successful++
			} else {
				console.log(`❌ Failed to create: ${classData.name}`)
				results.failed++
				results.errors.push(`Failed to create ${classData.name}`)
			}

			// Add a small delay to avoid rate limiting
			await new Promise((resolve) => setTimeout(resolve, 1000))
		} catch (error) {
			console.error(`❌ Error creating ${classData.name}:`, error.message)
			results.failed++
			results.errors.push(`Error creating ${classData.name}: ${error.message}`)
		}
	}

	console.log('Addition complete!')
	console.log(`Successful: ${results.successful}`)
	console.log(`Failed: ${results.failed}`)

	if (results.errors.length > 0) {
		console.log('Errors:', results.errors)
	}

	return results
}

// Run the addition
addTodayTomorrowClasses()
	.then((results) => {
		console.log('Final results:', results)
		process.exit(0)
	})
	.catch((error) => {
		console.error('Addition failed:', error)
		process.exit(1)
	})
