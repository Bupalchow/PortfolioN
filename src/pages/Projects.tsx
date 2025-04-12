import React from 'react';
import { Link } from 'lucide-react';

const projects = [
  {
    title: 'Planetaria',
    description: 'Creating technology to empower civilians to explore space on their own terms.',
    link: 'planetaria.tech',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop'
  },
  {
    title: 'Animaginary',
    description: 'High performance web animation library, hand-written in optimized WASM.',
    link: 'github.com/animaginary',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop'
  },
  {
    title: 'HelioStream',
    description: 'Real-time video streaming library, optimized for interstellar transmission.',
    link: 'github.com/heliostream',
    image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=500&h=300&fit=crop'
  },
  {
    title: 'cosmOS',
    description: 'The operating system that powers our Planetaria space shuttles.',
    link: 'github.com/cosmos',
    image: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=500&h=300&fit=crop'
  },
];

const Projects = () => {
  return (
    <div className="py-16 sm:py-20">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8">
        Things I've made trying to put my dent in the universe.
      </h1>
      
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        I've worked on tons of little projects over the years but these are the ones that I'm most
        proud of. Many of them are open-source, so if you see something that piques your interest,
        check out the code and contribute if you have ideas for how it can be improved.
      </p>
      
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, link, image }: {
  title: string;
  description: string;
  link: string;
  image: string;
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
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
      <a
        href={`https://${link}`}
        className="mt-4 inline-flex items-center text-sm font-medium text-teal-500 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-500"
      >
        <Link className="w-4 h-4 mr-2" />
        {link}
      </a>
    </div>
  );
};

export default Projects;