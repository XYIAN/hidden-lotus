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

async function debugDates() {
	console.log('Debugging date issues...')

	const today = new Date().toISOString().split('T')[0]
	const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000)
		.toISOString()
		.split('T')[0]

	console.log(`Today: ${today}`)
	console.log(`Tomorrow: ${tomorrow}`)

	// Get all items
	const query = `
		query GetAllItems($boardId: [ID!]) {
			boards(ids: $boardId) {
				items_page(limit: 50) {
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

		console.log(`\nFound ${items.length} total items`)

		// Look for items with today's or tomorrow's date
		const todayItems = []
		const tomorrowItems = []
		const recentItems = []

		items.forEach((item) => {
			const dateColumn = item.column_values.find((col) => col.id === 'date4')
			const date = dateColumn?.text
			const created = new Date(item.created_at)
			const isRecent = created > new Date(Date.now() - 10 * 60 * 1000) // Last 10 minutes

			if (date === today) {
				todayItems.push(item)
			} else if (date === tomorrow) {
				tomorrowItems.push(item)
			}

			if (isRecent) {
				recentItems.push(item)
			}
		})

		console.log(`\nItems with today's date (${today}): ${todayItems.length}`)
		todayItems.forEach((item, index) => {
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

		console.log(
			`\nItems with tomorrow's date (${tomorrow}): ${tomorrowItems.length}`
		)
		tomorrowItems.forEach((item, index) => {
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

		console.log(`\nItems created in last 10 minutes: ${recentItems.length}`)
		recentItems.forEach((item, index) => {
			const dateColumn = item.column_values.find((col) => col.id === 'date4')
			const instructorColumn = item.column_values.find(
				(col) => col.id === 'text_mkw6pter'
			)
			const timeColumn = item.column_values.find(
				(col) => col.id === 'text_mkw6gj52'
			)
			console.log(
				`  ${index + 1}. ${item.name} - ${dateColumn?.text || 'No date'} - ${
					timeColumn?.text || 'No time'
				} (${instructorColumn?.text || 'No instructor'})`
			)
		})

		// Show all unique dates
		const allDates = new Set()
		items.forEach((item) => {
			const dateColumn = item.column_values.find((col) => col.id === 'date4')
			if (dateColumn?.text) {
				allDates.add(dateColumn.text)
			}
		})

		console.log(`\nAll unique dates in the board:`)
		Array.from(allDates)
			.sort()
			.forEach((date) => {
				console.log(`  - ${date}`)
			})
	} catch (error) {
		console.error('Error debugging dates:', error.message)
	}
}

debugDates()
