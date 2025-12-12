import React from 'react';

interface AlertProps {
  type?: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

const typeStyles = {
  success: 'bg-green-100 text-green-800 border-green-400',
  error: 'bg-red-100 text-red-800 border-red-400',
  info: 'bg-blue-100 text-blue-800 border-blue-400',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-400',
};

const Alert: React.FC<AlertProps> = ({ type = 'info', message }) => (
  <div className={`border-l-4 p-4 mb-4 ${typeStyles[type]}`}>{message}</div>
);

export default Alert;
