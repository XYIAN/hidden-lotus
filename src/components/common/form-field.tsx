'use client'

import { Controller, FieldValues, Path } from 'react-hook-form'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { FormFieldProps } from '@/types'

export function FormField<T extends FieldValues = FieldValues>(
	props: FormFieldProps<T>
) {
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
				name={name as Path<T>}
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
								appendTo={props.dropdownProps?.appendTo ?? 'self'}
								panelClassName="hl-dropdown-panel"
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
