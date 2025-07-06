import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import {  Github, Linkedin} from 'lucide-react';

const Hero = () => {
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
        <SocialLink icon={<Github size={24} />} href="https://github.com/Bupalchow" label="Follow on GitHub" />
        <SocialLink icon={<Linkedin size={24} />} href="https://www.linkedin.com/in/bupal-chowdary-g-590060287/"  label="Follow on LinkedIn" />
        <SocialLink 
          icon={<FaWhatsapp size={24} />} 
          href="https://wa.me/+918951836088?text=Hello%20Bupal%2C%20I%27m%20contacting%20you%20from%20your%20portfolio" 
          label="Contact on WhatsApp" 
        />
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