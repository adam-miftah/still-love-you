import { useMemo } from "react";

function Confetti({ show }) {
  const hearts = useMemo(() => {
    return Array.from({ length: 40 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: Math.random() * 2 + 3,
      rotate: Math.random() * 360,
      size: Math.random() * 18 + 18,
    }));
  }, []);

  if (!show) return null;

  return (
    <div className="confetti-container">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="confetti-heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            transform: `rotate(${heart.rotate}deg)`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}

export default Confetti;