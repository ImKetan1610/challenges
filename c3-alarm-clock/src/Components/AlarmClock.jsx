import React, { useState, useEffect } from 'react';
import Clock from 'react-clock';
import SoundPlayer from './SoundPlayer';

const AlarmClock = () => {
  const [alarmTime, setAlarmTime] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSetAlarm = () => {
    setIsPlaying(false);
    const alarmDate = new Date(alarmTime);
    const currentDate = new Date();
    const timeDifference = alarmDate - currentDate;

    if (timeDifference > 0) {
      setTimeout(() => {
        setIsPlaying(true);
      }, timeDifference);
    }
  };

  return (
    <div>
      <h1>Alarm Clock</h1>
      <div>
        <label htmlFor="alarmTime">Set Alarm:</label>
        <input
          type="time"
          id="alarmTime"
          value={alarmTime}
          onChange={(e) => setAlarmTime(e.target.value)}
        />
        <button onClick={handleSetAlarm}>Set</button>
      </div>
      <div>
        <p>Current Time: {currentTime.toLocaleTimeString()}</p>
        <Clock value={currentTime} />
        {isPlaying && <SoundPlayer soundFile="animal_jamal_kudu.mp3" />}
      </div>
    </div>
  );
};

export default AlarmClock;
