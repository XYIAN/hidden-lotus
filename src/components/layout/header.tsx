'use client'

import { useState } from 'react'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import { Menu } from 'primereact/menu'
import Link from 'next/link'
import Image from 'next/image'
import { Flower2 } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { SidebarHeader } from './sidebar-header'
import '@/styles/header.css'
import { LotusMenuBar } from './lotus-menu-bar'

const navigationItems = [
	{ label: 'Home', href: '/' },
	{ label: 'Classes', href: '/classes' },
	{ label: 'Team', href: '/team' },
	{ label: 'About', href: '/about' },
	{ label: 'Story', href: '/story' },
	{ label: 'Contact', href: '/contact' },
	{ label: 'MOR', href: '/mor' },
]

export function Header() {
	const [sidebarVisible, setSidebarVisible] = useState(false)
	const pathname = usePathname()

	const isActive = (href: string) => {
		return pathname === href
	}

	const menuItems = navigationItems.map((item) => {
		// Define unique icons for each page
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

		return {
			label: item.label,
			icon: getIcon(item.href),
			command: () => {
				window.location.href = item.href
				setSidebarVisible(false)
			},
			className: pathname === item.href ? 'active-menu-item' : '',
		}
	})

	return (
		<>
			<header className="sticky top-0 z-50 w-full header-blur">
				{/* Desktop Navigation: Show LotusMenuBar on md+ screens */}
				<div className="hidden md:block w-full">
					<LotusMenuBar />
				</div>
				{/* Logo and Hamburger for Mobile (show on sm and below) */}
				<div className="flex justify-between items-center md:hidden w-full px-4 py-3">
					<Link href="/" className="flex items-center gap-3">
						<Image
							src="/icon-hl-1.png"
							alt="Hidden Lotus"
							width={50}
							height={50}
							className="rounded-lg object-contain"
							style={{ borderRadius: '12px' }}
							priority
						/>
						<span className="text-xl font-bold text-primary-green">
							Hidden Lotus
						</span>
					</Link>
					<Button
						icon="pi pi-heart"
						onClick={() => setSidebarVisible(true)}
						className="p-button-outlined border-primary-green text-primary-green hover:bg-primary-green hover:text-white ml-auto"
						style={{ zIndex: 60, visibility: 'visible', opacity: 1 }}
						aria-label="Open menu"
					/>
				</div>
			</header>

			{/* Mobile Sidebar */}
			<Sidebar
				visible={sidebarVisible}
				onHide={() => setSidebarVisible(false)}
				position="right"
				header={<SidebarHeader />}
				className="custom-sidebar"
				style={{ zIndex: 1000 }}
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
		</>
	)
}
