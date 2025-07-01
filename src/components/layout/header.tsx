'use client'

import { useState } from 'react'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import Link from 'next/link'
import Image from 'next/image'
import { Flower2 } from 'lucide-react'
import { usePathname } from 'next/navigation'
import '@/styles/header.css'

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

	return (
		<>
			<header className="sticky top-0 z-50 w-full header-blur">
				<div className="flex justify-content-between align-items-center px-6 py-4 max-w-7xl mx-auto">
					{/* Logo */}
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
						<span className="text-xl font-bold text-primary-green">
							Hidden Lotus
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex gap-6">
						{navigationItems.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className={`text-earth-brown hover:text-primary-green transition-colors duration-200 px-3 py-2 rounded-lg ${
									pathname === item.href
										? 'bg-sage-green-600 text-white active-nav-item'
										: ''
								}`}
							>
								{item.label}
							</Link>
						))}
					</nav>

					{/* Mobile Menu Button */}
					<div
						className="md:hidden"
						style={{ zIndex: 60, position: 'relative' }}
					>
						<Button
							icon={<Flower2 className="text-primary-green" size={24} />}
							onClick={() => setSidebarVisible(true)}
							className="p-button-outlined border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
							style={{
								visibility: 'visible',
								opacity: 1,
								position: 'relative',
								zIndex: 60,
							}}
							aria-label="Open menu"
						/>
					</div>
				</div>
			</header>

			{/* Mobile Sidebar */}
			<Sidebar
				visible={sidebarVisible}
				onHide={() => setSidebarVisible(false)}
				position="right"
				header={
					<div className="flex align-items-center gap-3">
						<Image
							src="/icon-hl-1.png"
							alt="Hidden Lotus Logo"
							width={50}
							height={50}
							className="rounded-lg object-contain"
							style={{ borderRadius: '12px' }}
						/>
						<span className="text-2xl font-bold text-primary-green tracking-wide">
							Hidden Lotus
						</span>
					</div>
				}
				className="w-80 bg-[#2d1b0e] bg-gradient-to-br from-[#2d1b0e] via-[#3d2b1e] to-[#4a3a2e] backdrop-blur-lg border-l border-sage-green-200/20 shadow-xl"
				style={{ zIndex: 1000 }}
			>
				<div className="flex flex-column gap-4 p-6 mt-4">
					{navigationItems.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className={`text-light-tan text-lg font-medium px-4 py-3 rounded-xl transition-colors duration-200 ${
								pathname === item.href
									? 'bg-sage-green-600 text-white shadow-md ring-2 ring-primary-green active-nav-item'
									: 'hover:bg-sage-green-600/30 hover:text-white'
							}`}
							onClick={() => setSidebarVisible(false)}
						>
							{item.label}
						</Link>
					))}
				</div>
			</Sidebar>
		</>
	)
}
