import { Class } from '@/types'

export type { Class }

export const classesData: Class[] = [
	{
		id: '1',
		name: 'Essential Vinyasa Yoga',
		description:
			'Vinyasa style that emphasizes open-heartedness and accessible practice.',
		longDescription:
			'Vinyasa style that emphasizes open-heartedness. This is an accessible practice that limits the amount of complex/rapid joint movements. Anybody that can sit and stand will be able to do most of this practice. Regular practice promotes joint health, circulation, and focus. Our journey through Motion enables an exploration of Openheartedness and we return Revived.',
		instructor: 'Jaideep',
		dates: ['2024-01-15', '2024-01-22', '2024-01-29'],
		time: '07:00 AM',
		duration: '75 minutes',
		price: 'Donation Based',
		categories: ['yoga'],
		level: 'beginner',
		maxParticipants: 20,
		equipment: ['Yoga mat', 'Blocks', 'Strap'],
		image: '/team/jaideep.png',
	},
	{
		id: '2',
		name: 'Yoga Flow & Sound',
		description:
			'A grounding and rejuvenating experience combining gentle yoga with healing vibrations.',
		longDescription:
			'A grounding and rejuvenating experience combining gentle yoga with the healing vibrations of sound. Guided through mindful Motion, each posture is designed to open and align your energy centers, inviting balance to the chakras. Flow at your own pace while cultivating an OpenHeart toward yourself and your practice. The class concludes in stillness where the deep resonance of the gong, the soothing tones of singing bowls, the calming rhythm of the ocean drum, and the fluid movement of the wave plate tool invite a full-body sense of Revival in mind, body, and spirit.',
		instructor: 'Vuong',
		dates: ['2024-01-16', '2024-01-23', '2024-01-30'],
		time: '02:00 PM',
		duration: '90 minutes',
		price: 'Donation Based',
		categories: ['yoga', 'sound-healing'],
		level: 'beginner',
		maxParticipants: 15,
		equipment: ['Yoga mat', 'Bolster', 'Blanket'],
		image: '/team/vuong.png',
	},
	{
		id: '3',
		name: 'Sound Bath',
		description:
			"An immersive sound journey designed to harmonize your body's energy and soothe your mind.",
		longDescription:
			"An immersive sound journey designed to harmonize your body's energy and soothe your mind. As you rest comfortably, layers of healing frequencies wash over you, each resonating with specific chakras to invite release, clarity, and restoration. Rooted in the MOR pillars Motion, OpenHeart, and Revival, this class weaves together the powerful vibrations of the gong, the crystalline tones of singing bowls, the gentle waves of the ocean drum, and the flowing resonance of the wave plate tool. These sounds guide you into deep relaxation and energetic alignment, leaving you grounded, open, and renewed.",
		instructor: 'Vuong',
		dates: ['2024-01-17', '2024-01-24', '2024-01-31'],
		time: '06:30 PM',
		duration: '75 minutes',
		price: 'Donation Based',
		categories: ['sound-healing', 'meditation'],
		level: 'beginner',
		maxParticipants: 20,
		equipment: ['Yoga mat', 'Bolster', 'Blanket'],
		image: '/team/vuong.png',
	},
	{
		id: '4',
		name: "Sacred Men's Group",
		description:
			'A supportive space for men to explore wellness, vulnerability, and authentic connection.',
		longDescription:
			'A transformative space where men gather to explore wellness, vulnerability, and authentic connection. Rooted in the MOR philosophy, this group combines movement, meditation, and open-hearted discussion to create a safe environment for men to heal, grow, and support one another. Through guided practices and shared experiences, participants discover the power of authentic expression and collective healing. This sacred circle invites men to embrace their full humanity while building meaningful connections and developing tools for emotional wellness and personal growth.',
		instructor: 'Jaideep',
		dates: ['2024-01-18', '2024-01-25', '2024-02-01'],
		time: '07:00 PM',
		duration: '90 minutes',
		price: 'Donation Based',
		categories: ['yoga', 'healing'],
		level: 'beginner',
		maxParticipants: 12,
		equipment: ['Yoga mat', 'Journal', 'Open heart'],
		image: '/team/jaideep.png',
	},
]
