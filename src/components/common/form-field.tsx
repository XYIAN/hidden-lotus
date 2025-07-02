'use client'

import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { InputText, InputTextProps } from 'primereact/inputtext'
import { Dropdown, DropdownProps } from 'primereact/dropdown'
import { ComponentType } from 'react'

interface BaseFormFieldProps {
	label: string
	name: string
	control: Control<any>
	className?: string
}

interface InputFormFieldProps extends BaseFormFieldProps {
	type: 'input'
	inputProps?: Omit<InputTextProps, 'id' | 'className'>
}

interface DropdownFormFieldProps extends BaseFormFieldProps {
	type: 'dropdown'
	dropdownProps: Omit<DropdownProps, 'id' | 'className'>
}

type FormFieldProps = InputFormFieldProps | DropdownFormFieldProps

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
