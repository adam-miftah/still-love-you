import { useEffect, useState } from "react";

function Typewriter({
  text,
  speed = 35,
  onComplete,
}) {

  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    setDisplayText("");
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setDisplayText(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(interval);
        if (onComplete) {
          setTimeout(() => {
            onComplete();
          }, 250);
        }
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text]);
  return <>{displayText}</>;
}

export default Typewriter;