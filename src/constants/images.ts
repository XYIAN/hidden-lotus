// Centralized image constants for easy management
export const IMAGES = {
	// Logo and branding images
	LOGO: '/hl-f-icon2.png',
	LOGO_ALT: '/icon-hl-1.png',

	// Icon variations for cards and components
	ICONS: {
		HL_1: '/icon-hl-1.png',
		HL_2: '/icon-hl-2.png',
		HL_3: '/icon-hl-3.png',
		HL_4: '/icon-hl-4.png',
		MOR_1: '/icon-mor-1.png',
		MOR_2: '/icon-mor-2.png',
		LEAF_1: '/icon-leaf-1.png',
		BG_1: '/icon-bg-1.png',
		HL_F_1: '/hl-f-icon1.jpg',
		HL_F_2: '/hl-f-icon2.png',
		HL_F_3: '/hl-f-icon3.jpg',
	},

	// Background images
	BACKGROUNDS: {
		MAIN: '/bg-main.png',
		MAIN_DARK: '/bg-main-dark.png',
		HL_1: '/bg-hl-1.png',
	},

	// Get a random icon for variety in cards
	getRandomIcon(): string {
		const iconKeys = Object.keys(this.ICONS)
		const randomKey = iconKeys[Math.floor(Math.random() * iconKeys.length)]
		return this.ICONS[randomKey as keyof typeof this.ICONS]
	},

	// Get icon by type for team members
	getIconByType(type: string): string {
		switch (type) {
			case 'instructor':
				return this.ICONS.HL_1
			case 'admin':
				return this.ICONS.HL_2
			case 'board':
				return this.ICONS.HL_3
			default:
				return this.ICONS.HL_1
		}
	},

	// Get icon by ID for stories
	getIconById(id: string): string {
		const iconMap: Record<string, string> = {
			'1': this.ICONS.HL_1,
			'2': this.ICONS.HL_2,
			'3': this.ICONS.HL_3,
			'4': this.ICONS.MOR_1,
			'5': this.ICONS.LEAF_1,
			'6': this.ICONS.HL_4,
			'7': this.ICONS.MOR_2,
			'8': this.ICONS.BG_1,
		}
		return iconMap[id] || this.ICONS.HL_1
	},
} as const
