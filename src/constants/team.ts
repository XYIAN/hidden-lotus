import { TeamMember } from '@/types'

export type { TeamMember }

export const teamData: TeamMember[] = [
	{
		id: '1',
		name: 'Jaideep Patel',
		profession: 'Yoga Instructor & Co-Creator',
		credentials: '200 RYT, CorePower Yoga Huntington Beach',
		bio: 'Jaideep is a 200 RYT trained at Corepower Yoga in Huntington Beach California with over four years of teaching as a profession.',
		image: '/team/Team Page Jaideep.jpg',
		longBio:
			"Jaideep is a 200 RYT trained at Corepower Yoga in Huntington Beach California with over four years of teaching as a profession. He has earned a Bachelor's Degree in Business Economics from UC Riverside and an Associate's Degree in English from Orange Coast College. As a co-creator of Hidden Lotus he seeks to cultivate a welcoming, growth-focused space that enables individuality and deepens the vision of what yoga, group fitness, and community can be.\n\nYoga stuck with me for its ability to accomplish much at once. I appreciate the practice for its synthesis of physicality, art, science, and spirituality. The yoga process helps me interpret my experiences and feelings and it has improved my decision making. This clarity and authenticity is an essential element of my teaching and what I want my students to find for themselves. I have recovered from opioid addiction and built a new life from the bottom up. I am passionate about yoga, writing, and group fitness, and I believe a combination of these three is a path to a bright future.",
		type: 'instructor',
		classes: ['Essential Vinyasa Yoga', "Sacred Men's Group"],
		specialties: [
			'Vinyasa Flow',
			'Group Fitness',
			'Community Building',
			'Recovery Support',
		],
		experience:
			"4+ years teaching, Bachelor's in Business Economics from UC Riverside",
		education:
			"200 RYT CorePower Yoga, Bachelor's Degree in Business Economics UC Riverside, Associate's Degree in English Orange Coast College",
		contact: {
			email: 'jaideep@hiddenlotus.com',
			phone: '(555) 123-4567',
		},
	},
	{
		id: '2',
		name: 'Nicky Pham',
		profession: 'Community Advocate & Real Estate Broker',
		credentials: 'Affiliate Broker, Real Estate Broker since 2012',
		bio: 'Nicky is a passionate advocate of community, healing, and collective empowerment.',
		image: '/team/Team Page_Nicky.jpg',
		longBio:
			"Nicky Pham is a passionate advocate of community, healing, and collective empowerment, weaving her passion for spiritual wellness into the heart of her work. Guided by her mother's timeless wisdom—\"value people and use material things, not use people and value material things\"—Nicky has built a life centered on uplifting others and fostering connection. Her journey is one of bringing people together, creating spaces where healing, support, and growth can flourish as a shared endeavor.\n\nWith a heart for service, Nicky's mission is to cultivate a vibrant, healing community where everyone feels supported and empowered to thrive. She pours her energy into ensuring that individuals have access to the resources and care they need to navigate life's challenges, always striving to create lasting, positive change through unity and compassion.\n\nDrawing from her extensive background in real estate and financial services, Nicky serves as an Affiliate Broker at Professional Land Corporation and has been a trusted Real Estate Broker at ProSource Financial Group, Inc. since 2012. At ProSource Realty, she and her team are driven by a shared commitment to guide clients with integrity, offering a steady hand through the complexities of the real estate world. Her professional path reflects her deep dedication to building stronger, more connected communities, blending her expertise with a genuine desire to serve.\n\nNicky's work extends far beyond her career—she is a beacon of hope and togetherness, tirelessly giving her time, skills, and heart to those seeking healing and renewal. Her personal journey and professional endeavors are a powerful reflection of her belief in the transformative power of compassion, collaboration, and community. Through her efforts, Nicky inspires others to come together, lift one another up, and create a brighter, more connected future for all.",
		type: 'admin',
		classes: [],
		specialties: [
			'Community Building',
			'Real Estate',
			'Financial Services',
			'Collective Empowerment',
		],
		experience: '12+ years in real estate and financial services',
		education: 'Real Estate Broker License, Affiliate Broker Certification',
		contact: {
			email: 'nicky@hiddenlotus.com',
			phone: '(555) 234-5678',
		},
	},
	{
		id: '3',
		name: 'Vuong Nguyen',
		profession: 'Movement & Wellness Practitioner & Co-Founder',
		credentials:
			'200 RYT CorePower Yoga, Level 1 Sound Bath Certified, BA Dance CSU Sacramento',
		bio: 'Vuong is a queer Vietnamese American movement and wellness practitioner dedicated to creating inclusive spaces of healing.',
		image: '/team/Team Page_Vuong.jpg',
		longBio:
			"Vuong Nguyen is a queer Vietnamese American movement and wellness practitioner dedicated to creating inclusive spaces of healing, connection, and community. As the co founder of Hidden Lotus, Vuong helped shape a sanctuary rooted in Motion, Openheart, and Revival (MOR) offering yoga, sound healing, and community based practices for all.\n\nVuong holds a 200 hour yoga certification from the CorePower Yoga Teacher Training Program, where he also served as a coach and mentor to new teachers. He is Level 1 Sound Bath certified under master teacher Kyle Lam and guides deeply restorative sound journeys using crystal bowls, ocean drums, wave sound tool, and gongs.\n\nWith a Bachelor of Arts in Dance from California State University Sacramento, Vuong brings over a decade of professional movement experience to his teaching. He has toured internationally with the Lula Washington Dance Theatre, and his background in performance infuses his offerings with rhythm, intention, and embodied flow.\n\nVuong's practice is centered on authenticity, mindfulness, and collective healing. Through yoga, meditation, and sound, he invites others to return to their breath, their bodies, and the transformative power of community.",
		type: 'instructor',
		classes: ['Yoga Flow & Sound', 'Sound Bath'],
		specialties: ['Yoga', 'Sound Healing', 'Movement', 'Community Building'],
		experience:
			'10+ years professional movement, 200 RYT, Sound Bath Certified',
		education:
			'200 RYT CorePower Yoga, Level 1 Sound Bath Certification, BA Dance CSU Sacramento',
		contact: {
			email: 'vuong@hiddenlotus.com',
			phone: '(555) 345-6789',
		},
	},
]
