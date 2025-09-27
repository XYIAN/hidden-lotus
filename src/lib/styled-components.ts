// Styled-components configuration and utilities
import { createGlobalStyle, css } from 'styled-components'
import { Theme } from './theme'

// Extend styled-components DefaultTheme
declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	export interface DefaultTheme extends Theme {}
}

// Global styles for styled-components
export const GlobalStyle = createGlobalStyle`
  /* CSS Reset and base styles */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
    background: linear-gradient(135deg, ${({ theme }) =>
			theme.colors.lightTan} 0%, #f1e6cd 100%);
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.colors.foreground};
    overflow-x: hidden;
  }

  /* Image optimization */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }

  /* Form elements */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Typography */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  /* Focus styles */
  *:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primaryGreen};
    outline-offset: 2px;
  }

  /* Remove default button styles */
  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  /* Remove default link styles */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Remove default form styles */
  input,
  textarea {
    border: none;
    outline: none;
  }

  /* Remove default table styles */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightTan};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.sageGreen};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.sageGreen600};
  }
`

// Common styled-component utilities
export const commonStyles = {
	// Flexbox utilities
	flexCenter: css`
		display: flex;
		align-items: center;
		justify-content: center;
	`,

	flexBetween: css`
		display: flex;
		align-items: center;
		justify-content: space-between;
	`,

	flexColumn: css`
		display: flex;
		flex-direction: column;
	`,

	// Card styles
	cardBase: css<{ theme: Theme }>`
		background: linear-gradient(
			135deg,
			${({ theme }) => theme.colors.lightTan} 0%,
			#f0ede4 100%
		);
		border: 1px solid ${({ theme }) => theme.colors.softSage};
		border-radius: ${({ theme }) => theme.borderRadius.xl};
		transition: all ${({ theme }) => theme.transitions.normal};
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		text-align: center;
		min-height: 0;

		&:hover {
			transform: translateY(-2px);
			box-shadow: ${({ theme }) => theme.shadows.lg};
		}
	`,

	// Button styles
	buttonBase: css<{ theme: Theme }>`
		background-color: ${({ theme }) => theme.colors.sageGreen600};
		border: 1px solid ${({ theme }) => theme.colors.sageGreen600};
		color: white;
		padding: ${({ theme }) => theme.spacing.sm}
			${({ theme }) => theme.spacing.lg};
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
	`,

	// Input styles
	inputBase: css<{ theme: Theme }>`
		width: 100%;
		padding: ${({ theme }) => theme.spacing.sm}
			${({ theme }) => theme.spacing.md};
		border: 1px solid ${({ theme }) => theme.colors.sageGreen200};
		border-radius: ${({ theme }) => theme.borderRadius.md};
		background-color: white;
		color: ${({ theme }) => theme.colors.foreground};
		font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(', ')};
		transition: border-color ${({ theme }) => theme.transitions.normal};

		&:focus {
			outline: none;
			border-color: ${({ theme }) => theme.colors.primaryGreen};
			box-shadow: 0 0 0 3px rgba(74, 124, 89, 0.1);
		}
	`,

	// Animation utilities
	fadeIn: css`
		animation: fadeIn 0.3s ease-in-out;
	`,

	slideUp: css`
		animation: slideUp 0.3s ease-out;
	`,

	// Responsive utilities
	mobile: css`
		@media (max-width: 767px) {
			/* Mobile styles */
		}
	`,

	tablet: css`
		@media (min-width: 768px) and (max-width: 1023px) {
			/* Tablet styles */
		}
	`,

	desktop: css`
		@media (min-width: 1024px) {
			/* Desktop styles */
		}
	`,
}

// Keyframe animations
export const keyframes = {
	fadeIn: css`
		@keyframes fadeIn {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
	`,

	slideUp: css`
		@keyframes slideUp {
			from {
				opacity: 0;
				transform: translateY(20px);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}
	`,

	slideDown: css`
		@keyframes slideDown {
			from {
				opacity: 0;
				transform: translateY(-20px);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}
	`,

	scaleIn: css`
		@keyframes scaleIn {
			from {
				opacity: 0;
				transform: scale(0.9);
			}
			to {
				opacity: 1;
				transform: scale(1);
			}
		}
	`,
}
