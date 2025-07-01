'use client';

import { useState } from 'react';
import { ButtonGroup } from 'primereact/buttongroup';
import { Button } from 'primereact/button';
import { TeamCard } from '@/components/ui/team-card';
import { teamData } from '@/lib/data';

const filterOptions = [
	{ label: 'All', value: '' },
	{ label: 'Instructors', value: 'instructor' },
	{ label: 'Admin', value: 'admin' },
	{ label: 'Board', value: 'board' },
];

export default function TeamPage() {
	const [selectedFilter, setSelectedFilter] = useState('');

	const filteredTeam = teamData.filter((member) => {
		if (!selectedFilter) return true;
		return member.type === selectedFilter;
	});

	return (
		<div className="flex flex-column gap-6 p-4">
			{/* Page Header */}
			<section className="text-center py-6">
				<h1 className="text-3xl font-bold text-primary-green mb-2">
					Our Team
				</h1>
				<p className="text-gray-600">
					Meet our dedicated team of wellness professionals and experts.
				</p>
			</section>

			{/* Filter Buttons */}
			<section className="max-w-6xl mx-auto w-full">
				<div className="flex justify-content-center mb-6">
					<ButtonGroup>
						{filterOptions.map((option) => (
							<Button
								key={option.value}
								label={option.label}
								className={`${
									selectedFilter === option.value
										? 'p-button-primary'
										: 'p-button-outlined'
								}`}
								onClick={() => setSelectedFilter(option.value)}
							/>
						))}
					</ButtonGroup>
				</div>
			</section>

			{/* Team Grid */}
			<section className="max-w-6xl mx-auto w-full">
				<h2 className="text-2xl font-semibold text-primary-green mb-4">
					{selectedFilter ? `${filterOptions.find(f => f.value === selectedFilter)?.label} Team` : 'All Team Members'} ({filteredTeam.length})
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredTeam.map((member) => (
						<TeamCard key={member.id} member={member} />
					))}
				</div>
				{filteredTeam.length === 0 && (
					<div className="text-center py-8">
						<p className="text-gray-500">No team members found in this category.</p>
					</div>
				)}
			</section>
		</div>
	);
} 