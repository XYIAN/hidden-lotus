'use client'

import { useState } from 'react'
import { Panel } from 'primereact/panel'
import { Button } from 'primereact/button'
import { ReactNode } from 'react'
import { PanelTemplateOptions } from '@/types'
import { Toast } from 'primereact/toast'
import { useRef } from 'react'
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
	const toast = useRef<Toast>(null)

	const handleToggle = (e: { value: boolean }) => {
		setIsCollapsed(e.value)

		// Show toast notification
		if (e.value) {
			toast.current?.show({
				severity: 'info',
				summary: 'Filters Closed',
				detail: 'Filter panel has been closed',
				life: 2000,
			})
		} else {
			toast.current?.show({
				severity: 'success',
				summary: 'Filters Open',
				detail: 'Filter panel is now open',
				life: 2000,
			})
		}
	}

	const headerTemplate = (options: PanelTemplateOptions) => {
		const className = `${options.className} justify-content-space-between cursor-pointer`

		return (
			<div
				className={className}
				onClick={() => setIsCollapsed(!isCollapsed)}
				title={isCollapsed ? 'Click to open filters' : 'Click to close filters'}
			>
				<div className="flex align-items-center gap-2">
					<i className="pi pi-filter text-primary-green text-lg"></i>
					<span className="text-lg font-semibold text-primary-green">
						{title}
					</span>
				</div>
				<div className="flex align-items-center gap-2">
					<span className="text-sm text-primary-green">
						{isCollapsed ? 'Open Filters' : 'Close Filters'}
					</span>
					<div onClick={(e) => e.stopPropagation()}>
						{options.togglerElement}
					</div>
				</div>
			</div>
		)
	}

	const footerTemplate = (options: PanelTemplateOptions) => {
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
		<>
			<Toast ref={toast} position="top-right" />
			<Panel
				headerTemplate={headerTemplate}
				footerTemplate={footerTemplate}
				collapsed={isCollapsed}
				toggleable
				onToggle={handleToggle}
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
		</>
	)
}
