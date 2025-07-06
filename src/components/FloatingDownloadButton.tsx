import React from 'react';
import { Download } from 'lucide-react';

const FloatingDownloadButton = () => {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Bupal Chowdary.pdf';
    link.download = 'Bupal_Chowdary_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={handleDownloadResume}
      className="fixed bottom-6 right-6 z-50 group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
      aria-label="Download Resume"
    >
      <Download className="h-5 w-5" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Download Resume
        <div className="absolute top-full right-4 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
      </div>
    </button>
  );
};

export default FloatingDownloadButton;
