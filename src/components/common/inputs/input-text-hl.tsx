'use client'

import { InputText } from 'primereact/inputtext'
import { InputTextHLProps } from '@/types'

export function InputTextHL({
	id,
	label,
	labelWidth = '6',
	error,
	required = false,
	className = '',
	...inputProps
}: InputTextHLProps) {
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
			<InputText
				id={id}
				className={`w-full ${error ? 'p-invalid' : ''}`}
				{...inputProps}
			/>
			{error && <small className="p-error">{error}</small>}
		</div>
	)
}
