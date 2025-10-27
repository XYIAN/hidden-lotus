'use client'

import { useState } from 'react'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import { Menu } from 'primereact/menu'
import type { MenuItem } from 'primereact/menuitem'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import '@/styles/header.css'
import { SidebarHeader } from './sidebar-header'
import { IMAGES } from '@/constants/images'

const navigationItems = [
	{ label: 'Home', href: '/' },
	{ label: 'Classes', href: '/classes' },
	{ label: 'Membership', href: '/membership' },
	{ label: 'Team', href: '/team' },
	{ label: 'About', href: '/about' },
	{ label: 'Story', href: '/story' },
	{ label: 'Contact', href: '/contact' },
	// { label: 'MOR', href: '/mor' }, // Commented out for future use
]

export function Header() {
	const [sidebarVisible, setSidebarVisible] = useState(false)
	const pathname = usePathname()
	const router = useRouter()

	const isActive = (href: string) => {
		if (href === '/') {
			return pathname === '/'
		}
		return pathname.startsWith(href)
	}

	const menuItems = navigationItems.map((item) => {
		// Define unique icons for each page
		const getIcon = (href: string) => {
			switch (href) {
				case '/':
					return 'pi pi-home'
				case '/classes':
					return 'pi pi-calendar-plus'
				case '/membership':
					return 'pi pi-heart'
				case '/team':
					return 'pi pi-users'
				case '/about':
					return 'pi pi-info-circle'
				case '/story':
					return 'pi pi-book'
				case '/contact':
					return 'pi pi-envelope'
				// case '/mor':
				//	return 'pi pi-star'
				default:
					return 'pi pi-home'
			}
		}

		return {
			label: item.label,
			icon: getIcon(item.href),
			command: () => {
				router.push(item.href)
				setSidebarVisible(false)
			},
			className: isActive(item.href) ? 'active-menu-item' : '',
			template: (item: MenuItem) => {
				return (
					<div className="flex align-items-center justify-content-center gap-3 p-3 cursor-pointer">
						<i className={`${item.icon} text-white text-xl`}></i>
						<span className="text-white font-medium">{item.label}</span>
					</div>
				)
			},
		}
	})

	return (
		<>
			{/* Single Header for all screen sizes */}
			<header className="sticky top-0 z-50 w-full header-blur">
				<div
					className="w-full py-3 px-4"
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						height: '80px',
						width: '100%',
					}}
				>
					{/* Logo and Title - Left side */}
					<Link
						href="/"
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '12px',
						}}
					>
						<Image
							src={IMAGES.LOGO}
							alt="Hidden Lotus"
							width={60}
							height={60}
							className="rounded-lg object-contain header-logo"
							priority
						/>
						<span className="text-xl font-bold text-primary-green">
							Hidden Lotus
						</span>
					</Link>

					{/* Hamburger Menu - Far right */}
					<Button
						onClick={() => setSidebarVisible(true)}
						outlined
						className="border-primary-green text-primary-green hover:bg-primary-green hover:text-pink"
						style={{
							padding: '0.5rem',
							width: '4rem',
							height: '4rem',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
						aria-label="Open menu"
					>
						<Image
							src="/Logo Files/Hidden Lotus MOR 01l BW Logo.svg"
							alt="Menu"
							width={48}
							height={48}
							className="object-contain"
						/>
					</Button>
				</div>
			</header>

			{/* Sidebar for all screen sizes */}
			<Sidebar
				visible={sidebarVisible}
				onHide={() => setSidebarVisible(false)}
				position="right"
				header={<SidebarHeader />}
				className="custom-sidebar"
				style={{ zIndex: 11000 }}
				closeIcon="pi pi-arrow-right"
			>
				<div className="flex flex-column h-full">
					<div className="flex-grow-1">
						<Menu model={menuItems} className="custom-sidebar-menu" />
					</div>
					<div className="p-4 text-center border-top-1 border-gray-600">
						<a
							href="https://www.linkedin.com/company/xyian"
							target="_blank"
							rel="noopener noreferrer"
							className="sidebar-footer-link"
						>
							Powered By XYIAN Software
						</a>
					</div>
				</div>
			</Sidebar>

			{/* Calendly badge widget begin */}
			<link
				href="https://assets.calendly.com/assets/external/widget.css"
				rel="stylesheet"
			/>
			<script
				src="https://assets.calendly.com/assets/external/widget.js"
				type="text/javascript"
				async
			></script>
			<script
				type="text/javascript"
				dangerouslySetInnerHTML={{
					__html: `window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/hiddenlotusjvn?background_color=ede8e0&text_color=5d4e37&primary_color=6b8e5a', text: 'Book Your Class Now!', color: '#6b8e5a', textColor: '#ffffff', branding: false }); }`,
				}}
			></script>
			{/* Calendly badge widget end */}
		</>
	)
}
