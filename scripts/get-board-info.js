/**
 * Get Monday.com board information and column IDs
 * Run with: node scripts/get-board-info.js
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

async function getBoardInfo() {
  const query = `
    query GetBoardInfo($boardId: [ID!]) {
      boards(ids: $boardId) {
        id
        name
        columns {
          id
          title
          type
        }
      }
    }
  `

  const variables = {
    boardId: [MONDAY_BOARD_ID],
  }

  const data = await makeRequest(query, variables)
  const board = data.boards[0]

  if (!board) {
    throw new Error('Board not found')
  }

  console.log('=== BOARD INFORMATION ===')
  console.log(`Board ID: ${board.id}`)
  console.log(`Board Name: ${board.name}`)
  console.log(`Total Columns: ${board.columns.length}`)
  console.log('')

  console.log('=== COLUMNS ===')
  board.columns.forEach((column, index) => {
    console.log(`${index + 1}. ${column.title}`)
    console.log(`   ID: ${column.id}`)
    console.log(`   Type: ${column.type}`)
    console.log('')
  })

  return board
}

// Run the script
getBoardInfo()
  .then(board => {
    console.log('Board info retrieved successfully!')
    console.log('')
    console.log('=== COLUMN MAPPING FOR SCRIPTS ===')
    console.log('Use these column IDs in your population scripts:')
    console.log('')
    
    const columnMap = {}
    board.columns.forEach(column => {
      columnMap[column.title.toLowerCase().replace(/\s+/g, '_')] = column.id
    })
    
    console.log(JSON.stringify(columnMap, null, 2))
    
    process.exit(0)
  })
  .catch(error => {
    console.error('Failed to get board info:', error)
    process.exit(1)
  })
