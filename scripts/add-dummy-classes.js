/**
 * Add dummy classes with varied dates and times to Monday.com
 * Run with: node scripts/add-dummy-classes.js
 */

const MONDAY_API_URL = 'https://api.monday.com/v2'
const MONDAY_API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjU2NzMwNzQ5MCwiYWFpIjoxMSwidWlkIjozNTIyNDA5MSwiaWFkIjoiMjAyNS0wOS0yN1QyMjowNToyMy44MzRaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM2MjEyNzgsInJnbiI6InVzZTEifQ.c0jB4Zb97oc8gm6vcQGXzRMhpXgVoT9r9j74kKOOBRY'
const MONDAY_BOARD_ID = '18059023393'

// Generate dummy classes for the next 30 days
const dummyClasses = []

// Get today's date
const today = new Date()
const nextMonth = new Date(today)
nextMonth.setMonth(nextMonth.getMonth() + 1)

// Generate classes for the next 30 days
for (let i = 0; i < 30; i++) {
  const classDate = new Date(today)
  classDate.setDate(today.getDate() + i)
  
  // Skip weekends for some variety
  if (classDate.getDay() === 0 || classDate.getDay() === 6) {
    if (Math.random() < 0.3) continue // 30% chance of weekend classes
  }
  
  // Randomly select class type
  const classTypes = [
    {
      name: 'Morning Vinyasa Flow',
      instructor: 'Jaideep',
      time: '07:00 AM',
      duration: '75 minutes',
      category: 'Yoga',
      level: 'Beginner',
      description: 'Start your day with a gentle vinyasa flow that energizes and centers you.',
      equipment: 'Yoga mat, Blocks, Strap'
    },
    {
      name: 'Lunch Break Meditation',
      instructor: 'Vuong',
      time: '12:00 PM',
      duration: '30 minutes',
      category: 'Meditation',
      level: 'Beginner',
      description: 'A quick meditation session to reset your mind during your lunch break.',
      equipment: 'Cushion, Blanket'
    },
    {
      name: 'Evening Sound Bath',
      instructor: 'Vuong',
      time: '06:30 PM',
      duration: '60 minutes',
      category: 'Sound Healing',
      level: 'Beginner',
      description: 'Relax and unwind with the healing vibrations of crystal bowls and gongs.',
      equipment: 'Yoga mat, Bolster, Blanket'
    },
    {
      name: 'Power Yoga',
      instructor: 'Jaideep',
      time: '05:30 PM',
      duration: '90 minutes',
      category: 'Yoga',
      level: 'Intermediate',
      description: 'A challenging flow that builds strength and flexibility.',
      equipment: 'Yoga mat, Blocks'
    },
    {
      name: 'Gentle Hatha',
      instructor: 'Jaideep',
      time: '09:00 AM',
      duration: '60 minutes',
      category: 'Yoga',
      level: 'Beginner',
      description: 'Slow-paced practice focusing on alignment and breath.',
      equipment: 'Yoga mat, Blocks, Strap'
    },
    {
      name: 'Chakra Balancing',
      instructor: 'Vuong',
      time: '07:00 PM',
      duration: '75 minutes',
      category: 'Healing',
      level: 'Beginner',
      description: 'A healing session focused on balancing your energy centers.',
      equipment: 'Yoga mat, Crystals'
    }
  ]
  
  const selectedClass = classTypes[Math.floor(Math.random() * classTypes.length)]
  
  dummyClasses.push({
    name: selectedClass.name,
    instructor: selectedClass.instructor,
    classDate: classDate.toISOString().split('T')[0], // YYYY-MM-DD format
    time: selectedClass.time,
    duration: selectedClass.duration,
    price: 'Donation Based',
    category: selectedClass.category,
    level: selectedClass.level,
    maxParticipants: Math.floor(Math.random() * 15) + 10, // 10-25 participants
    equipment: selectedClass.equipment,
    description: selectedClass.description,
    status: 'Scheduled',
  })
}

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

function mapClassToColumnValues(classData) {
  return {
    'text_mkw6pter': classData.instructor,           // Instructor
    'date4': classData.classDate,                    // Date
    'text_mkw6gj52': classData.time,                 // Time
    'text_mkw61ehe': classData.duration,             // Duration
    'text_mkw6gn54': classData.price,                // Price
    'text_mkw6ybjy': classData.category,             // Category
    'text_mkw6c4rm': classData.level,                // Level
    'text_mkw6p1q4': classData.maxParticipants.toString(), // Max Participants
    'text_mkw6mjvm': classData.equipment,            // Equipment
    'text_mkw6dc8p': classData.description,          // Description
    'text_mkw66znw': classData.status,               // Class Status
    'status': { label: 'Working on it' },            // Status
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

async function addDummyClasses() {
  console.log(`Adding ${dummyClasses.length} dummy classes to Monday.com...`)
  
  const results = {
    successful: 0,
    failed: 0,
    errors: []
  }

  for (const classData of dummyClasses) {
    try {
      console.log(`Creating class: ${classData.name} on ${classData.classDate}`)
      
      const createdClass = await createClass(classData)
      
      if (createdClass) {
        console.log(`✅ Successfully created: ${classData.name}`)
        results.successful++
      } else {
        console.log(`❌ Failed to create: ${classData.name}`)
        results.failed++
        results.errors.push(`Failed to create ${classData.name}`)
      }
      
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000))
      
    } catch (error) {
      console.error(`❌ Error creating ${classData.name}:`, error)
      results.failed++
      results.errors.push(`Error creating ${classData.name}: ${error.message}`)
    }
  }

  console.log('Dummy classes addition complete!')
  console.log(`Successful: ${results.successful}`)
  console.log(`Failed: ${results.failed}`)
  
  if (results.errors.length > 0) {
    console.log('Errors:', results.errors)
  }

  return results
}

// Run the script
addDummyClasses()
  .then(results => {
    console.log('Final results:', results)
    process.exit(0)
  })
  .catch(error => {
    console.error('Addition failed:', error)
    process.exit(1)
  })
