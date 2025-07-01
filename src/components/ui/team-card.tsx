'use client';

import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import { TeamMember } from '@/lib/data';

interface TeamCardProps {
	member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
	return (
		<Card className="h-full">
			<div className="flex flex-column gap-3">
				<div className="flex align-items-center gap-3">
					<Avatar
						label={member.name.split(' ').map(n => n[0]).join('')}
						size="large"
						className="bg-primary-green text-white"
					/>
					<div>
						<h3 className="text-xl font-semibold text-primary-green mb-1">
							{member.name}
						</h3>
						<p className="text-sm font-medium text-secondary-brown mb-1">
							{member.profession}
						</p>
						<p className="text-xs text-gray-500">{member.credentials}</p>
					</div>
				</div>
				<p className="text-sm text-gray-600">{member.bio}</p>
				<span className="px-3 py-1 text-xs font-medium bg-light-tan text-secondary-brown rounded-full self-start">
					{member.type}
				</span>
			</div>
		</Card>
	);
} 