// Accessibility provider and utilities
import React, { createContext, useContext, useEffect, useState } from 'react'
// import { useMediaQuery } from '@/hooks/useMediaQuery' // Reserved for future use

interface AccessibilityContextType {
	// Focus management
	focusVisible: boolean
	setFocusVisible: (visible: boolean) => void

	// Reduced motion
	reducedMotion: boolean
	setReducedMotion: (reduced: boolean) => void

	// High contrast
	highContrast: boolean
	setHighContrast: (high: boolean) => void

	// Font size
	fontSize: 'small' | 'medium' | 'large'
	setFontSize: (size: 'small' | 'medium' | 'large') => void

	// Screen reader announcements
	announce: (message: string, priority?: 'polite' | 'assertive') => void

	// Skip links
	registerSkipLink: (id: string, label: string) => void
	unregisterSkipLink: (id: string) => void
	skipLinks: Array<{ id: string; label: string }>
}

const AccessibilityContext = createContext<
	AccessibilityContextType | undefined
>(undefined)

export const useAccessibility = () => {
	const context = useContext(AccessibilityContext)
	if (!context) {
		throw new Error(
			'useAccessibility must be used within an AccessibilityProvider'
		)
	}
	return context
}

interface AccessibilityProviderProps {
	children: React.ReactNode
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({
	children,
}) => {
	const [focusVisible, setFocusVisible] = useState(false)
	const [reducedMotion, setReducedMotion] = useState(false)
	const [highContrast, setHighContrast] = useState(false)
	const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>(
		'medium'
	)
	const [skipLinks, setSkipLinks] = useState<
		Array<{ id: string; label: string }>
	>([])
	const [announcementId, setAnnouncementId] = useState(0)

	// const isMobile = useMediaQuery('(max-width: 768px)') // Reserved for future use

	// Detect user preferences
	useEffect(() => {
		// Check for reduced motion preference
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
		setReducedMotion(mediaQuery.matches)

		const handleChange = (e: MediaQueryListEvent) => {
			setReducedMotion(e.matches)
		}

		mediaQuery.addEventListener('change', handleChange)
		return () => mediaQuery.removeEventListener('change', handleChange)
	}, [])

	// Focus management
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Tab') {
				setFocusVisible(true)
			}
		}

		const handleMouseDown = () => {
			setFocusVisible(false)
		}

		document.addEventListener('keydown', handleKeyDown)
		document.addEventListener('mousedown', handleMouseDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			document.removeEventListener('mousedown', handleMouseDown)
		}
	}, [])

	// Screen reader announcements
	const announce = (
		message: string,
		priority: 'polite' | 'assertive' = 'polite'
	) => {
		const id = `announcement-${announcementId}`
		setAnnouncementId((prev) => prev + 1)

		const announcement = document.createElement('div')
		announcement.setAttribute('aria-live', priority)
		announcement.setAttribute('aria-atomic', 'true')
		announcement.setAttribute('id', id)
		announcement.style.position = 'absolute'
		announcement.style.left = '-10000px'
		announcement.style.width = '1px'
		announcement.style.height = '1px'
		announcement.style.overflow = 'hidden'
		announcement.textContent = message

		document.body.appendChild(announcement)

		// Remove after announcement
		setTimeout(() => {
			document.body.removeChild(announcement)
		}, 1000)
	}

	// Skip links management
	const registerSkipLink = (id: string, label: string) => {
		setSkipLinks((prev) => [
			...prev.filter((link) => link.id !== id),
			{ id, label },
		])
	}

	const unregisterSkipLink = (id: string) => {
		setSkipLinks((prev) => prev.filter((link) => link.id !== id))
	}

	// Apply accessibility styles
	useEffect(() => {
		const root = document.documentElement

		// Apply reduced motion
		if (reducedMotion) {
			root.style.setProperty('--animation-duration', '0.01ms')
			root.style.setProperty('--animation-iteration-count', '1')
		} else {
			root.style.removeProperty('--animation-duration')
			root.style.removeProperty('--animation-iteration-count')
		}

		// Apply high contrast
		if (highContrast) {
			root.classList.add('high-contrast')
		} else {
			root.classList.remove('high-contrast')
		}

		// Apply font size
		root.setAttribute('data-font-size', fontSize)

		// Apply focus visible
		if (focusVisible) {
			root.classList.add('focus-visible')
		} else {
			root.classList.remove('focus-visible')
		}
	}, [reducedMotion, highContrast, fontSize, focusVisible])

	const value: AccessibilityContextType = {
		focusVisible,
		setFocusVisible,
		reducedMotion,
		setReducedMotion,
		highContrast,
		setHighContrast,
		fontSize,
		setFontSize,
		announce,
		registerSkipLink,
		unregisterSkipLink,
		skipLinks,
	}

	return (
		<AccessibilityContext.Provider value={value}>
			{children}
			<SkipLinks skipLinks={skipLinks} />
			<AccessibilityAnnouncer />
		</AccessibilityContext.Provider>
	)
}

// Skip links component
const SkipLinks: React.FC<{
	skipLinks: Array<{ id: string; label: string }>
}> = ({ skipLinks }) => {
	const { focusVisible } = useAccessibility()

	if (skipLinks.length === 0) return null

	return (
		<div
			className={`skip-links ${focusVisible ? 'focus-visible' : ''}`}
			style={{
				position: 'absolute',
				top: '-100px',
				left: '0',
				zIndex: 9999,
				background: '#000',
				color: '#fff',
				padding: '0.5rem',
				borderRadius: '0 0 4px 0',
			}}
		>
			{skipLinks.map(({ id, label }) => (
				<a
					key={id}
					href={`#${id}`}
					className="skip-link"
					style={{
						display: 'block',
						padding: '0.5rem 1rem',
						color: '#fff',
						textDecoration: 'none',
						border: '1px solid #fff',
						marginBottom: '0.25rem',
						borderRadius: '4px',
					}}
					onFocus={(e) => {
						e.currentTarget.parentElement!.style.top = '0'
					}}
					onBlur={(e) => {
						e.currentTarget.parentElement!.style.top = '-100px'
					}}
				>
					Skip to {label}
				</a>
			))}
		</div>
	)
}

// Accessibility announcer for screen readers
const AccessibilityAnnouncer: React.FC = () => {
	return (
		<div
			id="accessibility-announcer"
			aria-live="polite"
			aria-atomic="true"
			style={{
				position: 'absolute',
				left: '-10000px',
				width: '1px',
				height: '1px',
				overflow: 'hidden',
			}}
		/>
	)
}

// Hook for keyboard navigation
export const useKeyboardNavigation = () => {
	const handleKeyDown = (
		e: React.KeyboardEvent,
		onEnter?: () => void,
		onEscape?: () => void
	) => {
		switch (e.key) {
			case 'Enter':
			case ' ':
				e.preventDefault()
				onEnter?.()
				break
			case 'Escape':
				onEscape?.()
				break
			case 'ArrowDown':
				e.preventDefault()
				// Focus next element
				const nextElement = document.activeElement
					?.nextElementSibling as HTMLElement
				nextElement?.focus()
				break
			case 'ArrowUp':
				e.preventDefault()
				// Focus previous element
				const prevElement = document.activeElement
					?.previousElementSibling as HTMLElement
				prevElement?.focus()
				break
		}
	}

	return { handleKeyDown }
}

// Hook for focus management
export const useFocusManagement = () => {
	const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(null)

	const trapFocus = (container: HTMLElement) => {
		const focusableElements = container.querySelectorAll(
			'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
		) as NodeListOf<HTMLElement>

		const firstElement = focusableElements[0]
		const lastElement = focusableElements[focusableElements.length - 1]

		const handleTabKey = (e: KeyboardEvent) => {
			if (e.key === 'Tab') {
				if (e.shiftKey) {
					if (document.activeElement === firstElement) {
						e.preventDefault()
						lastElement.focus()
					}
				} else {
					if (document.activeElement === lastElement) {
						e.preventDefault()
						firstElement.focus()
					}
				}
			}
		}

		container.addEventListener('keydown', handleTabKey)
		firstElement?.focus()

		return () => {
			container.removeEventListener('keydown', handleTabKey)
		}
	}

	const restoreFocus = () => {
		focusedElement?.focus()
	}

	const saveFocus = () => {
		setFocusedElement(document.activeElement as HTMLElement)
	}

	return { trapFocus, restoreFocus, saveFocus }
}

// Hook for ARIA attributes
export const useAriaAttributes = () => {
	const generateId = (prefix: string) =>
		`${prefix}-${Math.random().toString(36).substr(2, 9)}`

	const getAriaProps = (label?: string, describedBy?: string) => ({
		'aria-label': label,
		'aria-describedby': describedBy,
		'aria-labelledby': label ? generateId('label') : undefined,
	})

	return { generateId, getAriaProps }
}
