import React, { useState } from 'react';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="border-t border-gray-200 dark:border-black-700 text-sm text-center p-4 text-gray-600 dark:text-gray-400">
      <button
        className="sm:hidden text-blue-500 font-semibold mb-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Hide Links ▲' : 'Show Links ▼'}
      </button>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:block`}>
        <p>
        <span className="text-gray-800 dark:text-gray-100 font-medium"><b>Developed by</b></span>{' '}
          <a
            href="https://noor-malik-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-300 font-semibold hover:underline"
          >
            | Noor Malik
          </a>{' '}
          |{' '}
          <a
            href="https://www.linkedin.com/in/noormalik56500/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-300 hover:underline"
          >
            | LinkedIn
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/noormalik33"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-300 hover:underline"
          >
            | GitHub
          </a>{' '}
          |{' '}
          <a
            href="mailto:noormalik56500@gmail.com"
            className="text-blue-600 dark:text-blue-300 hover:underline"
          >
            | Email
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
