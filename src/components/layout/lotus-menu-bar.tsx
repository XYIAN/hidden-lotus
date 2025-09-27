'use client'

import { Menubar } from 'primereact/menubar'
import { MenuItem } from 'primereact/menuitem'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import './lotus-menu-bar.css'
import { IMAGES } from '@/constants/images'

const infoItems = [
	{ label: 'Story', href: '/story', icon: 'pi pi-book' },
	{ label: 'About', href: '/about', icon: 'pi pi-info-circle' },
	// { label: 'MOR', href: '/mor', icon: 'pi pi-heart' }, // Commented out for future use
	{ label: 'Team', href: '/team', icon: 'pi pi-users' },
	// { label: 'Contact', href: '/contact', icon: 'pi pi-envelope' }, // Commented out for future use
	{ label: 'Privacy', href: '/privacy', icon: 'pi pi-lock' },
	{ label: 'Terms', href: '/terms', icon: 'pi pi-file' },
]

const navigationGroups = [
	{ label: 'Home', href: '/', icon: 'pi pi-home' },
	{ label: 'Classes', href: '/classes', icon: 'pi pi-calendar-plus' },
	{ label: 'Membership', href: '/membership', icon: 'pi pi-heart' },
]

export function LotusMenuBar() {
	const pathname = usePathname()
	const router = useRouter()

	const isActive = (href: string) => {
		if (href === '/') {
			return pathname === '/'
		}
		return pathname.startsWith(href)
	}

	const items: MenuItem[] = [
		...navigationGroups.map((item) => ({
			label: item.label,
			icon: item.icon,
			command: () => {
				router.push(item.href)
			},
			className: isActive(item.href) ? 'active-menu-item' : '',
		})),
		{
			label: 'Info',
			icon: 'pi pi-info-circle',
			items: infoItems.map((item) => ({
				label: item.label,
				icon: item.icon,
				command: () => {
					router.push(item.href)
				},
				className: isActive(item.href) ? 'active-menu-item' : '',
			})),
		},
	]

	const start = (
		<Link href="/" className="flex items-center gap-3 no-underline">
			<Image
				src={IMAGES.LOGO}
				alt="Hidden Lotus"
				width={56}
				height={56}
				className="rounded-lg object-contain"
				style={{ borderRadius: '12px' }}
				priority
			/>
			<span className="text-3xl font-extrabold text-primary-green lotus-title-fancy">
				Hidden Lotus
			</span>
		</Link>
	)

	return (
		<div className="w-full flex justify-content-center">
			<div className="w-full max-w-7xl px-4">
				<Menubar
					model={items}
					start={start}
					className="lotus-menu-bar lotus-menu-bar-no-bg"
					pt={{
						root: {
							className: 'w-full items-center py-3 px-4',
							style: { minHeight: '70px' },
						},
						menu: {
							className: 'w-full items-center justify-content-end',
							style: { minHeight: '70px' },
						},
						start: {
							className: 'flex align-items-center gap-3',
						},
					}}
				/>
			</div>
		</div>
	)
}
