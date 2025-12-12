'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

function ModeToggleComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='px-4 py-2 rounded-lg text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--butter-cream)] bg-[var(--butter-cream)] transition-colors font-medium'
    >
      {theme === 'dark' ? '🌙 Dark' : '🌞 Light'}
    </button>
  );
}

// Export komponen dengan dynamic import & ssr: false
// Ini otomatis menangani masalah "mounted" tanpa perlu useState/useEffect manual
export default dynamic(() => Promise.resolve(ModeToggleComponent), {
  ssr: false,
  // (Opsional) Tampilkan kotak kosong/loading saat script belum dimuat di browser
  loading: () => (
    <div className='w-[120px] h-10 rounded-lg border border-[var(--foreground)] opacity-50 animate-pulse' />
  ),
});
