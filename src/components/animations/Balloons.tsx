
import React from 'react';

const Balloons = () => {
  const balloons = [
    { color: '#87CEEB', left: '10%', delay: 0 },
    { color: '#FFD700', left: '20%', delay: 2 },
    { color: '#C8A2C8', left: '35%', delay: 1 },
    { color: '#87CEEB', left: '60%', delay: 3 },
    { color: '#C8A2C8', left: '75%', delay: 1.5 },
    { color: '#FFD700', left: '90%', delay: 0.5 },
  ];

  return (
    <div className="fixed top-0 left-0 w-full pointer-events-none z-0">
      {balloons.map((balloon, index) => (
        <div 
          key={index}
          className="absolute balloon animate-float"
          style={{
            left: balloon.left,
            animationDelay: `${balloon.delay}s`,
            top: '-30px'
          }}
        >
          <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0Z" fill={balloon.color} />
            <path d="M20 40L22 50H18L20 40Z" fill="#A0A0A0" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Balloons;
