import React, { useState, useEffect } from 'react';
import { Moon, Sun, ChevronDown, ChevronUp } from 'lucide-react';
import Navigation from './Navigation';
import { useTheme } from '../context/ThemeContext';
import { useNavigate, useLocation } from "react-router-dom";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  // Links data - keep this in sync with Navigation component
  const links = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    // { name: 'Speaking', path: '/speaking' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Blogs', path: '/blogs' }
  ];

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active route
  useEffect(() => {
    const currentPath = location.pathname;
    // Default to home if on root path
    if (currentPath === '/') {
      setActiveLink('Home');
      return;
    }
    // Find the active link
    const active = links.find(link => currentPath.startsWith(link.path));
    if (active) {
      setActiveLink(active.name);
    }
  }, [location]);

  return (
    <div className={`min-h-screen flex justify-center ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Center container with white/dark background */}
      <div className="w-full max-w-6xl bg-white dark:bg-[#111111] text-gray-900 dark:text-white transition-colors duration-200">
        {/* Regular header with logo and theme toggle */}
        <header className="backdrop-blur-sm transition-all duration-300 relative">
          <nav className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Profile image */}
              <div className="flex-shrink-0">
                <img 
                  src="/Logo.png"
                  alt="Profile"
                  onClick={() => navigate('/')}
                  className="w-16 h-16 rounded-full cursor-pointer mt-3 ml-4"
                />
              </div>

              {/* Centered navigation with transition */}
              <div className="hidden sm:flex flex-1 justify-center px-4">
                <div className={`transition-opacity duration-300 ${!isScrolled ? 'opacity-100' : 'opacity-0 absolute -z-10'}`}>
                  <Navigation headerOnly={true} />
                </div>
              </div>

              {/* Mobile menu button - positioned with z-index to ensure modal can overlay everything */}
              <div className="sm:hidden z-10 relative">
                <Navigation headerOnly={true} mobileOnly={true} />
              </div>

              {/* Theme toggle - desktop only */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-fSDull hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hidden sm:flex"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </header>
        
        {/* Sticky dropdown navigation with transition */}
        <div className={`sticky top-4 z-50 transition-all duration-300 flex justify-end px-4 sm:px-6 lg:px-8 ${
          isScrolled ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10 pointer-events-none'
        }`}>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 shadow-md transition-all duration-200 hover:shadow-lg"
            >
              <span className="text-teal-500 dark:text-teal-400">{activeLink}</span>
              {isDropdownOpen ? 
                <ChevronUp className="h-4 w-4" /> : 
                <ChevronDown className="h-4 w-4" />
              }
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden animate-fadeIn">
                <Navigation headerOnly={true} dropdownMode={true} />
              </div>
            )}
          </div>
        </div>
        
        <main className="px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        
        <footer className="mt-20 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap justify-center sm:justify-start">
                <Navigation headerOnly={false} />
              </div>
              <p className="text-sm text-gray-500">© 2025 Bupal Chowdary. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;