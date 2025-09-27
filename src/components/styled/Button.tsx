// High-performance styled Button components
import styled, { css } from 'styled-components'
// import { commonStyles } from '@/lib/styled-components' // Replaced with inline styles

// Base button component
export const Button = styled.button<{
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
	size?: 'sm' | 'md' | 'lg'
	fullWidth?: boolean
	loading?: boolean
}>`
	background-color: ${({ theme }) => theme.colors.sageGreen600};
	border: 1px solid ${({ theme }) => theme.colors.sageGreen600};
	color: white;
	padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
	border-radius: ${({ theme }) => theme.borderRadius.md};
	font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
	transition: all ${({ theme }) => theme.transitions.normal};
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: ${({ theme }) => theme.spacing.xs};
	text-decoration: none;
	font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
	user-select: none;
	white-space: nowrap;
	position: relative;
	overflow: hidden;

	&:hover {
		background-color: ${({ theme }) => theme.colors.sageGreen400};
		border-color: ${({ theme }) => theme.colors.sageGreen400};
		transform: translateY(-1px);
	}

	&:active {
		transform: translateY(0);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
		transform: none;
	}

	${({ variant = 'primary' }) => {
		switch (variant) {
			case 'secondary':
				return css`
					background-color: ${({ theme }) => theme.colors.earthBrown};
					border-color: ${({ theme }) => theme.colors.earthBrown};
					color: white;

					&:hover {
						background-color: ${({ theme }) => theme.colors.secondaryBrown};
						border-color: ${({ theme }) => theme.colors.secondaryBrown};
					}
				`
			case 'outline':
				return css`
					background-color: transparent;
					border: 2px solid ${({ theme }) => theme.colors.sageGreen600};
					color: ${({ theme }) => theme.colors.sageGreen600};

					&:hover {
						background-color: ${({ theme }) => theme.colors.sageGreen600};
						color: white;
					}
				`
			case 'ghost':
				return css`
					background-color: transparent;
					border: 1px solid transparent;
					color: ${({ theme }) => theme.colors.primaryGreen};

					&:hover {
						background-color: rgba(74, 124, 89, 0.1);
						border-color: ${({ theme }) => theme.colors.sageGreen200};
					}
				`
			case 'danger':
				return css`
					background-color: ${({ theme }) => theme.colors.error};
					border-color: ${({ theme }) => theme.colors.error};
					color: white;

					&:hover {
						background-color: #b91c1c;
						border-color: #b91c1c;
					}
				`
			default:
				return ''
		}
	}}

	${({ size = 'md' }) => {
		switch (size) {
			case 'sm':
				return css`
					padding: ${({ theme }) => theme.spacing.xs}
						${({ theme }) => theme.spacing.md};
					font-size: ${({ theme }) => theme.typography.fontSize.sm};
				`
			case 'lg':
				return css`
					padding: ${({ theme }) => theme.spacing.md}
						${({ theme }) => theme.spacing.xl};
					font-size: ${({ theme }) => theme.typography.fontSize.lg};
				`
			default:
				return ''
		}
	}}

  ${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}

  ${({ loading }) =>
		loading &&
		css`
			pointer-events: none;
			opacity: 0.7;

			&::after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				width: 16px;
				height: 16px;
				margin: -8px 0 0 -8px;
				border: 2px solid transparent;
				border-top-color: currentColor;
				border-radius: 50%;
				animation: spin 1s linear infinite;
			}
		`}

  &:disabled {
		opacity: 0.6;
		cursor: not-allowed;
		transform: none;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`

// Icon button variant
export const IconButton = styled(Button)<{ iconOnly?: boolean }>`
	${({ iconOnly }) =>
		iconOnly &&
		css`
			width: 40px;
			height: 40px;
			padding: 0;
			border-radius: 50%;
		`}
`

// Button group container
export const ButtonGroup = styled.div<{
	orientation?: 'horizontal' | 'vertical'
	spacing?: 'sm' | 'md' | 'lg'
}>`
	display: flex;
	flex-direction: ${({ orientation = 'horizontal' }) => orientation};
	gap: ${({ theme, spacing = 'md' }) => theme.spacing[spacing]};
	align-items: center;

	${Button} {
		margin: 0;
	}
`

// Floating action button
export const FloatingButton = styled(Button)`
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	width: 56px;
	height: 56px;
	border-radius: 50%;
	box-shadow: ${({ theme }) => theme.shadows.lg};
	z-index: ${({ theme }) => theme.zIndex.fixed};

	&:hover {
		transform: translateY(-2px) scale(1.05);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
	}
`

// Link button (appears as button but renders as link)
export const LinkButton = styled.a<{
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
	size?: 'sm' | 'md' | 'lg'
}>`
	background-color: ${({ theme }) => theme.colors.sageGreen600};
	border: 1px solid ${({ theme }) => theme.colors.sageGreen600};
	color: white;
	padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
	border-radius: ${({ theme }) => theme.borderRadius.md};
	font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
	transition: all ${({ theme }) => theme.transitions.normal};
	cursor: pointer;
	text-decoration: none;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: ${({ theme }) => theme.spacing.xs};
	font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
	user-select: none;
	white-space: nowrap;

	&:hover {
		background-color: ${({ theme }) => theme.colors.sageGreen400};
		border-color: ${({ theme }) => theme.colors.sageGreen400};
		transform: translateY(-1px);
	}

	&:active {
		transform: translateY(0);
	}

	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
		transform: none;
	}

	${({ variant = 'primary' }) => {
		switch (variant) {
			case 'secondary':
				return css`
					background-color: ${({ theme }) => theme.colors.earthBrown};
					border-color: ${({ theme }) => theme.colors.earthBrown};
					color: white;

					&:hover {
						background-color: ${({ theme }) => theme.colors.secondaryBrown};
						border-color: ${({ theme }) => theme.colors.secondaryBrown};
					}
				`
			case 'outline':
				return css`
					background-color: transparent;
					border: 2px solid ${({ theme }) => theme.colors.sageGreen600};
					color: ${({ theme }) => theme.colors.sageGreen600};

					&:hover {
						background-color: ${({ theme }) => theme.colors.sageGreen600};
						color: white;
					}
				`
			case 'ghost':
				return css`
					background-color: transparent;
					border: 1px solid transparent;
					color: ${({ theme }) => theme.colors.primaryGreen};

					&:hover {
						background-color: rgba(74, 124, 89, 0.1);
						border-color: ${({ theme }) => theme.colors.sageGreen200};
					}
				`
			default:
				return ''
		}
	}}

	${({ size = 'md' }) => {
		switch (size) {
			case 'sm':
				return css`
					padding: ${({ theme }) => theme.spacing.xs}
						${({ theme }) => theme.spacing.md};
					font-size: ${({ theme }) => theme.typography.fontSize.sm};
				`
			case 'lg':
				return css`
					padding: ${({ theme }) => theme.spacing.md}
						${({ theme }) => theme.spacing.xl};
					font-size: ${({ theme }) => theme.typography.fontSize.lg};
				`
			default:
				return ''
		}
	}}
`
