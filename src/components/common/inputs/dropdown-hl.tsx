'use client'

import { Dropdown, DropdownProps } from 'primereact/dropdown'
import { ReactNode } from 'react'

interface DropdownHLProps extends Omit<DropdownProps, 'id'> {
	label: string
	id: string
	error?: string
	labelWidth?: number // in rem
	required?: boolean
	className?: string
}

export function DropdownHL({
	label,
	id,
	error,
	labelWidth,
	required = false,
	className = '',
	...dropdownProps
}: DropdownHLProps) {
	return (
		<div className={`flex flex-column gap-2 w-full ${className}`}>
			<label
				htmlFor={id}
				className="text-sm font-semibold text-primary-green"
				style={labelWidth ? { width: `${labelWidth}rem` } : undefined}
			>
				{label}
				{required && <span className="text-red-500 ml-1">*</span>}
			</label>
			<Dropdown
				id={id}
				className={`w-full ${error ? 'p-invalid' : ''}`}
				{...dropdownProps}
			/>
			{error && <small className="p-error">{error}</small>}
		</div>
	)
}
