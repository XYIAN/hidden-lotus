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

async function testCreateItem() {
	console.log('Testing item creation with column values...')

	const query = `
    mutation CreateItem($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
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
		itemName: 'Test Class',
		columnValues: JSON.stringify({
			text_mkw6pter: 'Test Instructor',
			text_mkw6gj52: '10:00 AM',
			text_mkw61ehe: '60 minutes',
			text_mkw6gn54: '$20',
			text_mkw6ybjy: 'Yoga',
			text_mkw6c4rm: 'Beginner',
			text_mkw6p1q4: '15',
			text_mkw6mjvm: 'Yoga mat',
			text_mkw6dc8p: 'Test description',
			text_mkw66znw: 'Scheduled',
			status: { label: 'Working on it' },
		}),
	}

	try {
		const data = await makeRequest(query, variables)
		console.log('✅ Successfully created test item:', data.create_item.id)

		// Now let's fetch it to see if the data was saved
		const fetchQuery = `
      query GetItem($itemId: ID!) {
        items(ids: [$itemId]) {
          id
          name
          column_values {
            id
            text
            value
          }
        }
      }
    `

		const fetchData = await makeRequest(fetchQuery, {
			itemId: data.create_item.id,
		})
		console.log('📋 Item data:', JSON.stringify(fetchData.items[0], null, 2))
	} catch (error) {
		console.error('❌ Error creating item:', error.message)
	}
}

testCreateItem()
