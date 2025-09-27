/**
 * Create Monday.com Teams Board and populate with team members
 * Run with: node scripts/create-teams-board.js
 */

const MONDAY_API_URL = 'https://api.monday.com/v2'
const MONDAY_API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjU2NzMwNzQ5MCwiYWFpIjoxMSwidWlkIjozNTIyNDA5MSwiaWFkIjoiMjAyNS0wOS0yN1QyMjowNToyMy44MzRaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTM2MjEyNzgsInJnbiI6InVzZTEifQ.c0jB4Zb97oc8gm6vcQGXzRMhpXgVoT9r9j74kKOOBRY'

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

async function createTeamsBoard() {
  console.log('Creating Hidden Lotus Teams board...')
  
  const query = `
    mutation CreateBoard($boardName: String!, $boardKind: BoardKind!) {
      create_board(
        board_name: $boardName,
        board_kind: $boardKind
      ) {
        id
        name
      }
    }
  `

  const variables = {
    boardName: 'Hidden Lotus Teams',
    boardKind: 'private'
  }

  const data = await makeRequest(query, variables)
  const board = data.create_board
  
  console.log(`✅ Created board: ${board.name} (ID: ${board.id})`)
  return board
}

async function addColumnsToBoard(boardId) {
  console.log('Adding columns to teams board...')
  
  const columns = [
    { title: 'Profession', type: 'text' },
    { title: 'Credentials', type: 'text' },
    { title: 'Bio', type: 'text' },
    { title: 'Long Bio', type: 'long_text' },
    { title: 'Type', type: 'dropdown', labels: ['instructor', 'staff', 'volunteer'] },
    { title: 'Specialties', type: 'text' },
    { title: 'Certifications', type: 'text' },
    { title: 'Experience', type: 'text' },
    { title: 'Education', type: 'text' },
    { title: 'Email', type: 'email' },
    { title: 'Phone', type: 'phone' },
    { title: 'Classes', type: 'text' },
    { title: 'Status', type: 'color', labels: ['Active', 'Inactive', 'On Leave'] }
  ]

  const results = []
  
  for (const column of columns) {
    try {
      const query = `
        mutation CreateColumn($boardId: ID!, $title: String!, $columnType: ColumnType!) {
          create_column(
            board_id: $boardId,
            title: $title,
            column_type: $columnType
          ) {
            id
            title
            type
          }
        }
      `

      const variables = {
        boardId: boardId,
        title: column.title,
        columnType: column.type.toUpperCase()
      }

      const data = await makeRequest(query, variables)
      const createdColumn = data.create_column
      
      console.log(`✅ Created column: ${createdColumn.title} (ID: ${createdColumn.id})`)
      results.push(createdColumn)
      
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500))
      
    } catch (error) {
      console.error(`❌ Error creating column ${column.title}:`, error.message)
    }
  }

  return results
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
    classes: teamMember.classes.join(', '),
    status: 'Active',
  }
}

async function populateTeamsBoard(boardId) {
  console.log('Populating teams board with team members...')
  
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
      const createdMember = await createTeamMember(boardId, mondayTeamData)
      
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

  return results
}

async function createTeamMember(boardId, teamData) {
  // We'll need to get the actual column IDs after creating the board
  // For now, let's create a basic team member
  const query = `
    mutation CreateTeamMember($boardId: ID!, $itemName: String!) {
      create_item(
        board_id: $boardId,
        item_name: $itemName
      ) {
        id
      }
    }
  `

  const variables = {
    boardId: boardId,
    itemName: teamData.name
  }

  const data = await makeRequest(query, variables)
  return data.create_item
}

async function main() {
  try {
    // Step 1: Create the teams board
    const board = await createTeamsBoard()
    
    // Step 2: Add columns to the board
    const columns = await addColumnsToBoard(board.id)
    
    // Step 3: Populate with team members
    const results = await populateTeamsBoard(board.id)
    
    console.log('')
    console.log('=== FINAL RESULTS ===')
    console.log(`Board ID: ${board.id}`)
    console.log(`Board Name: ${board.name}`)
    console.log(`Columns Created: ${columns.length}`)
    console.log(`Team Members Created: ${results.successful}`)
    console.log(`Failed: ${results.failed}`)
    
    if (results.errors.length > 0) {
      console.log('Errors:', results.errors)
    }
    
    console.log('')
    console.log('✅ Teams board setup complete!')
    console.log(`You can view it at: https://yourworkspace.monday.com/boards/${board.id}`)
    
  } catch (error) {
    console.error('❌ Setup failed:', error)
    process.exit(1)
  }
}

// Run the script
main()
