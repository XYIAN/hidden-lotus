'use client'

import { Toolbar } from 'primereact/toolbar'
import { Button } from 'primereact/button'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const navigationItems = [
	{ label: 'Home', href: '/', icon: 'pi pi-home' },
	{ label: 'Classes', href: '/classes', icon: 'pi pi-calendar-plus' },
	{ label: 'Team', href: '/team', icon: 'pi pi-users' },
	{ label: 'About', href: '/about', icon: 'pi pi-info-circle' },
	{ label: 'Story', href: '/story', icon: 'pi pi-book' },
	{ label: 'Contact', href: '/contact', icon: 'pi pi-envelope' },
	{ label: 'MOR', href: '/mor', icon: 'pi pi-heart' },
]

export function LotusToolbar() {
	const pathname = usePathname()
	const router = useRouter()

	const isActive = (href: string) => {
		if (href === '/') {
			return pathname === '/'
		}
		return pathname.startsWith(href)
	}

	const startContent = (
		<Link href="/" className="flex align-items-center gap-3">
			<Image
				src="/hl-f-icon2.png"
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

	const centerContent = (
		<div className="flex flex-wrap align-items-center gap-3">
			{navigationItems.map((item) => (
				<Button
					key={item.href}
					icon={item.icon}
					label={item.label}
					onClick={() => {
						router.push(item.href)
					}}
					className={`p-button-text ${
						isActive(item.href)
							? 'bg-sage-green-600 text-white active-nav-item'
							: 'text-earth-brown hover:text-primary-green'
					} transition-all transition-duration-200`}
					style={{
						borderRadius: '12px',
						padding: '0.5rem 1rem',
					}}
				/>
			))}
		</div>
	)

	const endContent = (
		<div className="flex align-items-center gap-2">
			<Button
				icon="pi pi-heart"
				className="p-button-outlined border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
				aria-label="Contact Support"
				onClick={() => {
					router.push('/contact')
				}}
			/>
		</div>
	)

	return (
		<Toolbar
			start={startContent}
			center={centerContent}
			end={endContent}
			className="lotus-toolbar"
			style={{
				background: 'rgba(237, 232, 224, 0.9)',
				backdropFilter: 'blur(10px)',
				border: '1px solid rgba(107, 142, 90, 0.2)',
				borderRadius: '16px',
				margin: '0.5rem',
				padding: '0.75rem 1rem',
			}}
		/>
	)
}
