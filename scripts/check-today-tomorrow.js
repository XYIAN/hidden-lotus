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

async function checkTodayTomorrow() {
	console.log('Checking for today and tomorrow classes...')

	const today = new Date().toISOString().split('T')[0]
	const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000)
		.toISOString()
		.split('T')[0]

	console.log(`Today: ${today}`)
	console.log(`Tomorrow: ${tomorrow}`)

	const query = `
		query GetClasses($boardId: [ID!]) {
			boards(ids: $boardId) {
				items_page {
					items {
						id
						name
						column_values {
							id
							text
							value
						}
						created_at
					}
				}
			}
		}
	`

	try {
		const data = await makeRequest(query, { boardId: [BOARD_ID] })
		const items = data.boards[0].items_page.items

		const todayClasses = []
		const tomorrowClasses = []

		items.forEach((item) => {
			const dateColumn = item.column_values.find((col) => col.id === 'date4')
			const date = dateColumn?.text

			if (date === today) {
				todayClasses.push(item)
			} else if (date === tomorrow) {
				tomorrowClasses.push(item)
			}
		})

		console.log(`\nToday's classes (${today}): ${todayClasses.length}`)
		todayClasses.forEach((item, index) => {
			const instructorColumn = item.column_values.find(
				(col) => col.id === 'text_mkw6pter'
			)
			const timeColumn = item.column_values.find(
				(col) => col.id === 'text_mkw6gj52'
			)
			console.log(
				`  ${index + 1}. ${item.name} - ${timeColumn?.text || 'No time'} (${
					instructorColumn?.text || 'No instructor'
				})`
			)
		})

		console.log(`\nTomorrow's classes (${tomorrow}): ${tomorrowClasses.length}`)
		tomorrowClasses.forEach((item, index) => {
			const instructorColumn = item.column_values.find(
				(col) => col.id === 'text_mkw6pter'
			)
			const timeColumn = item.column_values.find(
				(col) => col.id === 'text_mkw6gj52'
			)
			console.log(
				`  ${index + 1}. ${item.name} - ${timeColumn?.text || 'No time'} (${
					instructorColumn?.text || 'No instructor'
				})`
			)
		})

		if (todayClasses.length === 0 && tomorrowClasses.length === 0) {
			console.log('\n❌ No classes found for today or tomorrow!')
			console.log('Let me create some classes for today and tomorrow...')

			// Create classes for today and tomorrow
			const classesToAdd = [
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

			// Create the classes
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
	} catch (error) {
		console.error('Error checking today/tomorrow classes:', error.message)
	}
}

checkTodayTomorrow()
