import React, { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ open, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (open && canvasRef.current) {
      const myConfetti = confetti.create(canvasRef.current, {
        resize: true,
        useWorker: true,
      });
      const duration = 2 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
      };
      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }
      const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        myConfetti({
          ...defaults,
          particleCount: 150,
          origin: {
            x: randomInRange(0.1, 0.9),
            y: Math.random() - 0.2,
          },
          colors: [
            "#ff1744", // bright red
            "#ffea00", // vivid yellow
            "#00e676", // neon green
            "#00b0ff", // bright blue
            "#f500ff", // magenta
            "#ff9100", // orange
            "#fff", // white
            "#ffd600", // gold
            "#00ffea", // cyan
            "#ff3d00", // orange red
            "#76ff03", // lime
            "#2979ff", // blue
            "#e040fb", // purple
            "#ff80ab", // pink
          ],
          alpha: 1,
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        background: "rgba(0,0,0,0.18)",
        backdropFilter: "blur(2px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "fadeInBg 0.4s",
      }}
    >
      {/* Confetti Canvas on Top Layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 10001,
        }}
      />
      <div
        style={{
          background: "#fff",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 32px rgba(0,0,0,0.13), 0 1.5px 0 #fff7",
          padding: "2.5rem 2.2rem 2.2rem 2.2rem",
          textAlign: "center",
          minWidth: 340,
          maxWidth: "90vw",
          animation: "popIn 0.5s cubic-bezier(.4,2,.6,1)",
          border: "1.5px solid #f3f4f6",
          zIndex: 10002,
        }}
      >
        <div
          style={{
            fontSize: 70,
            marginBottom: 18,
            animation: "popIn 0.7s cubic-bezier(.4,2,.6,1)",
            filter: "drop-shadow(0 2px 12px #a7f3d0)",
          }}
        >
          🎉
        </div>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#222",
            marginBottom: 12,
            letterSpacing: 0.5,
            animation: "fadeInUp 0.7s",
          }}
        >
          Registration Successful!
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#444",
            marginBottom: 28,
            animation: "fadeInUp 1s",
          }}
        >
          Thank you for registering. We look forward to seeing you at the event!
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            marginTop: 8,
          }}
        >
          <button
            style={{
              background: "#222",
              color: "#fff",
              border: "none",
              borderRadius: "0.7rem",
              padding: "0.7rem 1.5rem",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 2px 16px #0002",
              transition: "background 0.2s, transform 0.2s",
              outline: "none",
              animation: "fadeInUp 1.2s",
            }}
            onClick={onClose}
          >
            Go to Home
          </button>
        </div>
      </div>
      <style>{`
        @keyframes popIn {
          0% { transform: scale(0.7); opacity: 0; }
          80% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeInBg {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default SuccessModal;
