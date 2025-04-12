import React, { useState, useEffect } from 'react';
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
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  const links = [
    { name: 'About', path: '/about' },
    { name: 'Articles', path: '/articles' },
    { name: 'Projects', path: '/projects' },
    { name: 'Speaking', path: '/speaking' },
    { name: 'Uses', path: '/uses' }
  ];
  
  // Mobile navigation toggle
  if (mobileOnly) {
    return (
      <>
        {/* Simple hamburger menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Navigation Menu"
        >
          <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </button>
        
        {/* Mobile menu with improved z-index and solid background */}
        <div 
          className={`fixed top-0 left-0 w-screen h-screen z-[9999] transition-all duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Solid background overlay to prevent text bleed-through */}
          <div className="absolute inset-0 bg-white dark:bg-black opacity-95"></div>
          
          {/* Full width container with higher z-index */}
          <div className="relative z-[10000] flex flex-col h-full w-full">
            {/* Header with close button and theme toggle */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">Navigation</h2>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? 
                    <Sun className="w-5 h-5 text-amber-400" /> : 
                    <Moon className="w-5 h-5 text-gray-700" />
                  }
                </button>
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-gray-800 dark:text-white" />
                </button>
              </div>
            </div>
            
            {/* Navigation links with improved visibility */}
            <div className="flex flex-col flex-1 justify-center px-6 py-8 w-full bg-white dark:bg-black">
              <nav className="w-full">
                <ul className="space-y-4 w-full">
                  {links.map((link) => (
                    <li key={link.name} className="w-full">
                      <NavLink
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) => 
                          `block py-4 px-4 rounded-lg text-center text-xl font-medium transition-all w-full ${
                            isActive
                              ? 'bg-teal-50 text-teal-700 dark:bg-gray-800 dark:text-teal-400'
                              : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
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
            
            {/* Footer */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-800 w-full bg-white dark:bg-black">
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </>
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