import { createContext, useState, useContext, useRef, useEffect } from "react";

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Create and configure audio element
  useEffect(() => {
    audioRef.current = new Audio("/music/ambient music.mp3");
    audioRef.current.volume = 0.2;
    audioRef.current.loop = true;

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        playAudio,
        pauseAudio,
        audioRef,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export default AudioProvider;
