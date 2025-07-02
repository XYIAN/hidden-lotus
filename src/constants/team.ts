import { TeamMember } from '@/types'

export type { TeamMember }

export const teamData: TeamMember[] = [
	{
		id: '1',
		name: 'Jaideep Pa',
		profession: 'Yoga Instructor & Wellness Coach',
		credentials: 'RYT-500, Ayurvedic Wellness Counselor, Mindfulness Teacher',
		bio: 'Jaideep brings over 15 years of experience in yoga and meditation, specializing in vinyasa flow and mindfulness practices.',
		image: '/icon-hl-1.png',
		longBio:
			'Jaideep Pa is a dedicated yoga instructor and wellness coach with over 15 years of experience in the field of holistic health. His journey began in India, where he studied under renowned yoga masters and learned the ancient wisdom of Ayurveda. Jaideep specializes in vinyasa flow, mindfulness meditation, and stress management techniques. He believes in making yoga accessible to everyone, regardless of their experience level or physical limitations. Through his classes and coaching sessions, Jaideep helps students develop a deeper connection with their bodies, minds, and spirits, guiding them toward greater self-awareness and inner peace.',
		type: 'instructor',
		classes: [
			'Morning Vinyasa Flow',
			'Evening Restorative Yoga',
			'Wellness Podcast Session',
		],
		specialties: [
			'Vinyasa Flow',
			'Mindfulness Meditation',
			'Stress Management',
			'Ayurvedic Wellness',
		],
		experience: '15+ years in yoga instruction and wellness coaching',
		education:
			'RYT-500 Certification, Ayurvedic Wellness Counselor Certification, Mindfulness Teacher Training',
		contact: {
			email: 'jaideep@hiddenlotus.com',
			phone: '(555) 123-4567',
			website: 'www.jaideepwellness.com',
		},
	},
	{
		id: '2',
		name: 'Sarah Chen',
		profession: 'Reiki Master & Energy Healer',
		credentials:
			'Reiki Master Teacher, Crystal Healing Practitioner, Energy Medicine Specialist',
		bio: 'Sarah is a certified Reiki master with expertise in energy healing and spiritual wellness.',
		image: '/icon-hl-2.png',
		longBio:
			'Sarah Chen is a gifted energy healer and Reiki master with a deep understanding of the subtle energy systems of the body. Her journey into energy healing began after experiencing the profound healing effects of Reiki during a difficult period in her life. Since then, she has dedicated herself to helping others find balance and healing through various energy medicine modalities. Sarah combines traditional Reiki techniques with crystal healing, chakra balancing, and intuitive energy work to create personalized healing sessions for each client. Her gentle, compassionate approach helps clients feel safe and supported as they work through emotional blockages and physical imbalances.',
		type: 'instructor',
		classes: ['Reiki Healing Session', 'Energy Clearing Session'],
		specialties: [
			'Reiki Healing',
			'Crystal Therapy',
			'Chakra Balancing',
			'Energy Clearing',
		],
		experience: '8+ years in energy healing and spiritual wellness',
		education:
			'Reiki Master Teacher Certification, Crystal Healing Practitioner Certification, Energy Medicine Training',
		contact: {
			email: 'sarah@hiddenlotus.com',
			phone: '(555) 234-5678',
			website: 'www.sarahchenhealing.com',
		},
	},
	{
		id: '3',
		name: 'Dr. Michael Rodriguez',
		profession: 'Wellness Director & Clinical Psychologist',
		credentials:
			'PhD in Psychology, Licensed Clinical Psychologist, Certified Wellness Coach',
		bio: 'Dr. Rodriguez leads our wellness programs and provides expert guidance on mental health and stress management.',
		image: '/icon-hl-3.png',
		longBio:
			'Dr. Michael Rodriguez is a licensed clinical psychologist and wellness director with over 20 years of experience in mental health and wellness. He holds a PhD in Psychology and has specialized training in cognitive behavioral therapy, mindfulness-based stress reduction, and positive psychology. Dr. Rodriguez believes in a holistic approach to mental health that addresses the mind, body, and spirit. He has helped countless individuals overcome anxiety, depression, and stress-related issues through evidence-based therapeutic techniques combined with mindfulness and wellness practices. As our Wellness Director, he oversees all wellness programs and ensures that our services meet the highest standards of care and effectiveness.',
		type: 'admin',
		classes: ['Mindfulness Workshop', 'Stress Management Seminar'],
		specialties: [
			'Cognitive Behavioral Therapy',
			'Mindfulness-Based Stress Reduction',
			'Positive Psychology',
			'Wellness Coaching',
		],
		experience: '20+ years in clinical psychology and wellness',
		education:
			'PhD in Psychology, Licensed Clinical Psychologist, Certified Wellness Coach',
		contact: {
			email: 'michael@hiddenlotus.com',
			phone: '(555) 345-6789',
		},
	},
	{
		id: '4',
		name: 'Lisa Thompson',
		profession: 'Therapeutic Specialist & Bodywork Practitioner',
		credentials:
			'Licensed Massage Therapist, Cupping Specialist, Myofascial Release Therapist',
		bio: 'Lisa specializes in therapeutic bodywork and traditional healing modalities.',
		image: '/icon-hl-4.png',
		longBio:
			'Lisa Thompson is a skilled therapeutic specialist with expertise in various bodywork modalities and traditional healing techniques. Her passion for helping others heal through touch began after experiencing the transformative effects of therapeutic massage during her own recovery from a sports injury. Lisa combines traditional cupping therapy with modern myofascial release techniques, deep tissue massage, and energy work to provide comprehensive healing sessions. She has a particular interest in helping athletes, individuals with chronic pain, and those recovering from injuries. Her gentle yet effective approach helps clients release tension, improve circulation, and restore their natural healing abilities.',
		type: 'instructor',
		classes: ['Cupping Therapy', 'Deep Tissue Cupping'],
		specialties: [
			'Cupping Therapy',
			'Deep Tissue Massage',
			'Myofascial Release',
			'Sports Therapy',
		],
		experience: '12+ years in therapeutic bodywork and healing',
		education:
			'Licensed Massage Therapist, Cupping Therapy Certification, Myofascial Release Training',
		contact: {
			email: 'lisa@hiddenlotus.com',
			phone: '(555) 456-7890',
		},
	},
	{
		id: '5',
		name: 'Kyle Johnson',
		profession: 'Technology Director & Digital Wellness Advocate',
		credentials:
			'Full-Stack Developer, Digital Wellness Specialist, Mindfulness Technology Expert',
		bio: 'Kyle oversees our digital platforms and ensures technology enhances rather than hinders wellness.',
		image: '/icon-mor-1.png',
		longBio:
			"Kyle Johnson is a technology director and digital wellness advocate who believes in harnessing the power of technology to support rather than hinder our wellness journey. With over 10 years of experience in software development and a deep interest in mindfulness and wellness, Kyle has dedicated himself to creating digital solutions that promote mental health and well-being. He oversees all our digital platforms, ensuring they provide seamless, user-friendly experiences that support our community's wellness goals. Kyle is passionate about digital wellness and helps clients develop healthy relationships with technology through mindful usage practices and digital detox strategies.",
		type: 'board',
		classes: [],
		specialties: [
			'Digital Wellness',
			'Mindfulness Technology',
			'Software Development',
			'Digital Detox',
		],
		experience: '10+ years in technology and digital wellness',
		education:
			'Computer Science Degree, Digital Wellness Certification, Mindfulness Technology Training',
		contact: {
			email: 'kyle@hiddenlotus.com',
			phone: '(555) 567-8901',
		},
	},
	{
		id: '6',
		name: 'Emma Wilson',
		profession: 'Nutritionist & Holistic Health Coach',
		credentials:
			'Registered Dietitian, Holistic Nutrition Certification, Wellness Coach',
		bio: 'Emma helps clients achieve optimal health through personalized nutrition and lifestyle guidance.',
		image: '/icon-mor-2.png',
		longBio:
			"Emma Wilson is a registered dietitian and holistic health coach who believes that true wellness comes from nourishing the body, mind, and spirit. With over 8 years of experience in nutrition and wellness, Emma has helped countless clients transform their health through personalized nutrition plans and lifestyle modifications. She specializes in plant-based nutrition, gut health, and sustainable eating habits. Emma's approach combines evidence-based nutrition science with holistic wellness principles, helping clients develop lasting, healthy relationships with food and their bodies.",
		type: 'instructor',
		classes: [
			'Nutrition Consultation',
			'Healthy Cooking Workshop',
			'Gut Health Seminar',
		],
		specialties: [
			'Holistic Nutrition',
			'Plant-Based Diets',
			'Gut Health',
			'Lifestyle Coaching',
		],
		experience: '8+ years in nutrition and holistic health coaching',
		education:
			'Registered Dietitian, Holistic Nutrition Certification, Plant-Based Nutrition Training',
		contact: {
			email: 'emma@hiddenlotus.com',
			phone: '(555) 678-9012',
		},
	},
	{
		id: '7',
		name: 'David Park',
		profession: 'Tai Chi Instructor & Qigong Master',
		credentials: 'Tai Chi Master, Qigong Instructor, Energy Arts Specialist',
		bio: 'David teaches the gentle movements of Tai Chi and Qigong for balance and vitality.',
		image: '/icon-leaf-1.png',
		longBio:
			"David Park is a master Tai Chi and Qigong instructor who has dedicated his life to preserving and sharing these ancient Chinese energy arts. With over 15 years of practice and teaching experience, David has helped students of all ages and abilities discover the profound benefits of these gentle yet powerful movement practices. He specializes in Yang-style Tai Chi, Qigong breathing techniques, and energy cultivation methods. David's patient, methodical approach makes these complex practices accessible to beginners while offering depth and challenge for advanced practitioners.",
		type: 'instructor',
		classes: [
			'Tai Chi for Beginners',
			'Qigong Energy Practice',
			'Advanced Tai Chi Forms',
		],
		specialties: ['Tai Chi', 'Qigong', 'Energy Arts', 'Movement Therapy'],
		experience: '15+ years in Tai Chi and Qigong instruction',
		education:
			'Tai Chi Master Certification, Qigong Instructor Training, Energy Arts Specialist',
		contact: {
			email: 'david@hiddenlotus.com',
			phone: '(555) 789-0123',
		},
	},
	{
		id: '8',
		name: 'Maria Garcia',
		profession: 'Sound Healing Practitioner & Meditation Guide',
		credentials:
			'Sound Healing Certification, Meditation Teacher, Crystal Bowl Specialist',
		bio: 'Maria creates transformative sound healing experiences using crystal bowls and sacred instruments.',
		image: '/icon-hl-1.png',
		longBio:
			'Maria Garcia is a gifted sound healing practitioner and meditation guide who uses the power of sound and vibration to facilitate deep healing and transformation. Her journey into sound healing began when she experienced the profound effects of crystal bowl therapy during a period of personal healing. Maria combines traditional sound healing techniques with modern therapeutic approaches, using crystal bowls, Tibetan singing bowls, gongs, and other sacred instruments to create immersive healing experiences. Her sessions help clients release emotional blockages, reduce stress, and access deeper states of consciousness.',
		type: 'instructor',
		classes: [
			'Sound Healing Session',
			'Crystal Bowl Meditation',
			'Vibrational Healing Workshop',
		],
		specialties: [
			'Sound Healing',
			'Crystal Bowl Therapy',
			'Meditation',
			'Vibrational Medicine',
		],
		experience: '10+ years in sound healing and meditation',
		education:
			'Sound Healing Certification, Meditation Teacher Training, Crystal Bowl Specialist',
		contact: {
			email: 'maria@hiddenlotus.com',
			phone: '(555) 890-1234',
		},
	},
	{
		id: '9',
		name: 'Sophia Rodriguez',
		profession: 'Nutritionist & Holistic Health Coach',
		credentials: 'Registered Dietitian, Holistic Nutrition Certification',
		bio: 'Sophia helps clients achieve optimal health through personalized nutrition and lifestyle guidance.',
		longBio:
			"Sophia Rodriguez is a registered dietitian and holistic health coach who believes that true wellness comes from nourishing the body, mind, and spirit. With over 10 years of experience in nutrition and wellness, Sophia has helped countless clients transform their health through personalized nutrition plans and lifestyle modifications. She specializes in plant-based nutrition, gut health, and sustainable eating habits. Sophia's approach combines evidence-based nutrition science with holistic wellness principles.",
		type: 'instructor',
		classes: [
			'Nutrition Consultation',
			'Healthy Cooking Workshop',
			'Gut Health Seminar',
		],
		specialties: [
			'Holistic Nutrition',
			'Plant-Based Diets',
			'Gut Health',
			'Lifestyle Coaching',
		],
		experience: '10+ years in nutrition and holistic health coaching',
		education:
			'Registered Dietitian, Holistic Nutrition Certification, Plant-Based Nutrition Training',
		contact: {
			email: 'sophia@hiddenlotus.com',
			phone: '(555) 901-2345',
		},
	},
	{
		id: '10',
		name: 'James Chen',
		profession: 'Tai Chi Instructor & Qigong Master',
		credentials: 'Tai Chi Master, Qigong Instructor, Energy Arts Specialist',
		bio: 'James teaches the gentle movements of Tai Chi and Qigong for balance and vitality.',
		longBio:
			"James Chen is a master Tai Chi and Qigong instructor who has dedicated his life to preserving and sharing these ancient Chinese energy arts. With over 20 years of practice and teaching experience, James has helped students of all ages and abilities discover the profound benefits of these gentle yet powerful movement practices. He specializes in Yang-style Tai Chi, Qigong breathing techniques, and energy cultivation methods. James's patient, methodical approach makes these complex practices accessible to beginners.",
		type: 'instructor',
		classes: [
			'Tai Chi for Beginners',
			'Qigong Energy Practice',
			'Advanced Tai Chi Forms',
		],
		specialties: ['Tai Chi', 'Qigong', 'Energy Arts', 'Movement Therapy'],
		experience: '20+ years in Tai Chi and Qigong instruction',
		education:
			'Tai Chi Master Certification, Qigong Instructor Training, Energy Arts Specialist',
		contact: {
			email: 'james@hiddenlotus.com',
			phone: '(555) 012-3456',
		},
	},
]
