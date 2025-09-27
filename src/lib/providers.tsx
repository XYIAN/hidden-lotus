'use client'

import { PrimeReactProvider } from 'primereact/api'
import { ThemeProvider } from 'styled-components'
import { ReactNode } from 'react'
import { theme } from './theme'
import { GlobalStyle } from './styled-components'
import { AccessibilityProvider } from '@/components/common/AccessibilityProvider'

interface ProvidersProps {
	children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
	return (
		<AccessibilityProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<PrimeReactProvider
					value={{
						ripple: true,
						inputStyle: 'filled',
						zIndex: {
							modal: 1100,
							overlay: 1000,
							menu: 1000,
							tooltip: 1100,
							toast: 1200,
						},
					}}
				>
					{children}
				</PrimeReactProvider>
			</ThemeProvider>
		</AccessibilityProvider>
	)
}
