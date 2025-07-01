'use client';

import { useState } from 'react';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationItems = [
	{ label: 'Home', href: '/' },
	{ label: 'Classes', href: '/classes' },
	{ label: 'Team', href: '/team' },
	{ label: 'About', href: '/about' },
	{ label: 'Story', href: '/story' },
	{ label: 'Contact', href: '/contact' },
	{ label: 'MOR', href: '/mor' },
	{ label: 'Privacy', href: '/privacy' },
	{ label: 'Terms', href: '/terms' },
];

export function Header() {
	const [sidebarVisible, setSidebarVisible] = useState(false);
	const pathname = usePathname();

	const handleNavClick = () => {
		setSidebarVisible(false);
	};

	return (
		<>
			<header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
				<div className="flex justify-content-between align-items-center">
					<Link href="/" className="text-decoration-none">
						<h1 className="text-2xl font-bold text-primary-green m-0">
							🧘‍♀️ Hidden Lotus
						</h1>
					</Link>
					<Button
						icon="pi pi-bars"
						className="p-button-text p-button-rounded"
						onClick={() => setSidebarVisible(true)}
						aria-label="Menu"
					/>
				</div>
			</header>

			<Sidebar
				visible={sidebarVisible}
				position="right"
				onHide={() => setSidebarVisible(false)}
				className="w-20rem"
			>
				<div className="flex flex-column gap-2">
					<h2 className="text-xl font-semibold text-primary-green mb-3">
						Navigation
					</h2>
					{navigationItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`text-decoration-none p-3 border-round transition-colors ${
								pathname === item.href
									? 'bg-primary-green text-white'
									: 'text-gray-700 hover:bg-light-tan'
							}`}
							onClick={handleNavClick}
						>
							{item.label}
						</Link>
					))}
				</div>
			</Sidebar>
		</>
	);
} 