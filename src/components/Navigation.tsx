import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Moon, Sun, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavigationProps {
  headerOnly?: boolean;
  mobileOnly?: boolean;
  dropdownMode?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ 
  headerOnly = false, 
  mobileOnly = false,
  dropdownMode = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.addEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  const links = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Blogs', path: '/blogs' },
  ];
  
  // Mobile navigation toggle with dropdown
  if (mobileOnly) {
    return (
      <div className="relative" ref={dropdownRef}>
        {/* Hamburger menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Navigation Menu"
        >
          <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </button>
        
        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 animate-fadeIn">
              <div className="flex items-center gap-2 justify-end p-2">
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? 
                    <Sun className="w-4 h-4" /> : 
                    <Moon className="w-4 h-4 text-gray-700" />
                  }
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
            </div>
            
            <nav className="p-2">
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) => 
                        `flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all ${
                          isActive
                            ? 'bg-teal-50 text-teal-700 dark:bg-gray-700 dark:text-teal-400'
                            : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    );
  }

  // Dropdown navigation (when scrolled)
  if (dropdownMode) {
    return (
      <nav>
        <ul className="py-2">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink 
                to={link.path}
                className={({ isActive }) => 
                  `block px-4 py-2 text-sm transition-colors
                  ${isActive 
                    ? 'text-teal-500 dark:text-teal-400 bg-gray-50 dark:bg-gray-700' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  // Desktop navigation
  if (headerOnly) {
    return (
      <nav className="hidden sm:block">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-6 py-2 border border-gray-200 dark:border-gray-700 shadow-sm">
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => 
                    `relative px-1 py-1 transition-all duration-300 
                    ${isActive 
                      ? 'text-teal-500 dark:text-teal-400' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent shadow-[0_4px_6px_-1px_rgba(20,184,166,0.6)] dark:shadow-[0_4px_8px_-1px_rgba(45,212,191,0.7)]"></span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }

  // Footer navigation
  return (
    <nav>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink 
              to={link.path}
              className={({ isActive }) => 
                `text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300
                ${isActive ? 'text-teal-500 dark:text-teal-400 font-medium' : ''} hover:scale-105 inline-block`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;