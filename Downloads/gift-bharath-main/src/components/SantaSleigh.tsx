const SantaSleigh = () => {
  return (
    <div className="fixed top-20 left-0 animate-sleigh z-20 pointer-events-none">
      <div className="relative">
        {/* Sleigh */}
        <svg
          width="120"
          height="60"
          viewBox="0 0 120 60"
          className="drop-shadow-2xl"
        >
          {/* Reindeer */}
          <g transform="translate(-60, 15)">
            <ellipse cx="30" cy="20" rx="15" ry="10" fill="hsl(var(--christmas-red) / 0.8)" />
            <circle cx="45" cy="15" r="6" fill="hsl(var(--christmas-red) / 0.8)" />
            {/* Antlers */}
            <path d="M48 10 L55 2 M50 8 L54 5" stroke="hsl(var(--christmas-gold))" strokeWidth="2" fill="none" />
            <path d="M52 10 L59 2 M54 8 L58 5" stroke="hsl(var(--christmas-gold))" strokeWidth="2" fill="none" />
            {/* Legs */}
            <line x1="20" y1="28" x2="18" y2="38" stroke="hsl(var(--christmas-red) / 0.8)" strokeWidth="3" />
            <line x1="35" y1="28" x2="37" y2="38" stroke="hsl(var(--christmas-red) / 0.8)" strokeWidth="3" />
          </g>
          
          {/* Reins */}
          <path d="M-15 25 Q30 20 50 30" stroke="hsl(var(--christmas-gold))" strokeWidth="1.5" fill="none" />
          
          {/* Sleigh body */}
          <path
            d="M45 35 Q40 25 50 20 L100 20 Q115 20 115 35 L115 45 Q115 50 110 50 L50 50 Q45 50 45 45 Z"
            fill="hsl(var(--christmas-red))"
            className="drop-shadow-lg"
          />
          
          {/* Sleigh runner */}
          <path
            d="M40 52 Q45 55 55 55 L105 55 Q115 55 120 50"
            stroke="hsl(var(--christmas-gold))"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Santa */}
          <circle cx="75" cy="15" r="10" fill="#FFE4C4" /> {/* Face */}
          <circle cx="75" cy="8" r="12" fill="hsl(var(--christmas-red))" /> {/* Hat */}
          <circle cx="85" cy="3" r="4" fill="hsl(var(--christmas-snow))" /> {/* Pom */}
          <ellipse cx="75" cy="30" rx="12" ry="10" fill="hsl(var(--christmas-red))" /> {/* Body */}
          
          {/* Gift bags */}
          <rect x="90" y="25" width="15" height="18" rx="2" fill="hsl(var(--christmas-green))" />
          <rect x="85" y="28" width="10" height="12" rx="2" fill="hsl(var(--christmas-gold))" />
        </svg>
        
        {/* Trail sparkles */}
        <div className="absolute -right-2 top-1/2 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-christmas-gold animate-twinkle"
              style={{
                animationDelay: `${i * 0.2}s`,
                opacity: 1 - i * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SantaSleigh;
