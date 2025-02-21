import React from 'react';

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 ${className}`}>
      {children}
    </div>
  );
};