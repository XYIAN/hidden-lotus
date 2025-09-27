// Performance optimization component
import React, { useEffect, useRef, memo } from 'react'
import {
	useRenderTime,
	useMemoryUsage,
	useScrollPerformance,
} from '@/hooks/usePerformance'

interface PerformanceOptimizerProps {
	children: React.ReactNode
	enableMonitoring?: boolean
	enablePreloading?: boolean
	// enableImageOptimization?: boolean // Reserved for future use
}

// Image optimization component
const OptimizedImage = memo<{
	src: string
	alt: string
	width?: number
	height?: number
	className?: string
	priority?: boolean
}>(({ src, alt, width, height, className, priority = false }) => {
	const [isLoaded, setIsLoaded] = React.useState(false)
	const [hasError, setHasError] = React.useState(false)
	const imgRef = useRef<HTMLImageElement>(null)

	useEffect(() => {
		if (priority) {
			// Preload critical images
			const link = document.createElement('link')
			link.rel = 'preload'
			link.as = 'image'
			link.href = src
			document.head.appendChild(link)

			return () => {
				document.head.removeChild(link)
			}
		}
	}, [src, priority])

	return (
		<div className={className} style={{ position: 'relative' }}>
			{!isLoaded && !hasError && (
				<div
					style={{
						width: width || '100%',
						height: height || '200px',
						background:
							'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
						backgroundSize: '200px 100%',
						animation: 'shimmer 1.5s infinite',
						borderRadius: '8px',
					}}
				/>
			)}
			{hasError && (
				<div
					style={{
						width: width || '100%',
						height: height || '200px',
						background: '#f0f0f0',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						color: '#666',
						borderRadius: '8px',
					}}
				>
					Image unavailable
				</div>
			)}
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				ref={imgRef}
				src={src}
				alt={alt}
				width={width}
				height={height}
				style={{
					display: isLoaded ? 'block' : 'none',
					width: '100%',
					height: '100%',
					objectFit: 'cover',
				}}
				onLoad={() => setIsLoaded(true)}
				onError={() => setHasError(true)}
				loading={priority ? 'eager' : 'lazy'}
				decoding="async"
			/>
		</div>
	)
})

OptimizedImage.displayName = 'OptimizedImage'

// Virtual scrolling component for large lists
const VirtualList = memo<{
	items: unknown[]
	itemHeight: number
	containerHeight: number
	renderItem: (item: unknown, index: number) => React.ReactNode
}>(({ items, itemHeight, containerHeight, renderItem }) => {
	const [scrollTop, setScrollTop] = React.useState(0)
	const containerRef = useRef<HTMLDivElement>(null)

	const visibleStart = Math.floor(scrollTop / itemHeight)
	const visibleEnd = Math.min(
		visibleStart + Math.ceil(containerHeight / itemHeight) + 1,
		items.length
	)

	const visibleItems = items.slice(visibleStart, visibleEnd)
	const totalHeight = items.length * itemHeight
	const offsetY = visibleStart * itemHeight

	const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
		setScrollTop(e.currentTarget.scrollTop)
	}

	return (
		<div
			ref={containerRef}
			style={{
				height: containerHeight,
				overflow: 'auto',
				position: 'relative',
			}}
			onScroll={handleScroll}
		>
			<div style={{ height: totalHeight, position: 'relative' }}>
				<div
					style={{
						transform: `translateY(${offsetY}px)`,
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
					}}
				>
					{visibleItems.map((item, index) =>
						renderItem(item, visibleStart + index)
					)}
				</div>
			</div>
		</div>
	)
})

VirtualList.displayName = 'VirtualList'

// Performance monitoring component
const PerformanceMonitor = memo(() => {
	const { renderCount } = useRenderTime('PerformanceMonitor')
	const memoryInfo = useMemoryUsage()
	const scrollMetrics = useScrollPerformance()

	if (process.env.NODE_ENV !== 'development') {
		return null
	}

	return (
		<div
			style={{
				position: 'fixed',
				bottom: '10px',
				right: '10px',
				background: 'rgba(0, 0, 0, 0.8)',
				color: 'white',
				padding: '10px',
				borderRadius: '5px',
				fontSize: '12px',
				zIndex: 9999,
				maxWidth: '200px',
			}}
		>
			<div>Renders: {renderCount}</div>
			{memoryInfo && (
				<div>
					Memory: {Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024)}MB
				</div>
			)}
			<div>Scrolls: {scrollMetrics.scrollCount}</div>
		</div>
	)
})

PerformanceMonitor.displayName = 'PerformanceMonitor'

// Main performance optimizer component
export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
	children,
	enableMonitoring = false,
	enablePreloading = true,
	// enableImageOptimization = true, // Reserved for future use
}) => {
	// Preload critical resources
	useEffect(() => {
		if (enablePreloading) {
			// Preload critical fonts
			const fontPreloads = [
				'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
				'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600&display=swap',
			]

			fontPreloads.forEach((href) => {
				const link = document.createElement('link')
				link.rel = 'preload'
				link.as = 'style'
				link.href = href
				document.head.appendChild(link)
			})

			// Preload critical images
			const imagePreloads = ['/hl-f-icon2.png', '/bg-main.png']

			imagePreloads.forEach((src) => {
				const link = document.createElement('link')
				link.rel = 'preload'
				link.as = 'image'
				link.href = src
				document.head.appendChild(link)
			})
		}
	}, [enablePreloading])

	// Optimize scroll performance
	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Use passive event listeners for better scroll performance
			const options = { passive: true }

			const handleScroll = () => {
				// Throttled scroll handling
			}

			window.addEventListener('scroll', handleScroll, options)

			return () => {
				window.removeEventListener('scroll', handleScroll)
			}
		}
	}, [])

	// Optimize resize performance
	useEffect(() => {
		if (typeof window !== 'undefined') {
			let timeoutId: NodeJS.Timeout

			const handleResize = () => {
				clearTimeout(timeoutId)
				timeoutId = setTimeout(() => {
					// Throttled resize handling
				}, 100)
			}

			window.addEventListener('resize', handleResize)

			return () => {
				window.removeEventListener('resize', handleResize)
				clearTimeout(timeoutId)
			}
		}
	}, [])

	return (
		<>
			{children}
			{enableMonitoring && <PerformanceMonitor />}
		</>
	)
}

// Export individual components
export { OptimizedImage, VirtualList, PerformanceMonitor }
