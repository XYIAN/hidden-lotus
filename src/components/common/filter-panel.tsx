'use client'

import { useState } from 'react'
import { Panel } from 'primereact/panel'
import { Button } from 'primereact/button'
import { ReactNode } from 'react'
import '@/styles/filter-panel.css'

interface FilterPanelProps {
	title?: string
	children: ReactNode
	className?: string
	collapsed?: boolean
	onClear?: () => void
	clearDisabled?: boolean
	clearText?: string
}

export function FilterPanel({
	title = 'Filtered Search',
	children,
	className = '',
	collapsed = true,
	onClear,
	clearDisabled = false,
	clearText = 'Clear Filters',
}: FilterPanelProps) {
	const [isCollapsed, setIsCollapsed] = useState(collapsed)

	const headerTemplate = (options: any) => {
		const className = `${options.className} justify-content-space-between`

		return (
			<div className={className}>
				<div className="flex align-items-center gap-2">
					<i className="pi pi-filter text-primary-green text-lg"></i>
					<span className="text-lg font-semibold text-primary-green">
						{title}
					</span>
				</div>
				<div>{options.togglerElement}</div>
			</div>
		)
	}

	const footerTemplate = (options: any) => {
		const className = `${options.className} flex justify-content-end`

		return !isCollapsed && onClear ? (
			<div className={className}>
				<Button
					label={clearText}
					icon="pi pi-refresh"
					iconPos="right"
					onClick={onClear}
					disabled={clearDisabled}
					className="p-button-outlined border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
					size="small"
				/>
			</div>
		) : undefined
	}

	return (
		<Panel
			headerTemplate={headerTemplate}
			footerTemplate={footerTemplate}
			collapsed={isCollapsed}
			toggleable
			onToggle={(e) => setIsCollapsed(e.value)}
			className={`filter-panel yoga-card border-primary-green ${className}`}
			style={{
				borderRadius: '16px',
				border: '2px solid var(--primary-green)',
				background: 'rgba(255, 255, 255, 0.6)',
				backdropFilter: 'blur(10px)',
			}}
		>
			{children}
		</Panel>
	)
}
