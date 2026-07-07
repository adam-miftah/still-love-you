import { useMemo } from "react";

function FloatingHearts() {
  const hearts = useMemo(() => {
    return Array.from({ length: 18 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      size: Math.random() * 18 + 12,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.35 + 0.1,
    }));
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;