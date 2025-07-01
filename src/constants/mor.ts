export interface MORSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  textColor: string;
}

export const morSections: MORSection[] = [
  {
    id: '1',
    title: 'Motion',
    subtitle: 'Movement as Medicine',
    description:
      "We believe that movement is fundamental to human health and happiness. Through yoga, tai chi, functional fitness, and mindful movement practices, we help you reconnect with your body's natural wisdom and discover the joy of embodied living.",
    icon: 'pi pi-heart',
    color: 'bg-soft-sage',
    textColor: 'text-sage',
  },
  {
    id: '2',
    title: 'Open Heart',
    subtitle: 'Compassion in Action',
    description:
      'An open heart is the foundation of true wellness. We cultivate compassion, empathy, and loving-kindness in all our interactions, creating a supportive community where everyone feels seen, heard, and valued.',
    icon: 'pi pi-star',
    color: 'bg-pastel-pink',
    textColor: 'text-secondary-brown',
  },
  {
    id: '3',
    title: 'Revival',
    subtitle: 'Renewal and Transformation',
    description:
      'Revival represents the continuous process of renewal and transformation that occurs when we align our physical, mental, and spiritual selves. We support you in creating lasting positive change and living your most authentic life.',
    icon: 'pi pi-sun',
    color: 'bg-sage',
    textColor: 'text-white',
  },
];
