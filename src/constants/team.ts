export interface TeamMember {
	id: string
	name: string
	profession: string
	credentials: string
	bio: string
	longBio: string
	type: 'instructor' | 'admin' | 'board'
	image?: string
	classes: string[]
	specialties: string[]
	certifications?: string[]
	experience: string
	education: string
	contact: {
		email: string
		phone: string
		website?: string
	}
}

export const teamData: TeamMember[] = [
	{
		id: '1',
		name: 'Jaideep Pa',
		profession: 'Yoga Instructor & Strength Training Coach',
		credentials:
			'RYT-500, Personal Trainer, Ayurvedic Wellness Counselor, Mindfulness Teacher',
		bio: 'Jaideep brings over 15 years of experience in yoga, strength training, and meditation, specializing in vinyasa flow and functional fitness.',
		longBio:
			'Jaideep Pa is a dedicated yoga instructor and strength training coach with over 15 years of experience in the field of holistic health and fitness. His journey began in India, where he studied under renowned yoga masters and learned the ancient wisdom of Ayurveda. Jaideep specializes in vinyasa flow, strength training, mindfulness meditation, and stress management techniques. He believes in making both yoga and fitness accessible to everyone, regardless of their experience level or physical limitations. Through his classes and coaching sessions, Jaideep helps students develop a deeper connection with their bodies, minds, and spirits, guiding them toward greater self-awareness, strength, and inner peace.',
		type: 'instructor',
		classes: [
			'Morning Vinyasa Flow',
			'Evening Restorative Yoga',
			'Power Yoga & Strength Training',
			'Weight Training Fundamentals',
			'Wellness Podcast Session',
		],
		specialties: [
			'Vinyasa Flow',
			'Strength Training',
			'Weight Training',
			'Mindfulness Meditation',
			'Stress Management',
			'Ayurvedic Wellness',
		],
		certifications: [
			'Yoga 400hr RYT',
			'Yoga 200hr RYT',
			'Personal Trainer',
			'Ayurvedic Wellness Counselor',
			'Mindfulness Teacher',
			'Reiki Level 1',
			'Nutrition Coach',
		],
		experience:
			'15+ years in yoga instruction, strength training, and wellness coaching',
		education:
			'RYT-500 Certification, Personal Trainer Certification, Ayurvedic Wellness Counselor Certification, Mindfulness Teacher Training',
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
		longBio:
			'Sarah Chen is a gifted energy healer and Reiki master with a deep understanding of the subtle energy systems of the body. Her journey into energy healing began after experiencing the profound healing effects of Reiki during a difficult period in her life. Since then, she has dedicated herself to helping others find balance and healing through various energy medicine modalities. Sarah combines traditional Reiki techniques with crystal healing, chakra balancing, and intuitive energy work to create personalized healing sessions for each client. Her gentle, compassionate approach helps clients feel safe and supported as they work through emotional blockages and physical imbalances.',
		type: 'instructor',
		classes: [
			'Reiki Healing Session',
			'Energy Clearing Session',
			'Crystal Healing & Chakra Balancing',
		],
		specialties: [
			'Reiki Healing',
			'Crystal Therapy',
			'Chakra Balancing',
			'Energy Clearing',
		],
		certifications: [
			'Reiki Master Teacher',
			'Reiki Level 1',
			'Reiki Level 2',
			'Crystal Healing Practitioner',
			'Energy Medicine Specialist',
			'Chakra Balancing',
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
		longBio:
			'Dr. Michael Rodriguez is a licensed clinical psychologist and wellness director with over 20 years of experience in mental health and wellness. He holds a PhD in Psychology and has specialized training in cognitive behavioral therapy, mindfulness-based stress reduction, and positive psychology. Dr. Rodriguez believes in a holistic approach to mental health that addresses the mind, body, and spirit. He has helped countless individuals overcome anxiety, depression, and stress-related issues through evidence-based therapeutic techniques combined with mindfulness and wellness practices. As our Wellness Director, he oversees all wellness programs and ensures that our services meet the highest standards of care and effectiveness.',
		type: 'admin',
		classes: [
			'Mindfulness Workshop',
			'Stress Management Seminar',
			'Breathwork & Energy Activation',
		],
		specialties: [
			'Cognitive Behavioral Therapy',
			'Mindfulness-Based Stress Reduction',
			'Positive Psychology',
			'Wellness Coaching',
			'Breathwork',
		],
		certifications: [
			'Licensed Clinical Psychologist',
			'Certified Wellness Coach',
			'Mindfulness-Based Stress Reduction',
			'Cognitive Behavioral Therapy',
			'Positive Psychology',
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
		certifications: [
			'Licensed Massage Therapist',
			'Cupping Therapy Specialist',
			'Myofascial Release Therapist',
			'Sports Massage Therapy',
			'Deep Tissue Massage',
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
		name: 'Maria Garcia',
		profession: 'Pilates Instructor & Core Strength Specialist',
		credentials:
			'Certified Pilates Instructor, Core Strength Specialist, Movement Therapist',
		bio: 'Maria specializes in Pilates and core strength training, helping clients build strong foundations and improve posture.',
		longBio:
			'Maria Garcia is a certified Pilates instructor and core strength specialist with a passion for helping clients build strong, resilient bodies. With over 10 years of experience in movement therapy and fitness instruction, Maria has developed a unique approach that combines traditional Pilates principles with modern movement science. She specializes in core strength training, posture improvement, and movement rehabilitation. Maria believes that a strong core is the foundation for all movement and helps clients develop the strength, stability, and body awareness needed for optimal health and performance.',
		type: 'instructor',
		classes: ['Pilates & Core Strength'],
		specialties: [
			'Pilates',
			'Core Strength Training',
			'Posture Improvement',
			'Movement Therapy',
		],
		certifications: [
			'Certified Pilates Instructor',
			'Core Strength Specialist',
			'Movement Therapy',
			'Posture Improvement',
			'Fitness Trainer',
		],
		experience: '10+ years in Pilates instruction and movement therapy',
		education:
			'Certified Pilates Instructor, Core Strength Specialist Certification, Movement Therapy Training',
		contact: {
			email: 'maria@hiddenlotus.com',
			phone: '(555) 678-9012',
		},
	},
	{
		id: '7',
		name: 'Emma Wilson',
		profession: 'Meditation Instructor & Sound Healing Practitioner',
		credentials:
			'Certified Meditation Teacher, Mindfulness-Based Stress Reduction Instructor, Sound Healing Practitioner',
		bio: 'Emma guides students through meditation practices, sound healing, and mindfulness techniques for inner peace.',
		longBio:
			"Emma Wilson is a passionate meditation instructor and sound healing practitioner who believes in the transformative power of present-moment awareness and vibrational healing. With over 8 years of experience in meditation and mindfulness practices, Emma has helped hundreds of students develop sustainable meditation habits and integrate mindfulness into their daily lives. She specializes in guided meditation, sound healing with crystal bowls and gongs, breathwork, and mindfulness-based stress reduction techniques. Emma's gentle, encouraging approach makes meditation and sound healing accessible to beginners while providing depth for experienced practitioners.",
		type: 'instructor',
		classes: [
			'Guided Meditation',
			'Sound Healing & Meditation',
			'Mindful Movement & Flow',
		],
		specialties: [
			'Guided Meditation',
			'Sound Healing',
			'Mindfulness Training',
			'Breathwork',
			'Stress Reduction',
		],
		certifications: [
			'Certified Meditation Teacher',
			'Mindfulness-Based Stress Reduction',
			'Sound Healing Practitioner',
			'Breathwork Specialist',
			'Stress Reduction Coach',
		],
		experience: '8+ years in meditation instruction and sound healing',
		education:
			'Certified Meditation Teacher, Mindfulness-Based Stress Reduction Certification, Sound Healing Practitioner',
		contact: {
			email: 'emma@hiddenlotus.com',
			phone: '(555) 789-0123',
		},
	},
	{
		id: '8',
		name: 'David Park',
		profession:
			'Acupuncture Specialist & Traditional Chinese Medicine Practitioner',
		credentials: 'Licensed Acupuncturist, Traditional Chinese Medicine Doctor',
		bio: 'David combines ancient Chinese medicine with modern wellness approaches for holistic healing.',
		longBio:
			"David Park is a licensed acupuncturist and Traditional Chinese Medicine practitioner with deep respect for ancient healing wisdom. His journey into Chinese medicine began during his studies in Beijing, where he learned from master practitioners and immersed himself in traditional healing philosophies. David combines traditional acupuncture techniques with modern understanding of the body's energy systems to provide comprehensive healing treatments. He specializes in pain management, stress relief, and balancing the body's energy flow.",
		type: 'instructor',
		classes: [
			'Acupuncture Session',
			'Traditional Chinese Medicine Consultation',
		],
		specialties: [
			'Acupuncture',
			'Traditional Chinese Medicine',
			'Pain Management',
			'Energy Balancing',
		],
		experience: '12+ years in acupuncture and Traditional Chinese Medicine',
		education:
			'Licensed Acupuncturist, Traditional Chinese Medicine Doctor Degree',
		contact: {
			email: 'david@hiddenlotus.com',
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
	{
		id: '11',
		name: 'Amanda Foster',
		profession: 'Sound Healing Practitioner & Music Therapist',
		credentials: 'Certified Sound Healer, Music Therapy Certification',
		bio: 'Amanda uses the healing power of sound and vibration to promote relaxation and healing.',
		longBio:
			"Amanda Foster is a certified sound healing practitioner and music therapist who believes in the profound healing power of sound and vibration. With over 8 years of experience in sound therapy, Amanda has helped clients achieve deep relaxation, emotional release, and spiritual connection through various sound healing modalities. She uses crystal singing bowls, tuning forks, gongs, and other instruments to create therapeutic sound experiences. Amanda's sessions are designed to reduce stress, promote healing, and restore balance to the body's energy systems.",
		type: 'instructor',
		classes: [
			'Sound Healing Session',
			'Crystal Bowl Meditation',
			'Vibrational Therapy',
		],
		specialties: [
			'Sound Healing',
			'Music Therapy',
			'Crystal Bowls',
			'Vibrational Medicine',
		],
		experience: '8+ years in sound healing and music therapy',
		education:
			'Certified Sound Healer, Music Therapy Certification, Crystal Bowl Training',
		contact: {
			email: 'amanda@hiddenlotus.com',
			phone: '(555) 123-4568',
		},
	},
	{
		id: '12',
		name: 'Robert Kim',
		profession: 'Fitness Coach & Movement Specialist',
		credentials: 'Certified Personal Trainer, Functional Movement Specialist',
		bio: 'Robert combines functional fitness with mindfulness for holistic physical wellness.',
		longBio:
			"Robert Kim is a certified personal trainer and movement specialist who believes that physical fitness should be integrated with mental and emotional wellness. With over 12 years of experience in fitness and movement coaching, Robert has helped clients of all fitness levels achieve their health goals through personalized training programs. He specializes in functional movement, strength training, and mind-body fitness approaches. Robert's training philosophy emphasizes sustainable, enjoyable movement that supports overall wellness.",
		type: 'instructor',
		classes: ['Functional Fitness', 'Mind-Body Movement', 'Strength Training'],
		specialties: [
			'Functional Movement',
			'Strength Training',
			'Mind-Body Fitness',
			'Personal Training',
		],
		experience: '12+ years in fitness coaching and movement instruction',
		education:
			'Certified Personal Trainer, Functional Movement Specialist, Mind-Body Fitness Certification',
		contact: {
			email: 'robert@hiddenlotus.com',
			phone: '(555) 234-5679',
		},
	},
	{
		id: '13',
		name: 'Jennifer Lee',
		profession: 'Aromatherapist & Essential Oil Specialist',
		credentials: 'Certified Aromatherapist, Essential Oil Safety Specialist',
		bio: 'Jennifer uses the therapeutic properties of essential oils for healing and wellness.',
		longBio:
			"Jennifer Lee is a certified aromatherapist and essential oil specialist who has dedicated her career to exploring the healing properties of natural plant essences. With over 10 years of experience in aromatherapy, Jennifer has helped clients address various health concerns through the therapeutic use of essential oils. She specializes in creating personalized essential oil blends, aromatherapy massage, and educational workshops about safe and effective essential oil use. Jennifer's approach combines traditional aromatherapy knowledge with modern safety practices.",
		type: 'instructor',
		classes: [
			'Aromatherapy Session',
			'Essential Oil Workshop',
			'Aromatherapy Massage',
		],
		specialties: [
			'Aromatherapy',
			'Essential Oils',
			'Natural Healing',
			'Sensory Therapy',
		],
		experience: '10+ years in aromatherapy and essential oil therapy',
		education:
			'Certified Aromatherapist, Essential Oil Safety Specialist, Natural Healing Certification',
		contact: {
			email: 'jennifer@hiddenlotus.com',
			phone: '(555) 345-6780',
		},
	},
	{
		id: '14',
		name: 'Thomas Anderson',
		profession: 'Breathwork Facilitator & Respiratory Therapist',
		credentials:
			'Certified Breathwork Facilitator, Respiratory Therapy License',
		bio: 'Thomas guides clients through powerful breathing techniques for transformation and healing.',
		longBio:
			'Thomas Anderson is a certified breathwork facilitator and respiratory therapist who understands the profound impact that conscious breathing can have on physical, mental, and emotional health. With over 15 years of experience in respiratory therapy and 8 years in breathwork facilitation, Thomas has helped clients overcome breathing challenges and discover the transformative power of conscious breath. He specializes in various breathwork techniques including Holotropic Breathwork, Wim Hof Method, and therapeutic breathing exercises.',
		type: 'instructor',
		classes: [
			'Breathwork Session',
			'Conscious Breathing Workshop',
			'Respiratory Health',
		],
		specialties: [
			'Breathwork',
			'Respiratory Therapy',
			'Conscious Breathing',
			'Energy Activation',
		],
		experience:
			'15+ years in respiratory therapy, 8+ years in breathwork facilitation',
		education:
			'Certified Breathwork Facilitator, Respiratory Therapy License, Holotropic Breathwork Training',
		contact: {
			email: 'thomas@hiddenlotus.com',
			phone: '(555) 456-7891',
		},
	},
	{
		id: '15',
		name: 'Natalie Brown',
		profession: 'Wellness Coordinator & Client Relations Specialist',
		credentials:
			'Wellness Management Degree, Customer Experience Certification',
		bio: 'Natalie ensures every client receives personalized care and support throughout their wellness journey.',
		longBio:
			'Natalie Brown is a wellness coordinator and client relations specialist who is passionate about creating exceptional experiences for every client who walks through our doors. With over 8 years of experience in wellness management and customer service, Natalie has developed a deep understanding of what clients need to feel supported and motivated in their wellness journey. She coordinates client care, manages wellness programs, and ensures that every interaction with Hidden Lotus is positive and supportive.',
		type: 'admin',
		classes: [],
		specialties: [
			'Client Relations',
			'Wellness Coordination',
			'Program Management',
			'Customer Experience',
		],
		experience: '8+ years in wellness management and client relations',
		education:
			'Wellness Management Degree, Customer Experience Certification, Health Coaching Training',
		contact: {
			email: 'natalie@hiddenlotus.com',
			phone: '(555) 567-8902',
		},
	},
]
