'use client'

import { Dropdown } from 'primereact/dropdown'
import { DropdownHLProps } from '@/types'

export function DropdownHL({
	id,
	label,
	labelWidth = '6',
	error,
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
			{error && <small className="text-red-500">{error}</small>}
		</div>
	)
}
