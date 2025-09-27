/**
 * Populate Monday.com with existing classes from constants/classes.ts
 */

import { mondayApi } from './monday-api'
import { classesData } from '@/constants/classes'
import { localClassToMondayClass } from './monday-sync'

export async function populateMondayWithClasses() {
  console.log('Starting to populate Monday.com with existing classes...')
  
  const results = {
    successful: 0,
    failed: 0,
    errors: [] as string[]
  }

  for (const localClass of classesData) {
    try {
      console.log(`Creating class: ${localClass.name}`)
      
      // Convert local class to Monday.com format
      const mondayClassData = localClassToMondayClass(localClass)
      
      // Create the class in Monday.com
      const createdClass = await mondayApi.createClass(mondayClassData)
      
      if (createdClass) {
        console.log(`✅ Successfully created: ${localClass.name}`)
        results.successful++
      } else {
        console.log(`❌ Failed to create: ${localClass.name}`)
        results.failed++
        results.errors.push(`Failed to create ${localClass.name}`)
      }
      
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000))
      
    } catch (error) {
      console.error(`❌ Error creating ${localClass.name}:`, error)
      results.failed++
      results.errors.push(`Error creating ${localClass.name}: ${error}`)
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

// Run the population if this file is executed directly
if (typeof window === 'undefined') {
  populateMondayWithClasses()
    .then(results => {
      console.log('Final results:', results)
      process.exit(0)
    })
    .catch(error => {
      console.error('Population failed:', error)
      process.exit(1)
    })
}
