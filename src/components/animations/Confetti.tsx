
import React, { useEffect, useState } from 'react';

const Confetti = () => {
  const [confetti, setConfetti] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    const colors = [
      '#87CEEB', // azul claro
      '#FFD700', // dourado
      '#C8A2C8', // lilás
      '#FFFFFF', // branco
    ];
    
    const newConfetti = [];
    
    for (let i = 0; i < 50; i++) {
      const left = Math.random() * 100;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const delay = Math.random() * 5;
      const duration = 3 + Math.random() * 3;
      const size = 5 + Math.random() * 15;
      const shape = Math.random() > 0.5 ? 'rounded-full' : 'rounded-sm';
      const rotate = Math.random() * 360;
      
      newConfetti.push(
        <div
          key={i}
          className={`confetti ${shape}`}
          style={{
            left: `${left}%`,
            backgroundColor: color,
            width: `${size}px`,
            height: `${size}px`,
            animation: `confetti-fall ${duration}s ease-in-out forwards`,
            animationDelay: `${delay}s`,
            transform: `rotate(${rotate}deg)`,
          }}
        />
      );
    }
    
    setConfetti(newConfetti);
  }, []);

  return <div className="confetti-container">{confetti}</div>;
};

export default Confetti;
