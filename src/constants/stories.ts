export interface Story {
  id: string;
  title: string;
  description: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

export const storiesData: Story[] = [
  {
    id: '1',
    title: 'The Beginning of Hidden Lotus',
    description: 'How a small wellness center grew into a community of healing and transformation.',
    content:
      'Hidden Lotus began as a simple dream in the heart of our founder, who envisioned a space where people could find peace, healing, and transformation. What started as a small yoga studio has grown into a comprehensive wellness center that serves hundreds of individuals each month. Our journey has been marked by countless moments of connection, healing, and growth.',
    author: 'Hidden Lotus Team',
    date: '2024-01-15',
    category: 'Founding',
  },
  {
    id: '2',
    title: 'A Journey to Wellness',
    description: "One client's transformative experience with our holistic approach to health.",
    content:
      'Sarah came to Hidden Lotus struggling with chronic stress and anxiety. Through our integrated approach combining yoga, meditation, and energy healing, she discovered not just relief from her symptoms, but a deeper understanding of herself and her capacity for healing. Her story represents the countless transformations that happen within our walls every day.',
    author: 'Sarah M.',
    date: '2024-01-10',
    category: 'Transformation',
  },
  {
    id: '3',
    title: 'Building Community Through Healing',
    description: 'How our wellness center has become a hub for connection and support.',
    content:
      'Beyond individual healing, Hidden Lotus has become a vibrant community where people find not just wellness services, but lasting friendships and support networks. Our regular community events, workshops, and group sessions have created a space where everyone feels welcome and supported in their wellness journey.',
    author: 'Hidden Lotus Team',
    date: '2024-01-05',
    category: 'Community',
  },
  {
    id: '4',
    title: 'The Power of Mindful Movement',
    description: 'Exploring how movement practices can transform both body and mind.',
    content:
      'Our movement classes go beyond physical exercise to create a holistic experience that nurtures the mind, body, and spirit. Through yoga, tai chi, and mindful movement practices, our clients discover new ways of being in their bodies and develop a deeper connection to their inner wisdom.',
    author: 'Jaideep Pa',
    date: '2024-01-01',
    category: 'Movement',
  },
];
