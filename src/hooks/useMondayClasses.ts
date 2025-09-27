/**
 * Custom hooks for Monday.com class management
 */

import { useState, useEffect, useCallback } from 'react'
import { mondayApi, MondayClass } from '@/lib/monday-api'

export interface UseMondayClassesReturn {
	classes: MondayClass[]
	loading: boolean
	error: string | null
	refetch: () => Promise<void>
	createClass: (classData: Partial<MondayClass>) => Promise<MondayClass | null>
	updateClass: (
		classId: string,
		classData: Partial<MondayClass>
	) => Promise<MondayClass | null>
	deleteClass: (classId: string) => Promise<boolean>
}

/**
 * Hook for managing Monday.com classes
 */
export function useMondayClasses(): UseMondayClassesReturn {
	const [classes, setClasses] = useState<MondayClass[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	const fetchClasses = async () => {
		try {
			setLoading(true)
			setError(null)
			const data = await mondayApi.getClasses()
			setClasses(data)
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : 'Failed to fetch classes'
			setError(errorMessage)
			console.error('Error fetching Monday.com classes:', err)
		} finally {
			setLoading(false)
		}
	}

	const createClass = useCallback(
		async (classData: Partial<MondayClass>): Promise<MondayClass | null> => {
			try {
				setError(null)
				const newClass = await mondayApi.createClass(classData)
				setClasses((prev) => [...prev, newClass])
				return newClass
			} catch (err) {
				const errorMessage =
					err instanceof Error ? err.message : 'Failed to create class'
				setError(errorMessage)
				console.error('Error creating class:', err)
				return null
			}
		},
		[]
	)

	const updateClass = useCallback(
		async (
			classId: string,
			classData: Partial<MondayClass>
		): Promise<MondayClass | null> => {
			try {
				setError(null)
				const updatedClass = await mondayApi.updateClass(classId, classData)
				setClasses((prev) =>
					prev.map((cls) => (cls.id === classId ? updatedClass : cls))
				)
				return updatedClass
			} catch (err) {
				const errorMessage =
					err instanceof Error ? err.message : 'Failed to update class'
				setError(errorMessage)
				console.error('Error updating class:', err)
				return null
			}
		},
		[]
	)

	const deleteClass = useCallback(async (classId: string): Promise<boolean> => {
		try {
			setError(null)
			await mondayApi.deleteClass(classId)
			setClasses((prev) => prev.filter((cls) => cls.id !== classId))
			return true
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : 'Failed to delete class'
			setError(errorMessage)
			console.error('Error deleting class:', err)
			return false
		}
	}, [])

	useEffect(() => {
		fetchClasses()
	}, [])

	return {
		classes,
		loading,
		error,
		refetch: fetchClasses,
		createClass,
		updateClass,
		deleteClass,
	}
}

/**
 * Hook for syncing Monday.com classes with local data
 */
export function useMondaySync() {
	const [syncing, setSyncing] = useState(false)
	const [lastSync, setLastSync] = useState<Date | null>(null)

	const syncWithMonday = useCallback(async () => {
		try {
			setSyncing(true)
			// This would sync your local classes data with Monday.com
			// Implementation depends on your specific sync requirements
			setLastSync(new Date())
		} catch (error) {
			console.error('Sync failed:', error)
		} finally {
			setSyncing(false)
		}
	}, [])

	return {
		syncing,
		lastSync,
		syncWithMonday,
	}
}

/**
 * Hook for filtering Monday.com classes
 */
export function useMondayClassFilters(classes: MondayClass[]) {
	const [filters, setFilters] = useState({
		searchTerm: '',
		category: '',
		instructor: '',
		level: '',
		status: '',
	})

	const filteredClasses = useCallback(() => {
		return classes.filter((classItem) => {
			// Search filter
			if (filters.searchTerm) {
				const searchLower = filters.searchTerm.toLowerCase()
				const matchesSearch =
					classItem.name.toLowerCase().includes(searchLower) ||
					classItem.description.toLowerCase().includes(searchLower) ||
					classItem.instructor.toLowerCase().includes(searchLower)
				if (!matchesSearch) return false
			}

			// Category filter
			if (filters.category && classItem.category !== filters.category) {
				return false
			}

			// Instructor filter
			if (filters.instructor && classItem.instructor !== filters.instructor) {
				return false
			}

			// Level filter
			if (filters.level && classItem.level !== filters.level) {
				return false
			}

			// Status filter
			if (filters.status && classItem.status !== filters.status) {
				return false
			}

			return true
		})
	}, [classes, filters])

	const clearFilters = useCallback(() => {
		setFilters({
			searchTerm: '',
			category: '',
			instructor: '',
			level: '',
			status: '',
		})
	}, [])

	const updateFilter = useCallback(
		(key: keyof typeof filters, value: string) => {
			setFilters((prev) => ({ ...prev, [key]: value }))
		},
		[]
	)

	return {
		filters,
		filteredClasses: filteredClasses(),
		clearFilters,
		updateFilter,
	}
}
