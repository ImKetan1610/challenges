import React, { useRef, useEffect } from "react";

const SoundPlayer = ({ soundFile }) => {
    console.log(soundFile)
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = soundFile;
      audioRef.current.load();
    }
  }, [soundFile]);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <audio ref={audioRef}></audio>
      <button onClick={playSound}>Play Alarm</button>
    </div>
  );
};

export default SoundPlayer;
