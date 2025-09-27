// Lazy loading wrapper component for performance optimization
import React, { Suspense, lazy, ComponentType } from 'react'
import { LoadingSkeleton } from '../styled/LoadingSkeleton'
import { ErrorBoundary } from './ErrorBoundary'

interface LazyWrapperProps {
	fallback?: React.ReactNode
	errorFallback?: React.ReactNode
	children: React.ReactNode
}

// Default loading fallback
const DefaultFallback = () => (
	<div style={{ padding: '2rem', textAlign: 'center' }}>
		<LoadingSkeleton type="card" />
	</div>
)

// Lazy wrapper component
export const LazyWrapper: React.FC<LazyWrapperProps> = ({
	fallback = <DefaultFallback />,
	errorFallback,
	children,
}) => {
	return (
		<ErrorBoundary fallback={errorFallback}>
			<Suspense fallback={fallback}>{children}</Suspense>
		</ErrorBoundary>
	)
}

// Higher-order component for lazy loading
export const withLazyLoading = <P extends object>(
	Component: ComponentType<P>,
	fallback?: React.ReactNode
) => {
	const LazyComponent = lazy(() =>
		Promise.resolve({ default: Component as ComponentType<unknown> })
	)

	const WrappedComponent = (props: P) => (
		<LazyWrapper fallback={fallback}>
			<LazyComponent {...props} />
		</LazyWrapper>
	)

	WrappedComponent.displayName = `withLazyLoading(${
		Component.displayName || Component.name
	})`

	return WrappedComponent
}

// Lazy load with intersection observer
export const LazyLoadOnVisible: React.FC<{
	children: React.ReactNode
	fallback?: React.ReactNode
	threshold?: number
	rootMargin?: string
}> = ({
	children,
	fallback = <DefaultFallback />,
	threshold = 0.1,
	rootMargin = '50px',
}) => {
	const [isVisible, setIsVisible] = React.useState(false)
	const [hasLoaded, setHasLoaded] = React.useState(false)
	const ref = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasLoaded) {
					setIsVisible(true)
					setHasLoaded(true)
					observer.disconnect()
				}
			},
			{
				threshold,
				rootMargin,
			}
		)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => observer.disconnect()
	}, [threshold, rootMargin, hasLoaded])

	return (
		<div ref={ref}>
			{isVisible ? (
				<ErrorBoundary>
					<Suspense fallback={fallback}>{children}</Suspense>
				</ErrorBoundary>
			) : (
				fallback
			)}
		</div>
	)
}

// Preload component for critical resources
export const PreloadComponent: React.FC<{
	component: () => Promise<{ default: ComponentType<unknown> }>
	priority?: 'high' | 'low'
}> = ({ component, priority = 'low' }) => {
	React.useEffect(() => {
		if (priority === 'high') {
			// Preload immediately for high priority
			component()
		} else {
			// Preload after a delay for low priority
			const timer = setTimeout(() => {
				component()
			}, 1000)

			return () => clearTimeout(timer)
		}
	}, [component, priority])

	return null
}

// Image lazy loading component
export const LazyImage: React.FC<{
	src: string
	alt: string
	width?: number
	height?: number
	className?: string
	placeholder?: string
	fallback?: React.ReactNode
}> = ({
	src,
	alt,
	width,
	height,
	className,
	// placeholder,
	fallback = <LoadingSkeleton type="image" width="100%" height="200px" />,
}) => {
	const [isLoaded, setIsLoaded] = React.useState(false)
	const [hasError, setHasError] = React.useState(false)
	const [isVisible, setIsVisible] = React.useState(false)
	const imgRef = React.useRef<HTMLImageElement>(null)

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.1 }
		)

		if (imgRef.current) {
			observer.observe(imgRef.current)
		}

		return () => observer.disconnect()
	}, [])

	if (hasError) {
		return fallback
	}

	return (
		<div ref={imgRef} className={className} style={{ position: 'relative' }}>
			{!isLoaded && isVisible && fallback}
			{isVisible && (
				<>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
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
						loading="lazy"
					/>
				</>
			)}
		</div>
	)
}
