'use client'

import { Menubar } from 'primereact/menubar'
import { MenuItem } from 'primereact/menuitem'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const navigationItems = [
	{ label: 'Home', href: '/' },
	{ label: 'Classes', href: '/classes' },
	{ label: 'Team', href: '/team' },
	{ label: 'About', href: '/about' },
	{ label: 'Story', href: '/story' },
	{ label: 'Contact', href: '/contact' },
	{ label: 'MOR', href: '/mor' },
]

export function LotusMenuBar() {
	const pathname = usePathname()

	const getIcon = (href: string) => {
		switch (href) {
			case '/':
				return 'pi pi-home'
			case '/classes':
				return 'pi pi-calendar-plus'
			case '/team':
				return 'pi pi-users'
			case '/about':
				return 'pi pi-info-circle'
			case '/story':
				return 'pi pi-book'
			case '/contact':
				return 'pi pi-envelope'
			case '/mor':
				return 'pi pi-heart'
			default:
				return 'pi pi-home'
		}
	}

	const items: MenuItem[] = navigationItems.map((item) => ({
		label: item.label,
		icon: getIcon(item.href),
		command: () => {
			window.location.href = item.href
		},
		className: pathname === item.href ? 'active-menu-item' : '',
	}))

	const start = (
		<Link href="/" className="flex align-items-center gap-3">
			<Image
				src="/icon-hl-1.png"
				alt="Hidden Lotus"
				width={50}
				height={50}
				className="rounded-lg object-contain"
				style={{ borderRadius: '12px' }}
				priority
			/>
			<span className="text-xl font-bold text-primary-green">Hidden Lotus</span>
		</Link>
	)

	return (
		<Menubar
			model={items}
			start={start}
			className="lotus-menu-bar"
			style={{
				background: 'rgba(237, 232, 224, 0.9)',
				backdropFilter: 'blur(10px)',
				border: '1px solid rgba(107, 142, 90, 0.2)',
				borderRadius: '16px',
				margin: '0.5rem',
			}}
		/>
	)
}
