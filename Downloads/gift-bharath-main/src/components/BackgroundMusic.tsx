import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const STORAGE_KEY = "music-enabled";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    const shouldPlay = saved === null ? true : saved === "true";

    if (audioRef.current) {
      audioRef.current.volume = 0.8;
      audioRef.current.loop = true;
      audioRef.current.preload = "auto";
      audioRef.current.playsInline = true as any;
    }

    if (shouldPlay && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, []);

  // If autoplay was blocked, try again on first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      const shouldPlay = saved === null ? true : saved === "true";
      if (shouldPlay && audioRef.current && !isPlaying) {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    };

    document.addEventListener("click", handleFirstInteraction, { once: true });
    document.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      localStorage.setItem(STORAGE_KEY, "false");
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          localStorage.setItem(STORAGE_KEY, "true");
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/jingle-bells-444574.mp3"
        preload="auto"
        // keep attributes to hint browser about autoplay intent
        autoPlay
        loop
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
