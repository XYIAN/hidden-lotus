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

async function checkRecentClasses() {
	console.log('Checking recent classes...')

	const query = `
		query GetRecentClasses($boardId: [ID!]) {
			boards(ids: $boardId) {
				items_page(limit: 10) {
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

		console.log(`Found ${items.length} recent items:`)

		items.forEach((item, index) => {
			const dateColumn = item.column_values.find((col) => col.id === 'date4')
			const instructorColumn = item.column_values.find(
				(col) => col.id === 'text_mkw6pter'
			)
			const timeColumn = item.column_values.find(
				(col) => col.id === 'text_mkw6gj52'
			)

			console.log(`\n${index + 1}. ${item.name}`)
			console.log(`   Date: ${dateColumn?.text || 'No date'}`)
			console.log(`   Instructor: ${instructorColumn?.text || 'No instructor'}`)
			console.log(`   Time: ${timeColumn?.text || 'No time'}`)
			console.log(`   Created: ${item.created_at}`)
		})
	} catch (error) {
		console.error('Error checking recent classes:', error.message)
	}
}

checkRecentClasses()
