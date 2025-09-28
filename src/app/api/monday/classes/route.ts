import { NextResponse } from 'next/server'

const MONDAY_API_URL = 'https://api.monday.com/v2'
const MONDAY_API_TOKEN =
	process.env.MONDAY_API_TOKEN ||
	'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjU2NzMwNzQ5MCwiYWFpIjoxMSwidWlkIjozNTIyNDA5MSwiaWFkIjoiMjAyNS0wOS0yN1QyMjowNToyMy44MzRaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM2MjEyNzgsInJnbiI6InVzZTEifQ.c0jB4Zb97oc8gm6vcQGXzRMhpXgVoT9r9j74kKOOBRY'
const MONDAY_BOARD_ID = process.env.MONDAY_BOARD_ID || '18059023393'

export async function GET() {
	try {
		console.log('API: Fetching classes from Monday.com...')

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

		const response = await fetch(MONDAY_API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: MONDAY_API_TOKEN,
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
			console.error('Monday.com API errors:', data.errors)
			throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`)
		}

		const board = data.data.boards[0]

		if (!board || !board.items_page) {
			throw new Error('Board not found or no items')
		}

		// Map items to our Class interface
		const mappedClasses = board.items_page.items.map(
			(item: Record<string, unknown>) => {
				const columnValues = (
					item.column_values as Record<string, unknown>[]
				).reduce(
					(acc: Record<string, unknown>, col: Record<string, unknown>) => {
						acc[col.id as string] = col.text || col.value
						return acc
					},
					{}
				)

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
			}
		)

		console.log(`API: Successfully fetched ${mappedClasses.length} classes`)

		return NextResponse.json({
			success: true,
			classes: mappedClasses,
		})
	} catch (error) {
		console.error('API: Error fetching classes:', error)
		return NextResponse.json(
			{
				success: false,
				error:
					error instanceof Error ? error.message : 'Failed to fetch classes',
			},
			{ status: 500 }
		)
	}
}
