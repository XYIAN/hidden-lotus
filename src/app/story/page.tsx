'use client';

import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { StoryCard } from '@/components/ui/story-card';
import { storiesData, Story } from '@/lib/data';

export default function StoryPage() {
	const [selectedStory, setSelectedStory] = useState<Story | null>(null);
	const [dialogVisible, setDialogVisible] = useState(false);

	const handleStoryClick = (story: Story) => {
		setSelectedStory(story);
		setDialogVisible(true);
	};

	const handleDialogClose = () => {
		setDialogVisible(false);
		setSelectedStory(null);
	};

	return (
		<div className="flex flex-column gap-6 p-4">
			{/* Page Header */}
			<section className="text-center py-6">
				<h1 className="text-3xl font-bold text-primary-green mb-2">
					Our Story
				</h1>
				<p className="text-gray-600">
					Discover the journey and transformation stories of Hidden Lotus.
				</p>
			</section>

			{/* Stories Grid */}
			<section className="max-w-4xl mx-auto w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{storiesData.map((story) => (
						<StoryCard
							key={story.id}
							story={story}
							onClick={handleStoryClick}
						/>
					))}
				</div>
			</section>

			{/* Story Dialog */}
			<Dialog
				visible={dialogVisible}
				onHide={handleDialogClose}
				header={selectedStory?.title}
				className="w-90vw md:w-50rem"
				footer={
					<div className="flex justify-content-end gap-2">
						<Button
							label="No"
							icon="pi pi-times"
							onClick={handleDialogClose}
							className="p-button-text"
						/>
						<Button
							label="Yes"
							icon="pi pi-check"
							onClick={handleDialogClose}
							autoFocus
						/>
					</div>
				}
			>
				<div className="p-4">
					<p className="text-lg">
						You clicked on <strong>{selectedStory?.title}</strong>
					</p>
					<p className="text-gray-600 mt-3">
						{selectedStory?.description}
					</p>
				</div>
			</Dialog>
		</div>
	);
} 