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
  category:
    | 'yoga'
    | 'reiki'
    | 'seminar'
    | 'cupping'
    | 'podcast'
    | 'meditation'
    | 'fitness'
    | 'healing';
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
    category: 'meditation',
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
    category: 'healing',
    level: 'beginner',
    maxParticipants: 1,
    equipment: ['Comfortable clothing'],
  },
  {
    id: '12',
    name: 'Healthy Cooking Workshop',
    description: 'Learn to prepare nutritious, delicious meals that support your wellness journey.',
    longDescription:
      "Discover the joy of cooking healthy, nourishing meals that support your wellness goals. This hands-on workshop teaches you essential cooking techniques, ingredient selection, and meal planning strategies. You'll learn to create delicious, nutritious dishes that energize your body and delight your taste buds.",
    instructor: 'Sophia Rodriguez',
    dates: ['2024-01-24', '2024-01-31'],
    time: '05:00 PM',
    duration: '90 minutes',
    price: '$45',
    category: 'seminar',
    level: 'beginner',
    maxParticipants: 12,
    equipment: ['Apron', 'Recipe booklet'],
  },
  {
    id: '13',
    name: 'Tai Chi for Beginners',
    description: 'Learn the gentle, flowing movements of Tai Chi for balance and harmony.',
    longDescription:
      'Discover the ancient Chinese art of Tai Chi through gentle, flowing movements that promote balance, flexibility, and inner peace. This beginner-friendly class introduces the fundamental principles and basic forms of Tai Chi, helping you develop body awareness and cultivate a sense of calm.',
    instructor: 'James Chen',
    dates: ['2024-01-25', '2024-02-01'],
    time: '09:00 AM',
    duration: '60 minutes',
    price: '$20',
    category: 'fitness',
    level: 'beginner',
    maxParticipants: 15,
    equipment: ['Comfortable clothing', 'Flat shoes'],
  },
  {
    id: '14',
    name: 'Sound Healing Session',
    description: 'Experience the therapeutic power of sound and vibration for deep relaxation.',
    longDescription:
      'Immerse yourself in the healing vibrations of crystal singing bowls, gongs, and other therapeutic instruments. This sound healing session creates a deeply relaxing environment that helps reduce stress, promote healing, and restore balance to your energy systems.',
    instructor: 'Amanda Foster',
    dates: ['2024-01-26', '2024-02-02'],
    time: '07:00 PM',
    duration: '75 minutes',
    price: '$40',
    category: 'healing',
    level: 'beginner',
    maxParticipants: 20,
    equipment: ['Yoga mat', 'Blanket', 'Eye pillow'],
  },
  {
    id: '15',
    name: 'Functional Fitness',
    description: 'Build strength and mobility through functional movement patterns.',
    longDescription:
      'Improve your overall fitness and daily movement patterns with this functional fitness class. Combining strength training, mobility work, and movement skills, this class helps you build a strong, resilient body that supports your daily activities and wellness goals.',
    instructor: 'Robert Kim',
    dates: ['2024-01-27', '2024-02-03'],
    time: '08:00 AM',
    duration: '60 minutes',
    price: '$25',
    category: 'fitness',
    level: 'intermediate',
    maxParticipants: 18,
    equipment: ['Comfortable workout clothes', 'Water bottle'],
  },
  {
    id: '16',
    name: 'Aromatherapy Workshop',
    description: 'Learn to use essential oils safely and effectively for wellness.',
    longDescription:
      'Discover the therapeutic properties of essential oils and learn how to use them safely and effectively in your daily wellness routine. This workshop covers essential oil safety, blending techniques, and practical applications for stress relief, energy boosting, and emotional balance.',
    instructor: 'Jennifer Lee',
    dates: ['2024-01-28', '2024-02-04'],
    time: '03:00 PM',
    duration: '90 minutes',
    price: '$35',
    category: 'seminar',
    level: 'beginner',
    maxParticipants: 15,
    equipment: ['Notebook', 'Sample essential oils provided'],
  },
  {
    id: '17',
    name: 'Breathwork Session',
    description: 'Transform your life through conscious breathing techniques.',
    longDescription:
      'Experience the transformative power of conscious breathing in this guided breathwork session. Learn powerful breathing techniques that can help reduce stress, increase energy, and promote emotional healing. This session combines various breathwork modalities for a comprehensive experience.',
    instructor: 'Thomas Anderson',
    dates: ['2024-01-29', '2024-02-05'],
    time: '06:00 PM',
    duration: '90 minutes',
    price: '$30',
    category: 'healing',
    level: 'beginner',
    maxParticipants: 20,
    equipment: ['Yoga mat', 'Blanket', 'Eye pillow'],
  },
  {
    id: '18',
    name: 'Advanced Vinyasa Flow',
    description: 'Dynamic, challenging yoga practice for experienced practitioners.',
    longDescription:
      'Take your yoga practice to the next level with this advanced vinyasa flow class. This challenging practice combines complex sequences, arm balances, and inversions with mindful breathing and meditation. Perfect for experienced yogis looking to deepen their practice.',
    instructor: 'Jaideep Pa',
    dates: ['2024-01-30', '2024-02-06'],
    time: '06:00 AM',
    duration: '90 minutes',
    price: '$30',
    category: 'yoga',
    level: 'advanced',
    maxParticipants: 15,
    equipment: ['Yoga mat', 'Blocks', 'Strap', 'Towel'],
  },
];
