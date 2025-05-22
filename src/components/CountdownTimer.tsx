
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(23, 59, 59, 999);
    
    const difference = midnight.getTime() - now.getTime();
    
    let timeLeft = {
      horas: 0,
      minutos: 0,
      segundos: 0
    };

    if (difference > 0) {
      timeLeft = {
        horas: Math.floor((difference / (1000 * 60 * 60))),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="bg-white/50 backdrop-blur-md py-4 px-6 rounded-lg shadow-lg border border-festive-gold/30 max-w-md mx-auto">
      <h3 className="text-center font-bold text-festive-purple mb-2">Tempo restante para enviar sua mensagem hoje:</h3>
      <div className="flex justify-center gap-4 text-center">
        <div className="bg-festive-blue/20 p-3 rounded-md min-w-[70px]">
          <span className="text-2xl font-bold text-festive-blue">{String(timeLeft.horas).padStart(2, '0')}</span>
          <p className="text-xs text-festive-purple/70">Horas</p>
        </div>
        <div className="bg-festive-purple/20 p-3 rounded-md min-w-[70px]">
          <span className="text-2xl font-bold text-festive-purple">{String(timeLeft.minutos).padStart(2, '0')}</span>
          <p className="text-xs text-festive-purple/70">Minutos</p>
        </div>
        <div className="bg-festive-gold/20 p-3 rounded-md min-w-[70px]">
          <span className="text-2xl font-bold text-festive-gold">{String(timeLeft.segundos).padStart(2, '0')}</span>
          <p className="text-xs text-festive-purple/70">Segundos</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
