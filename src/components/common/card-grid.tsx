import { ReactNode } from 'react'

interface CardGridProps {
	children: ReactNode
	className?: string
	columns?: {
		sm?: number
		md?: number
		lg?: number
		xl?: number
	}
	gap?: number
	centerY?: boolean
}

export function CardGrid({
	children,
	className = '',
	columns = { sm: 1, md: 2, lg: 3, xl: 3 },
	gap = 6,
	centerY = false,
}: CardGridProps) {
	const gridCols = `grid-cols-${columns.sm || 1} md:grid-cols-${
		columns.md || 2
	} lg:grid-cols-${columns.lg || 3} xl:grid-cols-${columns.xl || 3}`
	const gridGap = `gap-${gap}`
	const centerYClass = centerY ? 'items-center' : 'items-start'

	return (
		<div
			className={`grid ${gridCols} ${gridGap} justify-items-center ${centerYClass} max-w-7xl mx-auto w-full ${className}`}
			style={{
				display: 'grid',
				justifyContent: 'center',
				alignItems: 'start',
			}}
		>
			{children}
		</div>
	)
}
