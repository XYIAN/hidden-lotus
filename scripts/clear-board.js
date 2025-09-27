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

async function clearBoard() {
	console.log('Clearing Monday.com board...')

	// First, get all items
	const getItemsQuery = `
    query GetItems($boardId: [ID!]) {
      boards(ids: $boardId) {
        items_page {
          items {
            id
            name
          }
        }
      }
    }
  `

	try {
		const data = await makeRequest(getItemsQuery, { boardId: [BOARD_ID] })
		const items = data.boards[0].items_page.items

		console.log(`Found ${items.length} items to delete`)

		// Delete each item
		for (const item of items) {
			const deleteQuery = `
        mutation DeleteItem($itemId: ID!) {
          delete_item(item_id: $itemId) {
            id
          }
        }
      `

			try {
				await makeRequest(deleteQuery, { itemId: item.id })
				console.log(`✅ Deleted: ${item.name}`)
			} catch (error) {
				console.error(`❌ Failed to delete ${item.name}:`, error.message)
			}
		}

		console.log('Board cleared successfully!')
	} catch (error) {
		console.error('Error clearing board:', error.message)
	}
}

clearBoard()
