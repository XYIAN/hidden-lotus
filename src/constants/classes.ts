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
  categories: (
    | 'yoga'
    | 'reiki'
    | 'seminar'
    | 'cupping'
    | 'podcast'
    | 'meditation'
    | 'fitness'
    | 'healing'
    | 'weight-training'
    | 'pilates'
    | 'breathwork'
    | 'sound-healing'
  )[];
  image?: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  maxParticipants: number;
  equipment?: string[];
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
    categories: ['yoga', 'fitness'],
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
    categories: ['reiki', 'healing'],
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
    categories: ['seminar', 'meditation'],
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
    categories: ['cupping', 'healing'],
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
    categories: ['yoga', 'meditation'],
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
    categories: ['reiki', 'healing'],
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
    categories: ['seminar', 'meditation'],
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
    categories: ['cupping', 'healing'],
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
    categories: ['podcast', 'seminar'],
    level: 'beginner',
    maxParticipants: 50,
    equipment: ['Computer/phone for streaming'],
  },
  {
    id: '10',
    name: 'Guided Meditation',
    description: 'Experience deep relaxation through guided meditation practices.',
    longDescription:
      'Immerse yourself in a peaceful guided meditation session designed to calm your mind and soothe your soul. This class combines various meditation techniques including body scanning, breath awareness, and loving-kindness meditation to help you find inner peace and clarity.',
    instructor: 'Emma Wilson',
    dates: ['2024-01-22', '2024-01-29'],
    time: '06:30 PM',
    duration: '45 minutes',
    price: '$15',
    categories: ['meditation', 'healing'],
    level: 'beginner',
    maxParticipants: 25,
    equipment: ['Comfortable seating', 'Cushion (optional)'],
  },
  {
    id: '11',
    name: 'Acupuncture Session',
    description: 'Traditional acupuncture for pain relief and energy balancing.',
    longDescription:
      'Experience the ancient healing art of acupuncture in a peaceful, professional setting. This session uses fine needles to stimulate specific points on your body, promoting natural healing, pain relief, and energy balance. Perfect for addressing various health concerns and promoting overall wellness.',
    instructor: 'David Park',
    dates: ['2024-01-23', '2024-01-30'],
    time: '02:00 PM',
    duration: '60 minutes',
    price: '$75',
    categories: ['healing'],
    level: 'beginner',
    maxParticipants: 1,
    equipment: ['Comfortable clothing'],
  },
  {
    id: '12',
    name: 'Power Yoga & Strength Training',
    description: 'High-intensity yoga flow combined with strength training exercises.',
    longDescription:
      'Combine the benefits of power yoga with strength training in this dynamic class. Build muscle, improve flexibility, and enhance cardiovascular fitness through a challenging yet accessible workout that integrates traditional yoga poses with modern strength training techniques.',
    instructor: 'Jaideep Pa',
    dates: ['2024-01-24', '2024-01-31'],
    time: '06:00 AM',
    duration: '90 minutes',
    price: '$30',
    categories: ['yoga', 'fitness', 'weight-training'],
    level: 'advanced',
    maxParticipants: 15,
    equipment: ['Yoga mat', 'Dumbbells', 'Resistance bands'],
  },
  {
    id: '13',
    name: 'Sound Healing & Meditation',
    description: 'Experience deep relaxation through sound vibrations and guided meditation.',
    longDescription:
      'Immerse yourself in the healing vibrations of crystal bowls, gongs, and other therapeutic instruments. This session combines sound healing with guided meditation to create a deeply relaxing and transformative experience that promotes healing on all levels.',
    instructor: 'Emma Wilson',
    dates: ['2024-01-25', '2024-02-01'],
    time: '07:00 PM',
    duration: '75 minutes',
    price: '$35',
    categories: ['sound-healing', 'meditation', 'healing'],
    level: 'beginner',
    maxParticipants: 20,
    equipment: ['Yoga mat', 'Blanket', 'Eye mask'],
  },
  {
    id: '14',
    name: 'Pilates & Core Strength',
    description: 'Strengthen your core and improve posture with Pilates exercises.',
    longDescription:
      'Focus on building core strength, improving posture, and enhancing overall body awareness through Pilates exercises. This class emphasizes controlled movements, proper breathing, and mind-body connection for a complete workout.',
    instructor: 'Maria Garcia',
    dates: ['2024-01-26', '2024-02-02'],
    time: '09:00 AM',
    duration: '60 minutes',
    price: '$25',
    categories: ['pilates', 'fitness'],
    level: 'intermediate',
    maxParticipants: 12,
    equipment: ['Pilates mat', 'Resistance bands'],
  },
  {
    id: '15',
    name: 'Breathwork & Energy Activation',
    description: 'Learn powerful breathing techniques to activate your energy and vitality.',
    longDescription:
      'Discover the transformative power of conscious breathing in this specialized breathwork session. Learn techniques to activate your life force energy, reduce stress, and enhance mental clarity through various breathing practices.',
    instructor: 'Dr. Michael Rodriguez',
    dates: ['2024-01-27', '2024-02-03'],
    time: '04:00 PM',
    duration: '90 minutes',
    price: '$40',
    categories: ['breathwork', 'meditation', 'healing'],
    level: 'beginner',
    maxParticipants: 18,
    equipment: ['Comfortable seating', 'Cushion'],
  },
  {
    id: '16',
    name: 'Weight Training Fundamentals',
    description: 'Learn proper form and technique for effective weight training.',
    longDescription:
      'Master the fundamentals of weight training in this comprehensive class. Learn proper form, technique, and safety protocols while building strength and muscle. Perfect for beginners or those looking to refine their lifting skills.',
    instructor: 'Jaideep Pa',
    dates: ['2024-01-28', '2024-02-04'],
    time: '05:30 PM',
    duration: '75 minutes',
    price: '$30',
    categories: ['weight-training', 'fitness'],
    level: 'beginner',
    maxParticipants: 10,
    equipment: ['Dumbbells', 'Barbells', 'Weight plates'],
  },
  {
    id: '17',
    name: 'Crystal Healing & Chakra Balancing',
    description: 'Balance your chakras and promote healing with crystal therapy.',
    longDescription:
      'Experience the gentle healing power of crystals in this specialized session. Learn about chakra balancing, crystal properties, and how to use these natural tools for emotional and physical healing.',
    instructor: 'Sarah Chen',
    dates: ['2024-01-29', '2024-02-05'],
    time: '01:00 PM',
    duration: '60 minutes',
    price: '$50',
    categories: ['healing', 'reiki'],
    level: 'beginner',
    maxParticipants: 1,
    equipment: ['Comfortable clothing'],
  },
  {
    id: '18',
    name: 'Mindful Movement & Flow',
    description: 'Gentle movement sequences combined with mindfulness practices.',
    longDescription:
      'Connect mind and body through gentle, flowing movements combined with mindfulness practices. This class is perfect for those seeking a gentle yet effective way to improve mobility, reduce stress, and enhance body awareness.',
    instructor: 'Emma Wilson',
    dates: ['2024-01-30', '2024-02-06'],
    time: '10:00 AM',
    duration: '60 minutes',
    price: '$20',
    categories: ['yoga', 'meditation', 'fitness'],
    level: 'beginner',
    maxParticipants: 15,
    equipment: ['Yoga mat', 'Comfortable clothing'],
  },
];
