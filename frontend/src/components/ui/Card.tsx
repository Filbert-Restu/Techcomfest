import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => (
  <div className='bg-white rounded shadow p-6 mb-4'>
    <h2 className='text-xl font-semibold mb-2'>{title}</h2>
    <div>{children}</div>
  </div>
);

export default Card;
