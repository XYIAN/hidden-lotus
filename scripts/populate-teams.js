/**
 * Populate Monday.com with team members
 * Run with: node scripts/populate-teams.js
 */

const MONDAY_API_URL = 'https://api.monday.com/v2'
const MONDAY_API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjU2NzMwNzQ5MCwiYWFpIjoxMSwidWlkIjozNTIyNDA5MSwiaWFkIjoiMjAyNS0wOS0yN1QyMjowNToyMy44MzRaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM2MjEyNzgsInJnbiI6InVzZTEifQ.c0jB4Zb97oc8gm6vcQGXzRMhpXgVoT9r9j74kKOOBRY'

// We'll need to create a teams board first, but for now let's use the classes board
// and add team members as separate items
const MONDAY_BOARD_ID = '18059023393'

// Your existing team data
const teamData = [
  {
    id: 'jaideep',
    name: 'Jaideep',
    profession: 'Yoga Instructor & Wellness Coach',
    credentials: 'RYT-500, Certified Wellness Coach',
    bio: 'Jaideep brings over 10 years of experience in yoga and wellness coaching.',
    longBio: 'Jaideep brings over 10 years of experience in yoga and wellness coaching. His approach combines traditional yoga practices with modern wellness techniques to create transformative experiences for his students.',
    type: 'instructor',
    classes: ['Essential Vinyasa Yoga', "Sacred Men's Group"],
    specialties: ['Vinyasa Yoga', 'Men\'s Wellness', 'Mindfulness'],
    certifications: ['RYT-500', 'Certified Wellness Coach'],
    experience: '10+ years',
    education: 'Yoga Alliance Certified',
    contact: {
      email: 'jaideep@hiddenlotus.com',
      phone: '(555) 123-4567'
    }
  },
  {
    id: 'vuong',
    name: 'Vuong',
    profession: 'Sound Healing Practitioner & Yoga Instructor',
    credentials: 'Sound Healing Certification, RYT-200',
    bio: 'Vuong specializes in sound healing and gentle yoga practices.',
    longBio: 'Vuong specializes in sound healing and gentle yoga practices. With a deep understanding of vibrational healing, he creates immersive experiences that promote relaxation and energetic alignment.',
    type: 'instructor',
    classes: ['Yoga Flow & Sound', 'Sound Bath'],
    specialties: ['Sound Healing', 'Gentle Yoga', 'Meditation'],
    certifications: ['Sound Healing Certification', 'RYT-200'],
    experience: '8+ years',
    education: 'Sound Healing Institute',
    contact: {
      email: 'vuong@hiddenlotus.com',
      phone: '(555) 234-5678'
    }
  }
]

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

function convertTeamToMondayFormat(teamMember) {
  return {
    name: teamMember.name,
    profession: teamMember.profession,
    credentials: teamMember.credentials,
    bio: teamMember.bio,
    longBio: teamMember.longBio,
    type: teamMember.type,
    specialties: teamMember.specialties.join(', '),
    certifications: teamMember.certifications.join(', '),
    experience: teamMember.experience,
    education: teamMember.education,
    email: teamMember.contact.email,
    phone: teamMember.contact.phone,
    status: 'Active',
  }
}

function mapTeamToColumnValues(teamData) {
  // These column IDs will need to be updated based on your actual Monday.com board
  return {
    'text': teamData.profession,
    'text1': teamData.credentials,
    'text2': teamData.bio,
    'long_text': teamData.longBio,
    'dropdown': teamData.type,
    'text3': teamData.specialties,
    'text4': teamData.certifications,
    'text5': teamData.experience,
    'text6': teamData.education,
    'email': teamData.email,
    'text7': teamData.phone,
    'status': { label: 'Working on it' }, // Use the default status
  }
}

async function createTeamMember(teamData) {
  const query = `
    mutation CreateTeamMember($boardId: ID!, $itemName: String!, $columnValues: JSON!) {
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
    itemName: teamData.name,
    columnValues: JSON.stringify(mapTeamToColumnValues(teamData)),
  }

  const data = await makeRequest(query, variables)
  return data.create_item
}

async function populateTeams() {
  console.log('Starting to populate Monday.com with team members...')
  
  const results = {
    successful: 0,
    failed: 0,
    errors: []
  }

  for (const teamMember of teamData) {
    try {
      console.log(`Creating team member: ${teamMember.name}`)
      
      // Convert team member to Monday.com format
      const mondayTeamData = convertTeamToMondayFormat(teamMember)
      
      // Create the team member in Monday.com
      const createdMember = await createTeamMember(mondayTeamData)
      
      if (createdMember) {
        console.log(`✅ Successfully created: ${teamMember.name}`)
        results.successful++
      } else {
        console.log(`❌ Failed to create: ${teamMember.name}`)
        results.failed++
        results.errors.push(`Failed to create ${teamMember.name}`)
      }
      
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000))
      
    } catch (error) {
      console.error(`❌ Error creating ${teamMember.name}:`, error)
      results.failed++
      results.errors.push(`Error creating ${teamMember.name}: ${error.message}`)
    }
  }

  console.log('Team population complete!')
  console.log(`Successful: ${results.successful}`)
  console.log(`Failed: ${results.failed}`)
  
  if (results.errors.length > 0) {
    console.log('Errors:', results.errors)
  }

  return results
}

// Run the population
populateTeams()
  .then(results => {
    console.log('Final results:', results)
    process.exit(0)
  })
  .catch(error => {
    console.error('Population failed:', error)
    process.exit(1)
  })
