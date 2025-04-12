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
    link: 'github.com',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop'
  },
];

const Projects = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-8">
        Things I've made trying to put<br />
        my dent in the universe.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, link, image }: {
  title: string;
  description: string;
  link: string;
  image: string;
}) => {
  return (
    <div className="group relative bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-colors">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a
        href={`https://${link}`}
        target='_blank'
        className="inline-flex items-center text-sm text-gray-400 hover:text-white"
      >
        <Link className="w-4 h-4 mr-2" />
        {link}
      </a>
    </div>
  );
};

export default Projects;