import Image from 'next/image'

export function SidebarHeader() {
	return (
		<div className="flex align-items-center gap-3 p-4">
			<Image
				src="/hl-f-icon2.png"
				alt="Hidden Lotus Logo"
				width={50}
				height={50}
				className="rounded-lg object-contain logo-glow-border"
				style={{ borderRadius: '12px' }}
			/>
			<span
				className="text-2xl font-bold text-primary-green tracking-wide bouncing-glow"
				style={{
					textShadow:
						'0 0 2px rgba(255, 255, 200, 0.2), 0 0 4px rgba(255, 255, 200, 0.1)',
					filter: 'drop-shadow(0 0 1px rgba(255, 255, 200, 0.15))',
				}}
			>
				Hidden Lotus
			</span>
		</div>
	)
}
