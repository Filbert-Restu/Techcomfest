import React from 'react';
import Link from 'next/link';
import ThemeToggle from '../theme/theme-toggle';

const Navbar: React.FC = () => {
  // TODO: Hubungkan variabel ini dengan state autentikasi yang sebenarnya nanti
  const isLoggedIn = false;

  return (
    <nav className='w-full bg-[var(--mint-green)] shadow px-8 py-3 flex items-center justify-between'>
      <div className='font-bold text-lg'>TUNAS</div>
      <div className='space-x-4'>
        <Link href='/'>
          <span className='hover:underline'>Home</span>
        </Link>
        <Link href='/about'>
          <span className='hover:underline'>About</span>
        </Link>
        <Link href='/contact'>
          <span className='hover:underline'>Contact</span>
        </Link>
      </div>
      <div className='flex items-center gap-4'>
        <ThemeToggle />
        <div>
          {isLoggedIn ? (
            <div className='w-10 h-10 rounded-full bg-[var(--foreground)] flex items-center justify-center cursor-pointer text-[var(--butter-cream)] hover:opacity-90 transition'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-6 h-6'
              >
                <path
                  fillRule='evenodd'
                  d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          ) : (
            <div className='flex gap-3'>
              <Link
                href='/login'
                className='px-4 py-2 rounded-md border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--butter-cream)] transition'
              >
                Masuk
              </Link>
              <Link
                href='/register'
                className='px-4 py-2 rounded-md bg-[var(--foreground)] text-[var(--butter-cream)] hover:opacity-90 transition'
              >
                Daftar
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
