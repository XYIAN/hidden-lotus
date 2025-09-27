/**
 * Monday.com API Client
 * Handles authentication and GraphQL queries for Monday.com integration
 */

const MONDAY_API_URL = 'https://api.monday.com/v2'
const MONDAY_API_TOKEN =
	'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjU2NzMwNzQ5MCwiYWFpIjoxMSwidWlkIjozNTIyNDA5MSwiaWFkIjoiMjAyNS0wOS0yN1QyMjowNToyMy44MzRaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM2MjEyNzgsInJnbiI6InVzZTEifQ.c0jB4Zb97oc8gm6vcQGXzRMhpXgVoT9r9j74kKOOBRY'
const MONDAY_BOARD_ID = '18059023393'

export interface MondayClass {
	id: string
	name: string
	instructor: string
	classDate: string
	time: string
	duration: string
	price: string
	category: string
	level: string
	maxParticipants: number
	equipment: string
	description: string
	status: string
	createdAt: string
	updatedAt: string
}

export interface MondayColumn {
	id: string
	title: string
	type: string
}

export interface MondayBoard {
	id: string
	name: string
	columns: MondayColumn[]
	items: MondayClass[]
}

class MondayApiClient {
	private apiToken: string
	private boardId: string

	constructor(apiToken?: string, boardId?: string) {
		this.apiToken =
			apiToken ||
			process.env.MONDAY_API_TOKEN ||
			'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjU2NzMwNzQ5MCwiYWFpIjoxMSwidWlkIjozNTIyNDA5MSwiaWFkIjoiMjAyNS0wOS0yN1QyMjowNToyMy44MzRaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM2MjEyNzgsInJnbiI6InVzZTEifQ.c0jB4Zb97oc8gm6vcQGXzRMhpXgVoT9r9j74kKOOBRY'
		this.boardId = boardId || process.env.MONDAY_BOARD_ID || '18059023393'
	}

	private async makeRequest(
		query: string,
		variables: Record<string, unknown> = {}
	) {
		try {
			const response = await fetch(MONDAY_API_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: this.apiToken,
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

	/**
	 * Get all classes from the Monday.com board
	 */
	async getClasses(): Promise<MondayClass[]> {
		try {
			const response = await fetch('/api/monday/classes', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			})

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`)
			}

			const data = await response.json()

			if (!data.success) {
				throw new Error(data.error || 'Failed to fetch classes')
			}

			return data.classes
		} catch (error) {
			console.error('MondayApiClient - Error fetching classes:', error)
			throw error
		}
	}

	/**
	 * Create a new class in Monday.com
	 */
	async createClass(classData: Partial<MondayClass>): Promise<MondayClass> {
		const query = `
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

		const variables = {
			boardId: this.boardId,
			itemName: classData.name || 'New Class',
			columnValues: JSON.stringify(this.mapClassToColumnValues(classData)),
		}

		const data = await this.makeRequest(query, variables)

		// Return the created class with the new ID
		return {
			...classData,
			id: data.create_item.id,
		} as MondayClass
	}

	/**
	 * Update an existing class in Monday.com
	 */
	async updateClass(
		classId: string,
		classData: Partial<MondayClass>
	): Promise<MondayClass> {
		const query = `
      mutation UpdateClass($itemId: ID!, $columnValues: JSON!) {
        change_column_value(
          item_id: $itemId,
          column_id: "name",
          value: $columnValues
        ) {
          id
        }
      }
    `

		const variables = {
			itemId: classId,
			columnValues: JSON.stringify(this.mapClassToColumnValues(classData)),
		}

		await this.makeRequest(query, variables)

		return {
			...classData,
			id: classId,
		} as MondayClass
	}

	/**
	 * Delete a class from Monday.com
	 */
	async deleteClass(classId: string): Promise<boolean> {
		const query = `
      mutation DeleteClass($itemId: ID!) {
        delete_item(item_id: $itemId) {
          id
        }
      }
    `

		const variables = {
			itemId: classId,
		}

		await this.makeRequest(query, variables)
		return true
	}

	/**
	 * Get board structure and column information
	 */
	async getBoardInfo(): Promise<MondayBoard> {
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
    `

		const variables = {
			boardId: [this.boardId],
		}

		const data = await this.makeRequest(query, variables)
		const board = data.boards[0]

		if (!board) {
			throw new Error('Board not found')
		}

		return {
			id: board.id,
			name: board.name,
			columns: board.columns,
			items: board.items.map((item: Record<string, unknown>) =>
				this.mapItemToClass(item)
			),
		}
	}

	/**
	 * Map Monday.com item to our Class interface
	 */
	private mapItemToClass(item: Record<string, unknown>): MondayClass {
		const columnValues = (
			item.column_values as Array<Record<string, unknown>>
		).reduce((acc: Record<string, unknown>, col: Record<string, unknown>) => {
			acc[col.id as string] = col.text || col.value
			return acc
		}, {})

		// Map column IDs to field names using actual Monday.com column IDs
		return {
			id: item.id as string,
			name: item.name as string,
			instructor: (columnValues['text_mkw6pter'] as string) || '', // Instructor
			classDate: (columnValues['date4'] as string) || '', // Date
			time: (columnValues['text_mkw6gj52'] as string) || '', // Time
			duration: (columnValues['text_mkw61ehe'] as string) || '', // Duration
			price: (columnValues['text_mkw6gn54'] as string) || '', // Price
			category: (columnValues['text_mkw6ybjy'] as string) || '', // Category
			level: (columnValues['text_mkw6c4rm'] as string) || '', // Level
			maxParticipants: parseInt(
				(columnValues['text_mkw6p1q4'] as string) || '0'
			), // Max Participants
			equipment: (columnValues['text_mkw6mjvm'] as string) || '', // Equipment
			description: (columnValues['text_mkw6dc8p'] as string) || '', // Description
			status: (columnValues['text_mkw66znw'] as string) || 'Scheduled', // Class Status
			createdAt: item.created_at as string,
			updatedAt: item.updated_at as string,
		}
	}

	/**
	 * Map our Class interface to Monday.com column values
	 */
	private mapClassToColumnValues(
		classData: Partial<MondayClass>
	): Record<string, unknown> {
		// Using actual column IDs from the Monday.com board
		return {
			text_mkw6pter: classData.instructor, // Instructor
			date4: classData.classDate, // Date
			text_mkw6gj52: classData.time, // Time
			text_mkw61ehe: classData.duration, // Duration
			text_mkw6gn54: classData.price, // Price
			text_mkw6ybjy: classData.category, // Category
			text_mkw6c4rm: classData.level, // Level
			text_mkw6p1q4: classData.maxParticipants?.toString(), // Max Participants
			text_mkw6mjvm: classData.equipment, // Equipment
			text_mkw6dc8p: classData.description, // Description
			text_mkw66znw: classData.status, // Class Status
			status: { label: 'Working on it' }, // Status
		}
	}
}

// Create and export the API client instance
export const mondayApi = new MondayApiClient(MONDAY_API_TOKEN, MONDAY_BOARD_ID)

// Export the client class for testing
export { MondayApiClient }
