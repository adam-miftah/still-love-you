import { useEffect, useRef, useState } from "react";

import music from "../assets/music/background.mp3";

function MusicButton() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.35;

    audio.loop = true;
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={music}
      />

      <button
        className={`music-button ${isPlaying ? "playing" : ""}`}
        onClick={toggleMusic}
      >
        {isPlaying ? "🎵" : "🔇"}
      </button>
    </>
  );
}

export default MusicButton;