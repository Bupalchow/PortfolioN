import React, { useState } from 'react';
import { Calendar, Briefcase, Award, Mail, ArrowRight, Star } from 'lucide-react';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'work' | 'education' | 'achievement' | 'event';
}

const timelineData: TimelineItem[] = [
  {
    date: 'Mar 2025 - May 2025',
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
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '6e6d5eec-f51b-436c-8813-97e43458bbae', 
          email,
          subject: 'Next Task Lead',
          message: `Potential Client: ${email}`,
          from_name: 'Timeline Form'
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

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
          {/* Future timeline item with email subscription - now at the TOP and on LEFT */}
          <div className="relative flex items-start">
            {/* Timeline dot - using a star icon to make it special */}
            <div className="absolute left-5 sm:left-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-4 border-teal-500 shadow-md flex items-center justify-center transform -translate-x-1/2 z-10">
              <Star className="h-5 w-5 text-teal-500" />
            </div>
            
            {/* Content - LEFT side */}
            <div className="ml-16 sm:ml-auto sm:pl-8 sm:pr-0 w-full sm:w-5/12">
              <div className="group relative">
                <div className="absolute -inset-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative bg-white dark:bg-gray-800 p-5 rounded-lg border  dark:border-gray-700 shadow-sm border-teal-200 dark:border-teal-800/30">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span className="text-teal-600 dark:text-teal-400 font-medium">Future</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Lets start a new journey.
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I'm always looking for exciting opportunities and collaborations. If you want to work together just drop your email below and I will get back to you as soon as possible.
                  </p>
                  
                  <form onSubmit={handleSubscribe} className="mt-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-3 w-full py-2.5 px-5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium flex items-center justify-center transition-colors"
                    >
                      {isSubmitting ? 'Sending...' : 'Join My Journey'}
                      {!isSubmitting && <ArrowRight size={18} className="ml-2" />}
                    </button>
                    
                    {submitStatus === 'success' && (
                      <div className="mt-3 text-sm text-green-600 dark:text-green-400 text-center">
                        Exciting! Looking forward to connecting with you.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="mt-3 text-sm text-red-600 dark:text-red-400 text-center">
                        Something went wrong. Please try again.
                      </div>
                    )}
                  </form>
                  
                  <div className="absolute top-0 right-0 mt-4 mr-4 px-2 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
                    Collaboration
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Existing timeline items - unchanged */}
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
