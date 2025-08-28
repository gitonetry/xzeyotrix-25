import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-hackathon.jpg";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown to hackathon date (Sep 26, 2025)
  const hackathonDate = new Date("2025-09-26T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = hackathonDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hackathonDate]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cyber Hackathon Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold neon-text">
              Xzeyotrix<span className="text-accent">'25</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-light text-primary">
              2025
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
              The Ultimate College Hackathon Experience
            </p>
          </div>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 text-foreground/80">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>September 26, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Sivakasi</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span>500+ Participants</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-primary" />
              <span>Exciting Prizes</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Event Starts In
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="glass-hover rounded-lg p-4 neon-glow">
                    <div className="text-xl md:text-4xl font-bold text-primary">
                      {value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm uppercase tracking-wide text-foreground/60">
                      {unit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <Button className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-3 text-lg neon-glow animate-glow-pulse">
                Register Now
              </Button>
            </Link>
            <Button
              variant="outline"
              className="glass-hover border-primary text-primary px-8 py-3 text-lg"
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-float opacity-60" />
      <div
        className="absolute top-40 right-16 w-6 h-6 bg-primary rounded-full animate-float opacity-40"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-20 w-3 h-3 bg-neon-green rounded-full animate-float opacity-50"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-32 w-5 h-5 bg-primary rounded-full animate-float opacity-30"
        style={{ animationDelay: "3s" }}
      />
    </section>
  );
};

export default HeroSection;
