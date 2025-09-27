/**
 * Test Monday.com API connection
 */

const MONDAY_API_URL = 'https://api.monday.com/v2'
const MONDAY_API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjU2NzMwNzQ5MCwiYWFpIjoxMSwidWlkIjozNTIyNDA5MSwiaWFkIjoiMjAyNS0wOS0yN1QyMjowNToyMy44MzRaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM2MjEyNzgsInJnbiI6InVzZTEifQ.c0jB4Zb97oc8gm6vcQGXzRMhpXgVoT9r9j74kKOOBRY'
const MONDAY_BOARD_ID = '18059023393'

async function makeRequest(query, variables = {}) {
  try {
    const response = await fetch(MONDAY_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': MONDAY_API_TOKEN,
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
      throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`)
    }

    return data.data
  } catch (error) {
    console.error('Monday.com API request failed:', error)
    throw error
  }
}

async function testMondayAPI() {
  try {
    console.log('Testing Monday.com API connection...')
    
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

    const variables = {
      boardId: [MONDAY_BOARD_ID],
    }

    const data = await makeRequest(query, variables)
    const board = data.boards[0]

    if (!board || !board.items_page) {
      throw new Error('Board not found or no items')
    }

    console.log(`✅ Successfully connected to Monday.com`)
    console.log(`Board: ${board.id}`)
    console.log(`Total items: ${board.items_page.items.length}`)
    
    if (board.items_page.items.length > 0) {
      console.log('Sample item:')
      console.log(JSON.stringify(board.items_page.items[0], null, 2))
    }

    return board.items_page.items
  } catch (error) {
    console.error('❌ API test failed:', error)
    throw error
  }
}

// Run the test
testMondayAPI()
  .then(items => {
    console.log(`\n✅ Test completed successfully! Found ${items.length} items.`)
    process.exit(0)
  })
  .catch(error => {
    console.error('\n❌ Test failed:', error.message)
    process.exit(1)
  })
