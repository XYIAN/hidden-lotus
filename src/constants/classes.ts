import { Class } from '@/types'

export type { Class }

export const classesData: Class[] = [
	{
		id: '1',
		name: 'Essential Vinyasa Yoga',
		description:
			'Vinyasa-based style that emphasizes open-heartedness. This is an accessible practice that limits the amount of complex/rapid joint movements. Anybody that can sit and stand will be able to do most of this practice. Regular practice promotes joint health, circulation, and focus. Our journey through Motion enables an exploration of Openheartedness and we return Revived.',
		longDescription:
			'Vinyasa-based style that emphasizes open-heartedness. This is an accessible practice that limits the amount of complex/rapid joint movements. Anybody that can sit and stand will be able to do most of this practice. Regular practice promotes joint health, circulation, and focus. Our journey through Motion enables an exploration of Openheartedness and we return Revived.',
		instructor: 'Jaideep',
		dates: ['2024-01-15', '2024-01-22', '2024-01-29'],
		time: 'Morning Session',
		duration: '60 min',
		price: '$20, members no additional charge',
		categories: ['yoga'],
		level: 'beginner',
		maxParticipants: 20,
		equipment: ['Yoga mat', 'Blocks', 'Strap'],
		image: '/class/Classes Page HL Essential Yoga.jpg',
	},
	{
		id: '2',
		name: 'Gentle Yoga & Sound Bath',
		description:
			'A grounding and rejuvenating experience combining gentle yoga with the healing vibrations of sound. Guided through mindful Motion, each posture is designed to open and align your energy centers, inviting balance to the chakras. Flow at your own pace while cultivating an OpenHeart toward yourself and your practice. The class concludes in stillness where the deep resonance of the gong, the soothing tones of singing bowls, the calming rhythm of the ocean drum, and the fluid movement of the wave plate tool invite a full-body sense of Revival in mind, body, and spirit.',
		longDescription:
			'A grounding and rejuvenating experience combining gentle yoga with the healing vibrations of sound. Guided through mindful Motion, each posture is designed to open and align your energy centers, inviting balance to the chakras. Flow at your own pace while cultivating an OpenHeart toward yourself and your practice. The class concludes in stillness where the deep resonance of the gong, the soothing tones of singing bowls, the calming rhythm of the ocean drum, and the fluid movement of the wave plate tool invite a full-body sense of Revival in mind, body, and spirit.',
		instructor: 'Vuong',
		dates: ['2024-01-16', '2024-01-23', '2024-01-30'],
		time: 'Afternoon Session',
		duration: '60 min',
		price: '$25, members no additional charge',
		categories: ['yoga', 'sound-healing'],
		level: 'beginner',
		maxParticipants: 15,
		equipment: ['Yoga mat', 'Bolster', 'Blanket'],
		image: '/class/Classes Page Yoga Flow and Sound Bath.jpg',
	},
	{
		id: '3',
		name: 'Sound Bath',
		description:
			"An immersive sound journey designed to harmonize your body's energy and soothe your mind. As you rest comfortably, layers of healing frequencies wash over you, each resonating with specific chakras to invite release, clarity, and restoration. Rooted in the MOR pillars Motion, OpenHeart, and Revival, this class weaves together the powerful vibrations of the gong. The soundscape includes the crystalline tones of singing bowls, the gentle waves of the ocean drum, and the flowing resonance of the wave plate tool. These sounds guide you into deep relaxation and energetic alignment, leaving you grounded, open, and renewed.",
		longDescription:
			"An immersive sound journey designed to harmonize your body's energy and soothe your mind. As you rest comfortably, layers of healing frequencies wash over you, each resonating with specific chakras to invite release, clarity, and restoration. Rooted in the MOR pillars Motion, OpenHeart, and Revival, this class weaves together the powerful vibrations of the gong. The soundscape includes the crystalline tones of singing bowls, the gentle waves of the ocean drum, and the flowing resonance of the wave plate tool. These sounds guide you into deep relaxation and energetic alignment, leaving you grounded, open, and renewed.",
		instructor: 'Vuong',
		dates: ['2024-01-17', '2024-01-24', '2024-01-31'],
		time: 'Evening Session',
		duration: '60 min',
		price: '$25, members no additional charge',
		categories: ['sound-healing', 'meditation'],
		level: 'beginner',
		maxParticipants: 20,
		equipment: ['Yoga mat', 'Bolster', 'Blanket'],
		image: '/class/Classes Page Sound Bath.jpg',
	},
	{
		id: '4',
		name: "Sacred Men's Group",
		description:
			'Center yourself in a non-competitive space. Open-format session that can involve sound bowl techniques, somatic release, breathwork, live music, and discussion. Picture a tribal circle around a fire. Led by Rob Castle. https://www.shimaazee.com',
		longDescription:
			'Center yourself in a non-competitive space. Open-format session that can involve sound bowl techniques, somatic release, breathwork, live music, and discussion. Picture a tribal circle around a fire. Led by Rob Castle. https://www.shimaazee.com',
		instructor: 'Rob Castle',
		dates: ['2024-01-18', '2024-01-25', '2024-02-01'],
		time: 'Evening Session',
		duration: '60 min',
		price: 'Donation',
		categories: ['yoga', 'healing'],
		level: 'beginner',
		maxParticipants: 12,
		equipment: ['Yoga mat', 'Journal', 'Open heart'],
		image: "/class/Men's Group.jpg",
	},
]
