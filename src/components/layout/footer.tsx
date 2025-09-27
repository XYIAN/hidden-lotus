import Link from 'next/link'

export function Footer() {
	return (
		<footer className="w-full py-4 px-4 text-center border-t border-sage-green-200/30 bg-light-tan/20 backdrop-blur-sm">
			<div
				className="max-w-4xl mx-auto flex flex-column gap-2"
				style={{ alignItems: 'center' }}
			>
				<Link
					href="/story"
					className="text-earth-brown/80 hover:text-earth-brown transition-colors duration-200 text-sm font-medium"
				>
					Learn More
				</Link>
				<div
					className="flex gap-4 text-xs text-earth-brown/60"
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
					}}
				>
					<Link
						href="/privacy"
						className="hover:text-earth-brown/80 transition-colors duration-200"
					>
						Privacy
					</Link>
					<Link
						href="/terms"
						className="hover:text-earth-brown/80 transition-colors duration-200"
					>
						Terms
					</Link>
				</div>
			</div>
		</footer>
	)
}
