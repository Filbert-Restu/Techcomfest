import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className='relative w-full bg-[var(--mint-green)] overflow-hidden pt-10 pb-24 md:pt-20 md:pb-32'>
      {/* Dekorasi Latar Belakang (Lingkaran-lingkaran pudar) */}
      <div className='absolute top-[-50px] right-[-50px] w-40 h-40 md:w-64 md:h-64 bg-[var(--coral-pink)] rounded-full opacity-40 blur-3xl'></div>
      <div className='absolute bottom-10 left-[-50px] w-40 h-40 md:w-64 md:h-64 bg-[var(--lavender)] rounded-full opacity-40 blur-3xl'></div>

      <div className='container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between relative z-10'>
        {/* Bagian Teks */}
        <div className='w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0'>
          <div className='inline-block px-4 py-1 mb-4 rounded-full bg-[var(--butter-cream)] text-[var(--foreground)] font-bold text-sm shadow-sm border border-[var(--foreground)]'>
            🌱 Halo Sahabat Alam!
          </div>
          <h1 className='text-4xl md:text-6xl font-extrabold text-[var(--foreground)] mb-6 leading-tight'>
            Jelajahi Dunia <br />
            <span className='text-[var(--coral-pink)] drop-shadow-sm'>
              Tanaman
            </span>{' '}
            &{' '}
            <span className='text-[var(--foreground)] text-opacity-80'>
              Ajaib!
            </span>{' '}
            🌻
          </h1>
          <p className='text-lg text-[var(--foreground)] mb-8 font-medium opacity-90 max-w-lg mx-auto md:mx-0'>
            Kenali biji monokotil & dikotil, rawat tanaman virtualmu, dan
            saksikan mereka tumbuh subur dengan kasih sayang.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
            <Link
              href='/garden'
              className='px-8 py-4 rounded-2xl bg-[var(--foreground)] text-[var(--butter-cream)] font-bold text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 flex items-center justify-center gap-2'
            >
              <span>🚿</span> Mulai Berkebun
            </Link>
            <Link
              href='/learn'
              className='px-8 py-4 rounded-2xl bg-[var(--background)] border-2 border-[var(--foreground)] text-[var(--foreground)] font-bold text-lg hover:bg-[var(--butter-cream)] transition-colors duration-200'
            >
              Belajar Botani
            </Link>
          </div>
        </div>

        {/* Bagian Ilustrasi / Gambar */}
        <div className='w-full md:w-1/2 flex justify-center relative'>
          <div className='relative w-64 h-64 md:w-96 md:h-96 bg-[var(--butter-cream)] rounded-full border-8 border-[var(--foreground)] flex items-center justify-center shadow-2xl'>
            {/* Emoji Besar sebagai pengganti ilustrasi */}
            <span className='text-9xl animate-bounce'>🪴</span>

            {/* Elemen melayang */}
            <div className='absolute -top-4 -right-4 bg-[var(--coral-pink)] p-4 rounded-2xl border-4 border-[var(--foreground)] shadow-lg rotate-12'>
              <span className='text-3xl'>💧</span>
            </div>
            <div className='absolute bottom-10 -left-8 bg-[var(--lavender)] p-3 rounded-full border-4 border-[var(--foreground)] shadow-lg -rotate-12'>
              <span className='text-3xl'>☀️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gelombang Bawah (Opsional, untuk transisi halus ke konten bawah) */}
      <div className='absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[var(--background)] to-transparent'></div>
    </section>
  );
};

export default Hero;
