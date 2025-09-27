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

async function testCalendarData() {
	console.log('Testing calendar data mapping...')

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
						updated_at
					}
				}
			}
		}
	`

	try {
		const data = await makeRequest(query, { boardId: [BOARD_ID] })
		const items = data.boards[0].items_page.items

		console.log(`Found ${items.length} total items`)

		// Map items to our Class interface (same as in monday-api.ts)
		const mappedClasses = items.map((item) => {
			const columnValues = item.column_values.reduce((acc, col) => {
				acc[col.id] = col.text || col.value
				return acc
			}, {})

			return {
				id: item.id,
				name: item.name,
				instructor: columnValues['text_mkw6pter'] || '',
				classDate: columnValues['date4'] || '',
				time: columnValues['text_mkw6gj52'] || '',
				duration: columnValues['text_mkw61ehe'] || '',
				price: columnValues['text_mkw6gn54'] || '',
				category: columnValues['text_mkw6ybjy'] || '',
				level: columnValues['text_mkw6c4rm'] || '',
				maxParticipants: parseInt(columnValues['text_mkw6p1q4'] || '0'),
				equipment: columnValues['text_mkw6mjvm'] || '',
				description: columnValues['text_mkw6dc8p'] || '',
				status: columnValues['text_mkw66znw'] || 'Scheduled',
				createdAt: item.created_at,
				updatedAt: item.updated_at,
			}
		})

		// Group by date
		const classesByDate = {}
		mappedClasses.forEach((classItem) => {
			if (classItem.classDate) {
				if (!classesByDate[classItem.classDate]) {
					classesByDate[classItem.classDate] = []
				}
				classesByDate[classItem.classDate].push(classItem)
			}
		})

		console.log('\nClasses grouped by date:')
		Object.keys(classesByDate)
			.sort()
			.forEach((date) => {
				console.log(`\n${date}: ${classesByDate[date].length} classes`)
				classesByDate[date].forEach((classItem) => {
					console.log(
						`  - ${classItem.name} (${classItem.time}) - ${classItem.instructor}`
					)
				})
			})

		// Check today and tomorrow specifically
		const today = new Date().toISOString().split('T')[0]
		const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000)
			.toISOString()
			.split('T')[0]

		console.log(
			`\nToday (${today}): ${classesByDate[today]?.length || 0} classes`
		)
		if (classesByDate[today]) {
			classesByDate[today].forEach((classItem) => {
				console.log(
					`  - ${classItem.name} (${classItem.time}) - ${classItem.instructor}`
				)
			})
		}

		console.log(
			`\nTomorrow (${tomorrow}): ${
				classesByDate[tomorrow]?.length || 0
			} classes`
		)
		if (classesByDate[tomorrow]) {
			classesByDate[tomorrow].forEach((classItem) => {
				console.log(
					`  - ${classItem.name} (${classItem.time}) - ${classItem.instructor}`
				)
			})
		}
	} catch (error) {
		console.error('Error testing calendar data:', error.message)
	}
}

testCalendarData()
