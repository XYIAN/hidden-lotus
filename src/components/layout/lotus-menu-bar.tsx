'use client'

import { Menubar } from 'primereact/menubar'
import { MenuItem } from 'primereact/menuitem'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import './lotus-menu-bar.css'
import type { MenuItem as PrimeMenuItem } from 'primereact/menuitem'

const infoItems = [
	{ label: 'Story', href: '/story' },
	{ label: 'About', href: '/about' },
	{ label: 'MOR', href: '/mor' },
	{ label: 'Team', href: '/team' },
	{ label: 'Contact', href: '/contact' },
	{ label: 'Privacy', href: '/privacy' },
	{ label: 'Terms', href: '/terms' },
]

const navigationGroups = [
	{ label: 'Home', href: '/' },
	{ label: 'Classes', href: '/classes' },
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
			case '/privacy':
				return 'pi pi-lock'
			case '/terms':
				return 'pi pi-file'
			default:
				return 'pi pi-home'
		}
	}

	const items: MenuItem[] = [
		{
			label: 'Info',
			icon: 'pi pi-info-circle',
			items: infoItems.map((item) => ({
				label: item.label,
				icon: getIcon(item.href),
				command: () => {
					window.location.href = item.href
				},
				className: pathname === item.href ? 'active-menu-item' : '',
				template: (menuItem: PrimeMenuItem, options: any) => (
					<a
						href="#"
						data-href={item.href}
						onClick={(e) => {
							e.preventDefault()
							window.location.href = item.href
						}}
						className={`p-menuitem-link ${
							pathname === item.href ? 'active-menu-item' : ''
						}`}
						style={{
							display: 'flex',
							alignItems: 'center',
							textDecoration: 'none',
						}}
					>
						<span className={getIcon(item.href)} />
						<span className="p-menuitem-text">{item.label}</span>
					</a>
				),
			})),
		},
		...navigationGroups.map((item) => ({
			label: item.label,
			icon: getIcon(item.href),
			command: () => {
				window.location.href = item.href
			},
			className: pathname === item.href ? 'active-menu-item' : '',
			template: (menuItem: PrimeMenuItem, options: any) => (
				<a
					href="#"
					data-href={item.href}
					onClick={(e) => {
						e.preventDefault()
						window.location.href = item.href
					}}
					className={`p-menuitem-link ${
						pathname === item.href ? 'active-menu-item' : ''
					}`}
					style={{
						display: 'flex',
						alignItems: 'center',
						textDecoration: 'none',
					}}
				>
					<span className={getIcon(item.href)} />
					<span className="p-menuitem-text">{item.label}</span>
				</a>
			),
		})),
	]

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
			className="lotus-menu-bar lotus-menu-bar-no-bg"
			pt={{
				root: { className: 'justify-end w-full' },
				menu: { className: 'justify-end w-full' },
			}}
		/>
	)
}
