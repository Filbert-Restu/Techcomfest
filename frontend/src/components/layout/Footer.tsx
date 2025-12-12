import React from 'react';

const Footer: React.FC = () => (
  <footer className='w-full py-4 px-8 bg-gray-800 text-gray-200 text-center mt-auto'>
    <span>
      &copy; {new Date().getFullYear()} TechComfest. All rights reserved.
    </span>
  </footer>
);

export default Footer;
