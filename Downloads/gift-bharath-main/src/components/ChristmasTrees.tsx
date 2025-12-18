const ChristmasTrees = () => {
  const trees = [
    { left: "5%", size: 80, delay: 0 },
    { left: "15%", size: 60, delay: 0.5 },
    { left: "85%", size: 75, delay: 0.3 },
    { left: "92%", size: 55, delay: 0.8 },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-5">
      {trees.map((tree, index) => (
        <div
          key={index}
          className="absolute bottom-0"
          style={{ left: tree.left }}
        >
          <svg
            width={tree.size}
            height={tree.size * 1.5}
            viewBox="0 0 80 120"
            className="drop-shadow-lg"
          >
            {/* Tree trunk */}
            <rect
              x="32"
              y="100"
              width="16"
              height="20"
              fill="hsl(25 50% 25%)"
              rx="2"
            />

            {/* Tree layers */}
            <polygon
              points="40,10 10,50 70,50"
              fill="hsl(var(--christmas-green))"
            />
            <polygon
              points="40,25 5,70 75,70"
              fill="hsl(var(--christmas-green))"
            />
            <polygon
              points="40,45 0,100 80,100"
              fill="hsl(var(--christmas-green))"
            />

            {/* Star on top */}
            <polygon
              points="40,0 42,8 50,8 44,13 46,21 40,16 34,21 36,13 30,8 38,8"
              fill="hsl(var(--christmas-gold))"
              className="animate-twinkle"
              style={{ animationDelay: `${tree.delay}s` }}
            />

            {/* Ornaments/lights */}
            {[
              { cx: 25, cy: 45, color: "christmas-red" },
              { cx: 55, cy: 50, color: "christmas-gold" },
              { cx: 35, cy: 65, color: "christmas-gold" },
              { cx: 50, cy: 75, color: "christmas-red" },
              { cx: 20, cy: 80, color: "christmas-gold" },
              { cx: 60, cy: 85, color: "christmas-red" },
              { cx: 40, cy: 90, color: "christmas-gold" },
            ].map((ornament, i) => (
              <circle
                key={i}
                cx={ornament.cx}
                cy={ornament.cy}
                r="4"
                fill={`hsl(var(--${ornament.color}))`}
                className="animate-twinkle"
                style={{
                  animationDelay: `${tree.delay + i * 0.2}s`,
                  animationDuration: "2s",
                }}
              />
            ))}
          </svg>
        </div>
      ))}
    </div>
  );
};

export default ChristmasTrees;
