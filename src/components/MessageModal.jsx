import { useEffect, useState } from "react";
import Typewriter from "./Typewriter";

const messages = [
  {
    title: "Oke...",
    description: [
      "Jadi lu nanya...",
      '"Masih suka?"',
      "Jawabannya..."
    ],
    highlight: "Masih."
  },
  {
    title: "Harusnya sih gampang.",
    description: [
      'Tinggal jawab "Iya".',
      "Kirim lewat WhatsApp.",
      "Udah selesai."
    ]
  },
  {
    title: "Tapi...",
    description: [
      "Entah kenapa...",
      "Gue malah buka VS Code.",
      "Terus bikin website ini 😂"
    ]
  },
  {
    title: "Tenang.",
    description: [
      "Website ini bukan buat maksa.",
      "Bukan juga biar lu ngerasa nggak enak.",
      "Lu nanya.",
      "Gue cuma jawab."
    ]
  },
  {
    title: "Kalau ditanya...",
    description: [
      '"Kenapa masih suka?"',
      "Ya...",
      "Karena emang belum ilang aja dan gua ga gampang buat ilangin rasa yang udah ada.",
      "Sesimpel itu."
    ]
  },
  {
    title: "Udah itu aja.",
    description: [
      "Jadi...",
      "Kalau nanti lu nanya lagi...",
      '"Masih suka?"'
    ],
    highlight: "Masih"
  }
];

function MessageModal({
  isOpen,
  onClose,
  onFinish
}) {

  const [current, setCurrent] = useState(0);
  const [step, setStep] = useState(0);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {

    if (!isOpen) {

      setCurrent(0);
      setStep(0);
      setCanNext(false);

    }

  }, [isOpen]);

  const resetTyping = () => {

    setStep(0);
    setCanNext(false);

  };

  const handleNext = () => {

    if (!canNext) return;

    if (current < messages.length - 1) {

      setCurrent(prev => prev + 1);

      resetTyping();

      return;

    }

    if (onFinish) {

      onFinish();

    }

  };

  const handlePrevious = () => {

    if (current === 0) return;

    setCurrent(prev => prev - 1);

    resetTyping();

  };

  useEffect(() => {

    if (!isOpen) return;

    const handleKeyDown = (e) => {

      if (e.key === "Escape") {

        onClose();

      }

      if (e.key === "ArrowRight" && canNext) {

        handleNext();

      }

      if (e.key === "ArrowLeft") {

        handlePrevious();

      }

    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {

      window.removeEventListener("keydown", handleKeyDown);

    };

  }, [isOpen, current, canNext]);

  if (!isOpen) return null;

  const page = messages[current];

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <button
          className="modal-close"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="modal-progress">

          {messages.map((_, index) => (

            <span
              key={index}
              className={
                index <= current
                  ? "progress-dot active"
                  : "progress-dot"
              }
            />

          ))}

        </div>

        <span className="modal-counter">

          {current + 1} / {messages.length}

        </span>

        <h2 className="modal-title">

          {page.title}

        </h2>

        <div className="modal-content">

          <p>

            <Typewriter
              key={`1-${current}`}
              text={page.description[0]}
              speed={35}
              onComplete={() => {

                setStep(1);

              }}
            />

          </p>

          {step >= 1 && page.description[1] && (

            <p>

              <Typewriter
                key={`2-${current}`}
                text={page.description[1]}
                speed={35}
                onComplete={() => {

                  setStep(2);

                }}
              />

            </p>

          )}

          {step >= 2 && page.description[2] && (

            <p>

              <Typewriter
                key={`3-${current}`}
                text={page.description[2]}
                speed={35}
                onComplete={() => {

                  setStep(3);

                  if (!page.description[3] && !page.highlight) {

                    setCanNext(true);

                  }

                }}
              />

            </p>

          )}           {step >= 3 && page.description[3] && (

            <p>

              <Typewriter
                key={`4-${current}`}
                text={page.description[3]}
                speed={35}
                onComplete={() => {

                  setStep(4);

                  if (!page.highlight) {

                    setCanNext(true);

                  }

                }}
              />

            </p>

          )}

          {((step >= 4 && page.description[3]) || (step >= 3 && !page.description[3])) && page.highlight && (

            <h1 className="modal-highlight">

              <Typewriter
                key={`highlight-${current}`}
                text={page.highlight}
                speed={60}
                onComplete={() => {

                  setCanNext(true);

                }}
              />

            </h1>

          )}

        </div>

        <div className="modal-footer">

          <button
            className="modal-back"
            onClick={handlePrevious}
            disabled={current === 0}
          >

            ←

          </button>

          <button
            className={`modal-next ${!canNext ? "disabled" : ""}`}
            onClick={handleNext}
            disabled={!canNext}
          >

            {current === messages.length - 1
              ? "Selesai"
              : "→"}

          </button>

        </div>

      </div>

    </div>

  );

}

export default MessageModal;