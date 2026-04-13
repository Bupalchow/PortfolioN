import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { ArrowRight } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { projects, getProjectUrl } from '../data/projects';

const Hero = () => {
  const featuredProjects = projects.slice(0, 2);

  return (
    <section className="py-16 sm:py-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8">
        Software developer, Freelancer<br />
        and Startup Enthusiast.
      </h1>
      <p className="text-gray-400 max-w-2xl mb-8">
        I'm Bupal Chowdary, a dedicated Software Developer focused on crafting high-quality, user-centric web applications using modern front-end technologies like React and Tailwind CSS. With a proven track record of delivering innovative solutions for design studios, ed-tech platforms, and AI-powered projects, I build responsive and engaging digital experiences that drive success and instill trust.
      </p>
      <div className="flex space-x-6">
        <SocialLink icon={<FaGithub size={24} />} href="https://github.com/Bupalchow" label="Follow on GitHub" />
        <SocialLink icon={<FaLinkedin size={24} />} href="https://www.linkedin.com/in/bupal-chowdary-g-590060287/"  label="Follow on LinkedIn" />
        <SocialLink 
          icon={<FaWhatsapp size={24} />} 
          href="https://wa.me/+918951836088?text=Hello%20Bupal%2C%20I%27m%20contacting%20you%20from%20your%20portfolio" 
          label="Contact on WhatsApp" 
        />
      </div>

      <div className="mt-12">
        <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-teal-600 dark:text-teal-400 font-semibold mb-4">
          Featured Projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featuredProjects.map((project, index) => (
            <a
              key={project.title}
              href={getProjectUrl(project.link)}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/65 to-transparent p-3">
                  <p className="text-sm font-semibold text-white">
                    {`0${index + 1}`} • {project.title}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-5 flex justify-center sm:justify-start">
          <RouterLink
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 px-4 py-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:bg-teal-500/10 transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </RouterLink>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
      aria-label={label}
      target='_blank'
    >
      {icon}
    </a>
  );
};

export default Hero;