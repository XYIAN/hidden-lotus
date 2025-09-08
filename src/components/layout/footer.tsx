import Link from 'next/link'
import { Button } from 'primereact/button'

export function Footer() {
	return (
		<footer
			className="w-full py-4 px-4 text-center border-t border-sage-green-200/30 bg-light-tan/20 backdrop-blur-sm footer-shadow rounded-t-xl overflow-hidden"
			style={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
		>
			<div className="max-w-4xl mx-auto flex justify-center gap-3 flex-wrap">
				<Link href="/story">
					<Button label="Learn More" className="p-button-xs bg-sage-green-600 hover:bg-sage-green-700 border-sage-green-600" />
				</Link>
				<Link href="/privacy">
					<Button label="Privacy" className="p-button-xs bg-sage-green-600 hover:bg-sage-green-700 border-sage-green-600" />
				</Link>
				<Link href="/terms">
					<Button label="Terms" className="p-button-xs bg-sage-green-600 hover:bg-sage-green-700 border-sage-green-600" />
				</Link>
			</div>
		</footer>
	)
}
