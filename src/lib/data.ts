export interface Class {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  instructor: string;
  dates: string[];
  time: string;
  duration: string;
  price: string;
  category: 'yoga' | 'reiki' | 'seminar' | 'cupping' | 'podcast';
  image?: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  maxParticipants: number;
  equipment?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  profession: string;
  credentials: string;
  bio: string;
  longBio: string;
  type: 'instructor' | 'admin' | 'board';
  image?: string;
  classes: string[];
  specialties: string[];
  experience: string;
  education: string;
  contact: {
    email: string;
    phone: string;
    website?: string;
  };
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
    description:
      'Start your day with an energizing vinyasa flow that connects breath with movement.',
    longDescription:
      'This dynamic morning class combines flowing sequences with mindful breathing to energize your body and clear your mind. Perfect for all levels, this class will help you build strength, flexibility, and mental clarity to start your day with intention and purpose.',
    instructor: 'Jaideep Pa',
    dates: ['2024-01-15', '2024-01-22', '2024-01-29'],
    time: '07:00 AM',
    duration: '75 minutes',
    price: '$25',
    category: 'yoga',
    level: 'intermediate',
    maxParticipants: 20,
    equipment: ['Yoga mat', 'Blocks', 'Strap'],
  },
  {
    id: '2',
    name: 'Reiki Healing Session',
    description:
      'Experience deep relaxation and energy healing through traditional Reiki techniques.',
    longDescription:
      'Experience the gentle yet powerful healing energy of Reiki. This session helps to balance your energy centers, release emotional blockages, and promote deep relaxation. Perfect for stress relief, emotional healing, and spiritual growth.',
    instructor: 'Sarah Chen',
    dates: ['2024-01-15', '2024-01-18', '2024-01-25'],
    time: '10:00 AM',
    duration: '60 minutes',
    price: '$45',
    category: 'reiki',
    level: 'beginner',
    maxParticipants: 1,
    equipment: ['Comfortable clothing'],
  },
  {
    id: '3',
    name: 'Mindfulness Workshop',
    description:
      'Learn practical mindfulness techniques for daily stress management and inner peace.',
    longDescription:
      'Discover powerful mindfulness techniques that you can integrate into your daily life. This workshop covers meditation practices, breathing exercises, and mindful living strategies to help you navigate stress and find inner peace.',
    instructor: 'Dr. Michael Rodriguez',
    dates: ['2024-01-16', '2024-01-23'],
    time: '02:00 PM',
    duration: '90 minutes',
    price: '$35',
    category: 'seminar',
    level: 'beginner',
    maxParticipants: 15,
    equipment: ['Comfortable seating', 'Journal'],
  },
  {
    id: '4',
    name: 'Cupping Therapy',
    description: 'Traditional cupping therapy for muscle tension relief and improved circulation.',
    longDescription:
      'Experience the ancient healing art of cupping therapy. This treatment helps to release muscle tension, improve blood circulation, and promote healing. Ideal for athletes, those with chronic pain, or anyone seeking deep tissue relief.',
    instructor: 'Lisa Thompson',
    dates: ['2024-01-16', '2024-01-20', '2024-01-27'],
    time: '04:00 PM',
    duration: '45 minutes',
    price: '$55',
    category: 'cupping',
    level: 'beginner',
    maxParticipants: 1,
    equipment: ['Comfortable clothing'],
  },
  {
    id: '5',
    name: 'Evening Restorative Yoga',
    description: 'Gentle restorative poses to unwind and prepare for restful sleep.',
    longDescription:
      'Wind down your day with this gentle, restorative yoga class. Using props and longer holds, this practice helps to release tension, calm the nervous system, and prepare your body and mind for deep, restful sleep.',
    instructor: 'Jaideep Pa',
    dates: ['2024-01-17', '2024-01-24', '2024-01-31'],
    time: '07:30 PM',
    duration: '60 minutes',
    price: '$20',
    category: 'yoga',
    level: 'beginner',
    maxParticipants: 15,
    equipment: ['Yoga mat', 'Bolster', 'Blanket'],
  },
  {
    id: '6',
    name: 'Energy Clearing Session',
    description: 'Clear negative energy and restore your natural energy flow.',
    longDescription:
      'Release stagnant energy and restore your natural vitality with this comprehensive energy clearing session. Using various techniques including Reiki, crystal healing, and energy work to balance your chakras and clear energetic blockages.',
    instructor: 'Sarah Chen',
    dates: ['2024-01-18', '2024-01-25'],
    time: '11:00 AM',
    duration: '75 minutes',
    price: '$50',
    category: 'reiki',
    level: 'beginner',
    maxParticipants: 1,
    equipment: ['Comfortable clothing'],
  },
  {
    id: '7',
    name: 'Stress Management Seminar',
    description: 'Comprehensive approach to managing stress in modern life.',
    longDescription:
      "Learn evidence-based strategies for managing stress in today's fast-paced world. This seminar covers cognitive behavioral techniques, lifestyle modifications, and practical tools for building resilience and maintaining mental wellness.",
    instructor: 'Dr. Michael Rodriguez',
    dates: ['2024-01-19', '2024-01-26'],
    time: '01:00 PM',
    duration: '120 minutes',
    price: '$40',
    category: 'seminar',
    level: 'beginner',
    maxParticipants: 20,
    equipment: ['Notebook', 'Pen'],
  },
  {
    id: '8',
    name: 'Deep Tissue Cupping',
    description: 'Intensive cupping therapy for chronic pain and deep muscle tension.',
    longDescription:
      'Target deep-seated muscle tension and chronic pain with this intensive cupping session. Using stronger suction and longer duration, this treatment is ideal for athletes, those with chronic pain conditions, or anyone seeking deep therapeutic relief.',
    instructor: 'Lisa Thompson',
    dates: ['2024-01-20', '2024-01-27'],
    time: '03:00 PM',
    duration: '60 minutes',
    price: '$65',
    category: 'cupping',
    level: 'intermediate',
    maxParticipants: 1,
    equipment: ['Comfortable clothing'],
  },
  {
    id: '9',
    name: 'Wellness Podcast Session',
    description: 'Join our live wellness podcast discussing holistic health and mindfulness.',
    longDescription:
      'Participate in our live wellness podcast where we discuss topics ranging from holistic health practices to mindfulness techniques. This interactive session allows you to ask questions and engage with wellness experts in real-time.',
    instructor: 'Jaideep Pa',
    dates: ['2024-01-21', '2024-01-28'],
    time: '06:00 PM',
    duration: '45 minutes',
    price: 'Free',
    category: 'podcast',
    level: 'beginner',
    maxParticipants: 50,
    equipment: ['Computer/phone for streaming'],
  },
];

export const teamData: TeamMember[] = [
  {
    id: '1',
    name: 'Jaideep Pa',
    profession: 'Yoga Instructor & Wellness Coach',
    credentials: 'RYT-500, Ayurvedic Wellness Counselor, Mindfulness Teacher',
    bio: 'Jaideep brings over 15 years of experience in yoga and meditation, specializing in vinyasa flow and mindfulness practices.',
    longBio:
      'Jaideep Pa is a dedicated yoga instructor and wellness coach with over 15 years of experience in the field of holistic health. His journey began in India, where he studied under renowned yoga masters and learned the ancient wisdom of Ayurveda. Jaideep specializes in vinyasa flow, mindfulness meditation, and stress management techniques. He believes in making yoga accessible to everyone, regardless of their experience level or physical limitations. Through his classes and coaching sessions, Jaideep helps students develop a deeper connection with their bodies, minds, and spirits, guiding them toward greater self-awareness and inner peace.',
    type: 'instructor',
    classes: ['Morning Vinyasa Flow', 'Evening Restorative Yoga', 'Wellness Podcast Session'],
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
    credentials: 'Reiki Master Teacher, Crystal Healing Practitioner, Energy Medicine Specialist',
    bio: 'Sarah is a certified Reiki master with expertise in energy healing and spiritual wellness.',
    longBio:
      'Sarah Chen is a gifted energy healer and Reiki master with a deep understanding of the subtle energy systems of the body. Her journey into energy healing began after experiencing the profound healing effects of Reiki during a difficult period in her life. Since then, she has dedicated herself to helping others find balance and healing through various energy medicine modalities. Sarah combines traditional Reiki techniques with crystal healing, chakra balancing, and intuitive energy work to create personalized healing sessions for each client. Her gentle, compassionate approach helps clients feel safe and supported as they work through emotional blockages and physical imbalances.',
    type: 'instructor',
    classes: ['Reiki Healing Session', 'Energy Clearing Session'],
    specialties: ['Reiki Healing', 'Crystal Therapy', 'Chakra Balancing', 'Energy Clearing'],
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
    credentials: 'PhD in Psychology, Licensed Clinical Psychologist, Certified Wellness Coach',
    bio: 'Dr. Rodriguez leads our wellness programs and provides expert guidance on mental health and stress management.',
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
    education: 'PhD in Psychology, Licensed Clinical Psychologist, Certified Wellness Coach',
    contact: {
      email: 'michael@hiddenlotus.com',
      phone: '(555) 345-6789',
    },
  },
  {
    id: '4',
    name: 'Lisa Thompson',
    profession: 'Therapeutic Specialist & Bodywork Practitioner',
    credentials: 'Licensed Massage Therapist, Cupping Specialist, Myofascial Release Therapist',
    bio: 'Lisa specializes in therapeutic bodywork and traditional healing modalities.',
    longBio:
      'Lisa Thompson is a skilled therapeutic specialist with expertise in various bodywork modalities and traditional healing techniques. Her passion for helping others heal through touch began after experiencing the transformative effects of therapeutic massage during her own recovery from a sports injury. Lisa combines traditional cupping therapy with modern myofascial release techniques, deep tissue massage, and energy work to provide comprehensive healing sessions. She has a particular interest in helping athletes, individuals with chronic pain, and those recovering from injuries. Her gentle yet effective approach helps clients release tension, improve circulation, and restore their natural healing abilities.',
    type: 'instructor',
    classes: ['Cupping Therapy', 'Deep Tissue Cupping'],
    specialties: ['Cupping Therapy', 'Deep Tissue Massage', 'Myofascial Release', 'Sports Therapy'],
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
    credentials: 'Full-Stack Developer, Digital Wellness Specialist, Mindfulness Technology Expert',
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
    profession: 'Operations Manager & Wellness Industry Expert',
    credentials: 'MBA in Healthcare Management, Certified Wellness Program Manager',
    bio: 'Maria manages day-to-day operations and ensures smooth delivery of all wellness services.',
    longBio:
      'Maria Garcia is an experienced operations manager with a passion for creating exceptional wellness experiences. With an MBA in Healthcare Management and over 15 years of experience in the wellness industry, Maria brings a unique blend of business acumen and wellness expertise to her role. She oversees all day-to-day operations, ensuring that every aspect of our wellness center runs smoothly and efficiently. Maria is committed to creating a welcoming, supportive environment where clients feel valued and cared for. Her attention to detail and commitment to excellence ensures that our services meet the highest standards of quality and effectiveness.',
    type: 'admin',
    classes: [],
    specialties: [
      'Operations Management',
      'Wellness Program Development',
      'Customer Experience',
      'Healthcare Administration',
    ],
    experience: '15+ years in healthcare and wellness management',
    education: 'MBA in Healthcare Management, Certified Wellness Program Manager',
    contact: {
      email: 'maria@hiddenlotus.com',
      phone: '(555) 678-9012',
    },
  },
];

export const storiesData: Story[] = [
  {
    id: '1',
    title: 'The Journey Begins',
    description:
      'How Hidden Lotus was born from a simple desire to create authentic wellness experiences.',
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
