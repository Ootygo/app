import React, { useState, useEffect, useRef } from 'react';
import './Time.css'

const Time = () => {
  const [timer, setTimer] = useState("00:00:00");
  const targetTime = Date.parse("2024-07-22T00:00:00"); // set time

  const getTimeRemaining = () => {
    const total = targetTime - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(total / (1000 * 60 * 60));
    return `${hours}:${minutes > 9 ? minutes : "0" + minutes}:${seconds > 9 ? seconds : "0" + seconds}`;
  };

  const startTimer = () => {
    setTimer(getTimeRemaining());
  };

  useEffect(() => {
    const intervalId = setInterval(startTimer, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>

      <div className='Timebar_contant'>

        <h2 className='Timebar_time_1'>Our Service Starting in </h2>

        <h2 className='Timebar_time_2'>{timer} Hrs</h2>
      </div>
      <div className='Timebar_contant_2'>
        <h2 className='Timebar_time_3'>Explore OOTY Highlights !</h2>
      </div>
    </>
  );
};

export default Time;
