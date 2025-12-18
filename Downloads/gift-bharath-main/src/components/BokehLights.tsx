import { useEffect, useState } from "react";

interface Light {
  id: number;
  left: number;
  top: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

const BokehLights = () => {
  const [lights, setLights] = useState<Light[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(var(--christmas-gold) / 0.4)",
      "hsl(var(--christmas-red) / 0.3)",
      "hsl(var(--christmas-green) / 0.3)",
      "hsl(var(--christmas-snow) / 0.2)",
    ];

    const generatedLights: Light[] = [];
    const count = window.innerWidth < 768 ? 15 : 25;

    for (let i = 0; i < count; i++) {
      generatedLights.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 150 + 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 4 + 4,
        delay: Math.random() * 3,
      });
    }
    setLights(generatedLights);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {lights.map((light) => (
        <div
          key={light.id}
          className="absolute rounded-full animate-pulse-glow"
          style={{
            left: `${light.left}%`,
            top: `${light.top}%`,
            width: `${light.size}px`,
            height: `${light.size}px`,
            background: `radial-gradient(circle, ${light.color} 0%, transparent 70%)`,
            animationDuration: `${light.duration}s`,
            animationDelay: `${light.delay}s`,
            filter: "blur(20px)",
          }}
        />
      ))}
    </div>
  );
};

export default BokehLights;
