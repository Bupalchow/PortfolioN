import { Link, ArrowRight } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
  category: 'freelance' | 'academic' | 'personal';
  tags: string[];
};

const projects: Project[] = [
  {
    title: 'Level Up Design Studio',
    description: 'Designed and developed a responsive portfolio website for an interior design studio with experienced architects. Implemented custom image galleries, project showcases, and contact forms.',
    link: 'level-up-omega.vercel.app/',
    image: '/lvlup.png',
    category: 'freelance',
    tags: ['React', 'Tailwind CSS', 'Responsive Design', 'Frontend', 'UI/UX']
  },
  {
    title: 'Medical Analysis',
    description: 'An AI-driven website that stores and analyzes patient\'s medical reports and provides personalized diet plans, featuring a custom chatbot for user queries.',
    link: 'medicalanalysis.vercel.app/',
    image: '/medical.png',
    category: 'academic',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Firebase', 'Google Gemini API', 'AI']
  },
  {
    title: 'Master Anything',
    description: 'AI-based personalized course generator that builds a course for any given topic.',
    link: 'master-anything.vercel.app/',
    image: '/Master.png',
    category: 'personal',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Mistral API', 'AI','Shadcn UI']
  },
  {
    title: 'Boardly',
    description: 'An ed-tech platform offering resources for CBSE board exam preparation. Led the frontend development of the website.',
    link: 'www.boardly.in/',
    image: '/boardly.png',
    category: 'freelance',
    tags: ['React','Tailwind CSS','Javascript','Frontend', 'UI/UX']
  },
  {
    title: 'Transform Journey',
    description: 'An AI web app that generates 30-day calendar to achieve your goals. It provides daily tasks and motivational quotes to keep you on track.',
    link: 'tranformation-journy.vercel.app/',
    image: '/transform.png',
    category: 'personal',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Gemini API', 'AI']
  },
];

const categoryColors = {
  freelance: 'text-blue-600 dark:text-blue-400 border-blue-300 dark:border-blue-500/30',
  academic: 'text-purple-600 dark:text-purple-400 border-purple-300 dark:border-purple-500/30',
  personal: 'text-green-600 dark:text-green-400 border-green-300 dark:border-green-500/30'
};

const Projects = () => {
  return (
    <div className="py-16 sm:py-20">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8">
        Featured Projects and Client Work
      </h1>
      
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        As a React developer and freelancer, I've built a diverse portfolio of websites and applications 
        with a focus on modern UI/UX design. Here are some of my recent projects that showcase 
        my expertise in React, Javascript, Tailwind CSS and other web technologies.
      </p>
      
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, link, image, tags, category }: {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
  category: 'freelance' | 'academic' | 'personal';
}) => {
  return (
    <div className="group relative flex flex-col items-start">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Category badge - moved below image */}
      <div className="mt-4 flex justify-between w-full items-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className={`text-xs font-medium capitalize border px-2.5 py-1 rounded-full ${categoryColors[category]}`}>
          {category}
        </span>
      </div>
      
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
      
      {/* Tags section */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag} 
            className="px-2 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <a
        href={`https://${link}`}
        target='_blank'
        className="mt-5 inline-flex items-center text-teal-500 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 font-medium text-sm transition-colors group/link"
      >
        <Link className="w-4 h-4 mr-2" />
        View Project
        <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-0.5 transition-transform" />
      </a>
    </div>
  );
};

export default Projects;