import { useEffect, useState } from "react";

function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Memulai...");

  useEffect(() => {
    const steps = [
      {
        value: 15,
        text: "Mencari jawaban...",
      },
      {
        value: 35,
        text: "Mengingat percakapan...",
      },
      {
        value: 60,
        text: "Memastikan jawaban jujur...",
      },
      {
        value: 85,
        text: "Hampir selesai...",
      },
      {
        value: 100,
        text: "Jawaban siap."
      }
    ];

    let index = 0;

    const timer = setInterval(() => {

      if (index >= steps.length) {

        clearInterval(timer);

        setTimeout(() => {

          onFinish();

        }, 700);

        return;
      }

      setProgress(steps[index].value);

      setStatus(steps[index].text);

      index++;

    }, 600);

    return () => clearInterval(timer);

  }, [onFinish]);

  return (

    <div className="loading-overlay">

      <div className="loading-card">

        <span className="loading-badge">
          Loading...
        </span>

        <h2>
          Sebentar...
        </h2>

        <p>
          Lagi nyiapin jawaban.
        </p>

        <div className="loading-bar">

          <div
            className="loading-progress"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="loading-percent">

          {progress}%

        </div>

        <div className="loading-status">

          {status}

        </div>

      </div>

    </div>

  );

}

export default LoadingScreen;