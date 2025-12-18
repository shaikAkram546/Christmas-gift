import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = [];
    const count = window.innerWidth < 768 ? 40 : 80;

    for (let i = 0; i < count; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.6 + 0.4,
      });
    }
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake absolute"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            backgroundColor: "hsl(var(--christmas-snow))",
            borderRadius: "50%",
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            opacity: flake.opacity,
            boxShadow: `0 0 ${flake.size * 2}px hsl(var(--christmas-snow) / 0.5)`,
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;
