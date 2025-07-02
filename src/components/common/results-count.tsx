'use client'

interface ResultsCountProps {
	count: number
	total?: number
	className?: string
}

export function ResultsCount({
	count,
	total,
	className = '',
}: ResultsCountProps) {
	return (
		<div className={`mb-4 ${className}`}>
			<p className="text-sage-green-600">
				Showing {count} {total ? `of ${total}` : ''} results
			</p>
		</div>
	)
}
