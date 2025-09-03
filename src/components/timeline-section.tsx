import {
  Users,
  Code,
  Utensils,
  Trophy,
  Presentation,
  Lightbulb,
  Speech,
  Wallpaper,
  Unplug,
  Clapperboard,
  Paintbrush,
  Brain,
} from "lucide-react";

const timeSlots = [
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "1:00",
  "1:30",
  "2:00",
  "2:30",
  "3:00",
  "3:30",
  "4:00",
];

const timelineEvents = [
  {
    title: "Inauguration",
    startTime: "9:00",
    duration: 1.9,
    color: "#ef4444",
    icon: Users,
    row: 0,
  },
  {
    title: "Paper Presentation",
    startTime: "10:00",
    duration: 3.9,
    color: "#4680ffff",
    icon: Presentation,
    row: 0,
  },
  {
    title: "Tech Quiz",
    startTime: "10:00",
    duration: 3.9,
    color: "#ff007f",
    icon: Lightbulb,
    row: 1,
  },
  {
    title: "Tech Debates",
    startTime: "10:00",
    duration: 3.9,
    color: "#00ffa3",
    icon: Speech,
    row: 2,
  },
  {
    title: "UI / UX Design Challenge",
    startTime: "10:00",
    duration: 3.9,
    color: "#00e0ff",
    icon: Wallpaper,
    row: 3,
  },
  {
    title: "Lunch",
    startTime: "12:00",
    duration: 1.9,
    color: "#ffe100",
    icon: Utensils,
    row: 0,
  },
  {
    title: "Connections",
    startTime: "1:00",
    duration: 3.5,
    color: "#b967ff",
    icon: Unplug,
    row: 0,
  },
  {
    title: "AdZap",
    startTime: "1:00",
    duration: 3.5,
    color: "#ff9900",
    icon: Clapperboard,
    row: 1,
  },
  {
    title: "Tech Pictionary",
    startTime: "1:00",
    duration: 3.5,
    color: "#ff00ff",
    icon: Paintbrush,
    row: 2,
  },
  {
    title: "Tagline Twist",
    startTime: "1:00",
    duration: 3.5,
    color: "#a3ff12",
    icon: Brain,
    row: 3,
  },
  {
    title: "Prize Distribution",
    startTime: "3:00",
    duration: 2,
    color: "#0fb900",
    icon: Trophy,
    row: 0,
  },
];

const getSlotIndex = (startTime: string) => timeSlots.indexOf(startTime);

const TimelineSection = () => {
  const slotWidth = 100 / (timeSlots.length - 1);

  return (
    <section id="timeline" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Title Section from OLD template */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Event <span className="text-primary neon-text">Timeline</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A carefully planned schedule of exciting Events
          </p>
        </div>

        {/* Timeline Grid from UPDATED file */}
        <div className="glass rounded-2xl p-8 overflow-x-auto bg-background/5 backdrop-blur-sm border border-white/10">
          <div
            className="relative"
            style={{
              minWidth: "1200px",
              width: "1200px",
              margin: "0 auto",
            }}
          >
            {/* Time Header */}
            <div className="relative mb-6" style={{ height: 32 }}>
              {timeSlots.map((time, idx) => (
                <span
                  key={idx}
                  className="absolute text-sm text-foreground/60 font-medium"
                  style={{
                    left: `${(idx / (timeSlots.length - 1)) * 100}%`,
                    transform: "translateX(-50%)",
                    top: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {time}
                </span>
              ))}
            </div>

            {/* Grid + Events */}
            <div className="relative" style={{ height: "320px" }}>
              {/* Grid Lines */}
              <div className="absolute inset-0 pointer-events-none">
                {timeSlots.map((_, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: "absolute",
                      left: `${(idx / (timeSlots.length - 1)) * 100}%`,
                      top: 0,
                      height: "100%",
                      width: "0px",
                      borderLeft: "2px solid #a3a3a3",
                      opacity: 0.09,
                      zIndex: 1,
                    }}
                  />
                ))}
              </div>

              {/* Event Blocks */}
              {timelineEvents.map((event, idx) => {
                const left =
                  getSlotIndex(event.startTime) *
                  (100 / (timeSlots.length - 1));
                return (
                  <div
                    key={idx}
                    className="absolute flex items-center px-4 py-3 rounded-lg"
                    style={{
                      left: `${left}%`,
                      top: `${event.row * 62 + 24}px`,
                      width: `${event.duration * slotWidth}%`,
                      minWidth: "120px",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderColor: event.color,
                      backgroundColor: `${event.color}23`,
                      zIndex: 2,
                    }}
                  >
                    <event.icon
                      className="h-6 w-6 mr-3 opacity-80"
                      style={{ color: event.color }}
                    />
                    <span className="text-white font-semibold text-base truncate">
                      {event.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Call to Action from OLD template */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-foreground/70 mb-6">
              Join us for an unforgettable experience of innovation, learning,
              and building amazing projects.
            </p>
            <button
              className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg neon-glow animate-glow-pulse"
              onClick={() =>
                document
                  .querySelector("#events")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
