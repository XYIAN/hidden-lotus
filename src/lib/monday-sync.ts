/**
 * Monday.com Data Synchronization
 * Syncs data between Monday.com and local data structures
 */

import { mondayApi, MondayClass } from './monday-api'
import { Class } from '@/types'

/**
 * Convert Monday.com class to local Class format
 */
export function mondayClassToLocalClass(mondayClass: MondayClass): Class {
  return {
    id: mondayClass.id,
    name: mondayClass.name,
    description: mondayClass.description,
    longDescription: mondayClass.description,
    instructor: mondayClass.instructor,
    dates: [mondayClass.classDate],
    time: mondayClass.time,
    duration: mondayClass.duration,
    price: mondayClass.price,
    categories: [mondayClass.category.toLowerCase() as 'yoga' | 'reiki' | 'seminar' | 'cupping' | 'podcast'],
    level: mondayClass.level.toLowerCase() as 'beginner' | 'intermediate' | 'advanced',
    maxParticipants: mondayClass.maxParticipants,
    equipment: mondayClass.equipment ? mondayClass.equipment.split(', ') : [],
    image: '/team/default.png', // Default image or map from instructor
  }
}

/**
 * Convert local Class to Monday.com format
 */
export function localClassToMondayClass(localClass: Class): Partial<MondayClass> {
  return {
    name: localClass.name,
    instructor: localClass.instructor,
    classDate: localClass.dates[0] || '',
    time: localClass.time,
    duration: localClass.duration,
    price: localClass.price,
    category: localClass.categories[0]?.charAt(0).toUpperCase() + localClass.categories[0]?.slice(1) || 'Yoga',
    level: localClass.level.charAt(0).toUpperCase() + localClass.level.slice(1),
    maxParticipants: localClass.maxParticipants,
    equipment: localClass.equipment?.join(', ') || '',
    description: localClass.longDescription || localClass.description,
    status: 'Scheduled',
  }
}

/**
 * Sync all classes from Monday.com to local format
 */
export async function syncClassesFromMonday(): Promise<Class[]> {
  try {
    const mondayClasses = await mondayApi.getClasses()
    return mondayClasses.map(mondayClassToLocalClass)
  } catch (error) {
    console.error('Error syncing classes from Monday.com:', error)
    throw error
  }
}

/**
 * Sync a single class to Monday.com
 */
export async function syncClassToMonday(localClass: Class): Promise<MondayClass | null> {
  try {
    const mondayClassData = localClassToMondayClass(localClass)
    return await mondayApi.createClass(mondayClassData)
  } catch (error) {
    console.error('Error syncing class to Monday.com:', error)
    return null
  }
}

/**
 * Update a class in Monday.com
 */
export async function updateClassInMonday(classId: string, localClass: Class): Promise<MondayClass | null> {
  try {
    const mondayClassData = localClassToMondayClass(localClass)
    return await mondayApi.updateClass(classId, mondayClassData)
  } catch (error) {
    console.error('Error updating class in Monday.com:', error)
    return null
  }
}

/**
 * Delete a class from Monday.com
 */
export async function deleteClassFromMonday(classId: string): Promise<boolean> {
  try {
    return await mondayApi.deleteClass(classId)
  } catch (error) {
    console.error('Error deleting class from Monday.com:', error)
    return false
  }
}

/**
 * Get board information and column mappings
 */
export async function getBoardInfo() {
  try {
    return await mondayApi.getBoardInfo()
  } catch (error) {
    console.error('Error getting board info:', error)
    throw error
  }
}

/**
 * Sync all local classes to Monday.com
 */
export async function syncAllLocalClassesToMonday(localClasses: Class[]): Promise<{
  successful: number
  failed: number
  errors: string[]
}> {
  const results = {
    successful: 0,
    failed: 0,
    errors: [] as string[]
  }

  for (const localClass of localClasses) {
    try {
      await syncClassToMonday(localClass)
      results.successful++
    } catch (error) {
      results.failed++
      results.errors.push(`Failed to sync ${localClass.name}: ${error}`)
    }
  }

  return results
}

/**
 * Check if Monday.com integration is working
 */
export async function checkMondayIntegration(): Promise<{
  isWorking: boolean
  error?: string
  boardInfo?: unknown
}> {
  try {
    const boardInfo = await mondayApi.getBoardInfo()
    return {
      isWorking: true,
      boardInfo
    }
  } catch (error) {
    return {
      isWorking: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}
