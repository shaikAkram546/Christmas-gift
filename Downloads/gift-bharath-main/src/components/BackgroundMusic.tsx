import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8;
      audioRef.current.loop = true;
    }
  }, []);

  // Try to play on first user interaction with the page
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        setHasInteracted(true);
        audioRef.current.play()
          .then(() => setIsPlaying(false))
          .catch(console.log);
      }
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(console.log);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/jingle-bells-444574.mp3"
        preload="auto"
      />
      <button
        onClick={togglePlay}
        className="fixed top-4 right-4 z-50 p-3 rounded-full glass-strong border border-christmas-gold/30 hover:border-christmas-gold/60 transition-all duration-300 hover:scale-110 group"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-christmas-gold animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5 text-christmas-gold/70 group-hover:text-christmas-gold" />
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;
