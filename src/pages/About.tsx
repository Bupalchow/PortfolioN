import React from 'react';
import { Mail, Twitter, Github, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            I'm Bupal Chowdary. I live in Banglore, where I design the future.
          </h1>
          
          <div className="space-y-6 text-base text-gray-600 dark:text-gray-400">
            <p>
              Creating has been my lifelong passion, and when I received my first laptop, it opened a world of possibilities that instantly captivated me. I was fascinated by the idea of building something from scratch, and I quickly immersed myself in the world of programming. I realized that I could create anything I could imagine. 
            </p>
            
            <p>
              I am a software engineer with a passion for creating beautiful and functional web applications. I specialize in front-end development, focusing on building responsive and user-friendly interfaces using modern technologies like React, TypeScript, and Tailwind CSS.
            </p>
            
            <p>
              Beyond coding, I divide my time between exploring emerging technologies, taking on freelance projects, and unwinding through hikes in the breathtaking landscapes surrounding Bangalore. I'm driven by an insatiable curiosity and commitment to continuous learning, constantly pushing the boundaries of what can be achieved in creating exceptional digital experiences.
            </p>
            <p>
              I am always open to new opportunities and collaborations. If you have an idea or project in mind, feel free to reach out!
            </p>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
            <div className="flex space-x-6">
              <SocialLink href="#" icon={<Twitter />} label="Follow on Twitter" />
              <SocialLink href="#" icon={<Github />} label="Follow on GitHub" />
              <SocialLink href="#" icon={<Linkedin />} label="Follow on LinkedIn" />
              <SocialLink href="mailto:bupalchowdary06@gmail.com" icon={<Mail />} label="spencer@planetaria.tech" />
            </div>
          </div>
        </div>
        
        <div>
          <img
            src="https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=1000&fit=crop"
            alt="Spencer in a space suit"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => {
  return (
    <a
      href={href}
      className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default About;