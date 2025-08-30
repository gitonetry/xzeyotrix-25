import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

const Success: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Fire confetti in all directions
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 9999,
    };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      confetti({
        ...defaults,
        particleCount: 50,
        origin: {
          x: randomInRange(0.1, 0.9),
          y: Math.random() - 0.2,
        },
        colors: [
          "#ff0a54",
          "#ff477e",
          "#ff7096",
          "#ff85a1",
          "#fbb1bd",
          "#f9bec7",
          "#f7cad0",
          "#b5ead7",
          "#caffbf",
          "#9bf6ff",
          "#a0c4ff",
          "#bdb2ff",
          "#ffc6ff",
          "#fffffc",
        ],
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#111",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.95)",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          padding: "3rem 2.5rem",
          textAlign: "center",
          zIndex: 2,
          minWidth: "320px",
        }}
      >
        <h1 style={{ fontSize: "2.2rem", color: "#111", marginBottom: "1rem" }}>
          🎉 Registration Successful!
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#333", marginBottom: "2rem" }}>
          Thank you for registering. We look forward to seeing you at the event!
        </p>
        <button
          style={{
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "0.5rem",
            padding: "0.75rem 2rem",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
