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
		// Removed unnecessary toast notifications for open/close
	}

	const headerTemplate = (options: PanelTemplateOptions) => {
		const className = `${options.className} justify-content-space-between cursor-pointer`

		return (
			<div
				className={className}
				onClick={() => setIsCollapsed(!isCollapsed)}
				title={isCollapsed ? 'Click to open filters' : 'Click to close filters'}
				style={{ padding: '1rem 1.5rem' }}
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

		const handleClear = () => {
			onClear?.()
			// Show toast notification when filters are cleared
			toast.current?.show({
				severity: 'success',
				summary: 'Filters Cleared',
				detail: 'All filters have been reset',
				life: 2000,
			})
		}

		return !isCollapsed && onClear ? (
			<div className={className} style={{ padding: '1rem 1.5rem' }}>
				<Button
					label={clearText}
					icon="pi pi-refresh"
					iconPos="right"
					onClick={handleClear}
					disabled={clearDisabled}
					className="p-button-outlined border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
					size="small"
				/>
			</div>
		) : undefined
	}

	return (
		<>
			<Toast 
				ref={toast} 
				position="top-right" 
				style={{
					zIndex: 9999,
				}}
				pt={{
					root: {
						style: {
							background: 'rgba(139, 115, 85, 0.95)',
							backdropFilter: 'blur(10px)',
							border: '2px solid #8baa7a',
							borderRadius: '12px',
							boxShadow: '0 8px 32px rgba(139, 69, 19, 0.3)',
						}
					},
					content: {
						style: {
							background: 'transparent',
							padding: '1rem',
						}
					},
					message: {
						style: {
							color: '#4a7c59',
							fontWeight: '600',
						}
					},
					summary: {
						style: {
							color: '#4a7c59',
							fontWeight: '700',
							fontSize: '1rem',
						}
					},
					detail: {
						style: {
							color: '#4a7c59',
							fontSize: '0.9rem',
							marginTop: '0.25rem',
						}
					},
					icon: {
						style: {
							color: '#4a7c59',
							fontSize: '1.2rem',
						}
					}
				}}
			/>
			<Panel
				headerTemplate={headerTemplate}
				footerTemplate={footerTemplate}
				collapsed={isCollapsed}
				toggleable
				onToggle={handleToggle}
				className={`filter-panel yoga-card border-primary-green ${className}`}
				style={{
					borderRadius: '12px',
					border: '2px solid var(--primary-green)',
					background: 'rgba(255, 255, 255, 0.6)',
					backdropFilter: 'blur(10px)',
				}}
			>
				<div style={{ padding: '1rem 1.5rem' }}>{children}</div>
			</Panel>
		</>
	)
}
