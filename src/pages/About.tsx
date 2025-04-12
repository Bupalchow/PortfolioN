import React from 'react';
import { Mail, Twitter, Github, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-8">
            I'm Spencer Sharp. I live in New York City, where I design the future.
          </h1>
          
          <div className="space-y-6 text-base text-gray-600 dark:text-gray-400">
            <p>
              I've loved making things for as long as I can remember, and wrote my first program when I
              was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550
              that I taught myself to type on.
            </p>
            
            <p>
              The only thing I loved more than computers as a kid was space. When I was 8, I climbed
              the 40-foot oak tree at the back of our yard while wearing my older sister's motorcycle
              helmet, counted down from three, and jumped — hoping the tree was tall enough that with
              just a bit of momentum I'd be able to get to orbit.
            </p>
            
            <p>
              I spent the next few summers indoors working on a rocket design, while I recovered from
              the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but
              when I was 15 I sent my dad's Blackberry into orbit and was able to transmit a photo
              back down to our family computer from space.
            </p>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
            <div className="flex space-x-6">
              <SocialLink href="#" icon={<Twitter />} label="Follow on Twitter" />
              <SocialLink href="#" icon={<Github />} label="Follow on GitHub" />
              <SocialLink href="#" icon={<Linkedin />} label="Follow on LinkedIn" />
              <SocialLink href="mailto:spencer@planetaria.tech" icon={<Mail />} label="spencer@planetaria.tech" />
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