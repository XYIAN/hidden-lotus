/**
 * Populate Monday.com with existing classes
 * Run with: node scripts/populate-monday.js
 */

const MONDAY_API_URL = 'https://api.monday.com/v2'
const MONDAY_API_TOKEN =
	'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjU2NzMwNzQ5MCwiYWFpIjoxMSwidWlkIjozNTIyNDA5MSwiaWFkIjoiMjAyNS0wOS0yN1QyMjowNToyMy44MzRaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM2MjEyNzgsInJnbiI6InVzZTEifQ.c0jB4Zb97oc8gm6vcQGXzRMhpXgVoT9r9j74kKOOBRY'
const MONDAY_BOARD_ID = '18059023393'

// Your existing classes data
const classesData = [
	{
		id: '1',
		name: 'Essential Vinyasa Yoga',
		description:
			'Vinyasa style that emphasizes open-heartedness and accessible practice.',
		longDescription:
			'Vinyasa style that emphasizes open-heartedness. This is an accessible practice that limits the amount of complex/rapid joint movements. Anybody that can sit and stand will be able to do most of this practice. Regular practice promotes joint health, circulation, and focus. Our journey through Motion enables an exploration of Openheartedness and we return Revived.',
		instructor: 'Jaideep',
		dates: ['2024-01-15', '2024-01-22', '2024-01-29'],
		time: '07:00 AM',
		duration: '75 minutes',
		price: 'Donation Based',
		categories: ['yoga'],
		level: 'beginner',
		maxParticipants: 20,
		equipment: ['Yoga mat', 'Blocks', 'Strap'],
	},
	{
		id: '2',
		name: 'Yoga Flow & Sound',
		description:
			'A grounding and rejuvenating experience combining gentle yoga with healing vibrations.',
		longDescription:
			'A grounding and rejuvenating experience combining gentle yoga with the healing vibrations of sound. Guided through mindful Motion, each posture is designed to open and align your energy centers, inviting balance to the chakras. Flow at your own pace while cultivating an OpenHeart toward yourself and your practice. The class concludes in stillness where the deep resonance of the gong, the soothing tones of singing bowls, the calming rhythm of the ocean drum, and the fluid movement of the wave plate tool invite a full-body sense of Revival in mind, body, and spirit.',
		instructor: 'Vuong',
		dates: ['2024-01-16', '2024-01-23', '2024-01-30'],
		time: '02:00 PM',
		duration: '90 minutes',
		price: 'Donation Based',
		categories: ['yoga', 'sound-healing'],
		level: 'beginner',
		maxParticipants: 15,
		equipment: ['Yoga mat', 'Bolster', 'Blanket'],
	},
	{
		id: '3',
		name: 'Sound Bath',
		description:
			"An immersive sound journey designed to harmonize your body's energy and soothe your mind.",
		longDescription:
			"An immersive sound journey designed to harmonize your body's energy and soothe your mind. As you rest comfortably, layers of healing frequencies wash over you, each resonating with specific chakras to invite release, clarity, and restoration. Rooted in the MOR pillars Motion, OpenHeart, and Revival, this class weaves together the powerful vibrations of the gong, the crystalline tones of singing bowls, the gentle waves of the ocean drum, and the flowing resonance of the wave plate tool. These sounds guide you into deep relaxation and energetic alignment, leaving you grounded, open, and renewed.",
		instructor: 'Vuong',
		dates: ['2024-01-17', '2024-01-24', '2024-01-31'],
		time: '06:30 PM',
		duration: '75 minutes',
		price: 'Donation Based',
		categories: ['sound-healing', 'meditation'],
		level: 'beginner',
		maxParticipants: 20,
		equipment: ['Yoga mat', 'Bolster', 'Blanket'],
	},
	{
		id: '4',
		name: "Sacred Men's Group",
		description:
			'A supportive space for men to explore wellness, vulnerability, and authentic connection.',
		longDescription:
			'A transformative space where men gather to explore wellness, vulnerability, and authentic connection. Rooted in the MOR philosophy, this group combines movement, meditation, and open-hearted discussion to create a safe environment for men to heal, grow, and support one another. Through guided practices and shared experiences, participants discover the power of authentic expression and collective healing. This sacred circle invites men to embrace their full humanity while building meaningful connections and developing tools for emotional wellness and personal growth.',
		instructor: 'Jaideep',
		dates: ['2024-01-18', '2024-01-25', '2024-02-01'],
		time: '07:00 PM',
		duration: '90 minutes',
		price: 'Donation Based',
		categories: ['yoga', 'healing'],
		level: 'beginner',
		maxParticipants: 12,
		equipment: ['Yoga mat', 'Journal', 'Open heart'],
	},
]

async function makeRequest(query, variables = {}) {
	try {
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
			throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`)
		}

		return data.data
	} catch (error) {
		console.error('Monday.com API request failed:', error)
		throw error
	}
}

function convertClassToMondayFormat(localClass) {
	return {
		name: localClass.name,
		instructor: localClass.instructor,
		classDate: localClass.dates[0] || '',
		time: localClass.time,
		duration: localClass.duration,
		price: localClass.price,
		categories: localClass.categories || [], // Keep as array for proper mapping
		level: localClass.level.charAt(0).toUpperCase() + localClass.level.slice(1),
		maxParticipants: localClass.maxParticipants,
		equipment: localClass.equipment?.join(', ') || '',
		description: localClass.longDescription || localClass.description,
		status: 'Scheduled',
	}
}

function mapClassToColumnValues(classData) {
	// Using actual column IDs from the Monday.com board
	return {
		text_mkw6pter: classData.instructor, // Instructor
		date4: classData.classDate, // Date
		text_mkw6gj52: classData.time, // Time
		text_mkw61ehe: classData.duration, // Duration
		text_mkw6gn54: classData.price, // Price
		text_mkw6ybjy: classData.categories ? classData.categories[0] : '', // Category (first one)
		text_mkw6c4rm: classData.level, // Level
		text_mkw6p1q4: classData.maxParticipants.toString(), // Max Participants
		text_mkw6mjvm: Array.isArray(classData.equipment)
			? classData.equipment.join(', ')
			: classData.equipment, // Equipment
		text_mkw6dc8p: classData.description, // Description
		text_mkw66znw: classData.status || 'Scheduled', // Class Status
		status: { label: 'Working on it' }, // Status
	}
}

async function createClass(classData) {
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
		boardId: MONDAY_BOARD_ID,
		itemName: classData.name,
		columnValues: JSON.stringify(mapClassToColumnValues(classData)),
	}

	const data = await makeRequest(query, variables)
	return data.create_item
}

async function populateMondayWithClasses() {
	console.log('Starting to populate Monday.com with existing classes...')

	const results = {
		successful: 0,
		failed: 0,
		errors: [],
	}

	for (const localClass of classesData) {
		try {
			console.log(`Creating class: ${localClass.name}`)

			// Convert local class to Monday.com format
			const mondayClassData = convertClassToMondayFormat(localClass)

			// Create the class in Monday.com
			const createdClass = await createClass(mondayClassData)

			if (createdClass) {
				console.log(`✅ Successfully created: ${localClass.name}`)
				results.successful++
			} else {
				console.log(`❌ Failed to create: ${localClass.name}`)
				results.failed++
				results.errors.push(`Failed to create ${localClass.name}`)
			}

			// Add a small delay to avoid rate limiting
			await new Promise((resolve) => setTimeout(resolve, 1000))
		} catch (error) {
			console.error(`❌ Error creating ${localClass.name}:`, error)
			results.failed++
			results.errors.push(`Error creating ${localClass.name}: ${error.message}`)
		}
	}

	console.log('Population complete!')
	console.log(`Successful: ${results.successful}`)
	console.log(`Failed: ${results.failed}`)

	if (results.errors.length > 0) {
		console.log('Errors:', results.errors)
	}

	return results
}

// Run the population
populateMondayWithClasses()
	.then((results) => {
		console.log('Final results:', results)
		process.exit(0)
	})
	.catch((error) => {
		console.error('Population failed:', error)
		process.exit(1)
	})
