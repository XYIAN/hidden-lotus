'use client'

import { InputTextarea, InputTextareaProps } from 'primereact/inputtextarea'
import { ReactNode } from 'react'

interface InputTextareaHLProps extends Omit<InputTextareaProps, 'id'> {
	label: string
	id: string
	error?: string
	labelWidth?: number // in rem
	required?: boolean
	className?: string
}

export function InputTextareaHL({
	label,
	id,
	error,
	labelWidth,
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
