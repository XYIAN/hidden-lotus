'use client';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Story } from '@/lib/data';

interface StoryCardProps {
	story: Story;
	onClick: (story: Story) => void;
}

export function StoryCard({ story, onClick }: StoryCardProps) {
	const handleClick = () => {
		onClick(story);
	};

	return (
		<Card className="h-full">
			<div className="flex flex-column gap-3">
				<h3 className="text-xl font-semibold text-primary-green mb-2">
					{story.title}
				</h3>
				<p className="text-sm text-gray-600 mb-3 flex-grow-1">
					{story.description}
				</p>
				<Button
					label="Read More"
					icon="pi pi-book"
					className="p-button-sm"
					onClick={handleClick}
				/>
			</div>
		</Card>
	);
} 