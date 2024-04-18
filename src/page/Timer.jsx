import React, { useState, useEffect } from 'react';
import './Time.css'

const Time = () => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + 4);

    const intervalId = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(intervalId);
        setCountdown('EXPIRED');
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>

      <div className='Timebar_contant'>
        
        <h1 className='Timebar_time_1'>Our Service Starting in </h1>
       
        <h1 className='Timebar_time_2'>{countdown}</h1>
      </div>
      <div className='Timebar_contant_2'>
        <h1 className='Timebar_time_3'>Explore OOTY Highlights !</h1>
      </div>
    </>
  );
};

export default Time;
