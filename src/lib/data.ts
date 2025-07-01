export interface Class {
	id: string;
	name: string;
	description: string;
	instructor: string;
	date: string;
	time: string;
	category: 'yoga' | 'reiki' | 'seminar' | 'cupping';
	image?: string;
}

export interface TeamMember {
	id: string;
	name: string;
	profession: string;
	credentials: string;
	bio: string;
	type: 'instructor' | 'admin' | 'board';
	image?: string;
}

export interface Story {
	id: string;
	title: string;
	image?: string;
	buttonUrl: string;
	description: string;
}

export const classesData: Class[] = [
	{
		id: '1',
		name: 'Morning Vinyasa Flow',
		description: 'Start your day with an energizing vinyasa flow that connects breath with movement.',
		instructor: 'Jaideep Singh',
		date: '2024-01-15',
		time: '07:00 AM',
		category: 'yoga',
	},
	{
		id: '2',
		name: 'Reiki Healing Session',
		description: 'Experience deep relaxation and energy healing through traditional Reiki techniques.',
		instructor: 'Sarah Chen',
		date: '2024-01-15',
		time: '10:00 AM',
		category: 'reiki',
	},
	{
		id: '3',
		name: 'Mindfulness Workshop',
		description: 'Learn practical mindfulness techniques for daily stress management and inner peace.',
		instructor: 'Dr. Michael Rodriguez',
		date: '2024-01-16',
		time: '02:00 PM',
		category: 'seminar',
	},
	{
		id: '4',
		name: 'Cupping Therapy',
		description: 'Traditional cupping therapy for muscle tension relief and improved circulation.',
		instructor: 'Lisa Thompson',
		date: '2024-01-16',
		time: '04:00 PM',
		category: 'cupping',
	},
	{
		id: '5',
		name: 'Evening Restorative Yoga',
		description: 'Gentle restorative poses to unwind and prepare for restful sleep.',
		instructor: 'Jaideep Singh',
		date: '2024-01-17',
		time: '07:30 PM',
		category: 'yoga',
	},
	{
		id: '6',
		name: 'Energy Clearing Session',
		description: 'Clear negative energy and restore your natural energy flow.',
		instructor: 'Sarah Chen',
		date: '2024-01-18',
		time: '11:00 AM',
		category: 'reiki',
	},
	{
		id: '7',
		name: 'Stress Management Seminar',
		description: 'Comprehensive approach to managing stress in modern life.',
		instructor: 'Dr. Michael Rodriguez',
		date: '2024-01-19',
		time: '01:00 PM',
		category: 'seminar',
	},
	{
		id: '8',
		name: 'Deep Tissue Cupping',
		description: 'Intensive cupping therapy for chronic pain and deep muscle tension.',
		instructor: 'Lisa Thompson',
		date: '2024-01-20',
		time: '03:00 PM',
		category: 'cupping',
	},
];

export const teamData: TeamMember[] = [
	{
		id: '1',
		name: 'Jaideep Singh',
		profession: 'Yoga Instructor',
		credentials: 'RYT-500, Ayurvedic Wellness Counselor',
		bio: 'Jaideep brings over 15 years of experience in yoga and meditation, specializing in vinyasa flow and mindfulness practices.',
		type: 'instructor',
	},
	{
		id: '2',
		name: 'Sarah Chen',
		profession: 'Reiki Master',
		credentials: 'Reiki Master Teacher, Energy Healer',
		bio: 'Sarah is a certified Reiki master with expertise in energy healing and spiritual wellness.',
		type: 'instructor',
	},
	{
		id: '3',
		name: 'Dr. Michael Rodriguez',
		profession: 'Wellness Director',
		credentials: 'PhD in Psychology, Licensed Therapist',
		bio: 'Dr. Rodriguez leads our wellness programs and provides expert guidance on mental health and stress management.',
		type: 'admin',
	},
	{
		id: '4',
		name: 'Lisa Thompson',
		profession: 'Therapeutic Specialist',
		credentials: 'Licensed Massage Therapist, Cupping Specialist',
		bio: 'Lisa specializes in therapeutic bodywork and traditional healing modalities.',
		type: 'instructor',
	},
	{
		id: '5',
		name: 'Kyle Johnson',
		profession: 'Technology Director',
		credentials: 'Full-Stack Developer, Digital Wellness Advocate',
		bio: 'Kyle oversees our digital platforms and ensures technology enhances rather than hinders wellness.',
		type: 'board',
	},
	{
		id: '6',
		name: 'Maria Garcia',
		profession: 'Operations Manager',
		credentials: 'MBA, Wellness Industry Expert',
		bio: 'Maria manages day-to-day operations and ensures smooth delivery of all wellness services.',
		type: 'admin',
	},
];

export const storiesData: Story[] = [
	{
		id: '1',
		title: 'The Journey Begins',
		description: 'How Hidden Lotus was born from a simple desire to create authentic wellness experiences.',
		buttonUrl: '/story/journey',
	},
	{
		id: '2',
		title: 'Community Transformation',
		description: 'Real stories from our community members who found healing and transformation.',
		buttonUrl: '/story/community',
	},
	{
		id: '3',
		title: 'The Teachers Path',
		description: 'Meet our instructors and learn about their personal wellness journeys.',
		buttonUrl: '/story/teachers',
	},
	{
		id: '4',
		title: 'Wellness Innovation',
		description: 'How we blend traditional wisdom with modern approaches to wellness.',
		buttonUrl: '/story/innovation',
	},
]; 