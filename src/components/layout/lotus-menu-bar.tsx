'use client'

import { Menubar } from 'primereact/menubar'
import { MenuItem } from 'primereact/menuitem'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import './lotus-menu-bar.css'
import type { MenuItem as PrimeMenuItem } from 'primereact/menuitem'

const infoItems = [
	{ label: 'Story', href: '/story', icon: 'pi pi-book' },
	{ label: 'About', href: '/about', icon: 'pi pi-info-circle' },
	{ label: 'MOR', href: '/mor', icon: 'pi pi-heart' },
	{ label: 'Team', href: '/team', icon: 'pi pi-users' },
	{ label: 'Contact', href: '/contact', icon: 'pi pi-envelope' },
	{ label: 'Privacy', href: '/privacy', icon: 'pi pi-lock' },
	{ label: 'Terms', href: '/terms', icon: 'pi pi-file' },
]

const navigationGroups = [
	{ label: 'Home', href: '/', icon: 'pi pi-home' },
	{ label: 'Classes', href: '/classes', icon: 'pi pi-calendar-plus' },
]

export function LotusMenuBar() {
	const pathname = usePathname()

	const items: MenuItem[] = [
		...navigationGroups.map((item) => ({
			label: item.label,
			icon: item.icon,
			command: () => {
				window.location.href = item.href
			},
			className: pathname === item.href ? 'active-menu-item' : '',
		})),
		{
			label: 'Info',
			icon: 'pi pi-info-circle',
			items: infoItems.map((item) => ({
				label: item.label,
				icon: item.icon,
				command: () => {
					window.location.href = item.href
				},
				className: pathname === item.href ? 'active-menu-item' : '',
			})),
		},
	]

	const start = (
		<Link href="/" className="flex items-center gap-3 no-underline">
			<Image
				src="/icon-hl-1.png"
				alt="Hidden Lotus"
				width={56}
				height={56}
				className="rounded-lg object-contain"
				style={{ borderRadius: '12px' }}
				priority
			/>
			<span className="text-3xl font-extrabold text-primary-green lotus-title-fancy whitespace-nowrap">
				Hidden Lotus
			</span>
		</Link>
	)

	return (
		<Menubar
			model={items}
			start={start}
			className="lotus-menu-bar lotus-menu-bar-no-bg"
			pt={{
				root: {
					className: 'justify-end w-full items-center py-2',
					style: { minHeight: '60px' },
				},
				menu: {
					className: 'justify-end w-full items-center',
					style: { minHeight: '60px' },
				},
			}}
		/>
	)
}
