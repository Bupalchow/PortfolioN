import React from 'react';
import { Calendar } from 'lucide-react';

const events = [
  {
    title: 'In space, no one can watch you stream',
    description: 'A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting video data from space to Earth.',
    event: 'SysConf 2024',
    date: 'March 14, 2024',
    location: 'Los Angeles, CA',
  },
  {
    title: 'The Future of Space Travel',
    description: 'A presentation on the future of civilian space exploration and the technology that will make it possible.',
    event: 'Space Tech Summit',
    date: 'April 23, 2024',
    location: 'Houston, TX',
  },
  {
    title: 'Building for the Stars',
    description: 'Join me for a discussion about building software for space applications and the unique challenges it presents.',
    event: 'DevWorld Conference',
    date: 'May 5, 2024',
    location: 'San Francisco, CA',
  },
];

const Speaking = () => {
  return (
    <div className="py-16 sm:py-20">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8">
        I've spoken at events all around the world and been interviewed for many podcasts.
      </h1>
      
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        One of my favorite ways to share my ideas is live on stage, where there's so much more room for interaction and connection.
      </p>
      
      <div className="mt-16 space-y-20">
        {events.map((event) => (
          <div key={event.title} className="group relative grid grid-cols-1 gap-8 sm:grid-cols-8">
            <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-gray-50 dark:bg-gray-800/50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl" />
            <div className="relative z-10 sm:col-span-6">
              <h3 className="text-2xl font-bold tracking-tight">{event.title}</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{event.event}</p>
              <p className="mt-4 text-base text-gray-600 dark:text-gray-400">{event.description}</p>
            </div>
            <div className="relative z-10 sm:col-span-2">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                {event.date}
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speaking;