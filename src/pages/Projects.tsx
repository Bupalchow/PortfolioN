import { Link, ArrowRight } from 'lucide-react';
import { projects, categoryColors, getProjectUrl, type ProjectCategory } from '../data/projects';

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
  category: ProjectCategory;
}) => {
  return (
    <div className="group relative flex flex-col items-start">
      <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
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
        href={getProjectUrl(link)}
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