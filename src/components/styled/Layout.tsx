// High-performance styled Layout components
import styled, { css } from 'styled-components'
// import { commonStyles } from '@/lib/styled-components' // Reserved for future use

// Container component
export const Container = styled.div<{
	maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
	padding?: 'none' | 'sm' | 'md' | 'lg'
	center?: boolean
}>`
	width: 100%;
	margin: 0 auto;
	padding: ${({ theme, padding = 'md' }) => {
		switch (padding) {
			case 'none':
				return '0'
			case 'sm':
				return theme.spacing.sm
			case 'lg':
				return theme.spacing.lg
			default:
				return theme.spacing.md
		}
	}};

	${({ maxWidth = 'xl' }) => {
		switch (maxWidth) {
			case 'sm':
				return css`
					max-width: 640px;
				`
			case 'md':
				return css`
					max-width: 768px;
				`
			case 'lg':
				return css`
					max-width: 1024px;
				`
			case 'xl':
				return css`
					max-width: 1280px;
				`
			case '2xl':
				return css`
					max-width: 1536px;
				`
			case 'full':
				return css`
					max-width: 100%;
				`
			default:
				return css`
					max-width: 1280px;
				`
		}
	}}

	${({ center }) =>
		center &&
		css`
			display: flex;
			align-items: center;
			justify-content: center;
			min-height: 100vh;
		`}
`

// Grid component
export const Grid = styled.div<{
	columns?: number | { mobile?: number; tablet?: number; desktop?: number }
	gap?: 'sm' | 'md' | 'lg' | 'xl'
	alignItems?: 'start' | 'center' | 'end' | 'stretch'
	justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around'
}>`
	display: grid;
	gap: ${({ theme, gap = 'md' }) => {
		switch (gap) {
			case 'sm':
				return theme.spacing.sm
			case 'lg':
				return theme.spacing.lg
			case 'xl':
				return theme.spacing.xl
			default:
				return theme.spacing.md
		}
	}};
	align-items: ${({ alignItems = 'stretch' }) => alignItems};
	justify-content: ${({ justifyContent = 'start' }) => justifyContent};

	${({ columns = 1 }) => {
		if (typeof columns === 'number') {
			return css`
				grid-template-columns: repeat(${columns}, 1fr);
			`
		} else {
			return css`
				grid-template-columns: repeat(${columns.mobile || 1}, 1fr);

				@media (min-width: 768px) {
					grid-template-columns: repeat(
						${columns.tablet || columns.mobile || 2},
						1fr
					);
				}

				@media (min-width: 1024px) {
					grid-template-columns: repeat(
						${columns.desktop || columns.tablet || columns.mobile || 3},
						1fr
					);
				}
			`
		}
	}}
`

// Flex component
export const Flex = styled.div<{
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
	wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
	alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
	justifyContent?:
		| 'start'
		| 'center'
		| 'end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
	gap?: 'sm' | 'md' | 'lg' | 'xl'
	fullWidth?: boolean
	fullHeight?: boolean
}>`
	display: flex;
	flex-direction: ${({ direction = 'row' }) => direction};
	flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
	align-items: ${({ alignItems = 'stretch' }) => alignItems};
	justify-content: ${({ justifyContent = 'start' }) => justifyContent};
	gap: ${({ theme, gap = 'md' }) => {
		switch (gap) {
			case 'sm':
				return theme.spacing.sm
			case 'lg':
				return theme.spacing.lg
			case 'xl':
				return theme.spacing.xl
			default:
				return theme.spacing.md
		}
	}};

	${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}

	${({ fullHeight }) =>
		fullHeight &&
		css`
			height: 100%;
		`}
`

// Stack component (vertical flex with consistent spacing)
export const Stack = styled.div<{
	spacing?: 'sm' | 'md' | 'lg' | 'xl'
	align?: 'start' | 'center' | 'end' | 'stretch'
}>`
	display: flex;
	flex-direction: column;
	align-items: ${({ align = 'stretch' }) => align};
	gap: ${({ theme, spacing = 'md' }) => {
		switch (spacing) {
			case 'sm':
				return theme.spacing.sm
			case 'lg':
				return theme.spacing.lg
			case 'xl':
				return theme.spacing.xl
			default:
				return theme.spacing.md
		}
	}};

	> * + * {
		margin-top: 0;
	}
`

// Spacer component
export const Spacer = styled.div<{
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
	axis?: 'horizontal' | 'vertical' | 'both'
}>`
	${({ theme, size = 'md', axis = 'vertical' }) => {
		const spacing = theme.spacing[size]

		switch (axis) {
			case 'horizontal':
				return css`
					width: ${spacing};
					height: 0;
				`
			case 'vertical':
				return css`
					height: ${spacing};
					width: 0;
				`
			case 'both':
				return css`
					width: ${spacing};
					height: ${spacing};
				`
			default:
				return css`
					height: ${spacing};
					width: 0;
				`
		}
	}}
`

// Section component
export const Section = styled.section<{
	padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
	background?: 'transparent' | 'light' | 'dark'
	fullHeight?: boolean
}>`
	padding: ${({ theme, padding = 'lg' }) => {
		switch (padding) {
			case 'none':
				return '0'
			case 'sm':
				return `${theme.spacing.sm} 0`
			case 'md':
				return `${theme.spacing.md} 0`
			case 'xl':
				return `${theme.spacing.xl} 0`
			default:
				return `${theme.spacing.lg} 0`
		}
	}};

	${({ background = 'transparent' }) => {
		switch (background) {
			case 'light':
				return css`
					background-color: ${({ theme }) => theme.colors.lightTan};
				`
			case 'dark':
				return css`
					background-color: ${({ theme }) => theme.colors.earthBrown};
					color: white;
				`
			default:
				return ''
		}
	}}

	${({ fullHeight }) =>
		fullHeight &&
		css`
			min-height: 100vh;
			display: flex;
			align-items: center;
		`}
`

// Card grid component
export const CardGrid = styled.div<{
	columns?: { mobile?: number; tablet?: number; desktop?: number }
	gap?: 'sm' | 'md' | 'lg' | 'xl'
	center?: boolean
}>`
	display: grid;
	gap: ${({ theme, gap = 'lg' }) => {
		switch (gap) {
			case 'sm':
				return theme.spacing.sm
			case 'md':
				return theme.spacing.md
			case 'xl':
				return theme.spacing.xl
			default:
				return theme.spacing.lg
		}
	}};
	grid-template-columns: repeat(${({ columns }) => columns?.mobile || 1}, 1fr);

	@media (min-width: 768px) {
		grid-template-columns: repeat(
			${({ columns }) => columns?.tablet || 2},
			1fr
		);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(
			${({ columns }) => columns?.desktop || 3},
			1fr
		);
	}

	${({ center }) =>
		center &&
		css`
			justify-items: center;
		`}
`

// Responsive wrapper
export const ResponsiveWrapper = styled.div<{
	hideOn?: 'mobile' | 'tablet' | 'desktop'
	showOn?: 'mobile' | 'tablet' | 'desktop'
}>`
	${({ hideOn }) => {
		switch (hideOn) {
			case 'mobile':
				return css`
					@media (max-width: 767px) {
						display: none;
					}
				`
			case 'tablet':
				return css`
					@media (min-width: 768px) and (max-width: 1023px) {
						display: none;
					}
				`
			case 'desktop':
				return css`
					@media (min-width: 1024px) {
						display: none;
					}
				`
			default:
				return ''
		}
	}}

	${({ showOn }) => {
		switch (showOn) {
			case 'mobile':
				return css`
					display: none;
					@media (max-width: 767px) {
						display: block;
					}
				`
			case 'tablet':
				return css`
					display: none;
					@media (min-width: 768px) and (max-width: 1023px) {
						display: block;
					}
				`
			case 'desktop':
				return css`
					display: none;
					@media (min-width: 1024px) {
						display: block;
					}
				`
			default:
				return ''
		}
	}}
`
