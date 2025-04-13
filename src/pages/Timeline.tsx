import React from 'react';
import { Calendar, Briefcase, Award } from 'lucide-react';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'work' | 'education' | 'achievement' | 'event';
}

const timelineData: TimelineItem[] = [
    {
        date: 'Mar 2025 - present',
        title: 'Freelancer',
        description: 'Developing Level Up design Studio\'s  portfolio website to establish a strong online presence. ',
        icon: <Briefcase className="h-5 w-5" />,
        category: 'work'
      },
  {
    date: 'Dec 2024 - Jan 2025',
    title: 'React Freelancer',
    description: 'Collaborated with a start-up from the VIT Vellore Incubation Center to build over 15 web pages using React, Tailwind CSS, and Framer Motion. ',
    icon: <Briefcase className="h-5 w-5" />,
    category: 'work'
  },
  {
    date: 'mar 2024',
    title: 'Amd AI Hackathon',
    description: 'Participated in a hackathon focused on AI and machine learning, where I collaborated with a team and won KR260.',
    icon: <Award className="h-5 w-5" />,
    category: 'achievement'
  },
  {
    date: 'feb 2024',
    title: 'The Realm of IOT applications and beyond',
    description: 'completed 3 days Value Added Course on “The Realm of IOT applications and beyond” from 7th Feb to 9th Feb 2024 organized by Department of Electronics and Communication Engineering in association with Robo RAM',
    icon: <Calendar className="h-5 w-5" />,
    category: 'event'
  },
  {
    date: 'Nov 2023',
    title: 'Unfold 2023',
    description: 'Participted in my second hackathon and developed an web3 based event organization application',
    icon: <Calendar className="h-5 w-5" />,
    category: 'event'
  },
  {
    date: 'sept 2023',
    title: 'Event Check-in Coordinator',
    description: 'Served as the event check-in coordinator during the Flow Hackathon organized by WEB3FORALL during my internship. ',
    icon: <Briefcase className="h-5 w-5" />,
    category: 'work'
  },
  {
    date: 'Aug 2023- Nov 2023',
    title: 'Intern at WEB3FORALL',
    description: 'My very first internship at a startup where I worked on a improving my web3 skills and learning about the latest trends in blockchain technology.',
    icon: <Briefcase className="h-5 w-5" />,
    category: 'work'
  },
  {
    date: 'June 2023',
    title: 'Ur-Hackathon 3.0 Winner',
    description: 'Participated in my very first hackathon and won a prize with my team for developing a charity Dapp in Internet Computer.',
    icon: <Award className="h-5 w-5" />,
    category: 'achievement'
  }
];

const Timeline = () => {
  return (
    <div className="py-16 sm:py-20">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8">
        My Journey
      </h1>
      
      <p className="mt-4 text-gray-600 dark:text-gray-400 mb-12">
        A timeline of my career progression, education, and achievements in the world of software development.
      </p>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 sm:left-1/2 h-full w-0.5 bg-gradient-to-b from-teal-400 via-teal-500 to-gray-200 dark:to-gray-800 transform -translate-x-1/2"></div>
        
        {/* Timeline items */}
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <div 
              key={index}
              className={`relative flex items-start ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-5 sm:left-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-4 border-teal-500 shadow-md flex items-center justify-center transform -translate-x-1/2 z-10">
                {item.icon}
              </div>
              
              {/* Content */}
              <div 
                className={`ml-16 sm:ml-0 ${
                  index % 2 === 0 
                    ? 'sm:mr-auto sm:pr-8 sm:pl-0 sm:text-right' 
                    : 'sm:ml-auto sm:pl-8 sm:pr-0'
                } w-full sm:w-5/12`}
              >
                <div className="group relative">
                  <div className="absolute -inset-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                    
                    <div className={`absolute top-0 right-0 mt-4 mr-4 px-2 py-1 rounded-full text-xs font-medium ${
                      item.category === 'work' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
                        : item.category === 'education' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : item.category === 'event'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                    }`}>
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
