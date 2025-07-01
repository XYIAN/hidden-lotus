'use client';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Class } from '@/lib/data';

interface ClassCardProps {
	classData: Class;
	onBook?: (classId: string) => void;
}

export function ClassCard({ classData, onBook }: ClassCardProps) {
	const handleBook = () => {
		onBook?.(classData.id);
	};

	return (
		<Card className="h-full">
			<div className="flex flex-column gap-3">
				<div className="flex justify-content-between align-items-start">
					<div>
						<h3 className="text-xl font-semibold text-primary-green mb-2">
							{classData.name}
						</h3>
						<p className="text-sm text-secondary-brown mb-1">
							Instructor: {classData.instructor}
						</p>
						<p className="text-sm text-secondary-brown mb-2">
							{new Date(classData.date).toLocaleDateString()} at {classData.time}
						</p>
					</div>
					<span className="px-3 py-1 text-xs font-medium bg-light-tan text-secondary-brown rounded-full">
						{classData.category}
					</span>
				</div>
				<p className="text-sm text-gray-600 mb-3">{classData.description}</p>
				<Button
					label="Book Class"
					icon="pi pi-calendar-plus"
					className="p-button-sm"
					onClick={handleBook}
				/>
			</div>
		</Card>
	);
} 