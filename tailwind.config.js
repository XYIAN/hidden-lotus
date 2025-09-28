/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				tablet: '975px',
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				'sage-green': {
					DEFAULT: 'var(--sage-green)',
					200: 'var(--sage-green-200)',
					300: 'var(--sage-green-300)',
					400: 'var(--sage-green-400)',
					600: 'var(--sage-green-600)',
					700: 'var(--sage-green-700)',
				},
				'brown-gold': 'var(--brown-gold)',
				'pastel-pink': 'var(--pastel-pink)',
				'light-tan': 'var(--light-tan)',
				'primary-green': 'var(--primary-green)',
				'secondary-brown': 'var(--secondary-brown)',
				'earth-brown': 'var(--earth-brown)',
				'soft-sage': 'var(--soft-sage)',
				'olive-green': 'var(--olive-green)',
			},
			fontFamily: {
				sans: [
					'var(--font-inter)',
					'Inter',
					'Arial',
					'Helvetica',
					'sans-serif',
				],
				mono: ['var(--font-roboto-mono)', 'Roboto Mono', 'monospace'],
			},
		},
	},
	plugins: [],
}
