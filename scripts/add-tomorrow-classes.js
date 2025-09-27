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

async function addTomorrowClasses() {
	console.log('Adding classes for tomorrow...')

	const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000)
		.toISOString()
		.split('T')[0]
	console.log(`Tomorrow: ${tomorrow}`)

	const classesToAdd = [
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

	for (const classData of classesToAdd) {
		try {
			const createQuery = `
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

			const columnValues = {
				text_mkw6pter: classData.instructor,
				date4: classData.classDate,
				text_mkw6gj52: classData.time,
				text_mkw61ehe: classData.duration,
				text_mkw6gn54: classData.price,
				text_mkw6ybjy: classData.category,
				text_mkw6c4rm: classData.level,
				text_mkw6p1q4: classData.maxParticipants.toString(),
				text_mkw6mjvm: classData.equipment,
				text_mkw6dc8p: classData.description,
				text_mkw66znw: classData.status,
				status: { label: 'Working on it' },
			}

			const variables = {
				boardId: BOARD_ID,
				itemName: classData.name,
				columnValues: JSON.stringify(columnValues),
			}

			await makeRequest(createQuery, variables)
			console.log(`✅ Created: ${classData.name} (${classData.classDate})`)

			// Add delay to avoid rate limiting
			await new Promise((resolve) => setTimeout(resolve, 1000))
		} catch (error) {
			console.error(`❌ Failed to create ${classData.name}:`, error.message)
		}
	}
}

addTomorrowClasses()
