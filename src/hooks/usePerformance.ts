// Performance monitoring and optimization hooks
import { useEffect, useRef, useCallback, useState } from 'react'

// Hook for measuring component render performance
export const useRenderTime = (componentName: string) => {
	const startTime = useRef<number>(0)
	const renderCount = useRef<number>(0)

	useEffect(() => {
		startTime.current = performance.now()
		renderCount.current += 1

		return () => {
			const endTime = performance.now()
			const renderTime = endTime - startTime.current

			if (process.env.NODE_ENV === 'development') {
				console.log(
					`${componentName} render #${
						renderCount.current
					}: ${renderTime.toFixed(2)}ms`
				)
			}
		}
	})

	return { renderCount: renderCount.current }
}

// Hook for measuring API call performance
export const useApiPerformance = () => {
	const [metrics, setMetrics] = useState<{
		totalCalls: number
		averageTime: number
		slowestCall: number
		fastestCall: number
	}>({
		totalCalls: 0,
		averageTime: 0,
		slowestCall: 0,
		fastestCall: Infinity,
	})

	const measureApiCall = useCallback(
		async <T>(apiCall: () => Promise<T>, callName: string): Promise<T> => {
			const startTime = performance.now()

			try {
				const result = await apiCall()
				const endTime = performance.now()
				const duration = endTime - startTime

				setMetrics((prev) => {
					const newTotalCalls = prev.totalCalls + 1
					const newAverageTime =
						(prev.averageTime * prev.totalCalls + duration) / newTotalCalls
					const newSlowestCall = Math.max(prev.slowestCall, duration)
					const newFastestCall = Math.min(prev.fastestCall, duration)

					if (process.env.NODE_ENV === 'development') {
						console.log(`API Call ${callName}: ${duration.toFixed(2)}ms`)
					}

					return {
						totalCalls: newTotalCalls,
						averageTime: newAverageTime,
						slowestCall: newSlowestCall,
						fastestCall: newFastestCall,
					}
				})

				return result
			} catch (error) {
				const endTime = performance.now()
				const duration = endTime - startTime

				console.error(
					`API Call ${callName} failed after ${duration.toFixed(2)}ms:`,
					error
				)
				throw error
			}
		},
		[]
	)

	return { measureApiCall, metrics }
}

// Hook for monitoring memory usage
export const useMemoryUsage = () => {
	const [memoryInfo, setMemoryInfo] = useState<{
		usedJSHeapSize: number
		totalJSHeapSize: number
		jsHeapSizeLimit: number
	} | null>(null)

	useEffect(() => {
		const updateMemoryInfo = () => {
			if ('memory' in performance) {
				const memory = (
					performance as {
						memory: {
							usedJSHeapSize: number
							totalJSHeapSize: number
							jsHeapSizeLimit: number
						}
					}
				).memory
				setMemoryInfo({
					usedJSHeapSize: memory.usedJSHeapSize,
					totalJSHeapSize: memory.totalJSHeapSize,
					jsHeapSizeLimit: memory.jsHeapSizeLimit,
				})
			}
		}

		updateMemoryInfo()
		const interval = setInterval(updateMemoryInfo, 5000) // Check every 5 seconds

		return () => clearInterval(interval)
	}, [])

	return memoryInfo
}

// Hook for measuring scroll performance
export const useScrollPerformance = () => {
	const [scrollMetrics, setScrollMetrics] = useState({
		scrollCount: 0,
		averageScrollTime: 0,
		isScrolling: false,
	})

	const scrollStartTime = useRef<number>(0)
	const scrollTimeout = useRef<NodeJS.Timeout | undefined>(undefined)

	useEffect(() => {
		const handleScrollStart = () => {
			scrollStartTime.current = performance.now()
			setScrollMetrics((prev) => ({ ...prev, isScrolling: true }))
		}

		const handleScrollEnd = () => {
			const scrollTime = performance.now() - scrollStartTime.current

			setScrollMetrics((prev) => {
				const newScrollCount = prev.scrollCount + 1
				const newAverageScrollTime =
					(prev.averageScrollTime * prev.scrollCount + scrollTime) /
					newScrollCount

				if (process.env.NODE_ENV === 'development') {
					console.log(`Scroll event: ${scrollTime.toFixed(2)}ms`)
				}

				return {
					scrollCount: newScrollCount,
					averageScrollTime: newAverageScrollTime,
					isScrolling: false,
				}
			})
		}

		const handleScroll = () => {
			handleScrollStart()

			// Clear existing timeout
			if (scrollTimeout.current) {
				clearTimeout(scrollTimeout.current)
			}

			// Set new timeout to detect scroll end
			scrollTimeout.current = setTimeout(handleScrollEnd, 150)
		}

		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
			if (scrollTimeout.current) {
				clearTimeout(scrollTimeout.current)
			}
		}
	}, [])

	return scrollMetrics
}

// Hook for measuring image load performance
export const useImageLoadPerformance = () => {
	const [imageMetrics, setImageMetrics] = useState({
		totalImages: 0,
		loadedImages: 0,
		averageLoadTime: 0,
		failedImages: 0,
	})

	const measureImageLoad = useCallback((src: string) => {
		const startTime = performance.now()
		const img = new Image()

		img.onload = () => {
			const loadTime = performance.now() - startTime

			setImageMetrics((prev) => {
				const newLoadedImages = prev.loadedImages + 1
				const newAverageLoadTime =
					(prev.averageLoadTime * prev.loadedImages + loadTime) /
					newLoadedImages

				if (process.env.NODE_ENV === 'development') {
					console.log(`Image loaded: ${src} in ${loadTime.toFixed(2)}ms`)
				}

				return {
					...prev,
					loadedImages: newLoadedImages,
					averageLoadTime: newAverageLoadTime,
				}
			})
		}

		img.onerror = () => {
			setImageMetrics((prev) => ({
				...prev,
				failedImages: prev.failedImages + 1,
			}))

			if (process.env.NODE_ENV === 'development') {
				console.error(`Image failed to load: ${src}`)
			}
		}

		img.src = src
		setImageMetrics((prev) => ({ ...prev, totalImages: prev.totalImages + 1 }))
	}, [])

	return { measureImageLoad, imageMetrics }
}

// Hook for debouncing expensive operations
export const useDebounce = <T>(value: T, delay: number): T => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)

		return () => {
			clearTimeout(handler)
		}
	}, [value, delay])

	return debouncedValue
}

// Hook for throttling frequent updates
export const useThrottle = <T>(value: T, limit: number): T => {
	const [throttledValue, setThrottledValue] = useState<T>(value)
	const lastRan = useRef<number>(Date.now())

	useEffect(() => {
		const handler = setTimeout(() => {
			if (Date.now() - lastRan.current >= limit) {
				setThrottledValue(value)
				lastRan.current = Date.now()
			}
		}, limit - (Date.now() - lastRan.current))

		return () => {
			clearTimeout(handler)
		}
	}, [value, limit])

	return throttledValue
}

// Hook for measuring component mount/unmount performance
export const useLifecyclePerformance = (componentName: string) => {
	const mountTime = useRef<number>(0)
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		mountTime.current = performance.now()
		setIsMounted(true)

		if (process.env.NODE_ENV === 'development') {
			console.log(
				`${componentName} mounted in ${mountTime.current.toFixed(2)}ms`
			)
		}

		return () => {
			const unmountTime = performance.now()
			const totalLifecycle = unmountTime - mountTime.current

			if (process.env.NODE_ENV === 'development') {
				console.log(
					`${componentName} unmounted after ${totalLifecycle.toFixed(2)}ms`
				)
			}
		}
	}, [componentName])

	return { isMounted, mountTime: mountTime.current }
}
