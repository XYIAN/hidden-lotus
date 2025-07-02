'use client'

import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { InputText, InputTextProps } from 'primereact/inputtext'
import { Dropdown, DropdownProps } from 'primereact/dropdown'
import { FormFieldProps } from '@/types'

export function FormField(props: FormFieldProps) {
	const { label, name, control, className = '' } = props

	return (
		<div className={`flex flex-column gap-2 ${className}`}>
			<label
				htmlFor={name}
				className="text-sm font-semibold text-primary-green"
			>
				{label}
			</label>
			<Controller
				name={name as Path<FieldValues>}
				control={control}
				render={({ field }) => {
					if (props.type === 'input') {
						return (
							<InputText
								{...field}
								id={name}
								className="w-full"
								{...props.inputProps}
							/>
						)
					} else if (props.type === 'dropdown') {
						return (
							<Dropdown
								{...field}
								id={name}
								className="w-full"
								{...props.dropdownProps}
							/>
						)
					}
					// Fallback for unknown types
					return <div>Unsupported field type</div>
				}}
			/>
		</div>
	)
}
