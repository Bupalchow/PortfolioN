export type ProjectCategory = 'freelance' | 'academic' | 'personal' | 'full time';

export type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
  category: ProjectCategory;
  tags: string[];
};

export const projects: Project[] = [
  {
    title:'eekee AI',
    description:
    'Contributed as part of the core team to build an AI-led employee well-being platform, implementing around 70% of the product features across both web and mobile experiences, including burnout detection, guided conversations, and routine-based support.',
    link:'eekee.ai',
    image:'/eekee_black.jpg',
    category:'full time',
    tags:['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'AI'],
  },
  {
    title: 'Level Up Design Studio',
    description:
      'Designed and developed a responsive portfolio website for an interior design studio with experienced architects. Implemented custom image galleries, project showcases, and contact forms.',
    link: 'https://www.lvlupdesignstudio.com/',
    image: '/lvlup.png',
    category: 'freelance',
    tags: ['React', 'Tailwind CSS', 'Responsive Design', 'Frontend', 'UI/UX'],
  },
  {
    title: 'Medical Analysis',
    description:
      "An AI-driven website that stores and analyzes patient's medical reports and provides personalized diet plans, featuring a custom chatbot for user queries.",
    link: 'medicalanalysis.vercel.app/',
    image: '/medical.png',
    category: 'academic',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Firebase', 'Google Gemini API', 'AI'],
  },
  {
    title: 'Master Anything',
    description: 'AI-based personalized course generator that builds a course for any given topic.',
    link: 'master-anything.vercel.app/',
    image: '/Master.png',
    category: 'personal',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Mistral API', 'AI', 'Shadcn UI'],
  },
  {
    title: 'Boardly',
    description: 'An ed-tech platform offering resources for CBSE board exam preparation. Led the frontend development of the website.',
    link: 'www.boardly.in/',
    image: '/boardly.png',
    category: 'freelance',
    tags: ['React', 'Tailwind CSS', 'Javascript', 'Frontend', 'UI/UX'],
  },
  {
    title: 'Transform Journey',
    description:
      'An AI web app that generates 30-day calendar to achieve your goals. It provides daily tasks and motivational quotes to keep you on track.',
    link: 'tranformation-journy.vercel.app/',
    image: '/transform.png',
    category: 'personal',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Gemini API', 'AI'],
  },
];

export const categoryColors: Record<ProjectCategory, string> = {
  'full time': 'text-indigo-600 dark:text-indigo-400 border-indigo-300 dark:border-indigo-500/30',
  freelance: 'text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-500/30',
  academic: 'text-purple-600 dark:text-purple-400 border-purple-300 dark:border-purple-500/30',
  personal: 'text-green-600 dark:text-green-400 border-green-300 dark:border-green-500/30',
};

export const getProjectUrl = (link: string): string => {
  if (/^https?:\/\//i.test(link)) {
    return link;
  }

  return `https://${link}`;
};
