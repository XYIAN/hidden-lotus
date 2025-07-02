'use client'

import { InputTextarea } from 'primereact/inputtextarea'
import { InputTextareaHLProps } from '@/types'

export function InputTextareaHL({
	id,
	label,
	labelWidth = '6',
	error,
	required = false,
	className = '',
	...textareaProps
}: InputTextareaHLProps) {
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
			<InputTextarea
				id={id}
				className={`w-full ${error ? 'p-invalid' : ''}`}
				{...textareaProps}
			/>
			{error && <small className="p-error">{error}</small>}
		</div>
	)
}
