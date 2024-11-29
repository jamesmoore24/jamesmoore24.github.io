import React, { useEffect, useState } from 'react';

export const Sunrise = () => {
  const [isRisen, setIsRisen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsRisen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-orange-500 via-pink-300 to-blue-400 transition-transform duration-2000 ease-out ${
          isRisen ? 'translate-y-0' : 'translate-y-full'
        }`}
      />
      <div 
        className={`absolute w-32 h-32 rounded-full bg-yellow-300 left-1/2 -translate-x-1/2 transition-all duration-2000 ease-out ${
          isRisen ? 'bottom-2/3' : '-bottom-32'
        } ${
          isRisen ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          boxShadow: '0 0 100px 20px rgba(255, 204, 0, 0.5)'
        }}
      />
    </div>
  );
};